import request from '@/utils/request.js'

export const getUserList = () => {
  return request({
    url: '/user/userInfo',
    method: 'get'
  })
}
