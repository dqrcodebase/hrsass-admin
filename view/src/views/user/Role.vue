<!--
 * @Author: dqr
 * @Date: 2024-11-21 22:17:13
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-11-22 08:45:47
 * @FilePath: /hrsass-admin/view/src/views/user/Role.vue
 * @Description: 
 * 
-->
<template>
  <div>
    <el-table size="small" :data="roles" style="width: 100%">
    <el-table-column prop="roleId" label="编号" width="180" />
    <el-table-column prop="roleName" label="名称" width="180" />
    <el-table-column align="right" label="操作">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
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
  </div>
</template>

<script setup lang="ts">
import { onMounted ,ref} from 'vue';
import {$list} from '../../api/role.ts'
let roles = ref([])


const loadRoles = async () => {
  roles.value = await $list()
}
onMounted(() => {
  loadRoles()
  console.log('Role')
})
function handleEdit(index: number, row: any) {
  console.log(index, row);
}
function handleDelete(index: number, row: any) {
  console.log(index, row);
}
</script>

<style lang="scss" scoped>

</style>