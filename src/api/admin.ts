/*
 * @Author: dqr
 * @Date: 2024-11-18 20:21:49
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-19 22:41:06
 * @FilePath: /hrsass-admin/src/api/admin.ts
 * @Description: 
 * 
 */
import { $post } from "../utils/request";
import {md5} from 'md5js'
import { ElNotification } from 'element-plus'

export const $Login = async (params: object) => {
  params.loginPwd = md5(md5(params.loginPwd,32).split('').reverse().json(''),32)
  let {success,token} = await $post('Admin/login', params)
  if(success){
    ElNotification({
      title: '成功',
      message: success,
      type: 'success'
    })
    sessionStorage.setItem('token',token)
    return true
  }else {
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
}