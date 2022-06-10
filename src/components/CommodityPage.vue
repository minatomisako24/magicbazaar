<script setup lang="ts">
import TopNav from './commodity/TopNav.vue'
import BaseFooter from './nav/BaseFooter.vue'
import CommodityItem from './commodity/CommodityItem.vue'

</script>

<template>
    <div class="index-page">
        <div class="center-page">
            <div class="top-nav">
                <TopNav></TopNav>
            </div>
            <div class="commodity-item">
                <CommodityItem></CommodityItem>
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
            .top-nav {
            }
            .commodity-item {
                margin-top: 30px;
            }
        }
        .footer {
            position: relative;
            margin-top: 80px;
        }
    }
</style>