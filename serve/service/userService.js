const {addUserDao,getUserListDao,updateUserDao,removesUserDao} = require('../dao/userDao');

// 添加用户
module.exports.addUserService = async function (userInfo) {
  const params = {
    userName: userInfo.userName,
    realName: userInfo.realName,
    password: userInfo.password,
    roleId: userInfo.roleId,
    mobile: userInfo.mobile,
    avatar: userInfo.avatar
  }
  const result = await addUserDao(params);
  return result;
}

// 分页获取用户列表
module.exports.getUserListService = async function (page, query) {
  console.log("🚀 ~ page:", page)
  const pageParams = {
    offset: Number(page.page) * Number(page.limit),
    limit: Number(page.limit)
  }
  return await getUserListDao(pageParams, query);
}

// 删除用户
module.exports.removesUserService = async function (ids) {
  await removesUserDao(ids);
}

// 更新用户
module.exports.updateUserService = async function (userInfo) {
  await updateUserDao(userInfo);
}