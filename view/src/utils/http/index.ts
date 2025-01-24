/*
 * @Author: dqr
 * @Date: 2024-11-18 20:15:48
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-01-24 16:38:28
 * @FilePath: /hrsass-admin/view/src/utils/http/index.ts
 * @Description: 
 * 
 */
import axios from 'axios'
import { setupInterceptors } from './interceptors'


export function createAxios() {
  const defaultOptions = {
    baseURL: import.meta.env.VUE_APP_BASE_API,
    timeout: 12000,
  }
  const service = axios.create({
    ...defaultOptions
  })
  setupInterceptors(service)
  return service
}

const request = createAxios()


export const $get = async (url: string, params?: unknown) => {
  const { data } = await request.get(url, { params })
  return data
}

export const $post = async (url: string, params?: unknown) => {
  const { data } = await request.post(url, params)
  console.log("🚀 ~ const$post= ~ data:", data)
  return data
}

export const $put = async (url: string, params?: unknown) => {
  const { data } = await request.put(url, params)
  return data
}

export const $delete = async (url: string, params?: unknown) => {
  const { data } = await request.delete(url, { data: params })
  return data
}