<!--
 * @Author: dqr
 * @Date: 2024-12-03 15:35:49
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-12-03 21:42:26
 * @FilePath: /hrsass-admin/view/src/views/user/components/EditRoleDrawer.vue
 * @Description: 
 * 
-->
<template>
  <el-drawer v-model="drawer" title="添加角色" :close-on-click-modal="false">
    <el-form
      label-width="auto"
      :model="formData"
      style="max-width: 600px"
      ref="ruleFormRef"
      :rules="rules"
      @close="onClose"
    >
      <el-form-item label="角色编号">
        <el-input v-model="formData.roleCode" disabled />
      </el-form-item>
      <el-form-item label="角色名称" required prop="roleName">
        <el-input v-model="formData.roleName" />
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="formData.roleDesc" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          确定
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">取消</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { ElForm, ElFormItem, ElInput, ElButton, ElDrawer } from 'element-plus'
import type { FormRules, FormInstance } from 'element-plus'
import { addRoleApi, updateRoleApi } from '@/api/role'
import { RoleParams } from '@/api/model/roleModel'
const { info } = defineProps({
  info: Object,
})
const drawer = defineModel<boolean>('drawer')
const emits = defineEmits(['onSuccess', 'onClose'])

const formData = ref<RoleParams>({
  roleCode: '',
  roleName: '',
  roleDesc: '',
})
const rules: FormRules = {
  roleName: [{ required: true, message: '请输入角色名称', trigger: 'blur' }],
}
const ruleFormRef = ref<FormInstance>()

watch(
  () => info,
  (val) => {
    if (val) {
      formData.value = val
    }
  }
)

async function submitForm(formEl: FormInstance | undefined) {
  if (formEl) {
    await formEl.validate(async (valid) => {
      console.log('🚀 ~ awaitformEl.validate ~ valid:', valid)
      if (valid) {
        if (formData.value.id) {
          await updateRoleApi(formData.value)
          emits('onSuccess')
        } else {
          await addRoleApi(formData.value)
          emits('onSuccess')
        }
        resetForm(formEl)
        onClose()
      }
    })
  }
}

function onClose() {
  drawer.value = false
  emits('onClose')
}
function resetForm(formEl: FormInstance | undefined) {
  if (!formEl) return
  formEl.resetFields()
  onClose()
}
</script>

<style scoped></style>
