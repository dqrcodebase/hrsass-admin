/*
 * @Author: dqr
 * @Date: 2024-11-09 16:58:11
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-29 15:06:58
 * @FilePath: /hrsass-admin/view/src/main.ts
 * @Description: 
 * 
 */
import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入重置样式
import "@/styles/reset.scss";
// 导入公共样式
import "@/styles/index.scss";
// 引入tailwindcss 
import '@/styles/tailwindcss.css'

import router from './router'
import {createPinia} from 'pinia'
createApp(App).use(router).use(ElementPlus).use(createPinia()).mount('#app')
