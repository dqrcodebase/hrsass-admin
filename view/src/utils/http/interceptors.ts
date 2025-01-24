import { getToken } from '../auth'
import { resolveResError } from './helpers'

export function setupInterceptors(instance) {
  instance.interceptors.request.use(reqResolve, reqReject)
  instance.interceptors.response.use(resResolve, resReject)
}

// 请求拦截器
function reqResolve(config) {
  // 处理不需要token的请求
  if (config.needToken === false) {
    return config
  }

  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
}
// 请求拦截器错误处理
function reqReject(error) {
  return Promise.reject(error)
}

// 响应拦截器
function resResolve(response) {
  const SUCCESS_CODES = ["0000", "200"]
  const { data, status, headers } = response
  if (headers['content-type']?.includes('json')) {
    if (SUCCESS_CODES.includes(data?.code)) {
      return Promise.resolve(data)
    }
    const code = data?.code ?? status
    return Promise.reject({ code, error: data ?? response })
  }
  return Promise.resolve(response)
}

// 响应拦截器错误处理
function resReject(error) {
  if (!error || !error.response) {
    const code = error?.code
    resolveResError(code)
    return Promise.reject({ code, error })
  }

  const { data, status } = error.response
  const code = data?.code ?? status

  resolveResError(code)
  return Promise.reject({ code, error: data ?? error })
}
