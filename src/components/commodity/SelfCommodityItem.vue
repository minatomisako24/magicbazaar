<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
    commodityInfo: any
}>()
</script>

<template>
    <router-link to="/commodity/1">
        <div class="item-position">
            <div class="item-img">
                <img src="https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/index/news/000129570_02.webp" alt="">
            </div>
            <div class="item-description">
                <span class="item-price">195元<span class="item-re-price"></span></span>
                <span class="item-name">asd</span>
                <span class="item-tag">
                    <el-tag type="info" v-for="items in 2" :key="items">Tag 3</el-tag>
                </span>
            </div>
        </div>
    </router-link>
</template>

<style scoped lang="scss">
    a {
        text-decoration: none;
    }
    .item-position {
        display: flex;
        flex-direction: column;
        width: 285px;
        background-color: white;
        margin: 10px 5px;
        .item-img {
            width: 200px;
            height: 200px;
            margin: 0 auto;
            text-align: center;
            img {
                height: 100%;
                width: auto;
            }
        }
        .item-description {
            display: flex;
            flex-direction: column;
            padding: 5px 0 5px 20px;
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
</style>