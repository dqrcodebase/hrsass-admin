/*
 * @Author: dqr
 * @Date: 2024-11-12 22:02:59
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-12 22:04:38
 * @FilePath: /hrsass-admin/src/router/index.ts
 * @Description: 
 * 
 */
import { createRouter,createMemoryHistory } from "vue-router";

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/login',
      redirect: '/'
    },
    {
      path: 'index',
      component: () => import('../views/Index.vue')
    }
  ]
});

export default router;