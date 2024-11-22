/*
 * @Author: dqr
 * @Date: 2024-11-12 22:02:59
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-11-21 22:15:09
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
  if(to.mate && to.meta.title) {
    document.title = to.meta.title;
  }
})

export default router;