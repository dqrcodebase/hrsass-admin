/*
 * @Author: dqr
 * @Date: 2024-11-28 15:35:51
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-28 15:37:41
 * @FilePath: /hrsass-admin/view/src/utils/auth.ts
 * @Description: 
 * 
 */
import Cookies from "js-cookie";
export function setAuthCache(key, value) {
  Cookies.set(key, value)
}
export function getAuthCache(key) {
  return Cookies.get(key)
}