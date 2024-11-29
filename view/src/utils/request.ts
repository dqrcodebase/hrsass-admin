/*
 * @Author: dqr
 * @Date: 2024-11-18 20:15:48
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-29 10:59:30
 * @FilePath: /hrsass-admin/view/src/utils/request.ts
 * @Description: 
 * 
 */
import Axios from 'axios'
import { ElMessage } from 'element-plus'

const instance = Axios.create({
  baseURL: import.meta.env.VUE_APP_BASE_API,
  timeout: 30000,
  headers: { 'X-Custom-Header': 'foobar' }
})

instance.interceptors.request.use(function (config) {
  config.headers['token'] = sessionStorage.getItem('token')
  return config;
}, function (error) {
  console.log("🚀 ~ error:", error)
  return Promise.reject(error);
})

instance.interceptors.response.use(function (response) {
  console.log("🚀 ~ response:", response)
  const res = response.data
  let isRequestSuccess = true
  if (res && res.code) {
    switch (res.code) {
      case "0000":
        break;
      case "200":
        break;
      default:
        ElMessage.error(res.msg);
        isRequestSuccess = false
    }
  } 
  return isRequestSuccess ? res : Promise.reject(response)
}, function (error) {
  console.log("🚀 ~ error:", error)
  ElMessage.error(error);
  return Promise.reject(error)
})

export const $get = async (url: string, params?: any) => {
  let { data } = await instance.get(url, { params })
  return data
}

export const $post = async (url: string, params?: any) => {
  let { data } = await instance.post(url, params)
  return data
}