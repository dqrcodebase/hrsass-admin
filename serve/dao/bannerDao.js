const bannerModel = require("./model/bannerModel");

module.exports.findBannerDao= async function(){
    return await Banner.find();
}

module.exports.updateBannerDao = async function(bannerAee){
  // 将表的记录全部删除
  await bannerModel.destroy({
    truncate: true
  })
  await bannerModel.
}