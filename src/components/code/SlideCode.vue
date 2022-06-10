<script setup lang="ts">
import { ref } from 'vue'
import SlideVerify, { SlideVerifyInstance } from 'vue3-slide-verify'
import 'vue3-slide-verify/dist/style.css'

const msg = ref<string>('')
const block = ref<SlideVerifyInstance>()
const text = ref<string>('向右滑动->')
const accuracy = ref<number>(1)

const onAgain = () => {
    msg.value = '检测到非人为操作! try again'
    block.value?.refresh()
}

const onSuccess = (time: number) => {
    msg.value = `success! 耗时 ${ (time / 1000).toFixed(1) } s`
}

const onFail = () => {
    msg.value = 'fail! 验证不通过'
}

const onRefresh = () => {
    msg.value = "refresh"
}

const handleClick = () => {
      block.value?.refresh()
      msg.value = ""
}
</script>

<template>
    <div>
        <slide-verify
        ref="block"
        :slider-text="text"
        :accuracy="accuracy"
        @again="onAgain"
        @success="onSuccess"
        @fail="onFail"
        @refresh="onRefresh"
        >
        </slide-verify>
        <button class="btn" @click="handleClick">在父组件可以点我刷新哦</button>
        <div>{{ msg }}</div>
    </div>
</template>

<style scoped lang="scss">

</style>