<script setup lang="ts">
import { ref } from 'vue'

const searchTitle = ref<string>('')

const search = () => {
    
}
</script>

<template>
    <div class="search-container">
        <el-input
        v-model="searchTitle"
        placeholder="请输入商品名称"
        clearable
        />
        <div class="search-btn">
            <el-button type="primary" round size="large" :onclick="search">搜索</el-button>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .search-container {
        display: flex;
        justify-content: center;
        ::v-deep(.el-input) {
            width: 1200px;
            height: 75px;
            font-size: 24px;
            .el-input__wrapper {
                box-shadow: none;
                .el-input__inner {
                    border: none;
                    text-align: center;
                }
            }
            .el-input__wrapper.is-focus {
                box-shadow: none;
            }
        }
        .search-btn {
            width: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
             .el-button {
                 width: 100px;
            }
        }
    }
</style>