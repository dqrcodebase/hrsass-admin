/*
 * @Author: dqr
 * @Date: 2024-11-24 16:11:44
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-25 11:20:51
 * @FilePath: /hrsass-admin/serve/utils/errors.js
 * @Description: 
 * 
 */

// 自定义错误
// 当错误发生时，我们捕获到发生的错误,然后抛出我们自定义的错误

/**
 * 业务处理错误基类
 */

class ServiceError extends Error {
  /**
   * 
   * @param {*} message 错误信息
   * @param {*} code 错误的消息码
   */
  constructor(message, code) {
    super(message);
    this.code = code;
  }

  // 方法
  toResponseJSON() {}
}

// 文件上传错误
exports.UploadError = class extends ServiceError {
  constructor(message) {
    super(message, 414);
  }
}

// 禁止访问错误
exports.ForbiddenError = class extends ServiceError {
  constructor(message) {
    super(message, 401);
  }
}

// 验证错误
exports.ValidationError = class extends ServiceError {
  constructor(message) {
    super(message, 406);
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