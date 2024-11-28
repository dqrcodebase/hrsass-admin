const router = express.Router();
const express = require('express');
const {getCaptchaService} = require('../service/captchaService');


// 生成验证码
router.post('/', async function(req, res, next) {
  const captcha = await getCaptchaService();
  req.session.captcha = captcha.text;
  // 设置响应头
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(captcha.data);
});

module.exports = router;