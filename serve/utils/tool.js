/*
 * @Author: dqr
 * @Date: 2024-11-27 22:23:53
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-01-07 09:06:37
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
// 设置上传文件的引擎
const storage = multer.diskStorage({
  // 文件存储的位置
  destination: function (req, file, cb) {
      cb(null, __dirname + '/../public/static/uploads');
  },
  // 上传到服务器的文件，文件名要做单独处理
  filename: function (req, file, cb) {
      // 获取文件名
      const basename = path.basename(file.originalname, path.extname(file.originalname));
      // 获取后缀名
      const extname = path.extname(file.originalname);
      // 构建新的名字
      const newName = basename + new Date().getTime() + Math.floor(Math.random() * 9000 + 1000) + extname;
      cb(null, newName);
  }
})

module.exports.uploading = multer({
  storage: storage,
  limits: {
    fileSize: 2000000,
    files: 1
  }
})