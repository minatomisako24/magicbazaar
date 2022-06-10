<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
    <div class="container">
        <div class="bg-video">
            <video autoplay loop muted>
                <source src="https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/login/video/login.mp4" type="video/mp4" />
            </video>
        </div>
        <div class="login-page">
            <el-container class="container-page">
                <el-aside width="300px">
                <el-menu
                :default-active="$route.path"
                router
                >
                    <el-menu-item index="/index">
                        <img src="https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/logo/header-logo@2x.278238b.png" alt="" class="header-img">
                    </el-menu-item>
                    <el-menu-item index="/login/login_container">
                        <template #title>登录</template>
                    </el-menu-item>
                    <el-menu-item index="/login/register_container">
                        <template #title>注册</template>
                    </el-menu-item>
                    <el-menu-item index="/login/us_info_container">
                        <template #title>关于我们</template>
                    </el-menu-item>
                    <el-menu-item index="/login/vtuber_container">
                        <template #title>Vtuber</template>
                    </el-menu-item>
                    <el-menu-item index="/login/music_container">
                        <template #title>Music</template>
                    </el-menu-item>
                    <el-menu-item index="/login/anime_container">
                        <template #title>Anime</template>
                    </el-menu-item>
                    <el-menu-item index="/login/content_us_container">
                        <template #title>联系我们</template>
                    </el-menu-item>
                </el-menu>
                </el-aside>
                <el-container>
                    <el-header></el-header>
                    <el-main class="show-page">
                        <router-view></router-view>
                    </el-main>
                    <el-footer></el-footer>
                </el-container>
            </el-container>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .container {
        overflow: hidden;
        height: 929px;
        position: relative;
        .bg-video {
            position: absolute;
            height: 1080px;
            width: 1920px;
            top: -72px;
            video {
                width: 100%;
                filter: blur(5px);
                filter: opacity(0.7);
            }
        }
        .login-page {
            .container-page {
                height: 929px;
                ::v-deep(.el-menu) {
                    background-color: rgba(255, 255, 255, 0.9);
                    height: 100%;
                    overflow: hidden;
                    li:first-child {
                        margin-top: 220px;
                    }
                }
                .header-img {
                    width: 80%;
                }
                .show-page {
                    margin: 0 150px;
                }
            }
        }
    }
</style>