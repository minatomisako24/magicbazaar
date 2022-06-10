<script setup lang="ts">
import { ref, reactive } from 'vue'
import { FormInstance, ElMessage, ElMessageBox, ElNotification, FormRules } from 'element-plus'
import { userInfoStore } from '../../store'
import { useRoute, useRouter } from 'vue-router'

const ruleLoginForm = ref<FormInstance>()
const loading = ref<boolean>(false)
const userLoginForm = reactive({
    username: '',
    password: '',
    twoCheck: ''
})

const usernameCheck = (rule: any, value: any, callback: any) => {
    if (!value) {
        return callback(new Error('请输入用户名'))
    }
    setTimeout(() => {
        if (!/^[A-z0-9_]{6,16}$/.test(value as string)) {
            callback(new Error('用户名不符合输入要求'))
        } else {
            callback()
        }
    }, 300)
}

const passwordCheck = (rule: any, value: any, callback: any) => {
    if (!value) {
        return callback(new Error('请输入密码'))
    }
    setTimeout(() => {
        if (!/^[A-z0-9_+-.]{6,16}$/.test(value as string)) {
            callback(new Error('密码输入不符合要求'))
        } else {
            callback()
        }
    }, 300)
}

const getTwoCheckCode = (form: FormInstance | undefined) => {
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

const rules = reactive<FormRules>({
    username: [{ validator: usernameCheck, trigger: 'blur' }],
    password: [{ validator: passwordCheck, trigger: 'blur' }]
})

const route = useRoute()
const router = useRouter()

const submitForm = (form: FormInstance | undefined) => {
    if (!form) return
    form.validate((valid) => {
        if (valid) {
            ElMessage({
                message: '用户名或密码错误',
                type: 'error'
            })

            userInfoStore().setUserInfo({token: 1})
            
            if (route.query.redirect) {
                router.push(route.query.redirect as string)
            } else {
                router.push('/index')
            }
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
                ref="ruleLoginForm"
                label-position="top"
                status-icon
                :rules="rules"
                :model="userLoginForm"
                size="large"
                >
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="userLoginForm.username" placeholder="请输入6-16位的用户名" />
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="userLoginForm.password" type="password" placeholder="请输入密码" show-password />
                    </el-form-item>
                    <el-form-item label="Code Check">
                        <el-col :span="16">
                            <el-input v-model="userLoginForm.twoCheck" placeholder="如开启，请输入，否则忽略" />
                        </el-col>
                        <el-col :span="4" :offset="2">
                            <el-button type="primary" @click="getTwoCheckCode(ruleLoginForm)">
                                Get Code
                            </el-button>
                        </el-col>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm(ruleLoginForm)"
                            >Submit</el-button
                        >
                        <el-button @click="resetForm(ruleLoginForm)">Reset</el-button>
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
                img {
                    width: 100%;
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