import { createRouter, createWebHistory } from "vue-router";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getToken } from '@/utils/auth'
import { useUserWithOut } from '@/store/modules/user'
import { type Router } from 'vue-router'
import { basicRoutes } from './basicRoutes'
import { RouteRecordRaw } from 'vue-router'

const router: Router = createRouter({
  history: createWebHistory(),
  routes: basicRoutes as RouteRecordRaw[]
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

  } else {
    if (to.path === '/login') {
      next();
    } else {
      next({ path: '/login' });
    }
  }
  // 路由跳转时添加动画效果
  NProgress.start();
})

router.afterEach((to) => {
  console.log("🚀 ~ router.afterEach ~ to:", to)
  NProgress.done();
  if (to.meta && to.meta.title) {
    document.title = to.meta.title as string;
  }
})

export default router;