
<template>
  <div class="h-full">
    <div class="h-full flex flex-col">
      <div>
        <el-button type="primary" @click="handleAdd">添加</el-button>
      </div>
      <el-table size="small" :data="roles" class="flex-1">
        <el-table-column prop="roleCode" label="编号" width="180" />
        <el-table-column prop="roleName" label="名称" width="180" />
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
      <template #default>
        <div>ddd</div>
      </template>
      </el-pagination>
    </div>

    </div>
    <EditRoleDrawer
     v-model:drawer="drawer"
      :info="formData"
      @on-success="onSuccess"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getRoleListApi ,removesRoleApi} from '@/api/role'
import { RoleParams } from '@/api/model/roleModel'
import EditRoleDrawer from './components/EditRoleDrawer.vue'
import { ElMessage, ElMessageBox } from 'element-plus'
const roles = ref([])

const pagination = ref({
  currentPage: 1,
  pageSize: 20,
  total: 0,
})
const drawer = ref(false)
const formData = ref<RoleParams>({
  roleCode: '',
  roleName: '',
})

onMounted(() => {
  getRoleList()
})

async function getRoleList() {
  const paginationParams = {
    page: pagination.value.currentPage - 1,
    limit: pagination.value.pageSize,
  }
  const { data } = await getRoleListApi(paginationParams)
  roles.value = data.content
  pagination.value.total = data.totalElements
}
function handleSizeChange(val: number) {
  pagination.value.pageSize = val
  getRoleList()
}

function handleCurrentChange(val: number) {
  pagination.value.currentPage = val
  getRoleList()
}
// 编辑
function handleEdit(index: number, row: RoleParams) {
  formData.value = {...row}
  drawer.value = true
  console.log(index, row)
}
// 删除
 function handleDelete(index: number, row: RoleParams) {
  console.log(index, row)
  ElMessageBox.confirm(
    '是否删除该角色?',
    'Warning',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(async() => {
      await removesRoleApi([row.id])
      ElMessage({
        type: 'success',
        message: '删除成功',
      })
      getRoleList()
    })
}

// 添加
function handleAdd() {
  console.log('add')
  drawer.value = true
}

function onSuccess() {
  getRoleList()
}
</script>
