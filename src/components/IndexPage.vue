<script setup lang="ts">
import { ref } from 'vue'
import Carousel from './carousel/Carousel.vue'
import CommodityType from './type/CommodityType.vue'
import ScrollContainer from './index/ScrollContainer.vue'
import IndexCardItem from './index/IndexCardItem.vue'
import BaseFooter from './nav/BaseFooter.vue'
import IndexFlush from './index/IndexFlush.vue'

</script>

<template>
    <div class="index-page">
        <div class="index-background"></div>
        <div class="center-page">
            <div class="carousel">
                <Carousel></Carousel>
            </div>
            <div class="type-menu">
                <CommodityType></CommodityType>
            </div>
            <div class="anime-add-on">
                <div class="scroll-container">
                    <div class="scroll-container-item">
                        <ScrollContainer title="每日更新"></ScrollContainer>
                    </div>
                    <div class="scroll-container-item">
                        <ScrollContainer title="即将截单"></ScrollContainer>
                    </div>
                </div>
                <div class="index-card">
                    <div class="index-card-item">
                        <IndexCardItem title="LoveLive"></IndexCardItem>
                    </div>
                    <div class="index-card-item">
                        <IndexCardItem title="森仓円个人展"></IndexCardItem>
                    </div>
                </div>
                <div class="index-flush">
                    <IndexFlush></IndexFlush>
                </div>
            </div>
        </div>
        <div class="footer">
            <BaseFooter></BaseFooter>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .index-page {
        .index-background {
            position: relative;
            background: url('https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/others/bg.a9eaa6a.png');
            background-repeat: no-repeat;
            background-position: center 0px;
            background-size: 1781px auto;
            height: 400px;
            z-index: -50;
        }
        .center-page {
            position: relative;
            width: 1200px;
            left: 0;
            right: 0;
            margin: -200px auto;
            .type-menu {
                position: relative;
                margin-top: 30px;
                background: linear-gradient(to bottom right, #FFF0F5, #E6E6FA);
                border-radius: 10px;
            }
            .anime-add-on {
                animation: add-on .8s;
                @keyframes add-on {
                    0% {
                        transform: translateY(10px);
                        opacity: 0.2;
                    }
                    100% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                .scroll-container {
                    position: relative;
                    margin-top: 50px;
                    .scroll-container-item:not(:first-child) {
                        margin-top: 50px;
                    }
                }
                .index-card {
                    position: relative;
                    margin-top: 50px;
                    .index-card-item:not(:first-child) {
                        margin-top: 50px;
                    }
                }
                .index-flush {
                    position: relative;
                    margin-top: 50px;
                }
            }
        }
        .footer {
            position: relative;
            margin-top: 300px;
        }
    }
</style>
