<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'

const count = ref(3)
</script>

<template>
    <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/SelfEmployed' }">全部</el-breadcrumb-item>
        <el-breadcrumb-item v-for="item in count">{{ item }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<style scoped lang="scss">

</style>