const TOKEN_KEY = 'token-key'

export const saveToken = (token: string) => {
  console.log('saveToken으로 들어온 토큰 확인', token)

  localStorage.setItem(TOKEN_KEY, token)
}

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}

export const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY)
}
