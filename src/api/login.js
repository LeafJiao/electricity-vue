import request from '@/utils/request'

export const getUser = (uid) => {
  return request.get('' + uid)
}
