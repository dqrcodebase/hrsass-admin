import { Router } from 'vue-router'
import { getToken } from '@/utils/auth'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';


/** 路由白名单 */
const whiteList = ["/login"];

export function createPermissionGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    const token = getToken();

    if (!token) {
      if (whiteList.includes(to.path)) {
        next();
      } else {
        next({ path: 'login', query: { ...to.query, redirect: to.path } });
      }
    }

    if (token) {
      if (to.path === '/login') {
        next({ path: '/' });
      }else {
        next();
      }
    }

    // 路由跳转时添加动画效果
    NProgress.start();
  })

  router.afterEach((to) => {
    NProgress.done();
    if (to.meta && to.meta.title) {
      document.title = to.meta.title as string;
    }
  })

}

