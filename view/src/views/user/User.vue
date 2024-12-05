<!--
 * @Author: dqr
 * @Date: 2024-12-03 21:40:20
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-12-04 10:31:38
 * @FilePath: /hrsass-admin/view/src/views/user/User.vue
 * @Description: 
 * 
-->
<template>
  <div class="h-full">
    <div class="h-full flex flex-col">
      <div>
        <el-button @click="handleAdd" type="primary">添加</el-button>
      </div>
      <el-table size="small" :data="roles" class="flex-1">
        <el-table-column prop="userName" label="账号" width="180" />
        <el-table-column prop="realName" label="姓名" width="180" />
        <el-table-column prop="mobile" label="电话" width="180" />
        <el-table-column prop="avatar" label="头像" width="180">
          <template #default="scope">
            <img :src="scope.row.avatar" alt="" class="w-[40px] h-[40px]" />
          </template>
        </el-table-column>
        <el-table-column prop="roleName" label="角色" width="180" />
        <el-table-column align="right" label="操作">
          <template #default="scope">
            <el-button
              size="small"
              @click="handleEdit(scope.$index, scope.row)"
            >
              编辑
            </el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="w-full flex justify-end p-[12px]">
        <el-pagination
          v-model:current-page="pagination.currentPage"
          v-model:page-size="pagination.pageSize"
          :page-sizes="[10, 20, 30, 40]"
          :total="pagination.total"
          size="small"
          layout="total, sizes, prev, pager, next, jumper,default"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
          <template v-slot:default>
            <div>ddd</div>
          </template>
        </el-pagination>
      </div>
    </div>
    <EditUserDrawer
      v-model:drawer="drawer"
      :info="formData"
      @onSuccess="onSuccess"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getUserListApi, removesUserApi } from '@/api/user'
import { UserParams } from '@/api/model/userModel'
import EditUserDrawer from './components/EditUserDrawer.vue'
import { ElMessage, ElMessageBox } from 'element-plus'
let roles = ref([])

const pagination = ref({
  currentPage: 1,
  pageSize: 20,
  total: 0,
})
const drawer = ref(false)
const formData = ref<UserParams>({
  userName: '',
  password: '',
  roleId: '',
  mobile: '',
  avatar: '',
  realName: '',
})

onMounted(() => {
  getUserList()
})

async function getUserList() {
  const paginationParams = {
    page: pagination.value.currentPage - 1,
    limit: pagination.value.pageSize,
  }
  const { data } = await getUserListApi(paginationParams)
  roles.value = data.content
  pagination.value.total = data.totalElements
}
function handleSizeChange(val: number) {
  pagination.value.pageSize = val
  getUserList()
}

function handleCurrentChange(val: number) {
  pagination.value.currentPage = val
  getUserList()
}
// 编辑
function handleEdit(index: number, row: any) {
  formData.value = { ...row }
  drawer.value = true
  console.log(index, row)
}
// 删除
function handleDelete(index: number, row: any) {
  console.log(index, row)
  ElMessageBox.confirm('是否删除该角色?', 'Warning', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(async () => {
    await removesUserApi([row.id])
    ElMessage({
      type: 'success',
      message: '删除成功',
    })
    getUserList()
  })
}

// 添加
function handleAdd() {
  console.log('add')
  drawer.value = true
}

function onSuccess() {
  getUserList()
}
</script>
