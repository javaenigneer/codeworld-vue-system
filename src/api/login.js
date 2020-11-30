import request from '@/utils/request'

export function loginByUsername(username, password, openId, accessToken) {
  const data = {
    username,
    password,
    openId,
    accessToken
  }
  return request({
    url: '/system-auth/user-login',
    method: 'post',
    data
  })
}

/* QQ第三方登录 */
// export function loginByQQ(data) {
//   return request({
//     url: '/api/auth/loginByQQ',
//     method: 'get',
//     data: data
//   })
// }

export function logout(token) {
  return request({
    url: '/system-auth/user-login-out',
    method: 'post',
    data: {token}
  })
}

export function getUserInfo(token) {
  return request({
    url: '/system-auth/get-user-info',
    method: 'post',
    data: {token}
  })
}

