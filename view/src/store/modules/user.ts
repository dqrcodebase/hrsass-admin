
import { defineStore } from 'pinia'
import { User } from '../../../types/store'
import { loginApi, getUserInfoApi } from '@/api/admin';
import { LoginParams } from '@/api/model/adminModel';
import { setToken, removeToken } from '@/utils/auth'
import { router } from '@/router';
import { md5 } from 'md5js'
import { setLocalCache, clearLocalCache, clearSessionCache, getLocalCache } from '@/utils/cache'


interface UserState {
  user: Nullable<User>;
}
export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    user: {
      loginName: '',
      name: '',
      id: ''
    }
  }),
  actions: {
    setUser(user: object) {
      this.user = user;
      setLocalCache('user', user);
    },
    getUser() {
      const user = getLocalCache('user');
      this.user = user;
    },
    clearUser() {
      this.user = {};
    },
    removeToken() {

    },
    setToken(token: string | undefined) {
      setToken(token);
    },
    async login(loginParams: LoginParams) {
      const params = {
        ...loginParams,
        // 对密码进行加密
        loginPwd: md5(loginParams.loginPwd, 32)
      }

      const data = await loginApi(params)
      this.setToken(data.token);
      this.getUserInfo();
      router.push('/');
    },
    async getUserInfo() {
      const user = getLocalCache('user');
      if (user) {
        this.getUser()
        return 
      }
      const result = await getUserInfoApi();
      if (result.successfully) {
        this.setUser(result.data as User); // Specify the type of `result.data` as `User`
      }
    },
    logout() {
      this.clearUser();
      removeToken();
      clearLocalCache();
      clearSessionCache();
      router.replace({
        path: '/login',
      })
    }
  },
})

export function useUserWithOut() {
  return useUserStore()
}
