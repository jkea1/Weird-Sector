import { getToken } from '../db/token'
import httpClient from '../network/http'

type postProp = {
  category: string | 'free'
  title: string
  text: string
  file?: string
  hashtag?: string
}

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

  return response
}

export const createPost = async ({
  category,
  title,
  text,
  file,
  hashtag,
}: postProp): Promise<any> => {
  const token = getToken()

  // const formData = new FormData()
  // formData.append('category', category)
  // formData.append('title', title)
  // formData.append('text', text)
  // if (file) {
  //   formData.append('file', file)
  // }
  // if (hashtag) {
  //   formData.append('hashtag', hashtag)
  // }

  const response = await httpClient.post(
    `/posts`,
    { category, title, text, file, hashtag },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return response
}

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
