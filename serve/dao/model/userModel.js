/*
 * @Author: dqr
 * @Date: 2024-12-04 09:09:55
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-12-04 10:31:01
 * @FilePath: /hrsass-admin/serve/dao/model/userModel.js
 * @Description: 
 * 
 */

const {DataTypes} = require('sequelize')
const sequelize = require('../dbConnect')

const User = sequelize.define('User', {
  userName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  realName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // 外键
    references: {
      model: 'Role',
      key: 'id'
    }
  },
  mobile: {
    type: DataTypes.STRING,
  },
  avatar: {
    type: DataTypes.STRING,
  },
}, {
  freezeTableName: true,
  createdAt: false,
  updatedAt: false
})

module.exports = User