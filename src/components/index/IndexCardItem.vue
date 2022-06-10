<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
    title: string
}>()
</script>

<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <h2>{{ title }}</h2>
            </div>
        </template>
        <div class="card-container">
            <div class="card-container-left-nav">
                <img src="https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/index/lovelive/nav/i1awraytxm06hcq6njlhmg7u021uekxt.webp" alt="">
            </div>
            <div class="card-container-right">
                <div class="card-container-right-item"  v-for="item in 6" :key="item">
                    <div class="item-img">
                        <img src="https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/index/news/000129570_02.webp" alt="">
                    </div>
                    <div class="item-description">
                        <span class="item-name">asd</span>
                        <span class="item-price">195元<span class="item-re-price"></span></span>
                        <span class="item-tag">
                            <span v-for="items in 2" :key="items">Tag 3</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
  </el-card>
</template>

<style scoped lang="scss">
    .box-card {
        background-color: #fcf0f0;
        height: 680px;
        .card-container {
            display: flex;
            padding: 0 10px;
            height: 572px;
            .card-container-left-nav {
                img {
                    height: 100%;
                    box-shadow: none;
                    transition: box-shadow .3s ease;
                }
            }
            .card-container-left-nav:hover {
                img {
                    box-shadow: rgba(0, 0, 0, 0.2) 0 20px 30px;
                }
            }
            .card-container-right {
                margin-left: 50px;
                display: flex;
                flex-wrap: wrap;
                text-align: center;
                .card-container-right-item {
                    background-color: white;
                    border: 1px #FFF8DC solid;;
                    height: 272px;
                    width: 215px;
                    margin: 6px 10px;
                    box-shadow: none;
                    transition: box-shadow .3s ease;
                    .item-img {
                        padding: 10px;
                        height: 180px;
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
                            padding-left: 10px;
                            font-size: 12px;
                            span:not(:first-child) {
                                margin-left: 12px;
                            }
                        }
                    }
                }
                .card-container-right-item:hover {
                    box-shadow: rgba(0, 0, 0, 0.16) 0 10px 36px 0, rgba(0, 0, 0, 0.06) 0 0 0 1px;
                }
            }
        }
    }
</style>