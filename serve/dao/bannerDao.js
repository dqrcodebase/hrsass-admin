/*
 * @Author: dqr
 * @Date: 2024-11-28 21:59:57
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-29 10:11:12
 * @FilePath: /hrsass-admin/serve/dao/bannerDao.js
 * @Description: 
 * 
 */
const bannerModel = require("./model/bannerModel");

module.exports.findBannerDao= async function(){
    return await Banner.find();
}

module.exports.updateBannerDao = async function(bannerAee){
  // 将表的记录全部删除
  await bannerModel.destroy({
    truncate: true
  })
  // await bannerModel.
}