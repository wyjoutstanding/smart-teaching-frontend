import request from '@/utils/request' //引入封装好的 axios 请求

/**
 * 登录
 * @param {账户名} accountName 
 * @param {账户密码} accountPassword 
 */
export function login(accountName, accountPassword) { //登录接口
  return request({ //使用封装好的 axios 进行网络请求
    url: '/api/user/login',
    method: 'post',
    data: { //提交的数据
      accountName,
      accountPassword
    }
  })
}
/**
 * 注册
 * @param {账户名} accountName 
 * @param {账户密码} accountPassword 
 * @param {账户类型} accountType 
 */
export function register(accountName, accountPassword, accountType) {
  return request({
    url: '/api/user/register',
    method: 'post',
    data: {
      accountName,
      accountPassword,
      accountType
    }
  })
}
/**
 * 根据id获取用户信息
 */
export function getUserInfo() {
  return request({
    url: '/api/user/getUserInfo',
    method: 'get',
    params: {
      userId: sessionStorage.getItem('id')
    }
  })
}
/**
 * 更新用户基本型信息
 * @param {用户基本信息} personInfo 
 */
export function bindPersonInfo(_personInfo) {
  let personInfo = _personInfo;
  personInfo.id = sessionStorage.getItem('id');
  if (personInfo.userGender == '男') personInfo.userGender = 0;
  else personInfo.userGender = 1;
  return request({
    url: '/api/user/bindPersonInfo',
    method: 'post',
    data: personInfo
  })
}
/**
 * 修改密码
 * @param {密码信息} passwordInfo 
 */
export function editPassword(passwordInfo) {
  passwordInfo.userId = sessionStorage.getItem('id');
  return request({
    url: '/api/user/editPassword',
    method: 'post',
    data: passwordInfo
  })
}