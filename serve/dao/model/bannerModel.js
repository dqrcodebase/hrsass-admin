/*
 * @Author: dqr
 * @Date: 2024-11-28 21:52:27
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-28 21:53:35
 * @FilePath: /hrsass-admin/serve/dao/model/bannerModel.js
 * @Description: 
 * 
 */
const {DataTypes}  = require('sequelize')
const sequelize = require('../dbConnect')

module.exports = sequelize.define('Banner',{
  midImg: {
    type: DataTypes.STRING,
    allowNull: false
  },
  bigImg: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
}{
  freezeTableName: true,
  createdAt: false,
  updatedAt: false
}
)