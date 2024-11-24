/*
 * @Author: dqr
 * @Date: 2024-11-18 20:21:49
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-24 22:12:58
 * @FilePath: /hrsass-admin/view/src/api/admin.ts
 * @Description: 
 * 
 */
import { $post } from "../utils/request";
import { md5 } from 'md5js'
import { ElNotification } from 'element-plus'
import { LoginParams } from './model/adminModel'

enum Api {
  login = '/admin/login'
}


export async function loginApi (params: LoginParams) {
  // 对密码进行加密
  params.loginPwd = md5(params.loginPwd, 32)
  let { success, token } = await $post(Api.login, params)
  if (success) {
    ElNotification({
      title: '成功',
      message: success,
      type: 'success'
    })
    sessionStorage.setItem('token', token)
    return true
  } else {
    ElNotification({
      title: '通知',
      message: success,
      type: 'error'
    })
    return false
  }
};

export const $getOne = async (params: object) => {
  let res = await $get('Admin/GetOne', params)
  sessionStorage.setItem('token', token)
  return res
}