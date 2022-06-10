<script setup lang="ts">
import { ref } from 'vue'
import BaseFooter from '../nav/BaseFooter.vue'
import SelfCommodityItem from '../commodity/SelfCommodityItem.vue'
import SearchItem from '../nav/SearchItem.vue'
import CommodityType from '../type/CommodityType.vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus'

const drawer = ref(false)
const direction = ref('ltr')
const endCommodity = ref<boolean>(false)

const endCommodityFlush = (value: boolean) => {
    console.log(value)
}

const chooseBrand = ref<any>()
const brandOption = ref<any>([
    {id: 1, value: 'sad'}
])

const commodityList = ref<any>([
    {anime: true},
    {anime: true}
])

const othersGet = ref<string>('0')
const confirmClick = () => {
    drawer.value = false
}

const turnOffAnime = (item: any) => {
    setTimeout(() => {
        item.anime = false
    }, 500)
}
</script>

<template>
    <div class="self-page">
        <div class="search-position">
            <SearchItem></SearchItem>
        </div>
        <div class="center-page">
            <div class="sale-container">
                <router-link to="/index">
                    <img src="https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/self/sale/rl56yfmadg7foa66wkku2l78ny8abqzw.webp" alt="" />
                </router-link>
            </div>
            <div class="type-menu">
                <CommodityType></CommodityType>
            </div>
            <div class="label-conatiner">
                <el-breadcrumb :separator-icon="ArrowRight">
                    <el-breadcrumb-item :to="{ path: '/SelfEmployed' }">全部</el-breadcrumb-item>
                    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
                    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="type-search">
                <div class="type-container">
                    <span>类型:</span>
                    <el-button type="" plain text>全部</el-button>
                    <el-button type="" plain text>现货</el-button>
                    <el-button type="" plain text>预售</el-button>
                    <el-checkbox v-model="endCommodity" label="显示已截单" size="large" @change="endCommodityFlush" />
                </div>
                <div class="order-container">
                    <span>排序:</span>
                    <el-button type="" plain text>默认</el-button>
                    <el-button type="" plain text>新品⬇</el-button>
                    <el-button type="" plain text>价格⬇</el-button>
                    <el-button type="" plain text>价格⬆</el-button>
                </div>
            </div>
            <div class="others-type">
                <el-card class="box-card">
                    <template #header>
                    <div class="card-header">
                        <span>需要更多的类型筛选?</span>
                    </div>
                    </template>
                    <el-button type="primary" plain @click="drawer = true">更多筛选</el-button>
                </el-card>
                <el-drawer
                v-model="drawer"
                :direction="direction"
                size="300px"
                >
                    <template #title>
                    </template>
                    <template #default>
                        <div style="display: inline-block; margin-left: 20px">
                            <p><b>商品品牌:</b></p>
                            <el-select
                            v-model="chooseBrand"
                            multiple
                            clearable
                            collapse-tags
                            collapse-tags-tooltip
                            filterable
                            placeholder="请选择"
                            style="margin-top: 10px;width: 100%;"
                            >
                            <el-option
                                v-for="item in brandOption"
                                :key="item.id"
                                :label="item.value"
                                :value="item.value"
                            />
                            </el-select>
                        </div>
                        <div class="others-get">
                            <p><b>商品特典:</b></p>
                            <el-radio-group v-model="othersGet" style="margin-top: 10px;">
                                <el-radio label="0">全部</el-radio>
                                <el-radio label="1">内含特典</el-radio>
                                <el-radio label="2">外含特典</el-radio>
                                <el-radio label="3">无特典</el-radio>
                            </el-radio-group>
                        </div>
                    </template>
                    <template #footer>
                        <div style="flex: auto">
                            <el-button type="primary" @click="confirmClick">确定</el-button>
                        </div>
                    </template>
                </el-drawer>
            </div>
            <div class="commodity-container">
                <div v-for="item in commodityList" :key="item">
                    <el-skeleton style="width: 285px;margin: 10px 5px 0;" :loading="item.anime" animated>
                        <template #template>
                            <el-skeleton-item variant="image" style="width: 285px; height: 200px" />
                            <div>
                                <el-skeleton-item variant="text" style="width: 50%;margin-top: 15px;display: block;" />
                                <el-skeleton-item variant="text" style="width: 30%;margin-top: 10px;" />
                                <div
                                style="
                                display: flex;
                                justify-items: start;
                                "
                                >
                                    <el-skeleton-item variant="text" style="width: 15%;" />
                                    <el-skeleton-item variant="text" style="width: 15%;margin-left: 15px;" />
                                    <el-skeleton-item variant="text" style="width: 15%;margin-left: 15px;" />
                                </div>
                            </div>
                        </template>
                        <template #default>
                            <SelfCommodityItem :commodityInfo="item" @hook:mounted="turnOffAnime(item)"></SelfCommodityItem>
                        </template>
                    </el-skeleton>
                </div>
            </div>
            <div class="commodity-page">
                <el-pagination
                :page-size="20"
                :pager-count="11"
                layout="prev, pager, next"
                :total="1000"
                background
                />
            </div>
        </div>
        <div class="footer">
            <BaseFooter></BaseFooter>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .self-page {
        background: #f7f7f7;
        .search-position {
            box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        }
        .center-page {
            position: relative;
            width: 1200px;
            left: 0;
            right: 0;
            margin: 0 auto;
            .sale-container {
                margin-top: 50px;
                img {
                    width: 100%;
                }
            }
            .type-menu {
                position: relative;
                margin-top: 30px;
                background: linear-gradient(to bottom right, #FFF0F5, #E6E6FA);
                border-radius: 10px;
            }
            .label-conatiner {
                margin-top: 50px;
            }
            .type-search {
                margin-top: 20px;
                .type-container {
                    border: 1px solid rgb(193, 228, 230);
                    margin-top: 20px;
                    border-radius: 2px;
                    padding: 5px 15px;
                    background: white;
                    color: black;
                    span {
                        margin-right: 20px;
                    }
                    ::v-deep(.el-button) {
                        margin-top: -3px;
                    }
                    ::v-deep(.el-checkbox) {
                        margin-left: 15px;
                    }
                }
                .order-container {
                    border: 1px solid rgb(193, 228, 230);
                    margin-top: 20px;
                    border-radius: 2px;
                    padding: 5px 15px;
                    background: white;
                    height: 37px;
                    line-height: 37px;
                    color: black;
                    span {
                        margin-right: 20px;
                    }
                }
            }
            .others-type {
                position: fixed;
                right: 20px;
                width: 250px;
                bottom: 220px;
                .others-get {
                    margin: 20px 0 0 20px;
                }
            }
            .commodity-container {
                display: flex;
                flex-wrap: wrap;
                margin-left: 11px;
            }
            .commodity-page {
                margin-top: 20px;
                display: flex;
                justify-content: center;
                background-color: white;
            }
        }
        .footer {
            position: relative;
            margin-top: 50px;
        }
    }
</style>