<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'

const handleOpen = () => {

}

const handleClose = () => {
    
}

const handleSelect = (index: string, indexPath: Array<string>, item: any, routeResult: string) => {
    console.log(index, indexPath, item, routeResult)
}

const turnOff = ref<boolean>(false)
const auto = ref<any>('200px')
const changeTurnOff = () => {
    turnOff.value = !turnOff.value
    !turnOff.value ? auto.value = '200px' : auto.value = 'auto'
}
</script>

<template>
    <div class="person-container">
        <el-container>
            <el-aside :width="auto" class="left-nav">
                <el-menu
                :default-active="$route.path"
                :collapse="turnOff"
                router
                @open="handleOpen"
                @close="handleClose"
                @select="handleSelect"
                >
                    <el-menu-item index="" :onclick="changeTurnOff">
                        <el-icon><Operation /></el-icon>
                        <template #title>侧边栏</template>
                    </el-menu-item>
                    <el-sub-menu index="person">
                        <template #title>
                            <el-icon><User /></el-icon>
                            <span>个人中心</span>
                        </template>
                        <el-menu-item-group>
                            <template #title><span>信息</span></template>
                            <el-menu-item index="/person/info">个人资料</el-menu-item>
                            <el-menu-item index="/person/update">密码修改</el-menu-item>
                            <el-menu-item index="/person/private">隐私设置</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template #title><span>购物信息</span></template>
                            <el-menu-item index="/person/address">收货地址</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                    <el-sub-menu index="2">
                        <template #title>
                            <el-icon><DocumentCopy /></el-icon>
                            <span>订单信息</span>
                        </template>
                        <el-menu-item-group>
                            <template #title><span>订单</span></template>
                            <el-menu-item index="/person/order">所有订单</el-menu-item>
                            <el-menu-item index="/person/notbuy">
                                <el-badge :value="200" :max="99" class="item">
                                    待付款
                                </el-badge>
                            </el-menu-item>
                            <el-menu-item index="/person/notreply">
                                <el-badge :value="200" :max="99" class="item">
                                    待评价
                                </el-badge>
                            </el-menu-item>
                            <el-menu-item index="/person/report">
                                <el-badge :value="200" :max="99" class="item">
                                    订单投诉
                                </el-badge>
                            </el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template #title><span>优惠券</span></template>
                             <el-menu-item index="/person/sale">
                                <el-badge :value="200" :max="99" class="item">
                                    我的优惠券
                                </el-badge>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                    <el-sub-menu index="3">
                        <template #title>
                            <el-icon><Tools /></el-icon>
                            <span>账号管理</span>
                        </template>
                        <el-menu-item index="/person/delete">注销账号</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="4">
                        <template #title>
                            <el-icon><Promotion /></el-icon>
                            <span>联系我们</span>
                        </template>
                        <el-menu-item index="/person/concat">工单</el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </el-aside>
            <el-container class="page-container">
                <el-header class="page-header">
                    <el-breadcrumb :separator-icon="ArrowRight">
                        <el-breadcrumb-item v-for="item in $route.path.substring(1).split('/')" :key="item">{{ item }}</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer></el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped lang="scss">
    ::v-deep(.el-badge__content) {
        margin: 25px;
        right: -35px;
    }
    .person-container {
        .left-nav {
            ::v-deep(.el-menu) {
                .el-menu-item:first-child .el-menu-item.is-active {
                    color: black;
                }
            }
        }
        .page-container {
            position: relative;
            .page-header {
                ::v-deep(.el-breadcrumb) {
                    margin-top: 50px;
                    height: 25px;
                    border-bottom: 1px solid rgb(192, 192, 183);
                }
            }
        }
    }
</style>