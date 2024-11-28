/*
 * @Author: dqr
 * @Date: 2024-11-27 21:51:06
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-28 22:22:45
 * @FilePath: /hrsass-admin/serve/service/adminService.js
 * @Description: 
 * 
 */
// admin 模块的业务逻辑
const md5 = require('md5');
// 引入dao层
const { loginDao ,updateAdminDao} = require('../dao/adminDao');
const jwt = require('jsonwebtoken');
const { ValidationError } = require('sequelize');

// 登录业务逻辑
module.exports.loginService = async function (loginInfo) {
  console.log("🚀 ~ loginInfo:", loginInfo)
  if(!loginInfo.loginId || !loginInfo.loginPwd){
    return null
  }
  loginInfo.loginPwd = md5(loginInfo.loginPwd); // 进行密码加密
  // 接下来进行数据的验证,也就是查询该条数据在数据库中是否存在
  let data = await loginDao(loginInfo);
  if(data && data.dataValues){
    data = {
      id: data.dataValues.id,
      loginId: data.dataValues.loginId,
      name: data.dataValues.name,
    }
    if(loginInfo.remember){
      // 如果用户勾选了登录7天,那么remember里面有值的,将这个值赋值给period
     loginPeriod = parseInt(loginInfo.remember)
    }else{
      // 如果没有勾选,那么默认是1天
      loginPeriod = 1
    }
    // 生成token
    const token = jwt.sign(data,md5(process.env.JWT_SECRET),{
      expiresIn: 60*60*24*loginPeriod
    })
    return {
      token,
    }
  }
  return data
}

// 更新用户信息 
module.exports.updateAdminService = async function (userInfo) {
  // 根据用户id查询用户信息(使用旧密码)
  const adminInfo = await loginDao({
    loginId: userInfo.loginId,
    loginPwd: md5(userInfo.loginPwd)
  })
  if(adminInfo && adminInfo.dataValues){
    // 更新用户信息
    const result = await updateAdminDao({
      loginPwd: md5(userInfo.newPwd),
      name: userInfo.name,
      loginId: userInfo.loginId
    })
    return formatResponse(200, 'ok', result)
  }else {
    throw new ValidationError('旧密码错误')
  }
}