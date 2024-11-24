/*
 * @Author: dqr
 * @Date: 2024-11-24 21:20:38
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-24 21:57:17
 * @FilePath: /hrsass-admin/serve/routes/admin.js
 * @Description: 
 * 
 */
const express = require('express');
const router = express.Router();

/* GET home page. */
router.post('/login', function(req, res, next) {
  console.log("🚀 ~ router.get ~ req:", req.body)
});

module.exports = router;
