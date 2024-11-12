<!--
 * @Author: dqr
 * @Date: 2024-11-12 21:54:24
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-12 22:25:43
 * @FilePath: /hrsass-admin/src/views/Login.vue
 * @Description: 
 * 
-->
<template>
  <div class="login">
    <div class="box">
      <h2>人员管理平台</h2>
      <el-form
        ref="ruleFormRef"
        style="max-width: 600px"
        :model="formData"
        status-icon
        :rules="rules"
        label-width="40px"
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

        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            Submit
          </el-button>
          <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
//  导入element-plus的类型
import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<FormInstance>()


const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass')
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const formData = reactive({
  loginId: '',
  loginPwd: '',
})

const rules = reactive<FormRules<typeof ruleForm>>({
  loginId: [{ validator: validatePass, trigger: 'blur' }],
  loginPwd: [{ validator: validatePass2, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style scoped lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  background-color: linear-gradient(to bottom, #142334, #6894c7);
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    width: 400px;
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
