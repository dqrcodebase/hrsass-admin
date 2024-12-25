/*
 * @Author: dqr
 * @Date: 2024-11-28 21:59:44
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-28 22:01:42
 * @FilePath: /hrsass-admin/serve/service/bannerService.js
 * @Description: 
 * 
 */
const { findBannerDao } = require('../dao/bannerDao')
const { handleDataPattern, formatResponse } = require('../utils/tool')

module.exports.findBannerService = async function () {
    const data =  handleDataPattern(await findBannerDao())
    return formatResponse( data)
}
module.exports.updateBannerService = async function (bannerArr) {
  const data = await updateBannerDao(bannerArr)
  return await findBannerDao
}