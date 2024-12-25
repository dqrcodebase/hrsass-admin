/*
 * @Author: dqr
 * @Date: 2024-12-11 21:55:18
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-12-25 20:57:28
 * @FilePath: /hrsass-admin/serve/routes/upload.js
 * @Description: 
 * 
 */
 const exporess = require('express');
 const multer = require('multer');
 const {UploadError} = require('../utils/errors');
 const {uploading,formatResponse} = require('../utils/tool');
  const router = exporess.Router();

  router.post('/',async function (req,res,next) {
    uploading.single('file')(req,res,async function (err) {
      if(err instanceof multer.MulterError){
        next(new UploadError("上传文件失败，请检查文件的大小，控制在 2MB 以内"));
    } else {
        const path = "/static/uploads/" + req.file.filename;
        res.send(formatResponse(0, "", path));
    }
    })
  })