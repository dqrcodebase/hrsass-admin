/*
 * @Author: dqr
 * @Date: 2024-12-03 09:52:43
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-12-25 21:00:38
 * @FilePath: /hrsass-admin/serve/routes/role.js
 * @Description: 
 * 
 */
const express = require('express');
const router = express.Router();
const {getRoleListService,addRoleService,updateRoleService,removesRoleService} = require('../service/roleService');
const {formatResponse,formatResponseList} = require('../utils/tool');

// 添加角色
router.post('/add', async function(req, res, next) {
  const result = await addRoleService(req.body);
  res.send(formatResponse( result));
});

// 分页获取角色列表
router.post('/list/:page/:limit', async function(req, res, next) {
  console.log("🚀 ~ router.post ~ req:333333322222", req.body)
  const {result,count} = await getRoleListService(req.params,req.body);
  res.send(formatResponseList( result,count));
});

// 删除角色
router.delete('/removes', async function(req, res, next) {
  await removesRoleService(req.body);
  res.send(formatResponse());
});

// 更新角色
router.put('/update', async function(req, res, next) {
  const result = await updateRoleService(req.body);
  res.send(formatResponse(result));
});



module.exports = router;