/*
 * @Author: dqr
 * @Date: 2024-12-03 09:49:48
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-12-04 09:13:05
 * @FilePath: /hrsass-admin/serve/service/roleService.js
 * @Description: 
 * 
 */
const {getRoleListDao,addRoleDao,removesRoleDao,updateRoleDao} = require('../dao/roleDao');

// 添加角色
module.exports.addRoleService = async function (roleInfo) {
  const params = {
    roleName: roleInfo.roleName,
    roleDesc: roleInfo.roleDesc
  }
  const result = await addRoleDao(params);
  return result;
}

// 分页获取角色列表
module.exports.getRoleListService = async function (page, query) {
  console.log("🚀 ~ page:", page)
  const pageParams = {
    offset: Number(page.page) * Number(page.limit),
    limit: Number(page.limit)
  }
  return await getRoleListDao(pageParams, query);
}

// 删除角色
module.exports.removesRoleService = async function (ids) {
  await removesRoleDao(ids);
}

// 更新角色
module.exports.updateRoleService = async function (roleInfo) {
  await updateRoleDao(roleInfo);
}