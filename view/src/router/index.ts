import { createRouter, createWebHistory } from "vue-router";

import { type Router } from 'vue-router'
import { basicRoutes } from './basicRoutes'
import { RouteRecordRaw } from 'vue-router'
import {setupRouterGuards} from './guards'

export const router: Router = createRouter({
  history: createWebHistory(),
  routes: basicRoutes as RouteRecordRaw[]
});


export async function setupRouter(app) {
  app.use(router)
  setupRouterGuards(router)
}
