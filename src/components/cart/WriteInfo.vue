<script setup lang="ts">
import { ref, reactive } from 'vue'
import { FormInstance, FormRules, ElMessage, ElMessageBox, ElNotification } from 'element-plus'
import AddAddressFormDialog from '../person/AddAddressFormDialog.vue'

const props = defineProps<{
    active: number
}>()
const emits = defineEmits([
    'update:active'
])

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

const drawer = ref(false)
const direction = ref('ltr')

const chooseAddress = () => {
    drawer.value = false
}

const updateAddressDialog = ref<boolean>(false)
const saleChoose = ref<string>('0')

const prev = () => {
    setTimeout(() => {
        emits('update:active', 1)
    }, 1000)
}

const next = () => {
    setTimeout(() => {
        emits('update:active', 3)
    }, 1000)
}
</script>

<template>
    <div class="write-container">
        <div class="cart-container">
            <div class="cart-nav">
                <table>
                    <tr>
                        <td class="col-one">
                            商品信息
                        </td>
                        <td class="col-two">
                            单价
                        </td>
                        <td class="col-three">
                            数量
                        </td>
                        <td class="col-four">
                            金额
                        </td>
                    </tr>
                </table>
            </div>
            <div class="cart-item">
                <table>
                    <tr>
                        <td class="col-one">
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
                                    <el-select v-model="value" placeholder="Select" disabled>
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
                        <td class="col-two">
                            102元
                        </td>
                        <td class="col-three">
                            <el-input disabled />
                        </td>
                        <td class="col-four">
                            <p>定金： 1元</p>
                            <p>价格：(  1元)</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="col-one">
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
                                    <el-select v-model="value" placeholder="Select" disabled>
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
                        <td class="col-two">
                            102元
                        </td>
                        <td class="col-three">
                            <el-input disabled />
                        </td>
                        <td class="col-four">
                            <p>定金： 1元</p>
                            <p>价格：(  1元)</p>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="cart-end">
                <table>
                    <tr>
                        <td class="col-one"></td>
                        <td class="col-two"></td>
                        <td class="col-three"></td>
                        <td class="col-four">
                            <span>总计(不含运费)：
                                <span>
                                123
                                </span>
                                元
                            </span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="address-container">
            <el-card class="box-card" shadow="none">
                <template #header>
                <div class="card-header">
                    <span style="font-size: 20px;"><b>你的地址</b></span>
                    <el-button class="button" text type="primary" @click="drawer = true">需要更改?请点击这里</el-button>
                </div>
                </template>
                <div class="default-address">
                    <el-card class="box-card" shadow="none">
                        <template #header>
                            <div class="card-header">
                                <span><b>姓名:</b><span><b>asdsd</b></span></span>
                                <span><b>手机号:</b><span><b>185666589965</b></span></span>
                            </div>
                        </template>
                        <div><b>地址:</b><span><b>asdsd</b></span></div>
                        <div><b>详细地址:</b><span><b>asdsd</b></span></div>
                        <div><b>邮政编码:</b><span><b>456550</b></span></div>
                    </el-card>
                </div>
                <el-drawer
                v-model="drawer"
                :direction="direction"
                >
                    <template #title>
                        <h4>地址更改</h4>
                    </template>
                    <template #default>
                        <el-card class="box-card" shadow="none">
                            <template #header>
                                <div class="card-header">
                                    <span><b>姓名:</b><span><b>asdsd</b></span></span>
                                    <span><b>手机号:</b><span><b>185666589965</b></span></span>
                                </div>
                            </template>
                            <div><b>地址:</b><span><b>asdsd</b></span></div>
                            <div><b>详细地址:</b><span><b>asdsd</b></span></div>
                            <div><b>邮政编码:</b><span><b>456550</b></span></div>
                            <div class="card-footer">
                                <el-button class="button" type="primary" @click="updateAddressDialog = true">编辑
                                <AddAddressFormDialog v-model:updateAddressDialog="updateAddressDialog"></AddAddressFormDialog>
                                </el-button>
                                <el-button class="button" type="primary" @click="chooseAddress">选择</el-button>
                            </div>
                        </el-card>
                    </template>
                    <template #footer>
                    </template>
                </el-drawer>
            </el-card>
        </div>
        <div class="sale-container">
            <el-card class="box-card" shadow="none">
                <template #header>
                <div class="card-header">
                    <span style="font-size: 20px;"><b>优惠券选择</b></span>
                    <el-button class="button" text type="primary">领取更多优惠券</el-button>
                </div>
                </template>
                <div class="sale-list">
                    <el-radio-group v-model="saleChoose">
                        <el-radio label="0" size="large" border>不使用</el-radio>
                        <el-radio label="1" size="large" border>优惠1</el-radio>
                        <el-radio label="2" size="large" border>优惠2</el-radio>
                        <el-radio label="3" size="large" border>优惠3</el-radio>
                        <el-radio label="4" size="large" border>优惠4</el-radio>
                    </el-radio-group>
                </div>
            </el-card>
        </div>
        <div class="computed-sale">
            <el-card class="box-card" shadow="none">
                <template #header>
                <div class="card-header">
                    <span style="font-size: 20px;"><b>运费计算</b></span>
                </div>
                </template>
                <div class="">

                </div>
            </el-card>
        </div>
        <div class="go-pay-container">
            <el-tooltip content="想要重新选择?请点击这里" placement="top">
                <el-button type="primary" :onclick="prev">返回上一步</el-button>
            </el-tooltip>
            <el-button type="primary" :onclick="next">前往支付订单</el-button>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .write-container {
        .cart-container {
            .col-one {
                width: 60%;
                padding-left: 15px;
            }
            .col-two {
                width: 10%;
                padding-left: 10px;
            }
            .col-three {
                width: 15%;
                padding-left: 50px;
            }
            .col-four {
                width: 15%;
            }
            .cart-nav {
                margin-top: 30px;
                background-color: rgb(240, 237, 234);
                border-radius: 5px;
                height: 40px;
                line-height: 40px;
                table {
                    width: 100%;
                }
            }
            .cart-item {
                margin-top: 25px;
                table {
                    width: 100%;
                    border-collapse: collapse;
                    tr {
                        height: 150px;
                        .col-one {
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
                        .col-two {
                            padding: 0;
                        }
                        .col-three {
                            padding: 0;
                            .el-input {
                                width: 130px;
                            }
                        }
                        .col-four {
                            font-size: 14px;
                            p:first-child {
                                color: red;
                                font-weight: bold;
                            }
                            p:not(:first-child) {
                                color: #080808a6;
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
                    }
                    .col-four {
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
        .address-container {
            margin-top: 25px;
            .box-card {
                .card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .default-address {
                    .box-card {
                        div {
                            height: 30px;
                            line-height: 30px;
                        }
                        span {
                            margin-left: 10px;
                        }
                    }
                }
                .card-footer {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 10px;
                }
            }
        }
        .sale-container {
            margin-top: 25px;
            .box-card {
                .card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
            }
        }
        .computed-sale {
            margin-top: 25px;
        }
        .go-pay-container {
            margin-top: 25px;
            padding: 10px 15px;
            border-radius: 5px;
            background: rgb(241, 241, 241);
            display: flex;
            justify-content: space-between;
        }
    }
</style>