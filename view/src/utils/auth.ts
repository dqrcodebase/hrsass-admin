/*
 * @Author: dqr
 * @Date: 2024-11-28 15:35:51
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-01-24 16:48:30
 * @FilePath: /hrsass-admin/view/src/utils/auth.ts
 * @Description: 
 * 
 */
import Cookies from "js-cookie";

export const TokenKey = "authorized-token";

export function setToken( value) {
  Cookies.set(TokenKey, `${value}`)
}

export function getToken() {
  return Cookies.get(TokenKey)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}