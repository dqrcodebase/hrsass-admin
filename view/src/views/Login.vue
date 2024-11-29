<!--
 * @Author: dqr
 * @Date: 2024-11-25 14:21:44
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-29 15:24:04
 * @FilePath: /hrsass-admin/view/src/views/Login.vue
 * @Description: 
 * 
-->
<!--
 * @Author: dqr
 * @Date: 2024-11-12 21:54:24
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-29 11:24:40
 * @FilePath: /hrsass-admin/view/src/views/Login.vue
 * @Description: 
 * 
-->
<template>
  <div class="login">
    <div class="box flex flex-col items-center">
      <h2>百望云酒店管理</h2>
      <el-form
        ref="ruleFormRef"
        style="max-width: 400px"
        :model="formData"
        status-icon
        :rules="rules"
        label-width="100px"
      >
        <el-form-item label="账号" prop="loginId">
          <el-input v-model="formData.loginId" />
        </el-form-item>
        <el-form-item label="密码" prop="loginPwd">
          <el-input
            v-model="formData.loginPwd"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="验证码" prop="captcha">
          <div class="flex justify-between container ">
            <el-input
              v-model="formData.captcha"
              placeholder="请输入验证码"
            />
            <div class="ml-[12px]" v-html="captcha"></div>
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
import { getCaptchaApi } from '@/api/common'
import { useUserStore } from '@/store/modules/user'
import { LoginParams } from '@/api/model/adminModel'
const userStore = useUserStore()

const ruleFormRef = ref<FormInstance>()
const formData = reactive<LoginParams>({
  loginId: 'admin',
  loginPwd: '123456',
  captcha: '',
})

const rules = reactive<FormRules<LoginParams>>({
  loginId: [{ trigger: 'blur', required: true, message: '请输入账号' }],
  loginPwd: [{ trigger: 'blur', required: true, message: '请输入密码' }],
  captcha: [{ trigger: 'blur', required: true, message: '请输入验证码' }],
})
const captcha = ref<string>('')
onMounted(() => {
  getCaptcha()
})
function submitForm(formEl: FormInstance | undefined) {
  if (!formEl) return
  formEl.validate(async (valid) => {
    console.log('🚀 ~ formEl.validate ~ valid:', valid)
    if (valid) {
      await userStore.login(formData)
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
    console.log(res)
    captcha.value = res
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
