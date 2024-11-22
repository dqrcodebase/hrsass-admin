/*
 * @Author: dqr
 * @Date: 2024-11-19 22:36:38
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-19 22:49:01
 * @FilePath: /hrsass-admin/src/store/useUser.ts
 * @Description: 
 * 
 */
import {defineStore} from 'pinia'

export default defineStore({
  id: 'user',
  state: () => ({
    user: {
      loginId: '', 
    } as { loginId: string } // Add the type annotation here
  }),
  actions: {
    setUser(user:object) {
      this.user = user;
    },
    clearUser() {
      sessionStorage.clear();
      this.user = { loginId: '' };
    },
  },
})
