/*
 * @Author: dqr
 * @Date: 2024-11-24 21:07:20
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-24 21:15:47
 * @FilePath: /hrsass-admin/serve/dao/db.js
 * @Description: 
 * 
 */
// 该文件负责对数据库进行一个初始化操作
const sequelize = require('./dbConnect'); // 数据库连接实例
const adminModel = require('./model/adminModel'); // 引入模型
const md5 = require('md5'); // 引入md5加密

// 同步数据库
(async () => {
  // 将数据库模型和表同步
  await sequelize.sync({ 
    alter: true // 如果表不存在，则创建该表，如果已存在，则检查模型是否有任何更改
  });
  // 同步完成后,有些表需要初始化数据
  // 我们需要先判断表中是否有数据,如果没有数据,则需要初始化数据

  const adminCount = await adminModel.count()
  if(!adminCount) {
    // 如果没有数据,则需要初始化数据
    // 初始化数据
    await adminModel.create({
      loginId: 'admin',
      name: '超级管理员',
      loginPwd: md5('123456')
    })
    console.log('初始化数据成功')
  }
  console.log('数据库同步成功')
})();