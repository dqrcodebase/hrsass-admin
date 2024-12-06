/*
 * @Author: dqr
 * @Date: 2024-12-06 15:18:54
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-12-06 16:44:25
 * @FilePath: /hrsass-admin/view/stylelint.config.js
 * @Description: 
 * 
 */
/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-prettier-scss"
  ],
  overrides: [
    {
      files: ["**/*.(css|html|vue)"],
      customSyntax: "postcss-html"
    },
  ]
}