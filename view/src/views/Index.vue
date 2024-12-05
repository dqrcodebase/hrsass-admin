<!--
 * @Author: dqr
 * @Date: 2024-11-12 21:54:30
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-12-05 16:52:16
 * @FilePath: /hrsass-admin/view/src/views/Index.vue
 * @Description: 
 * 
-->
<template>
  <el-config-provider :locale="locale">
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
            <el-menu-item index="/">房型管理</el-menu-item>
            <el-menu-item index="2-2">房间管理</el-menu-item>
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
            <el-menu-item index="/index">
              <el-icon><House /></el-icon>
            </el-menu-item>
            <el-menu-item index="/mail">
              <el-icon><Message /></el-icon>
            </el-menu-item>
            <el-menu-item index="/mail">
              <el-dropdown :hide-on-click="false">
                <!-- <el-icon><InternationalIcon class="outline-none" /></el-icon> -->
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                    <el-dropdown-item>Action 4</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </el-menu-item>

            <el-menu-item index="/massage">
              <el-icon><ChatDotRound /></el-icon>
            </el-menu-item>

            <el-sub-menu index="4">
              <template #title>
                <el-icon><User /></el-icon>
                {{ userStore.user.name }}</template
              >
              <el-menu-item index="2-1">个人中心</el-menu-item>
              <el-menu-item index="2-2">修改密码</el-menu-item>
              <el-menu-item @click="exit">退出系统</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </div>
        <div class="content p-[12px] flex overflow-scroll">
          <div class="bg-white flex-1 rounded-[4px]">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/modules/user'
import { useCommonStore } from '@/store/modules/common'
import { onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
// import InternationalIcon from '@/assets/icons/internationalIcon.svg'

import {
  ChatDotRound,
  House,
  Location,
  Message,
  User,
} from '@element-plus/icons-vue'
const userStore = useUserStore()
const commonStore = useCommonStore()
const router = useRouter()

onMounted(() => {

  if (!userStore.user.loginName) {
    router.push('/')
  }
})
onMounted(() => {
  
  if (!userStore.user.loginName) {
    router.push('/')
  }
})
const exit = () => {
  userStore.clearUser()
  router.push('/login')
}
const language = computed(() => commonStore.language)

const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))
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
      background: #f0f2f5;
    }
  }
}
</style>
