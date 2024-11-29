/*
 * @Author: dqr
 * @Date: 2024-11-18 20:21:49
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-28 15:24:36
 * @FilePath: /hrsass-admin/view/src/api/admin.ts
 * @Description: 
 * 
 */
import { $post, $get } from "@/utils/request";
import { LoginParams } from './model/adminModel'
import {Result} from './model/indexModel'

enum Api {
  login = '/api/admin/login'
}


export async function loginApi(params: LoginParams) {
  return await $post(Api.login, params)
};

export async function getUserInfoApi(): Promise<Result> {
  let res = await $get('Admin/GetOne')
  return res
}