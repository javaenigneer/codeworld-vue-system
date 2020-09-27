import request from '@/utils/request';

export function getSysUserPage(query) {
  return request({
    url: '/system-user/get-all-user',
    method: 'post',
    data: query
  });
}

export function getSysUserList(query) {
  return request({
    url: '/api/system/user/list',
    method: 'post',
    data: query
  });
}

export function updatePersonalInfo(form) {
  return request({
    url: '/api/system/user/updatePersonalInfo',
    method: 'post',
    data: form
  });
}

export function addUser(form) {
  return request({
    url: '/system-user/add-user',
    method: 'post',
    data: form
  });
}

export function updateSysUser(form) {
  return request({
    url: '/system-user/update-user',
    method: 'post',
    data: form
  });
}

export function updateUserStatus(userId,status) {
  return request({
    url: '/system-user/update-user-status',
    method: 'post',
    params: {userId,status}
  });
}

export function deleteSysUser(userId) {
  return request({
    url: '/system-user/delete-user',
    method: 'post',
    params: {userId}
  });
}

export function getSysUserById(id) {
  return request({
    url: '/api/system/user/getById',
    method: 'post',
    data: {'id': id}
  });
}
// 获取全部角色无参数
export function getAllListNoParam() {
  return request({
    url: '/system-role/get-all-role-no-param',
    method: 'post'
  });
}
