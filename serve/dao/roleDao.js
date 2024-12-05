/*
 * @Author: dqr
 * @Date: 2024-12-03 09:43:43
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-12-03 16:41:04
 * @FilePath: /hrsass-admin/serve/dao/roleDao.js
 * @Description: 
 * 
 */
const roleModel = require('./model/roleModel');

module.exports.addRoleDao = async function (roleInfo) {
  const result = await roleModel.create(roleInfo);
  const incrementResult = await result.increment('roleCode');
  return incrementResult;
}

module.exports.getRoleListDao = async function (pageParams) {
  const result = await roleModel.findAll(
    {
      ...pageParams,
    }
  );
  const { count } = await roleModel.findAndCountAll();
  return {result,count};
}

// 更新角色
module.exports.updateRoleDao = async function (roleInfo) {
  await roleModel.update(roleInfo, {
    where: {
      id: roleInfo.id
    }
  });
}

// 删除角色
module.exports.removesRoleDao = async function (ids) {
  await roleModel.destroy({
    where: {
      id: ids
    }
  })
}