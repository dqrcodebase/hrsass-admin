import {createPermissionGuard} from './permissionGuard'


export function setupRouterGuards(router) {
  createPermissionGuard(router)
}