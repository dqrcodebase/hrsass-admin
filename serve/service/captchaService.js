/*
 * @Author: dqr
 * @Date: 2024-11-28 21:36:41
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-29 11:31:12
 * @FilePath: /hrsass-admin/serve/service/captchaService.js
 * @Description: 
 * 
 */
const svgCaptcha = require('svg-captcha');

module.exports.getCaptchaService = async function () {
  const captcha = svgCaptcha.create({
    size: 4,
    ignoreChars: '0o1i',
    noise: 2,
    color: true,
    background: '#f0f0f0',
    width: 120,
    height: 32,
    fontSize: 36
  });
  return captcha
}