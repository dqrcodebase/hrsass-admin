/*
 * @Author: dqr
 * @Date: 2024-11-24 21:07:20
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-12-04 10:10:41
 * @FilePath: /hrsass-admin/serve/dao/db.js
 * @Description: 
 * 
 */
// 该文件负责对数据库进行一个初始化操作
const sequelize = require('./dbConnect'); // 数据库连接实例
const md5 = require('md5'); // 引入md5加密
const adminModel = require('./model/adminModel'); // 引入模型
const bannerModel = require('./model/bannerModel');
const userModel = require('./model/userModel');
const roleModel = require('./model/roleModel');

// 同步数据库
(async () => {

    // 建立表关系
    userModel.belongsTo(roleModel, {
      foreignKey: 'roleId',
      targetKey: 'id'
    })
    roleModel.hasMany(userModel, {
      foreignKey: 'roleId',
      sourceKey: 'id'
    })
    // 同步表关系要在建立表关系之后,才会自动添加外键
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
      loginName: 'admin',
      name: '超级管理员',
      loginPwd: md5(md5('123456'))
    })
    console.log('初始化数据成功adminModel')
  }
  const bannerCount = await bannerModel.count()
  if(!bannerCount){
    // 如果没有数据,则需要初始化数据
    // 初始化数据
    await bannerModel.bulkCreate([{
      "midImg": "/static/images/bg1_mid.jpg",
      "bigImg": "/static/images/bg1_big.jpg",
      "title": "塞尔达旷野之息",
      "description": "2017年年度游戏，期待续作"
  }, {
      "midImg": "/static/images/bg2_mid.jpg",
      "bigImg": "/static/images/bg2_big.jpg",
      "title": "塞尔达四英杰",
      "description": "四英杰里面你最喜欢的又是谁呢"
  }, {
      "midImg": "/static/images/bg3_mid.jpg",
      "bigImg": "/static/images/bg3_big.jpeg",
      "title": "日本街道",
      "description": "动漫中经常出现的日本农村街道，一份独特的恬静"
  }])
    console.log('初始化数据成功bannerModel')
  }
  const roleCount = await roleModel.count()
  if(!roleCount){
    // 如果没有数据,则需要初始化数据
    // 初始化100条数据
    const roleList = []
    for(let i = 0; i < 100; i++) {
      roleList.push({
        roleName: `角色${i}`,
        roleDesc: `描述${i}`,
        roleCode: `code${i}`
      })
    }
    await roleModel.bulkCreate(roleList)
    console.log('初始化数据成功roleModel')
  }
  const userCount = await userModel.count()
  if(!userCount){
    await userModel.create({
      userName: 'admin',
      realName: '超级管理员',
      password: md5(md5('123456')),
      roleId: 1,
      mobile: '18888888888',
      avatar: '/static/images/avatar.jpg'
    })
  }

  console.log('数据库同步成功')
})();