/*
 * @Author: dqr
 * @Date: 2024-11-24 21:20:38
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-24 21:57:17
 * @FilePath: /hrsass-admin/serve/routes/admin.js
 * @Description: 
 * 
 */
const express = require('express');
const router = express.Router();

const {loginService} = require('../service/adminService');
const {formatResponse, analysisToken} = require('../utils/tool');

// 登录接口
router.post('/login', async function(req, res, next) {
  // 首先应该有验证码验证
  const result = await loginService(req.body);
  if(result.token) {
    res.setHeader('Authorization', result.token);
  }
  res.send(formatResponse(200, 'success', result));

});
// 恢复登陆状态
router.get('/whoami', async function(req, res, next) {
  // 从请求头中获取token
  const token = analysisToken(req.get('Authorization'));
  console.log("🚀 ~ router.get ~ token:", token)
  // 解析token,还原成用户信息
  res.send(formatResponse(200, '', {
    id: token.id,
    loginId: token.loginId,
    name: token.name
  }));
  
});

module.exports = router;
