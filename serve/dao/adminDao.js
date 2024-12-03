/*
 * @Author: dqr
 * @Date: 2024-11-27 22:01:09
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-28 22:32:27
 * @FilePath: /hrsass-admin/serve/dao/adminDao.js
 * @Description: 
 * 
 */
// 这一层负责和数据库交互
const adminModel = require('./model/adminModel');

module.exports.loginDao = async function (loginInfo) {
  // 接下来就是需要连接数据库,查询数据
 const result = await adminModel.findOne({
    where: {
      loginName: loginInfo.loginName,
      loginPwd: loginInfo.loginPwd
    }
  })
  return result
}

module.exports.updateAdminDao = async function (userInfo) {
  // 更新用户信息
  const result = await adminModel.update(userInfo,{
    where: {
      loginName: userInfo.loginName,
    }
  })
  return result
}
