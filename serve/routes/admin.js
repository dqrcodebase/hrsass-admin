/*
 * @Author: dqr
 * @Date: 2024-11-24 21:20:38
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-12-02 15:55:58
 * @FilePath: /hrsass-admin/serve/routes/admin.js
 * @Description: 
 * 
 */
const express = require('express');
const router = express.Router();

const {loginService,updateAdminService,getAdminService} = require('../service/adminService');
const {formatResponse, analysisToken} = require('../utils/tool');
const {ValidationError} = require('../utils/errors');
var  jwt  =  require ( "express-jwt" ) ; 

// 登录接口
router.post('/login', async function(req, res, next) {
  // 首先应该有验证码验证
  if(!req.body.captcha || req.body.captcha.toLowerCase() !== req.session.captcha.toLowerCase()){
    // 验证码错误
    throw new ValidationError('验证码错误');
  }
  const result = await loginService(req.body);
  if(result && result.token) {
    res.setHeader('Authorization', result.token);
    // res.setHeader('set-cookie', `token=${result.token};path=/;max-age=${60*60*24*7}`);
    res.send(formatResponse( result));
  } else {
    res.send(formatResponse(result,9999, '用户名或密码错误', false));
  }

});
// 恢复登陆状态
router.get('/whoami', async function(req, res, next) {
  // 从请求头中获取token
  const token = analysisToken(req.get('Authorization'));
  console.log("🚀 ~ router.get ~ token:", token)
  // 解析token,还原成用户信息
  res.send(formatResponse({
    id: token.id,
    loginName: token.loginName,
    name: token.name
  }));
  
});
router.put('/',async function(req,res,next){
  res.send(await updateAdminService(req.body));
})
router.get('/',async function(req,res,next){
  console.log("🚀 ~ router.get ~ req:111111111", req.auth)
  // req.auth是解码后的负载对象
  res.send(await getAdminService(req.auth));
})

module.exports = router;
