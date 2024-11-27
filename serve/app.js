/*
 * @Author: dqr
 * @Date: 2024-11-24 15:04:21
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-27 22:46:27
 * @FilePath: /hrsass-admin/serve/app.js
 * @Description: 
 * 
 */
// 引包
const  createError = require('http-errors');
const  express = require('express');
const  path = require('path');
const  cookieParser = require('cookie-parser');
const  logger = require('morgan');
const expressJwt = require('express-jwt');
const md5 = require('md5');
const {ForbiddenError} = require('./utils/errors');


// 默认读取项目根目录下的.env文件
require('dotenv').config();
// 引入数据库连接
require('./dao/db');
// 引入路由
const adminRouter = require('./routes/admin');

// 创建服务器实例
const  app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 配置验证token的中间件
app.use(expressJwt({
  secret: md5(process.env.JWT_SECRET), // 加密密钥
  algorithms: ['HS256'] // 新版的express-jwt需要指定加密算法
}).unless({
  path: [{
    url: '/api/admin/login',
    methods: ['POST']
  }] // 不需要验证token的接口
}))
// 使用路由中间件
app.use('/api/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// 错误处理,一旦发生了错误,就会调用这个中间件
// error handler
app.use(function(err, req, res, next) {
  console.log("🚀 ~ app.use ~ err:", err)
  if (err.name === 'UnauthorizedError') {
    // 说明token验证失败
    res.send(new ForbiddenError('未登录,获取token过期'));
  }
});

module.exports = app;
