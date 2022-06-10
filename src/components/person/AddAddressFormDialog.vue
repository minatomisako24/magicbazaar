<script setup lang="ts">
import { ref, reactive } from 'vue'
import { FormInstance, FormRules, ElMessage, ElMessageBox, ElNotification } from 'element-plus'

const props = defineProps<{
    updateAddressDialog: boolean
}>()
const emits = defineEmits([
    'update:updateAddressDialog'
])

const updateAddressForm = ref<FormInstance>()
const addressForm = reactive({
    name: ''
})

const rules = reactive<FormRules>({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { pattern: /^[A-z0-9_]{6,16}$/, message: '用户名不符合输入要求', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { pattern: /^[A-z0-9_+-.]{6,16}$/, message: '密码输入不符合要求', trigger: 'blur' }
    ]
})

const submitForm = (form: FormInstance | undefined) => {
    if (!form) return
    form.validate((valid) => {
        if (valid) {
            ElMessage({
                message: '用户名或密码错误',
                type: 'error'
            })
            console.log('success')
            emits('update:updateAddressDialog', false)
        }
    })
}

const closeForm = () => {
    emits('update:updateAddressDialog', false)
}
</script>

<template>
    <el-dialog v-model="updateAddressDialog" :close-on-click-modal="false" :show-close="false" title="地址编辑">
        <el-form
        ref="updateAddressForm"
        label-position="left"
        status-icon
        :rules="rules"
        :model="addressForm"
        size="large"
        >
            <el-form-item label="用户名" prop="name">
                <el-input v-model="addressForm.name" placeholder="请输入6-16位的用户名" />
            </el-form-item>
            <el-form-item label="密码" prop="name">
                <el-input v-model="addressForm.name" type="password" placeholder="请输入密码" show-password />
            </el-form-item>
            <el-form-item>
                <el-button @click="closeForm()">取消</el-button>
                <el-button type="primary" @click="submitForm(updateAddressForm)"
                    >修改</el-button
                >
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<style scoped lang="scss">

</style>