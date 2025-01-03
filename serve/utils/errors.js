/*
 * @Author: dqr
 * @Date: 2024-11-24 16:11:44
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-12-02 14:27:03
 * @FilePath: /hrsass-admin/serve/utils/errors.js
 * @Description: 
 * 
 */

// 自定义错误
// 当错误发生时，我们捕获到发生的错误,然后抛出我们自定义的错误

const { formatResponse } = require('./tool');

/**
 * 业务处理错误基类
 */

class ServiceError extends Error {
  /**
   * 
   * @param {*} message 错误信息
   * @param {*} code 错误的消息码
   */
  constructor(code, message) {
    super(message);
    this.code = code;
    this.message = message;
  }

  // 方法
  // 将错误信息转换为JSON格式
  toResponseJSON() {
    return formatResponse('',this.code, this.message,false);
  }
}

// 文件上传错误
exports.UploadError = class extends ServiceError {
  constructor(message) {
    super(414, message);
  }
}

// 禁止访问错误
exports.ForbiddenError = class extends ServiceError {
  constructor(message) {
    super(401, message);
  }
}

// 验证错误
exports.ValidationError = class extends ServiceError {
  constructor(message) {
    super(406, message);
  }
}

// 无资源错误
exports.NotFoundError = class extends ServiceError {
  constructor() {
    super('无资源', 406);
  }
}

// 未知错误
exports.UnknownError = class extends ServiceError {
  constructor() {
    super('未知错误', 500);
  }
}

module.exports.ServiceError = ServiceError;