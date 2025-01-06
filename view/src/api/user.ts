/*
 * @Author: dqr
 * @Date: 2024-12-05 16:52:08
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-01-06 15:19:20
 * @FilePath: /hrsass-admin/view/src/api/user.ts
 * @Description: 
 * 
 */
import { $post,$put ,$delete} from "../utils/request";
import { PageParams } from "./model/indexModel";
import {UserParams} from './model/userModel'

enum Api {
  userList = '/api/user/list',
  userAdd = '/api/user/add',
  userUpdate = '/api/user/update',
  userRemoves = '/api/user/removes'
}

export const addUserApi = async (params: UserParams) => {
  return await $post(Api.userAdd, params)
}

export const getUserListApi = async ({ page = 0, limit = 20 }: PageParams) => {
  return await $post(`${Api.userList}/${page}/${limit}`)
}

export const updateUserApi = async (params: UserParams) => {
  return await $put(Api.userUpdate, params)
}

export const removesUserApi = async (id: Array<number>) => {
  return await $delete(Api.userRemoves,  id)
}