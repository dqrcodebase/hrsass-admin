/*
 * @Author: dqr
 * @Date: 2024-11-21 22:16:31
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-26 16:48:12
 * @FilePath: /hrsass-admin/view/src/api/role.ts
 * @Description: 
 * 
 */
import {$get, $post} from "../utils/request";

export const $list = async () => {
  let res = await $get('Role/List2')
  return res
}