
<template>
  <div class="login">
    <div class="box flex flex-col items-center">
      <h2>百望云酒店管理</h2>
      <el-form
        ref="ruleFormRef"
        style="max-width: 400px"
        :model="formData"
        :rules="rules"
        label-width="100px"
      >
        <el-form-item label="账号" prop="loginName">
          <el-input v-model="formData.loginName" />
        </el-form-item>
        <el-form-item label="密码" prop="loginPwd">
          <el-input
            v-model="formData.loginPwd"
            :type="isPassword ? 'password' : 'text'"
            autocomplete="off"
          >

          <template #suffix>
            <div v-if="isPassword === true" class="cursor-pointer" @click="isPassword = false">
              <el-icon><View /></el-icon>
            </div>
            <div v-else class="cursor-pointer" @click="isPassword = true">
              <el-icon><Hide /></el-icon>
            </div>
          </template>
          </el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="captcha">
          <div class="flex justify-between container ">
            <el-input
              v-model="formData.captcha"
              placeholder="请输入验证码"
            />
            <div class="ml-[12px] cursor-pointer" @click="getCaptcha" v-html="captcha"></div>
          </div>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            提交
          </el-button>
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
//  导入element-plus的类型
import type { FormInstance, FormRules } from 'element-plus'
import {View,Hide} from '@element-plus/icons-vue'
import { getCaptchaApi } from '@/api/common'
import { useUserStore } from '@/store/modules/user'
import { LoginParams } from '@/api/model/adminModel'
const userStore = useUserStore()

const ruleFormRef = ref<FormInstance>()
const formData = reactive<LoginParams>({
  loginName: 'admin',
  loginPwd: '123456',
  captcha: '',
})

const rules = reactive<FormRules<LoginParams>>({
  loginName: [{ trigger: 'blur', required: true, message: '请输入账号' }],
  loginPwd: [{ trigger: 'blur', required: true, message: '请输入密码' }],
  captcha: [{ trigger: 'blur', required: true, message: '请输入验证码' }],
})
const isPassword = ref<boolean>(true)
const captcha = ref<string>('')
onMounted(() => {
  getCaptcha()
})
function submitForm(formEl: FormInstance | undefined) {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      await userStore.login(formData).catch(() => {
        getCaptcha()
      })
    } else {
      console.log('error submit!')
    }
  })
}

function resetForm(formEl: FormInstance | undefined) {
  if (!formEl) return
  formEl.resetFields()
}

function getCaptcha() {
  getCaptchaApi().then((res) => {
    captcha.value = res.data
  })
}
</script>

<style scoped lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #142334, #6894c7);
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    width: 600px;
    border: 1px solid #fff;
    padding: 20px;
    ::v-deep .el-form-item__label {
      color: #fff;
    }
    h2 {
      color: #fff;
      font-size: 20px;
      text-align: center;
      margin-bottom: 20px;
      font-family: 'Roboto';
    }
  }
}
</style>
