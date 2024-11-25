/*
 * @Author: dqr
 * @Date: 2024-11-09 16:58:11
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2024-11-24 21:57:41
 * @FilePath: /hrsass-admin/view/vite.config.ts
 * @Description: 
 * 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  // 配置路径别名
  resolve: {
    alias: {
      '@': '/src',
      '@api': '/src/api',
      '@assets': '/src/assets',
      '@components': '/src/components',
    }
  },
  plugins: [vue()],
  // 代理
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
