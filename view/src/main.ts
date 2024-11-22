/*
 * @Author: dqr
 * @Date: 2024-11-09 16:58:11
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-11-21 22:00:25
 * @FilePath: /hrsass-admin/view/src/main.ts
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
