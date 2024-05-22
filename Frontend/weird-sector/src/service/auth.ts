import { saveToken } from '../db/token'
import httpClient from '../network/http'

type signupProps = {
  email: string
  password: string
  nickname: string
}

type loginProps = {
  email: string
  password: string
}

export const signup = async ({
  email,
  password,
  nickname,
}: signupProps): Promise<any> => {
  const response = await httpClient.post(`/auth/signup`, {
    email,
    password,
    nickname,
  })

  console.log('res', response.data)

  saveToken(response.data.token)

  return response
}

export const login = async ({ email, password }: loginProps): Promise<any> => {
  const response = await httpClient.post(`/auth/login`, {
    email,
    password,
  })

  console.log('res', response)

  saveToken(response.data)

  return response
}
