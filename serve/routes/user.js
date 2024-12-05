/*
 * @Author: dqr
 * @Date: 2024-12-04 09:15:14
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-12-04 09:28:48
 * @FilePath: /hrsass-admin/serve/routes/user.js
 * @Description: 
 * 
 */
const express = require('express');
const router = express.Router();
const {getUserListService,addUserService,updateUserService,removesUserService} = require('../service/userService');
const {formatResponse,formatResponseList} = require('../utils/tool');

// 添加用户
router.post('/add', async function(req, res, next) {
  const result = await addUserService(req.body);
  res.send(formatResponse(200, 'success', result));
});

// 分页获取用户列表
router.post('/list/:page/:limit', async function(req, res, next) {
  console.log("🚀 ~ router.post ~ req:333333322222", req.body)
  const {result,count} = await getUserListService(req.params,req.body);
  res.send(formatResponseList(200, 'success', result,count));
});

// 删除用户
router.delete('/removes', async function(req, res, next) {
  await removesUserService(req.body);
  res.send(formatResponse(200, 'success'));
});

// 更新用户
router.put('/update', async function(req, res, next) {
  const result = await updateUserService(req.body);
  res.send(formatResponse(200, 'success',result));
});

module.exports = router;