/*
 * @Author: dqr
 * @Date: 2024-11-27 22:23:53
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-27 22:39:53
 * @FilePath: /hrsass-admin/serve/utils/tool.js
 * @Description: 
 * 
 */
const jwt = require('jsonwebtoken');

module.exports.formatResponse = function ( code = 200, msg = 'success',data,) {
  return {
    code,
    data,
    msg
  }
}

module.exports.analysisToken = function (token) {
  // 解析token
  try {
    const data = jwt.verify(token.split(' ')[1], md5(process.env.JWT_SECRET));
    return data
  } catch (error) {
    return null
  }
}