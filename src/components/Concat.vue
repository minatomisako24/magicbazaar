<script setup lang="ts">
import BaseHeader from './nav/BaseHeader.vue'
</script>

<template>
    <div>
        <el-container>
            <el-header class="header">
                <el-affix>
                    <BaseHeader></BaseHeader>
                </el-affix>
            </el-header>
            <el-main class="main">
                <router-view></router-view>
            </el-main>
            <el-footer class="footer">
            </el-footer>
        </el-container>
    </div>
</template>

<style scoped lang="scss">
    .header, .footer {
        padding: 0;
    }
    ::v-deep(.header) {
        .el-affix--fixed {
            background-color: #ffffff;
        }
    }
    .main {
        padding: 0;
    }
</style>