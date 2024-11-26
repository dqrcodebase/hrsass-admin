/*
 * @Author: dqr
 * @Date: 2024-11-19 22:36:38
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-26 16:46:51
 * @FilePath: /hrsass-admin/view/src/store/modules/useUserStore.ts
 * @Description: 
 * 
 */
import {defineStore} from 'pinia'
import {User} from '../../../types/store'

interface UserState {
  user: Nullable<User>;
}
export default defineStore({
  id: 'user',
  state: ():UserState => ({
    user: {
      loginId: '', 
    } 
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
