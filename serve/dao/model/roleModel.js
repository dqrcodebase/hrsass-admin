/*
 * @Author: dqr
 * @Date: 2024-12-03 09:37:55
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-12-03 11:24:51
 * @FilePath: /hrsass-admin/serve/dao/model/roleModel.js
 * @Description: 
 * 
 */
const {DataTypes} = require('sequelize')
const sequelize = require('../dbConnect')

const Role = sequelize.define('Role', {
  roleName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  roleDesc: {
    type: DataTypes.STRING,
  },
  roleCode: {
    type: DataTypes.STRING,
  },
}, {
  freezeTableName: true,
  createdAt: false,
  updatedAt: false
})

module.exports = Role