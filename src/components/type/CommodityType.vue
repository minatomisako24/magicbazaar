<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'

const showArrowRight = false
const typeLength = ref([{
    childType: [{name:''}]
},{
    childType: [{name:''}]
},{
    childType: [{name:''}]
},{
    childType: [{name:''}]
},{
    childType: [{name:''}]
},{
    childType: [{name:''}]
},{
    childType: [{name:''}]
},{
    childType: [{name:''}]
}])
</script>

<template>
    <div class="type">
        <div class="type-item" v-for="(item, index) in typeLength">
            <div class="type-item-flex">
                <div>
                    <img src="https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/type/43@2x.d60836d.png" class="type-item-img" alt="">
                </div>
                <div>
                    <b>手办</b>
                </div>
            </div>
            <div class="type-item-hadding">
                <div class="top-type">
                    手办
                </div>
                <div class="hr-type"></div>
                <div class="child-type" v-for="(items, indexs) in item.childType">
                    <span class="child-item">
                        <el-icon class="child-item-anime"><ArrowRight /></el-icon><span>asd</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .type {
        height: 65px;
        display: flex;
        text-align: center;
        .type-item {
            width: 100%;
            cursor: pointer;
            .type-item-flex {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                .type-item-img {
                    width: 24px;
                    height: 24px;
                }
            }
            .type-item-hadding {
                position: absolute;
                width: 150px;
                top: 0;
                background-color: #FF724A;
                opacity: 0;
                max-height: 0;
                transition: opacity .5s ease, transform .3s ease, max-height .3s linear;
                pointer-events: none;
                color: white;
                padding: 10px 0;
                border-radius: 10px;
                .top-type {
                    text-align: start;
                    padding-left: 30px;
                }
                .top-type:hover {
                    cursor: pointer;
                }
                .hr-type {
                    position: relative;
                    border-bottom: 1px white solid;
                    margin: 12px 0;
                }
                .child-type {
                    font-size: 15px;
                    display: flex;
                    flex-direction: column;
                    text-align: start;
                    padding-left: 30px;
                    .child-item {
                        span {
                            transition: padding-left .2s linear;
                            padding-left: 8px;
                        }
                        .child-item-anime {
                            opacity: 0;
                            margin-left: -20px;
                            transition: opacity .3s ease, padding-left .2s linear, margin-left .2s ease;
                        }
                    }
                    .child-item:hover {
                        span {
                            cursor: pointer;
                            padding-left: 8px;
                        }
                        .child-item-anime {
                            opacity: 1;
                            margin-left: 0;
                        }
                    }
                }
            }
        }
        .type-item:hover {
            .type-item-hadding {
                opacity: 1;
                max-height: 260px;
            }
        }
    }
</style>