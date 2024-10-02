import request from '@/utils/request'

/**
 * 注册用户
 * @param data
 * @returns {*}
 */
export const register = (data) => {
  return request({
    url: '/user/register',
    method: 'post',
    data: data
  })
}

/**
 * 登录
 * @param data
 * @returns {*}
 */
export const login = (data) => {
  return request({
    url: '/user/login',
    method: 'post',
    data: data
  })
}
