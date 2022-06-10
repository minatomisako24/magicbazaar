<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import MenuNav from './components/live2d/MenuNav.vue'
</script>

<template>
    <div>
        <router-view v-slot="{ Component, route }">
            <transition name="fade" mode="out-in">
                <component :is="Component" :key="route.path"></component>
            </transition>
        </router-view>
        <div class="live2d-menu">
            <MenuNav></MenuNav>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .fade-enter-form, .fade-leave-to {
        // transform: translateX(20px);
        opacity: 0;
    }
    .fade-enter-to, .fade-leave-from {
        opacity: 1;
    }
    .fade-enter-active {
        transition: all 0.7s ease;
    }
    .fade-leave-active {
        transition: all 0.3s cubic-bezier(1, 0.6, 0.6, 1);
    }
    .live2d-menu {
        opacity: 0;
        transition: opacity .3s ease;
    }
    #MId:hover {
        .live2d-menu {
            opacity: 1;
        }
    }
</style>

<style lang="scss">
    * {
        padding: 0;
        margin: 0;
    }
    html {
        min-width: 1227px;
    }
</style>
