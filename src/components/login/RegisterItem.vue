<script setup lang="ts">
import { ref, reactive } from 'vue'
import { FormInstance, FormRules, ElMessage, ElMessageBox, ElNotification } from 'element-plus'

const ruleRegisterForm = ref<FormInstance>()
const loading = ref<boolean>(false)
const userRegitserForm = reactive({
    username: '',
    password: '',
    againPassword: '',
    phoneOrEmail: '',
    code: ''
})

const getCode = (form: FormInstance | undefined) => {
    if (!form) return
    form.validate((valid) => {
        if (valid) {
            loading.value = true
            setTimeout(() => {
                ElNotification({
                    title: '提示',
                    message: '未开启二步验证',
                    type: 'error'
                })
                loading.value = false
            }, 1000)
        }
    })
}

const againPasswordCheck = (rule: any, value: any, callback: any) => {
    if (!value) {
        return callback(new Error('请再次输入密码'))
    }
    setTimeout(() => {
        if (!/^[A-z0-9_+-.]{6,16}$/.test(value as string)) {
            return callback(new Error('密码输入不符合要求'))
        }
        userRegitserForm.password != value ? callback(new Error('两次密码输入不一致')) : callback()
    }, 300)
}

const rules = reactive<FormRules>({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { pattern: /^[A-z0-9_]{6,16}$/, message: '用户名不符合输入要求', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { pattern: /^[A-z0-9_+-.]{6,16}$/, message: '密码输入不符合要求', trigger: 'blur' }
    ],
    againPassword: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { validator: againPasswordCheck, trigger: 'blur' }
    ],
    phoneOrEmail: [
        { required: true, message: '请输入手机号或者邮箱地址', trigger: 'blur' },
        { pattern: /^[A-z0-9_+-.]{6,16}$/, message: '手机号或者邮箱地址输入不符合要求', trigger: 'blur' }
    ],
    code: [
        { required: true, message: '请输入验证码', trigger: 'blur' },
        { pattern: /^[A-z0-9]{6}$/, message: '验证码输入不符合要求', trigger: 'blur' }
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
        }
    })
}

const resetForm = (form: FormInstance | undefined) => {
    if (!form) return
    form.resetFields()
}
</script>

<template>
    <div class="container">
        <div class="login-container">
            <div class="login-header">
                <img src="https://cos-1312256436.cos.ap-shanghai.myqcloud.com/magicbazaar/static/login/logo/3d77e8_ba916976e62b4624827853edb2dc2495_mv2.webp" alt="">
            </div>
            <div class="login-form">
                <el-form
                v-loading.fullscreen.lock="loading"
                ref="ruleRegisterForm"
                label-position="top"
                status-icon
                :rules="rules"
                :model="userRegitserForm"
                size="large"
                >
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="userRegitserForm.username" placeholder="请输入6-16位的用户名" />
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="userRegitserForm.password" type="password" placeholder="请输入密码" show-password />
                    </el-form-item>
                    <el-form-item label="密码" prop="againPassword">
                        <el-input v-model="userRegitserForm.againPassword" type="password" placeholder="请再次输入密码" show-password />
                    </el-form-item>
                    <el-form-item label="手机号/邮箱地址" prop="phoneOrEmail">
                        <el-input v-model="userRegitserForm.phoneOrEmail" placeholder="请输入手机号或者邮箱地址" />
                    </el-form-item>
                    <el-form-item label="验证码" prop="code">
                        <el-col :span="16">
                            <el-input v-model="userRegitserForm.code" placeholder="请输入验证码" />
                        </el-col>
                        <el-col :span="4" :offset="2">
                            <el-button type="primary" @click="getCode(ruleRegisterForm)">
                                Get Code
                            </el-button>
                        </el-col>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm(ruleRegisterForm)"
                            >Submit</el-button
                        >
                        <el-button @click="resetForm(ruleRegisterForm)">Reset</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="login-footer">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .container {
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 15px;
        height: 100%;
        .login-container {
            width: 50%;
            margin: 0 auto;
            height: 100%;
            display: flex;
            flex-flow: column;
            justify-content: center;
            .login-header {
                text-align: center;
                img {
                    width: 100%;
                    max-width: 400px;
                }
            }
            ::v-deep(.login-form) {
                .el-form-item__label {
                    color: white;
                    font-weight: bold;
                }
            }
        }
    }
</style>