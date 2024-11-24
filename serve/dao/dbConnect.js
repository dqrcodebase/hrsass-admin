/*
 * @Author: dqr
 * @Date: 2024-11-24 15:18:12
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-24 16:27:53
 * @FilePath: /hrsass-admin/serve/dao/dbConnect.js
 * @Description: 
 * 
 */
// 该文件负责连接数据库
const { Sequelize } = require('sequelize');

// 创建数据库连接
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  logging: false
});

// 测试连接
(async function() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})()