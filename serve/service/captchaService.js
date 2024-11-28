const svgCaptcha = require('svg-captcha');

module.exports.getCaptchaService = async function () {
  const captcha = svgCaptcha.create({
    size: 4,
    ignoreChars: '0o1i',
    noise: 2,
    color: true,
    background: '#f0f0f0'
  });
  return captcha
}