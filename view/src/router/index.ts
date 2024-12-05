/*
 * @Author: dqr
 * @Date: 2024-11-12 22:02:59
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-12-04 09:06:42
 * @FilePath: /hrsass-admin/view/src/router/index.ts
 * @Description: 
 * 
 */
import { createRouter, createWebHistory } from "vue-router";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getToken } from '@/utils/auth'
import { useUserWithOut } from '@/store/modules/user'
import { el } from "element-plus/es/locale";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Index.vue'),
      meta: { title: '首页' },
    },
    {
      path: '/index',
      redirect: '/'
    },
    {
      path: '/login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/index',
      component: () => import('@/views/Index.vue'),
      children: [
        {
          path: '',
          meta: { title: '首页' },
          component: () => import('@/views/Home.vue')
        },
        {
          path: '/mail',
          meta: { title: '邮件' },
          component: () => import('@/views/Mail.vue')
        },
        {
          path: '/role',
          meta: { title: '角色管理' },
          component: () => import('@/views/user/Role.vue')
        },
        {
          path: '/user',
          meta: { title: '用户管理' },
          component: () => import('@/views/user/User.vue')
        }
      ]
    },

  ]
});

router.beforeEach((to, from, next) => {
  console.log("🚀 ~ router.beforeEach ~ to:", to)
  const token = getToken();
  if (token) {
    if (to.path === '/login') {
      next({ path: '/' });
    } else {
      next();
    }
    const userStore = useUserWithOut();
    userStore.getUserInfo();

  }else {
    if (to.path === '/login') {
      next();
    } else {
      next({ path: '/login' });
    }
  }
  // 路由跳转时添加动画效果
  NProgress.start();
})

router.afterEach((to, from) => {
  console.log("🚀 ~ router.afterEach ~ to:", to)
  NProgress.done();
  if (to.meta && to.meta.title) {
    document.title = to.meta.title as string;
  }
})

export default router;