export const setSessionCache = (key: string, value: any) => {
  sessionStorage.setItem(key, JSON.stringify(value))
}
export const getSessionCache = (key: string) => {
  const value = sessionStorage.getItem(key)
  return value ? JSON.parse(value) : null
}
export const removeSessionCache = (key: string) => {
  sessionStorage.removeItem(key)
}
export const clearSessionCache = () => {
  sessionStorage.clear()
}
export const setLocalCache = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}
export const getLocalCache = (key: string) => {
  const value = localStorage.getItem(key)
  return value ? JSON.parse(value) : null
} 