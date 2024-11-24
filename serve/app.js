/*
 * @Author: dqr
 * @Date: 2024-11-24 15:04:21
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-24 21:56:54
 * @FilePath: /hrsass-admin/serve/app.js
 * @Description: 
 * 
 */
// 引包
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 引入路由
const adminRouter = require('./routes/admin');

// 默认读取项目根目录下的.env文件
require('dotenv').config();
// 引入数据库连接
require('./dao/db');


// 创建服务器实例
var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 使用路由中间件
app.use('/api/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// 错误处理,一旦发生了错误,就会调用这个中间件
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;