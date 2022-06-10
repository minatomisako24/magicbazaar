<script setup lang="ts">
import { ref } from 'vue'
import AddAddressFormDialog from './AddAddressFormDialog.vue'

const chooseAddress = () => {
}

const updateAddressDialog = ref<boolean>(false)
const defaultAddress = ref<boolean>(true)
</script>

<template>
    <div class="address-container">
        <el-card class="box-card" shadow="none">
            <template #header>
                <div class="card-header">
                    <span><h3>地址管理</h3></span>
                    <el-button class="button" text type="primary">添加地址</el-button>
                </div>
            </template>
            <div class="update-info">
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
                    <div class="box-footer">
                        <el-button class="button" type="primary" @click="updateAddressDialog = true">编辑
                        <AddAddressFormDialog v-model:updateAddressDialog="updateAddressDialog"></AddAddressFormDialog>
                        </el-button>
                        <template v-if="defaultAddress = false">
                            <el-button class="button" type="primary" @click="chooseAddress">选择</el-button>
                        </template>
                        <template v-else>
                            <el-button class="button" type="primary" disabled>已选择为当前默认地址</el-button>
                        </template>
                    </div>
                </el-card>
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
                    <div class="box-footer">
                        <el-button class="button" type="primary" @click="updateAddressDialog = true">编辑</el-button>
                        <el-button class="button" type="primary" @click="chooseAddress">选择</el-button>
                    </div>
                </el-card>
            </div>
        </el-card>
    </div>
</template>

<style scoped lang="scss">
    .address-container {
        margin-top: 20px;
        .box-card {
            .card-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .update-info {
                .box-card:not(:first-child) {
                    margin-top: 20px;
                }
                .box-footer {
                    margin-top: 15px;
                    text-align: end;
                }
            }
        }
    }
</style>