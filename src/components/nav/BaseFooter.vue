<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
    <el-card :body-style="{ padding: '0px' }">
        <div class="footer">
            <img
            src="https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/index/footer/footer-logo%402x.7fda3a3.png"
            class="image"
            />
            <div class="chat">
                <span>关注我们</span>
            </div>
            <div class="web-description">
                <b>魔法集市是注于二次元领域的一站式消费平台，致力于ACG及其他日系相关商品的电商服务，为大家精心挑选了各种热门人气二次元周边商品。更有护肤品直邮、日系演出门票贩售以及日本各家    专官方合作的正版周边贩售。</b>
            </div>
        </div>
    </el-card>
</template>

<style scoped lang="scss">
    .footer {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        .image {
            padding: 20px;
            height: 106px;
        }
        .chat {
            padding: 60px 30px;
        }
        .web-description {
            width: 580px;
            padding: 15px 15px 15px 120px;
            display: flex;
            align-items: center;
        }
    }
</style>