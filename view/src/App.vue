<!--
 * @Author: dqr
 * @Date: 2024-11-09 16:58:11
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-28 15:28:49
 * @FilePath: /hrsass-admin/view/src/App.vue
 * @Description: 
 * 
-->
<template>
  <div>
    <router-view></router-view> 
  </div>
</template>

<script lang="ts" setup>
import {useUserStore} from '@/store/modules/user'
const userStore = useUserStore()
if(sessionStorage.getItem('user')){
  let user = JSON.parse(sessionStorage.getItem('user') as string)
  userStore.setUser(user)
}



</script>