<!--
 * @Author: dqr
 * @Date: 2024-11-12 21:54:30
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-20 09:04:08
 * @FilePath: /hrsass-admin/src/views/Index.vue
 * @Description: 
 * 
-->
<template>
  <div class="index">
    <div class="left">
      <h2>人员管理</h2>

      <el-menu
      router
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>账户管理</span>
          </template>
          <el-menu-item index="/role">角色管理</el-menu-item>
          <el-menu-item index="/user">用户管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><location /></el-icon>
            <span>客房管理</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="2-1">房型管理</el-menu-item>
            <el-menu-item index="2-2">房间管理</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
       
      </el-menu>
    </div>
    <div class="right">
      <div class="top">
        <el-menu
          router
          :ellipsis="false"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">
            <el-icon><House /></el-icon>
            首页</el-menu-item
          >
          <el-menu-item index="2">
            <el-icon><Message /></el-icon>
            邮件</el-menu-item
          >
          <el-menu-item index="3">
            <el-icon><ChatDotRound /></el-icon>
            消息</el-menu-item
          >

          <el-sub-menu index="4">
            <template #title>
              <el-icon><User /></el-icon>
              管理员</template>
            <el-menu-item index="2-1">个人中心</el-menu-item>
            <el-menu-item index="2-2">修改密码</el-menu-item>
            <el-menu-item index="2-3">退出系统</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>
      <div class="content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useUser from '../store/useUser.ts'
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'
import {ChatDotRound,House,Location,Message,User} from '@element-plus/icons-vue'
let userStore = useUser() 
let router = useRouter()

onMounted(() => {
  if(!userStore.user.loginId ) {
    router.push('/')
  }
})

function handleOpen(key: string, keyPath: string) {
  console.log(key, keyPath)
}
function handleClose(key: string, keyPath: string) {
  console.log(key, keyPath)
}
</script>

<style scoped lang="scss">
.index {
  width: 100vw;
  height: 100vh;
  display: flex;
  .left {
    width: 200px;
    background: #142334;
    color: #ffffff;
    el-menu {
      border-right: none;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    .top {
      height: 60px;
      background: #142334;
      color: #ffffff;
      display: flex;
      justify-content: flex-end;
      .el-menu {
        border-bottom: none;
      }
    }
    .content {
      flex: 1;
      padding: 5px;
    }
  }
}
</style>
