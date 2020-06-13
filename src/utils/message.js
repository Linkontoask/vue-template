import { Message } from 'element-ui'
import { Toast } from 'vant'

export const errorMsg = text =>
  Message({
    type: 'error',
    message: text
  })

export const successMsg = text =>
  Message({
    type: 'success',
    message: text
  })

export const errorMobileMsg = text => Toast(text)
