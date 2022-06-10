<script setup lang="ts">
import { ref, reactive } from 'vue'
import { FormInstance, FormRules, ElMessage, ElNotification } from 'element-plus'

const ruleUpdateForm = ref<FormInstance>()
const updateForm = reactive({
    oldPassword: '',
    password: '',
    againPassword: ''
})

const rules = reactive<FormRules>({
    oldPassword: [
        { required: false, message: '请输入用户名', trigger: 'blur' },
        { pattern: /^[A-z0-9_]{6,16}$/, message: '用户名不符合输入要求', trigger: 'blur' }
    ],
    password: [
        { required: false, message: '请输入密码', trigger: 'blur' },
        { pattern: /^[A-z0-9_+-.]{6,16}$/, message: '密码输入不符合要求', trigger: 'blur' }
    ],
    againPassword: [
        { required: false, message: '请输入密码', trigger: 'blur' },
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
            loading.value = true
            setTimeout(() => {
                loading.value = false
                ElNotification({
                    title: '提示',
                    message: '修改成功，即将自动登出',
                    type: 'success',
                })
            }, 1000)
            console.log('success')
        }
    })
}

const loading = ref<boolean>(false)
</script>

<template>
    <div class="update-container">
        <el-card class="box-card" shadow="none">
            <template #header>
                <div class="card-header">
                    <span><h3>修改密码</h3></span>
                </div>
            </template>
            <div class="update-info">
                <el-row>
                    <el-col :span="8">
                        <el-form
                        ref="ruleUpdateForm"
                        v-loading.fullscreen.lock="loading"
                        label-position="right"
                        label-width="100px"
                        status-icon
                        :rules="rules"
                        :model="updateForm"
                        size="large"
                        >
                            <el-form-item label="旧密码" prop="oldPassword">
                                <el-input v-model="updateForm.oldPassword" placeholder="请输入旧密码" />
                            </el-form-item>
                            <el-form-item label="修改密码" prop="password">
                                <el-input v-model="updateForm.password" placeholder="请输入要修改的密码" />
                            </el-form-item>
                            <el-form-item label="再输入" prop="againPassword">
                                <el-input v-model="updateForm.againPassword" placeholder="请再次输入密码" />
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm(ruleUpdateForm)">修改</el-button>
                            </el-form-item>
                        </el-form>
                    </el-col>
                    <el-col :span="8" :offset="4">
                        <el-descriptions title="修改提示：" column="1">
                            <el-descriptions-item label="1.">kooriookami</el-descriptions-item>
                            <el-descriptions-item label="2.">18100000000</el-descriptions-item>
                            <el-descriptions-item label="3.">Suzhou</el-descriptions-item>
                            <el-descriptions-item label="备注">
                            <el-tag size="small" type="danger">重要</el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item label="1."
                            >No.1188, </el-descriptions-item>
                            <el-descriptions-item label="2."
                            >No.1188, </el-descriptions-item>
                        </el-descriptions>
                    </el-col>
                </el-row>
            </div>
        </el-card>
    </div>
</template>

<style scoped lang="scss">
    .update-container {
        margin-top: 20px;
        .box-card {
            .card-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
    }
</style>