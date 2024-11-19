/*
 * @Author: dqr
 * @Date: 2024-11-12 22:02:59
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-19 22:33:15
 * @FilePath: /hrsass-admin/src/router/index.ts
 * @Description: 
 * 
 */
import { createRouter,createMemoryHistory } from "vue-router";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

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
      path: '/index',
      component: () => import('../views/Index.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
  // 路由跳转时添加动画效果
  NProgress.start();
  next();
})

router.afterEach((to, from) => {  
  if(to.mate && to.meta.title) {
    document.title = to.meta.title;
  }
})

export default router;