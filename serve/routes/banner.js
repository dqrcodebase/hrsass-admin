/*
 * @Author: dqr
 * @Date: 2024-11-28 21:56:24
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-28 22:07:58
 * @FilePath: /hrsass-admin/serve/routes/banner.js
 * @Description: 
 * 
 */
const express = require('express');
const { findBannerService,updateBannerService } = require('../service/bannerService');
const router = express.Router();

// 获取首页标语
router.get('/', async function(req, res, next) {
  res.send(await findBannerService());
})
// 设置首页标语
router.put('/', async function(req, res, next) {
  res.send(await updateBannerService(req.body));
})

module.exports = router;