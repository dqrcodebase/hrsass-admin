/*
 * @Author: dqr
 * @Date: 2024-11-24 21:02:51
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-12-03 09:41:56
 * @FilePath: /hrsass-admin/serve/dao/model/adminModel.js
 * @Description: 
 * 
 */
const {DataTypes}  = require('sequelize')
const sequelize = require('../dbConnect')

// 创建模型
const Admin = sequelize.define('Admin', {
  loginName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  loginPwd: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  // 是否默认加s
  freezeTableName: true,
  // 是否需要时间戳 createAt updateAt
  createdAt: false,
  updatedAt: false
})

module.exports = Admin