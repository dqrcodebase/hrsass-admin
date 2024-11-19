/*
 * @Author: dqr
 * @Date: 2024-11-09 16:58:11
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-19 22:35:51
 * @FilePath: /hrsass-admin/src/main.ts
 * @Description: 
 * 
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'
import {createPinia} from 'pinia'
createApp(App).use(router).use(ElementPlus).use(createPinia).mount('#app')
