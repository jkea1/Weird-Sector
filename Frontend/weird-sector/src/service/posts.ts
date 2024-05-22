import { getToken } from '../db/token'
import httpClient from '../network/http'

export const getHeaders = (): Record<string, string> => {
  const token = getToken()

  return {
    Authorization: `Bearer ${token}`,
  }
}

export const getPosts = async (category?: string): Promise<any> => {
  const query = category ? `?category=${category}` : ''

  const response = await httpClient.get(`/posts${query}`)

  return response
}

export const getPost = async (id?: string): Promise<any> => {
  const response = await httpClient.get(`/posts/${id}`)

  console.log('res', response)

  return response
}

// const createPost = async (text: string): Promise<any> => {
//   const config: AxiosRequestConfig = {
//     method: 'POST',
//     headers: getHeaders(),
//   }

//   return http.post(
//     `/tweets`,
//     { text, username: 'ellie', name: 'Ellie' },
//     config
//   )
// }

// const deletePost = async (postId: string): Promise<any> => {
//   const config: AxiosRequestConfig = {
//     method: 'DELETE',
//     headers: getHeaders(),
//   }

//   return http.delete(`/tweets/${postId}`, config)
// }

// const updatePost = async (postId: string, text: string): Promise<any> => {
//   const config: AxiosRequestConfig = {
//     method: 'PUT',
//     headers: getHeaders(),
//   }

//   return http.put(`/posts/${postId}`, { text }, config)
// }
