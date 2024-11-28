/*
 * @Author: dqr
 * @Date: 2024-11-19 22:36:38
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-28 16:26:45
 * @FilePath: /hrsass-admin/view/src/store/modules/user.ts
 * @Description: 
 * 
 */
import {defineStore} from 'pinia'
import {User} from '../../../types/store'
import { loginApi,getUserInfoApi } from '@/api/admin';
import { LoginParams } from '@/api/model/adminModel';
import {setAuthCache} from '@/utils/auth'
import router from '@/router';


interface UserState {
  user: Nullable<User>;
}
export const useUserStore = defineStore({
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
    setToken(token: string | undefined) {
      setAuthCache('token',token);
    },
    async login(loginParams: LoginParams) {
      const result = await loginApi(loginParams);
      this.setToken(result.data.token);
      router.push('/');
    },
    async getUserInfo() {
      const result = await getUserInfoApi();
      if (result.successfully) {
        this.setUser(result.data as User); // Specify the type of `result.data` as `User`
      }
    },
  },
})
