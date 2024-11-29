/*
 * @Author: dqr
 * @Date: 2024-11-28 21:35:08
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-29 11:22:22
 * @FilePath: /hrsass-admin/serve/routes/captcha.js
 * @Description: 
 * 
 */
const express = require('express');
const router = express.Router();
const {getCaptchaService} = require('../service/captchaService');
const {formatResponse} = require('../utils/tool');


// 生成验证码
router.post('/', async function(req, res, next) {
  const captcha = await getCaptchaService();
  req.session.captcha = captcha.text;
  // 设置响应头
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(formatResponse(200, 'ok',captcha.data));
});

module.exports = router;