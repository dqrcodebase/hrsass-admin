
<template>
  <el-drawer v-model="drawer" title="添加用户" :close-on-click-modal="false">
    <el-form
      ref="ruleFormRef"
      label-width="auto"
      :model="formData"
      style="max-width: 600px"
      :rules="rules"
      @close="onClose"
    >
      <el-form-item label="账号">
        <el-input v-model="formData.roleCode" disabled />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formData.roleCode" disabled />
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="formData.roleCode" disabled />
      </el-form-item>
      <el-form-item label="头像">
        <el-upload
          class="avatar-uploader"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="角色" required prop="roleName">
        <el-select
          v-model="formData.roleName"
          placeholder="Select"
          size="large"
          style="width: 240px"
        >
          <el-option
            v-for="item in rolesList"
            :key="item.id"
            :label="item.roleName"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="电话">
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
import { ref, watch, onMounted } from 'vue'
import { ElForm, ElFormItem, ElInput, ElButton, ElDrawer } from 'element-plus'
import type { FormRules, FormInstance } from 'element-plus'
import { addRoleApi, updateRoleApi, getRoleListApi } from '@/api/role'
import { RoleParams } from '@/api/model/roleModel'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'

import type { UploadProps } from 'element-plus'

const imageUrl = ref('')
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
const rolesList = ref([])

watch(
  () => info,
  (val) => {
    if (val) {
      formData.value = val
    }
  }
)

onMounted(() => {
  getRoleList()
})

async function getRoleList() {
  const { data } = await getRoleListApi({ page: 0, limit: 100 })
  rolesList.value = data.content
}

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

const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}

</script>

<style scoped></style>
