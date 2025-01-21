
import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { setupStore } from '@/store'
// 引入重置样式
import "@/styles/reset.scss";
// 导入公共样式
import "@/styles/index.scss";
// 引入tailwindcss 
import '@/styles/tailwindcss.css'

import {setupRouter} from './router'


async function bootstrap() {
  const app = createApp(App)
  setupStore(app)
  setupRouter(app)
  app.use(ElementPlus)
  app.mount('#app')

}

bootstrap()
