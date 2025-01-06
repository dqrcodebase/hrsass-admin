/*
 * @Author: dqr
 * @Date: 2024-11-21 22:16:31
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-01-06 15:03:18
 * @FilePath: /hrsass-admin/view/src/api/role.ts
 * @Description: 
 * 
 */
import { $post,$put ,$delete} from "../utils/request";
import { PageParams } from "./model/indexModel";
import { RoleParams } from "./model/roleModel";
enum Api {
  roleList = '/api/role/list',
  roleAdd = '/api/role/add',
  roleUpdate = '/api/role/update',
  roleRemoves = '/api/role/removes'
}
// 新增角色
export const addRoleApi = async (params: RoleParams) => {
  return await $post(Api.roleAdd, params)
}

// page给一个默认值1，limit给一个默认值10
export const getRoleListApi = async ({ page = 0, limit = 20 }: PageParams) => {
  return await $post(`${Api.roleList}/${page}/${limit}`)
}

export const updateRoleApi = async (params: RoleParams) => {
  return await $put(Api.roleUpdate, params)
}

export const removesRoleApi = async (id: Array<number>) => {
  return await $delete(Api.roleRemoves,  id)
}