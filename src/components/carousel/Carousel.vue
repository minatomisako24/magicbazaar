<script setup lang="ts">
import { ref } from 'vue'

const carouselLength = ref([
    'https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/carousel/2qkllzuqos8dp2ix1udlof5gabj6ahfy.webp',
    'https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/carousel/8qlzfqq2gl7lyih7hswlfzk58tm14oac.webp',
    'https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/carousel/9pisrxbj4ds8m65oulf0vjom3i4my71p.webp',
    'https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/carousel/gjxgmh19ero0mebtd28vfw2b6f5h7pqe.webp',
    'https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/carousel/meaa5jkncq0e3pmlurigh2mzek51g6ck.webp',
    'https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/carousel/so797hmfc2i3oeb019kec89n0ylgdwj4.webp'
])
</script>

<template>
    <div class="carousel">
        <div class="carousel-position">
            <el-carousel trigger="click" height="260px">
                <el-carousel-item v-for="item in carouselLength" :key="item">
                    <img :src="item" class="carousel-img" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="one-patch">
            <img src="https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/carousel/others/5hk4diwr2sw5h75gjdm7jz10eakmig7o.webp" class="one-patch-img" alt="">
        </div>
        <div class="two-patch">
            <div>
                <img src="https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/carousel/others/5scb2zllmzsvsxgl3hzvlw8od6jfmd6x.webp" class="two-patch-img" alt="">
                <h4></h4>
            </div>
            <div>
                <img src="https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/carousel/others/64bu11gpszah71yfrbhvgua2a60ts5xc.webp" class="two-patch-img" alt="">
                <h4></h4>
            </div>
        </div>
        <div class="two-patch">
            <div>
                <img src="https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/carousel/others/6teyq0mvzn42rej1qgn0hfei2a54h9ul.webp" class="two-patch-img" alt="">
                <h4></h4>
            </div>
            <div>
                <img src="https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/carousel/others/ff7f4c62a9324c03aa20cb66f69cf348.webp" class="two-patch-img" alt="">
                <h4></h4>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .carousel {
        display: flex;
        padding: 0 5px;
        justify-content: space-between;
        .carousel-position {
            width: 506px;
            .carousel-img {
                width: 100%;
                height: auto;
            }
        }
        .one-patch {
            .one-patch-img {
                width: 214px;
                height: 260px;
            }
        }
        .two-patch {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            div {
                position: relative;
                .two-patch-img {
                    width: 210px;
                    height: 125px;
                }
                h4 {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background-image: linear-gradient(-180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.81) 100%);
                    color: #fff;
                    font-size: 12px;
                    line-height: 16px;
                    padding: 15px 12px 10px;
                }
            }
        }
    }
</style>