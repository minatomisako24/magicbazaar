<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Message, Star } from '@element-plus/icons-vue'

const urls = [
    'https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/index/news/000129570_02.webp',
    'https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/index/news/g61324_01.webp'
]

const recommend = [
    'https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/recommend/5o72fm5ocefftn7gq8i2dh5ec4d2wmqb.webp',
    'https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/recommend/5o72fm5ocefftn7gq8i2dh5ec4d2wmqb.webp',
    'https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/recommend/5o72fm5ocefftn7gq8i2dh5ec4d2wmqb.webp',
    'https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/recommend/5o72fm5ocefftn7gq8i2dh5ec4d2wmqb.webp'
]

const showImg = ref(urls[0])
const firstActive = ref<any>()
onMounted(() => {
    firstActive.value[0].$el.classList.add('active')
})

const active = function(this: Element) {
    showImg.value = this.getAttribute('src')!
    this.parentElement!.classList.add('active')
    const children: HTMLCollection = this.parentElement!.parentElement!.children
    for(let i = 0; i < children.length; i ++) {
        const el: Element = children[i]
        if(el != this.parentElement && el.classList.contains('active')) {
            el.classList.remove('active')
            return
        } 
    }
}

const drawer = ref(false)
const direction = ref('ltr')
const choose = ref('默认')
const confirmClick = () => {
    drawer.value = false
}
const num = ref(1)

const addCart = () => {
    ElMessageBox.confirm(`确定要添加 ${num.value} 件规格为 ${choose.value} 的 title 添加到购物车吗？`)
        .then(() => {
            ElMessage({
                message: '添加成功',
                type: 'success',
                onClose: () => {
                    choose.value = '默认'
                    num.value = 1
                }
            })
        })
}

const tableData = ref([
    {key: '商品', value: 'asd'}
])
</script>

<template>
    <div class="commodity-container">
        <div class="commodity-info">
            <div class="commodity-img-scroll">
                <el-image v-for="url in urls" :key="url" :src="url" :onclick="active" ref="firstActive" lazy />
            </div>
            <div class="commodity-buy">
                <div class="commodity-img-show">
                    <img :src="showImg" alt="">
                </div>
                <div class="commodity-param">
                    <div class="commodity-title">
                        <b>景品 初音未来 小恶魔Ver. 压泡面</b>
                    </div>
                    <div class="commodity-tag">
                        <el-tag type="warning">预售</el-tag>
                        <el-tag type="warning">国内自营</el-tag>
                    </div>
                    <div class="commodity-price">
                        <span>价格：</span>
                        <span>94元</span>
                    </div>
                    <div class="commodity-re-price">
                        <span>定金：</span>
                        <span>20元</span>
                    </div>
                    <el-divider />
                    <div class="commodity-state">
                        <span>状态</span>
                        <span>预售中</span>
                    </div>
                    <div class="commodity-state-info">
                        <span>说明</span>
                        <span>所选商品为定金预售商品，预计2022年9月发售</span>
                    </div>
                    <div class="commodity-specification">
                        <span>规格</span>
                        <span>
                            <el-radio-group v-model="choose" size="small">
                                <el-radio-button label="默认" />
                                <el-radio-button label="1" />
                                <el-radio-button label="2" />
                                <el-radio-button label="3" />
                            </el-radio-group>
                            <el-button size="small" @click="drawer = true">······</el-button>
                            <el-drawer
                            v-model="drawer"
                            :direction="direction"
                            >
                                <template #title>
                                    <h4>规格</h4>
                                </template>
                                <template #default>
                                    <el-radio-group v-model="choose">
                                        <el-radio-button label="默认" />
                                        <el-radio-button label="1" />
                                        <el-radio-button label="2" />
                                        <el-radio-button label="3" />
                                    </el-radio-group>
                                </template>
                                <template #footer>
                                    <div style="flex: auto">
                                        <el-button type="primary" :onclick="confirmClick">确定</el-button>
                                    </div>
                                </template>
                            </el-drawer>
                        </span>
                    </div>
                    <div class="commodity-buy-number">
                        <span>数量：</span>
                        <span><el-input-number v-model="num" :min="1" :max="5" /></span>
                    </div>
                    <div class="buy">
                        <el-button type="primary" round size="large" :onclick="addCart">加入购物车</el-button>
                        <router-link to="">
                            <el-button round size="large">立即购买</el-button>
                        </router-link>
                    </div>
                    <div class="buy-logistics">
                        <span>物流：</span>
                        <span>中通包邮</span>
                    </div>
                    <el-divider />
                    <div class="commodity-others">
                        <el-tooltip placement="top">
                            <template #content>收藏</template>
                            <el-button type="warning" :icon="Star" circle />
                        </el-tooltip>
                        <el-tooltip placement="top">
                            <template #content>分享</template>
                            <el-button type="info" :icon="Message" circle />
                        </el-tooltip>
                    </div>
                </div>
            </div>
        </div>
        <div class="other-description">
            <div class="recommend">
                <el-card class="box-card" shadow="none">
                    <template #header>
                        <div class="card-header">
                            <span>推荐活动</span>
                        </div>
                    </template>
                    <router-link :to="url" v-for="url in recommend" :key="url">
                        <el-image :src="url" lazy />
                    </router-link>
                </el-card>
            </div>
            <div class="commodity-description">
                <el-card class="box-card" shadow="none">
                    <template #header>
                        <div class="card-header">
                            <span>商品信息</span>
                        </div>
                    </template>
                    <el-table
                    :data="tableData" 
                    border 
                    style="width: 100%"
                    :show-header="false">
                        <el-table-column prop="key">
                        </el-table-column>
                        <el-table-column prop="value">
                        </el-table-column>
                    </el-table>
                    <el-image v-for="url in recommend" :key="url" :src="url" lazy />
                </el-card>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .commodity-container {
        display: flex;
        flex-direction: column;
        .commodity-info {
            display: flex;
            justify-content: space-between;
            .commodity-img-scroll {
                width: 100px;
                height: 500px;
                text-align: center;
                ::v-deep(.el-image) {
                    height: 100px;
                    width: 100px;
                    border: 1px rgb(226, 226, 226) solid;
                    cursor: pointer;
                    transition: box-shadow .3s ease;
                    img {
                        height: 100%;
                        width: auto;
                    }
                }
                .el-image:hover {
                    box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
                }
                .active {
                    border: 1px rgb(37, 37, 37) solid;
                }
                ::v-deep(.el-image:not(:first-child)) {
                    margin-top: 10px;
                }
            }
            .commodity-buy {
                width: 1020px;
                height: 500px;
                display: flex;
                .commodity-img-show {
                    width: 520px;
                    padding: 20px;
                    height: 460px;
                    border: 1px rgb(223, 221, 220) solid;
                    text-align: center;
                    transition: box-shadow .3s ease;
                    img {
                        width: auto;
                        height: 100%;
                    }
                }
                .commodity-img-show:hover {
                    box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
                }
                .commodity-param {
                    .el-divider {
                        margin: 18px 0;
                    }
                    margin-left: 30px;
                    height: 100%;
                    width: 430px;
                    .commodity-title {
                        font-size: 21px;
                        height: 45px;
                        line-height: 45px;
                    }
                    .commodity-tag .el-tag:not(:first-child) {
                        margin-left: 15px;
                    }
                    .commodity-price {
                        font-size: 14px;
                        margin-top: 15px;
                        height: 30px;
                        line-height: 30px;
                        span:not(:first-child) {
                            margin-left: 50px;
                            color: red;
                        }
                    }
                    .commodity-re-price {
                        font-size: 14px;
                        height: 30px;
                        line-height: 30px;
                        span:not(:first-child) {
                            margin-left: 50px;
                            color: red;
                        }
                    }
                    .commodity-state {
                        font-size: 14px;
                        height: 30px;
                        line-height: 30px;
                        span:not(:first-child) {
                            margin-left: 50px;
                            font-weight: bold;
                        }
                    }
                    .commodity-state-info {
                        font-size: 14px;
                        height: 30px;
                        line-height: 30px;
                        span:not(:first-child) {
                            margin-left: 50px;
                        }
                    }
                    .commodity-specification {
                        font-size: 14px;
                        height: 30px;
                        line-height: 30px;
                        span:first-child {
                            position: absolute;
                            margin-top: 6px;
                            display: inline-block;
                        }
                        span:not(:first-child) {
                            margin-left: 78px;
                            ::v-deep(.el-radio-group) {
                                .el-radio-button:not(:first-child) {
                                    margin-left: 15px;
                                }
                                .el-radio-button__inner {
                                    border: 1px solid #dcdfe6;
                                }   
                            }
                            .el-button {
                                margin-left: 20px;
                                margin-top: 8px;
                            }
                        }
                    }
                    .commodity-buy-number {
                        font-size: 14px;
                        height: 30px;
                        line-height: 30px;
                        margin-top: 25px;
                        span:not(:first-child) {
                            margin-left: 38px;
                        }
                    }
                    .buy {
                        margin-top: 20px;
                        a {
                            text-decoration: none;
                            padding-left: 30px;
                        }
                    }
                    .buy-logistics {
                        margin-top: 20px;
                        font-size: 14px;
                        span:not(:first-child) {
                            margin-left: 40px;
                        }
                    }
                }
            }
        }
        .other-description {
            margin-top: 50px;
            height: auto;
            display: flex;
            .recommend {
                width: 270px;
                .box-card {
                    text-align: center;
                    a {
                        .el-image {
                            height: 120px;
                            width: 100%;
                            transition: box-shadow .3s ease;
                        }
                    }
                    a:not(:first-child) {
                        .el-image {
                            margin-top: 20px;
                        }
                    }
                    a:hover {
                        .el-image {
                            box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
                        }
                    }
                }
            }
            .commodity-description {
                margin-left: 30px;
                width: 900px;
                text-align: center;
                .el-image {
                    margin-top: 50px;
                }
            }
        }
    }
</style>