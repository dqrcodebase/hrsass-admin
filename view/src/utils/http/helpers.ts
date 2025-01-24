
// 错误信息提示
export function resolveResError(code) {
  switch (code) {
    case 401:
      ElMessage({
        message: '登录已过期，请重新登录',
        type: 'error',
        plain: true,
      })
      break
    default:
      ElMessage({
        message: '网络错误，请稍后再试',
        type: 'error',
        plain: true,
      })
  }
}