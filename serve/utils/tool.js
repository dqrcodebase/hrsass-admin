/*
 * @Author: dqr
 * @Date: 2024-11-27 22:23:53
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-12-25 21:03:11
 * @FilePath: /hrsass-admin/serve/utils/tool.js
 * @Description: 
 * 
 */
const jwt = require('jsonwebtoken');
const multer = require('multer');

const formatResponse = function (data = null, code = 200, msg = 'ok', successfully = true) {
  return {
    code: code.toString(),
    data,
    msg,
    successfully
  }
}
module.exports.formatResponse = formatResponse
module.exports.formatResponseList = function (data, count, code = 200, msg = 'ok', successfully = true) {
  const result = {
    ...formatResponse(data, code, msg, successfully),
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
  for (const key in data) {
    arr.push(data[key])
  }
  return arr
}

module.exports.uploading = multer({
  storage: storage,
  limits: {
    fileSize: 2000000,
    files: 1
  }
})