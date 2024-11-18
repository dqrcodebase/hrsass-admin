<!--
 * @Author: dqr
 * @Date: 2024-11-12 21:54:30
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-18 21:42:45
 * @FilePath: /hrsass-admin/src/views/Index.vue
 * @Description: 
 * 
-->
<template>
  <div class="index">
    <div class="left">
      <h2>人员管理</h2>

     <el-menu
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
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="2">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="3">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          </el-sub-menu>
      </el-menu>
    </div>
    <div class="right">
      <div class="top"></div>
      <div class="content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">

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
  .right{
    flex: 1;
    display: flex;
    flex-direction: column;
    .top {
      height: 60px;
      background: #142334;
      color: #ffffff;
    }
    .content {
      flex: 1;
    }
  }
}
</style>