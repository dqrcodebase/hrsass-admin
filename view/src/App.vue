<!--
 * @Author: dqr
 * @Date: 2024-11-09 16:58:11
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-11-21 22:01:58
 * @FilePath: /hrsass-admin/view/src/App.vue
 * @Description: 
 * 
-->
<template>
  <router-view></router-view> 
</template>

<script lang="ts" setup>
import useStore from './store/useUserStore.ts'
const userStore = useStore()
if(sessionStorage.getItem('user')){
  let user = JSON.parse(sessionStorage.getItem('user') as string)
  userStore.setUser(user)
}

</script>