<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
    active: number
    allPrice: number
}>()
const emits = defineEmits([
    'update:active'
])

const payChoose = ref<string>('1')

const prev = () => {
    setTimeout(() => {
        emits('update:active', 2)
    }, 1000)
}

const goPay = () => {
    
}
</script>

<template>
    <div class="cart-pay">
        <div class="pay-tips">
            支付提示：
        </div>
        <div class="pay-container">
            <el-card class="box-card" shadow="none">
                <template #header>
                    <div class="card-header">
                        <span style="font-size: 19px;"><b>选择支付方式</b></span>
                    </div>
                </template>
                <div class="pay-choose-container">
                    <el-radio-group v-model="payChoose">
                        <el-radio label="1" size="large" border>支付宝</el-radio>
                        <el-radio label="2" size="large" border>微信</el-radio>
                    </el-radio-group>
                    <div class="pay-price">
                        <h4>需支付:<span> {{ allPrice }} </span>元</h4>
                    </div>
                    <div class="go-pay-container">
                        <el-tooltip content="需要更换地址?请点击这里" placement="top">
                            <el-button type="primary" :onclick="prev">返回上一步</el-button>
                        </el-tooltip>
                        <el-button type="primary" :onclick="goPay">付款</el-button>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .cart-pay {
        .pay-tips {
            border: 1px solid;
            margin-top: 20px;
            border-radius: 5px;
            padding: 5px 15px;
            background: var(--el-color-danger-light-9);
            color: var(--el-color-danger);
        }
        .pay-container {
            margin-top: 25px;
            .pay-choose-container {
                .pay-price {
                    margin-top: 20px;
                    text-align: end;
                    span {
                        padding: 0 15px;
                        font-size: 19px;
                        color: red;
                    }
                }
                .go-pay-container {
                    margin-top: 25px;
                    display: flex;
                    justify-content: space-between;
                }   
            }
        }
    }
</style>