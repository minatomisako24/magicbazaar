import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from "vue-router"
import { userInfoStore } from "../store"
import { pinia } from "../store/pinia"
import { local } from "../store/storage"

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/app',
    },
    {
        path: '/app',
        component: () => import("../App.vue"),
        redirect: '/concat',
        children: [
            {
                path: '/concat',
                component: () => import("../components/Concat.vue"),
                redirect: '/index',
                children: [
                    {
                        path: '/index',
                        component: () => import("../components/IndexPage.vue")
                    },
                    {
                        path: '/commodity/:id',
                        component: () => import("../components/CommodityPage.vue")
                    },
                    {
                        path: '/cart',
                        component: () => import("../components/CartPage.vue")
                    },
                    {
                        path: '/selfemployed',
                        component: () => import("../components/index/SelfEmployed.vue")
                    },
                    {
                        path: '/person',
                        component: () => import("../components/Person.vue"),
                        meta: {
                            Authorization: true
                        },
                        children: [
                            {
                                path: 'info',
                                component: () => import("../components/person/PersonInfo.vue"),
                                meta: {
                                    Authorization: true
                                }
                            },
                            {
                                path: 'update',
                                component: () => import("../components/person/UpdatePassword.vue"),
                                meta: {
                                    Authorization: true
                                }
                            },
                            {
                                path: 'address',
                                component: () => import("../components/person/Address.vue"),
                                meta: {
                                    Authorization: true
                                }
                            }
                        ]
                    }
                ]
            },
            {
                path: '/login',
                component: () => import("../components/Login.vue"),
                children: [
                    {
                        path: 'login_container',
                        component: () => import("../components/login/LoginItem.vue")
                    },
                    {
                        path: 'register_container',
                        component: () => import("../components/login/RegisterItem.vue")
                    }
                ]
            }
        ]
    },
    {
        path: '/404',
        component: () => import("../components/status/NotFound.vue")
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/404'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

if (userInfoStore(pinia).getToken) {
    userInfoStore().setUserInfo({ token: userInfoStore(pinia).getToken })
}

router.beforeEach((to, from ,next) => {
    if (to.matched.some(r => r.meta.Authorization)) {
        if (userInfoStore().$state.userInfo.token) {
            next()
        } else {
            next({
                path: '/login/login_container',
                query: { redirect: to.fullPath }
            })
        }
    } else {
        if (to.fullPath.startsWith('/login')) {
            if (userInfoStore().$state.userInfo.token) {
                next({
                    path: '/index'
                })
            } else {
                next()
            }
        } else {
            next()
        }
    }
})

export default router