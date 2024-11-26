/*
 * @Author: dqr
 * @Date: 2024-11-12 22:02:59
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-26 14:57:18
 * @FilePath: /hrsass-admin/view/src/router/index.ts
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
      component: () => import('../views/Index.vue'),
      children: [
        {
          path: '',
          meta: {title: '首页'},
          component: () => import('../views/Home.vue')
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  // 路由跳转时添加动画效果
  NProgress.start();
  next();
})

router.afterEach((to, from) => {  
  if(to.meta && to.meta.title) {
    document.title = to.meta.title as string;
  }
})

export default router;