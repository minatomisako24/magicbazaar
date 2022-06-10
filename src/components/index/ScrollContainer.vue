<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'

const props = defineProps<{
    title: string
}>()
</script>

<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <h2>{{ title }}</h2>
                <a href="">
                    查看更多
                    <el-icon class="card-header-icon">
                        <ArrowRight />
                    </el-icon>
                </a>
            </div>
        </template>
        <div class="scroll-nav">
            <el-scrollbar height="290px">
                <div class="scrollbar-flex-content">
                    <div v-for="item in 50" :key="item" class="scrollbar-item">
                        <router-link to="/commodity/1" style="text-decoration: none;">
                            <div class="scrollbar-item-position">
                                <div class="item-img">
                                    <img src="https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/index/news/000129570_02.webp" alt="">
                                </div>
                                <div class="item-description">
                                    <span class="item-name">asd</span>
                                    <span class="item-price">195元<span class="item-re-price"></span></span>
                                    <span class="item-tag">
                                        <el-tag type="info" v-for="items in 2" :key="items">Tag 3</el-tag>
                                    </span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </el-scrollbar>
        </div>
    </el-card>
</template>

<style scoped lang="scss">
    .box-card {
        height: 400px;
        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            a {
                text-decoration: none;
                font-size: 14px;
                color: black;
                padding-right: 10px;
                .card-header-icon {
                    position: absolute;
                    height: 19px;
                }
            }
        }
        .scroll-nav {
            ::v-deep(.el-scrollbar__view) {
                height: 290px;
                .scrollbar-flex-content {
                    display: flex;
                    height: 290px;
                    .scrollbar-item {
                        flex-shrink: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 220px;
                        height: 265px;
                        margin: 10px;
                        text-align: center;
                        border-radius: 4px;
                        .scrollbar-item-position {
                            display: flex;
                            flex-direction: column;
                            justify-content: space-evenly;
                            .item-img {
                                border: 1px #FFF8DC solid;
                                width: 200px;
                                box-shadow: 0 0 0 1px rgb(0 0 0 / 7%) inset;
                                height: 200px;
                                img {
                                    height: 100%;
                                    width: auto;
                                }
                            }
                            .item-description {
                                display: flex;
                                flex-direction: column;
                                padding: 5px 0;
                                text-align: start;
                                .item-name {
                                    padding-left: 10px;
                                    font-weight: bold;
                                    font-size: 18px;
                                }
                                .item-price {
                                    padding-left: 10px;
                                    font-size: 15px;
                                    color: red;
                                }
                                .item-tag {
                                    padding: 2px 0;
                                    .el-tag {
                                        margin: 0 5px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>