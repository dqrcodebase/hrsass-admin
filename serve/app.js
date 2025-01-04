/*
 * @Author: dqr
 * @Date: 2024-11-24 15:04:21
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-01-04 19:57:06
 * @FilePath: /hrsass-admin/serve/app.js
 * @Description: 
 * 
 */
// 引包
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { expressjwt } = require('express-jwt');
const md5 = require('md5');
const { ForbiddenError, ServiceError, UnknownError } = require('./utils/errors');
const session = require('express-session');
const notTokenApi = require('./utils/notTokenApi');

// 默认读取项目根目录下的.env文件
require('dotenv').config();
require('express-async-errors');
// 引入数据库连接
require('./dao/db');
// 引入路由
const adminRouter = require('./routes/admin');
const captchaRouter = require('./routes/captcha');
const bannerRouter = require('./routes/banner');
const roleRouter = require('./routes/role');
const userRouter = require('./routes/user');
const uploadRouter = require('./routes/upload');
var blogTypeRouter = require('./routes/blogType');
var blogRouter = require('./routes/blog');


// 创建服务器实例
const app = express();

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
}))


// 这个中间件是用来打印日志的
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// 解析cookie,这个中间件会解析请求头中的cookie,并且把解析后的结果挂载到req.cookies上
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 配置验证token的中间件
app.use(expressjwt({
  secret: md5(process.env.JWT_SECRET), // 加密密钥
  algorithms: ['HS256'] ,// 新版的express-jwt需要指定加密算法
}).unless({
  path: notTokenApi // 不需要验证token的接口
}),)
// 使用路由中间件
app.use('/api/admin', adminRouter);
app.use('/api/captcha', captchaRouter);
app.use('/api/banner', bannerRouter);
app.use('/api/role', roleRouter);
app.use('/api/user', userRouter);
app.use('/api/upload', uploadRouter);
app.use('/api/blogType', blogTypeRouter);
app.use('/api/blog', blogRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// 错误处理,一旦发生了错误,就会调用这个中间件
// error handler
app.use(function (err, req, res, next) {
  console.log("🚀 ~ app.use ~ err:", err)
  if (err.name === 'UnauthorizedError') {
    // 说明token验证失败
    res.send(new ForbiddenError('未登录,获取token过期').toResponseJSON());
  } else if (err instanceof ServiceError) {
    res.send(err.toResponseJSON())
  } else {
    res.send(new UnknownError().toResponseJSON())
  }
});

module.exports = app;
