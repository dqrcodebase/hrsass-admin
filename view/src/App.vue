
<template>
  <div>
    <router-view></router-view> 
  </div>
</template>

<script lang="ts" setup>
import {useUserStore} from '@/store/modules/user'
const userStore = useUserStore()
if(sessionStorage.getItem('user')){
  const user = JSON.parse(sessionStorage.getItem('user') as string)
  userStore.setUser(user)
}
</script>