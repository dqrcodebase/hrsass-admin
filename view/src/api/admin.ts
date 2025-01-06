/*
 * @Author: dqr
 * @Date: 2024-11-18 20:21:49
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-01-06 15:23:08
 * @FilePath: /hrsass-admin/view/src/api/admin.ts
 * @Description: 
 * 
 */
import { $post, $get } from "@/utils/request";
import { LoginParams } from './model/adminModel'

enum Api {
  login = '/api/admin/login', // 登录
  getUserInfo = '/api/admin' // 获取用户信息
}


export async function loginApi(params: LoginParams) {
  return await $post(Api.login, params)
};

export async function getUserInfoApi(){
  return await $get(Api.getUserInfo)
}