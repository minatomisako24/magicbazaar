<script setup lang="ts">
import { ElLoading } from 'element-plus'
import { ref, computed } from 'vue'

const pageSize = ref(10)

const disabled = computed(() => {
    return loading.value || noMore.value
})

const noMore = computed(() => {
    return count.value > maxCount.value
})

const count = ref(0)
const maxCount = ref(12)
const loading = ref(false)
const load = () => {
    loading.value = true
    count.value += 4
    loading.value = false
}
</script>

<template>
    <h2>推荐商品</h2>
    <div v-infinite-scroll="load"
    class="infinite-list"
    :infinite-scroll-disabled="disabled"
    style="overflow: auto;"
    >
        <div class="infinite-list-container">
            <div v-for="i in count" :key="i">
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
            </div>
        </div>
        <div v-if="noMore" class="no-more"><b>没有更多了!</b></div>
    </div>
</template>

<style scoped lang="scss">
    h2 {
        padding-left: 20px;
    }
    .infinite-list {
        height: 600px;
        background-color: rgb(247, 247, 247);
        .infinite-list-container {
            display: flex;
            flex-wrap: wrap;
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
        }
        .no-more {
            text-align: center;
            color: rgb(167, 165, 165);
        }
    }
</style>