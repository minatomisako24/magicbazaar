<script setup lang="ts">
import BaseFooter from './nav/BaseFooter.vue'
import { ref, computed } from 'vue'
import { ShoppingCart, Edit, Coin } from '@element-plus/icons-vue'
import { ElMessageBox, ElMessage } from 'element-plus'
import CartInfo from './cart/CartInfo.vue'
import WriteInfo from './cart/WriteInfo.vue'
import CartPay from './cart/CartPay.vue'

const active = ref<number>(1)
</script>

<template>
    <div class="index-page">
        <div class="center-page">
            <div class="step">
                <el-steps :active="active">
                    <el-step title="查看购物车" :icon="ShoppingCart" />
                    <el-step title="填写信息" :icon="Edit" />
                    <el-step title="支付订单" :icon="Coin" />
                </el-steps>
            </div>
            <div class="item-container">
                <div v-if="active == 1">
                    <CartInfo v-model:active="active"></CartInfo>
                </div>
                <div v-if="active == 2">
                    <WriteInfo v-model:active="active"></WriteInfo>
                </div>
                <div v-if="active == 3">
                    <CartPay v-model:active="active" :allPrice="100"></CartPay>
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
        .center-page {
            position: relative;
            width: 1200px;
            left: 0;
            right: 0;
            margin: 50px auto;
            .item-container {
            }
        }
        .footer {
            position: relative;
            margin-top: 80px;
        }
    }
</style>