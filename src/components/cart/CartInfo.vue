<script setup lang="ts">
import { ref, computed } from 'vue'
import { showNewsCommodity } from '../../api/index/commodity'
import { ElMessageBox, ElMessage } from 'element-plus'

const props = defineProps<{
    active: number
}>()
const emits = defineEmits([
    'update:active'
])

const type = ref<string | null>('日本仓')
const price = ref<string | null>('全款')

const typeChange = (element: string) => {
    changeCart(element, price.value!)
}
const priceChange = (element: string) => {
    changeCart(type.value!, element)
}

const changeCart = (type: string, price: string) => {
    
}

const changeCommodityNumber = (now: number, old: number, index: string) => {
    console.log(now, old, index)
}

const checkedAll = ref<boolean>(false)
const checkedItem = ref<boolean>(false)
const checkedAllItem = (value: boolean) => {
    checkedItem.value = value
}

const cartNum = computed(() => {
    return 0
})

const allPrice = computed(() => {
    return 0
})

const salPrice = computed(() => {
    return 0
})


showNewsCommodity({msg: 2}).then((response: any) => {
    console.log(response.data)
})

const value = ref('')
const cities = ref([
  {
    value: 'Beijing',
    label: 'Beijing',
  },
  {
    value: 'Shanghai',
    label: 'Shanghai',
  }
])

const num = ref<number>(0)

const clearCart = () => {

    ElMessage({
        message: '没有选择商品',
        type: 'error'
    })

    ElMessageBox.confirm('确定要购买吗？')
        .then(() => {
            setTimeout(() => {
                emits('update:active', 2)
            }, 1000)
        })
}
</script>

<template>
    <div class="cart-info">
        <div class="cart-tips">
            自营商城-现货/全款：合并提交并支付的商品为一个订单，发货时需要等同一订单的全部商品到仓后才可发出，请充分留意您所购买商品的发售时间，对于间隔时间较长的不同商品，可以分别提交订单以避免长期等待。
        </div>
        <div class="cart-type">
            <div class="type">
                <el-radio-group v-model="type" size="large" @change="typeChange">
                    <el-radio-button label="日本仓" />
                    <el-radio-button label="国内仓" />
                </el-radio-group>
            </div>
            <div class="price">
                <el-radio-group v-model="price" size="large" @change="priceChange">
                    <el-radio-button label="全款" />
                    <el-radio-button label="定金" />
                </el-radio-group>
            </div>
        </div>
        <div class="cart-container">
            <div class="cart-nav">
                <table>
                    <tr>
                        <td class="col-one">
                            <el-checkbox v-model="checkedAll" label="全选" size="large" @change="checkedAllItem" />
                        </td>
                        <td class="col-two">
                            商品信息
                        </td>
                        <td class="col-three">
                            单价
                        </td>
                        <td class="col-four">
                            数量
                        </td>
                        <td class="col-five">
                            金额
                        </td>
                        <td class="col-six">
                            操作
                        </td>
                    </tr>
                </table>
            </div>
            <div class="cart-tips-price">
                喵急便满249包邮
                <router-link to="/index">
                    凑包邮 >
                </router-link>
            </div>
            <div class="cart-item">
                <table>
                    <tr>
                        <td class="col-one">
                            <div>
                                <el-checkbox v-model="checkedItem" label="" size="large" />
                                <router-link to="">
                                    <div class="commodity-img">
                                        <img src="https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/cart/69081hqr1rsn0ktwufy3q6rrqbydzxt4.webp" alt="">
                                    </div>
                                </router-link>
                            </div>
                        </td>
                        <td class="col-two">
                            <div class="commodity-info">
                                <div class="commodity-title">
                                    <span>彩虹社 First Step Goods 亚克力立牌 OBSYDIA</span>
                                    <div>
                                        <el-tag type="warning">预售</el-tag>
                                        <el-tag type="warning">预售</el-tag>
                                    </div>
                                </div>
                                <div class="commidty-type">
                                    规格
                                    <el-select v-model="value" placeholder="Select">
                                        <el-option
                                        v-for="item in cities"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        >
                                        <span style="float: left">{{ item.label }}</span>
                                        <span
                                            style="
                                            float: right;
                                            color: var(--el-text-color-secondary);
                                            font-size: 13px;
                                            "
                                            >{{ item.value }}</span
                                        >
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>
                        </td>
                        <td class="col-three">
                            102元
                        </td>
                        <td class="col-four">
                            <el-input-number v-model="num" :precision="0" :min="1" :max="5" @change="(now: number, old: number) => changeCommodityNumber(now, old, '1')"/>
                        </td>
                        <td class="col-five">
                            <p>定金：{{ 102 * num }} 元</p>
                            <p>价格：( {{ 102 * num }} 元)</p>
                        </td>
                        <td class="col-six">
                            <p>加入收藏夹</p>
                            <p>删除</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="col-one">
                            <div>
                                <el-checkbox v-model="checkedItem" label="" size="large" />
                                <router-link to="">
                                    <div class="commodity-img">
                                        <img src="https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/cart/69081hqr1rsn0ktwufy3q6rrqbydzxt4.webp" alt="">
                                    </div>
                                </router-link>
                            </div>
                        </td>
                        <td class="col-two">
                            <div class="commodity-info">
                                <div class="commodity-title">
                                    <span>彩虹社 First Step Goods 亚克力立牌 OBSYDIA</span>
                                    <div>
                                        <el-tag type="warning">预售</el-tag>
                                        <el-tag type="warning">预售</el-tag>
                                    </div>
                                </div>
                                <div class="commidty-type">
                                    规格
                                    <el-select v-model="value" placeholder="Select">
                                        <el-option
                                        v-for="item in cities"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        >
                                        <span style="float: left">{{ item.label }}</span>
                                        <span
                                            style="
                                            float: right;
                                            color: var(--el-text-color-secondary);
                                            font-size: 13px;
                                            "
                                            >{{ item.value }}</span
                                        >
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>
                        </td>
                        <td class="col-three">
                            102元
                        </td>
                        <td class="col-four">
                            <el-input-number v-model="num" :precision="0" :min="1" :max="5" />
                        </td>
                        <td class="col-five">
                            <p>定金：{{ 102 * num }} 元</p>
                            <p>价格：( {{ 102 * num }} 元)</p>
                        </td>
                        <td class="col-six">
                            <p>加入收藏夹</p>
                            <p>删除</p>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="cart-end">
                <table>
                    <tr>
                        <td class="col-one">
                            <el-checkbox v-model="checkedAll" label="全选" size="large" @change="checkedAllItem" />
                        </td>
                        <td class="col-two">
                            <span>删除所选商品</span>
                            <span>收藏</span>
                            <span>已选
                                <b class="checked-num">
                                    {{ cartNum }}
                                </b>
                                件商品
                            </span>
                        </td>
                        <td class="col-three">
                            <span>优惠：
                                <b class="sal-price">
                                    {{ salPrice }}
                                </b>    
                            元</span>
                        </td>
                        <td class="col-four">
                            <span>总计(不含运费)：
                                <span>
                                {{ allPrice }}
                                </span>
                                元
                            </span>
                        </td>
                        <td class="col-five">
                            <el-button type="primary" round size="large" style="width: 150px;" :onclick="clearCart">去结算</el-button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .cart-info {
        .cart-tips {
            border: 1px solid;
            margin-top: 20px;
            border-radius: 5px;
            padding: 5px 15px;
            background: var(--el-color-danger-light-9);
            color: var(--el-color-danger);
        }
        .cart-type {
            margin-top: 20px;
            display: flex;
            div:not(:first-child) {
                margin-left: 50px;
            }
        }
        .cart-container {
            .col-one {
                width: 15%;
                padding-left: 15px;
            }
            .col-two {
                width: 35%;
            }
            .col-three {
                width: 15%;
            }
            .col-four {
                width: 10%;
            }
            .col-five {
                width: 10%;
            }
            .col-six {
                width: 15%;
            }
            .cart-nav {
                margin-top: 30px;
                background-color: rgb(240, 237, 234);
                border-radius: 5px;
                table {
                    width: 100%;
                }
            }
            .cart-tips-price {
                margin-top: 20px;
                text-align: center;
                background-color: #fff2dd;
                height: 45px;
                line-height: 45px;
                color: rgb(92, 92, 92);
                a {
                    text-decoration: none;
                    color: rgb(129, 129, 224);
                    padding-left: 15px;
                }
            }
            .cart-item {
                margin-top: 45px;
                table {
                    width: 100%;
                    border-collapse: collapse;
                    tr {
                        height: 150px;
                        .col-one {
                            div {
                                display: flex;
                                align-items: center;
                                .commodity-img {
                                    padding: 0 15px;
                                    img {
                                        width: 100%;
                                    }
                                }
                            }
                        }
                        .col-two {
                            .commodity-info {
                                display: flex;
                                height: 100px;
                                padding: 0 10px;
                                .commodity-title {
                                    display: flex;
                                    flex-flow: column;
                                    justify-content: space-between;
                                    span {
                                        font-size: 14px;
                                    }
                                    div {
                                        align-items: flex-end;
                                        span:not(:first-child) {
                                            margin-left: 15px;
                                        }
                                    }
                                }
                                .commidty-type {
                                    display: flex;
                                    flex-flow: column;
                                    justify-content: center;
                                    text-align: center;
                                    font-size: 14px;
                                }
                            }
                        }
                        .col-three {
                            padding-left: 50px;
                        }
                        .col-four {
                            padding-right: 30px;
                        }
                        .col-five {
                            font-size: 14px;
                            p:first-child {
                                color: red;
                                font-weight: bold;
                            }
                            p:not(:first-child) {
                                color: #080808a6;
                            }
                        }
                        .col-six {
                            font-size: 14px;
                            p:hover {
                                cursor: pointer;
                            }
                            p {
                                line-height: 30px;
                            }
                        }
                    }
                    tr:first-child {
                        border: 1px solid rgb(212, 203, 203);
                    }
                    tr:not(:first-child) {
                        border: 1px solid rgb(212, 203, 203);
                        border-top: none;
                    }
                }
            }
            .cart-end {
                height: 88px;
                line-height: 80px;
                margin-top: 35px;
                background-color: rgb(240, 237, 234);
                border-radius: 5px;
                table {
                    .col-one {
                        width: 10%;
                    }
                    width: 100%;
                    .col-two {
                        width: 30%;
                        font-size: 14px;
                        span {
                            cursor: pointer;
                            .checked-num {
                                padding: 0 2px;
                                color: red;
                                font-size: 24px;
                            }
                        }
                        span:not(:first-child, :last-child) {
                            padding-left: 30px;
                        }
                        span:last-child {
                            font-size: 18px;
                            padding-left: 150px;
                        }
                    }
                    .col-three {
                        width: 10%;
                        padding-left: 20px;
                        .sal-price {
                            padding: 0 2px;
                            color: red;
                            font-size: 20px;
                        }
                    }
                    .col-four {
                        width: 15%;
                        span {
                            span {
                                color: red;
                                font-size: 19px;
                                font-weight: bold;
                            }
                        }
                    }
                }
            }
        }
    }
</style>