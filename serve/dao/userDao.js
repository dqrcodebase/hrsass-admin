/*
 * @Author: dqr
 * @Date: 2024-12-04 09:11:33
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-12-04 09:25:06
 * @FilePath: /hrsass-admin/serve/dao/userDao.js
 * @Description: 
 * 
 */
const userModel = require('./model/userModel');

module.exports.addUserDao = async function (userInfo) {
  const result = await userModel.create(userInfo);
  return result;
}

module.exports.getUserListDao = async function (pageParams, query) {
  const result = await userModel.findAll(
    {
      ...pageParams,
      where: query
    }
  );
  const { count } = await userModel.findAndCountAll();
  return {result,count};
}

// 更新用户
module.exports.updateUserDao = async function (userInfo) {
  await userModel.update(userInfo, {
    where: {
      id: userInfo.id
    }
  });
}

// 删除用户
module.exports.removesUserDao = async function (ids) {
  await userModel.destroy({
    where: {
      id: ids
    }
  })
}