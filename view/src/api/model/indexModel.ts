/*
 * @Author: dqr
 * @Date: 2024-11-28 15:12:44
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-01-06 15:26:38
 * @FilePath: /hrsass-admin/view/src/api/model/indexModel.ts
 * @Description: 
 * 
 */
 export interface Result {
  successfully: boolean;
  msg: string;
  code: string;
  data: unknown;
 }

 export interface PageParams {
  page: number;
  limit: number;
 }