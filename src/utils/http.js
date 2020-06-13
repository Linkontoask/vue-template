import Axios from 'axios'
import { errorMsg } from '@/utils/message'

const service = Axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 12000
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    if (response.data) {
      if (response.data.code !== 200) {
        errorMsg(response.data.message)
        throw 'The server returned an exception, manually interrupt execution, message: ' +
          response.data.message
      }
      return response
    } else {
      new Error('Network Error: http code ' + response.status)
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export const get = async (url, params) => {
  const { data } = await service.get(url, {
    params
  })

  return data
}

export const post = (url, data) => {
  return service.post(url, data)
}

export const del = (url, params) => {
  return service.delete(url, {
    params
  })
}

export const put = (url, params) => {
  return service.put(url, params)
}

export default service
