export const  basicRoutes = [
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
        component: () => import('@/views/demo/mail/Mail.vue')
      },
      {
        path: '/role',
        meta: { title: '角色管理' },
        component: () => import('@/views/demo/user/Role.vue')
      },
      {
        path: '/user',
        meta: { title: '用户管理' },
        component: () => import('@/views/demo/user/User.vue')
      }
    ]
  },

]