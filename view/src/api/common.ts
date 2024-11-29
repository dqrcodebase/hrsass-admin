/*
 * @Author: dqr
 * @Date: 2024-11-29 11:06:17
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-29 11:07:44
 * @FilePath: /hrsass-admin/view/src/api/common.ts
 * @Description: 
 * 
 */
import { $post } from "@/utils/request";

export async function getCaptchaApi() {
  return $post('/api/captcha')
}