<script setup lang="ts">
import { ref, reactive } from 'vue'
import { FormInstance, FormRules, ElMessage, ElNotification } from 'element-plus'
import { UploadFile, UploadFiles, UploadProps, UploadRawFile } from 'element-plus'
const rulePersonForm = ref<FormInstance>()
const personForm = reactive({
    username: '',
    nickname: '',
    password: '',
    birthday: '',
    sex: '',
    description: ''
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
        }
    })
}

const resetForm = (form: FormInstance | undefined) => {
    if (!form) return
    form.resetFields()
}

const userAvatar = ref<string>('/src/static/logo/header-logo@2x.278238b.png')

const handleAvatarSuccess = (response: any, uploadFIle: UploadFile, uploadFiles: UploadFiles) => {
    console.log(response, uploadFIle, uploadFiles)
    ElNotification({
        title: '提示',
        message: '上传成功',
        type: 'success',
    })
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile: UploadRawFile) => {
    console.log(rawFile)
}
</script>

<template>
    <div class="person-container">
        <el-card class="box-card" shadow="none">
            <template #header>
                <div class="card-header">
                    <span><h3>个人资料</h3></span>
                    <el-button class="button" text type="primary">修改</el-button>
                </div>
            </template>
            <div class="person-info">
                <el-row>
                    <el-col :span="12">
                        <el-form
                        ref="rulePersonForm"
                        label-position="right"
                        label-width="100px"
                        status-icon
                        :rules="rules"
                        :model="personForm"
                        size="large"
                        >
                            <el-form-item label="用户名" prop="username">
                                <el-input v-model="personForm.username" placeholder="请输入6-16位的用户名" />
                            </el-form-item>
                            <el-form-item label="用户昵称" prop="nickname">
                                <el-input v-model="personForm.nickname" placeholder="请输入6-16位的用户昵称" />
                            </el-form-item>
                            <el-form-item label="生日">
                                <el-date-picker
                                v-model="personForm.birthday"
                                type="date"
                                placeholder="生日"
                                style="width: 100%"
                                />
                            </el-form-item>
                            <el-form-item label="性别" prop="sex">
                                <el-radio-group v-model="personForm.sex">
                                    <el-radio label="0">保密</el-radio>
                                    <el-radio label="1">男</el-radio>
                                    <el-radio label="2">女</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="简介">
                                <el-input v-model="personForm.description" type="textarea" />
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm(rulePersonForm)"
                                    >Submit</el-button
                                >
                                <el-button @click="resetForm(rulePersonForm)">Reset</el-button>
                            </el-form-item>
                        </el-form>
                    </el-col>
                    <el-col :offset="3" :span="6">
                        <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                        >
                            <el-avatar :size="200" :src="userAvatar" />
                        </el-upload>
                    </el-col>
                </el-row>
            </div>
        </el-card>
    </div>
</template>

<style scoped lang="scss">
    .person-container {
        margin-top: 20px;
        .box-card {
            .card-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .person-info {

            }
        }
    }
</style>