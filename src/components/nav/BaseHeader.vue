<script setup lang="ts">
import { ref } from 'vue'
import { Search, ArrowRight, ShoppingCart } from '@element-plus/icons-vue'
import { userInfoStore } from '../../store';

const handleSelect = (key:string, keyPath:string[]) => {
    console.log('baseheader: key:' + key + '\tkeyPath:' + keyPath)    
}

const search = ref('')
const searchText = () => {
    console.log(search.value)
}

const cartNumerMax = ref(10)
const cartNumer = ref(1)

const searchSwitch = ref<boolean>(true)

const userInfo = userInfoStore()
</script>

<template>
    <div class="header-menu">
        <el-menu
        :default-active="$route.path"
        mode="horizontal"
        @select="handleSelect"
        class="menu"
        style="width: 750px;"
        router
        >
            <el-menu-item index="/index" class="index">
                <img src="https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/logo/header-logo@2x.278238b.png" alt="" class="logo" />
            </el-menu-item>
            <el-menu-item index="/selfemployed">自营</el-menu-item>
            <el-menu-item index="/preferred">优选</el-menu-item>
            <el-menu-item index="/person/info">喵赏</el-menu-item>
            <el-menu-item index="/coupon">领券</el-menu-item>
            <el-menu-item index="/news">新闻</el-menu-item>
        </el-menu>
        <el-menu
        mode="horizontal"
        @select="handleSelect"
        active-text-color="black"
        class="menu right-menu"
        style="width: 700px;"
        router
        >
            <template v-if="$route.path != '/selfemployed'">
                <el-menu-item index="">
                    <el-input 
                    type="text" 
                    v-model="search" 
                    placeholder="请输入关键字"
                    :prefix-icon="Search"
                    >
                        <template #suffix>
                            <el-icon><ArrowRight @click="searchText" /></el-icon>
                        </template>
                    </el-input>
                </el-menu-item>
            </template>
            <el-menu-item index="/cart">
                <el-icon><ShoppingCart /></el-icon>
                <el-badge :value="cartNumer" :max="cartNumerMax" class="cart-number" />
            </el-menu-item>
            <template v-if="!userInfo.getToken">
                <el-menu-item index="/login/login_container">登录</el-menu-item>
                <el-menu-item index="/login/register_container">注册</el-menu-item>
            </template>
            <template v-else>
                <el-sub-menu index="2">
                    <template #title>
                        <el-avatar :size="40" src="https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/logo/header-logo@2x.278238b.png" />
                        <span style="margin-left: 15px;">names</span>
                    </template>
                    <el-menu-item index="/person/info">个人中心</el-menu-item>
                    <el-menu-item index="2-2">消息通知</el-menu-item>
                    <el-menu-item index="2-3">item three</el-menu-item>
                </el-sub-menu>
            </template>
            <el-menu-item index="/app">下载app</el-menu-item>
        </el-menu>
    </div>
</template>

<style scoped lang="scss">
    .header-menu {
        display: flex;
        justify-content: space-around;
        border-bottom: solid 1px #dcdfe6;
        ::v-deep(.menu) {
            border: none;
            .index {
                .logo {
                    height: 58px;
                    width: auto;
                }
            }
            .el-menu-item:first-child:hover {
                outline: 0 !important;
                background-color: white;
            }
            .el-menu-item:first-child {
                --el-menu-hover-bg-color: #ffffff;
                border: none    ;
            }
        }
        ::v-deep(.right-menu) {
            --el-menu-hover-bg-color: #ffffff;
            .el-menu-item {
                transition: none;
                .cart-number {
                    top: -25px;
                }
            }
            .el-menu-item:hover {
                outline: 0 !important;
                color: black !important;
                background-color: white;
            }
            .is-active {
                border-bottom: none;
            }
        }
    }
</style>