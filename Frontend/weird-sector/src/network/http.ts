import axios, { AxiosInstance, AxiosResponse } from 'axios'

const createHttpClient = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  instance.interceptors.response.use(
    (response: AxiosResponse) => response.data,
    (error) => {
      const { response } = error

      const message =
        response && response.data && response.data.message
          ? response.data.message
          : 'Something went wrong!'

      return Promise.reject(new Error(message))
    }
  )

  return instance
}

const httpClient = createHttpClient()

export default httpClient
