/*
 * @Author: dqr
 * @Date: 2024-11-27 22:23:53
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-12-02 14:26:36
 * @FilePath: /hrsass-admin/serve/utils/tool.js
 * @Description: 
 * 
 */
const jwt = require('jsonwebtoken');

const formatResponse = function ( code = 200, msg = 'ok',data,successfully = true) {
  return {
    code: code.toString(),
    data,
    msg,
    successfully
  }
}
module.exports.formatResponse = formatResponse
module.exports.formatResponseList = function ( code = 200, msg = 'ok',data,count,successfully = true) {
  const result = {
    ...formatResponse(code,msg,data,successfully),
    data: {
      content: data,
      totalElements: count
    }
  }
  return result
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

// 处理数据类型响应数据
module.exports.handleDataPattern = function (data) {
  const arr = []
  for(const key in data){
    arr.push(data[key])
  }
  return arr
}