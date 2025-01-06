/*
 * @Author: dqr
 * @Date: 2024-11-29 11:03:11
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-01-06 15:27:59
 * @FilePath: /hrsass-admin/view/src/utils/cache.ts
 * @Description: 
 * 
 */
export const setSessionCache = (key: string, value: unknown) => {
  sessionStorage.setItem(key, JSON.stringify(value))
}
export const getSessionCache = (key: string) => {
  const value = sessionStorage.getItem(key)
  return value ? JSON.parse(value) : null
}
export const removeSessionCache = (key: string) => {
  sessionStorage.removeItem(key)
}
export const clearSessionCache = () => {
  sessionStorage.clear()
}
export const setLocalCache = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value))
}
export const getLocalCache = (key: string) => {
  const value = localStorage.getItem(key)
  return value ? JSON.parse(value) : null
} 
export const removeLocalCache = (key: string) => {
  localStorage.removeItem(key)
}
export const clearLocalCache = () => {
  localStorage.clear()
}