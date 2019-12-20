import request from '@/utils/request' //引入封装好的 axios 请求

/**
 * 获取相应的班级
 */
export function getClasses() { //登录接口
    return request({ //使用封装好的 axios 进行网络请求
        url: '/api/classes/getClasses',
        method: 'get', // get与post写法不同，这里需要传递参数，而不是data
        params: { //提交的数据
            id: sessionStorage.getItem('id') // 用户id
        }
    })
}
/**
 * 删除班级
 * @param {班级id} classId
 */
export function deleteClass(classId) { //登录接口
    return request({ //使用封装好的 axios 进行网络请求
        url: '/api/classes/deleteClass',
        method: 'get', // get与post写法不同，这里需要传递参数，而不是data
        params: { //提交的数据
            teacherId: sessionStorage.getItem('id'), // 用户id
            classId: classId
        }
    })
}
/**
 * 创建班级
 * @param {班级名字} className
 * @param {班级类型} classType
 */
export function createClass(className, classType) {
    return request({
        url: '/api/classes/createClass',
        method: 'post',
        data: {
            className,
            classType,
            teacherId: sessionStorage.getItem('id') // 创建者id（教师）
        }
    })
}
/**
 * 修改班级
 * @param {班级名} className
 * @param {班级类型} classType
 * @param {班级id} classId
 */
export function modifyClass(className, classType, classId) {
    return request({
        url: '/api/classes/modifyClass',
        method: 'post',
        data: {
            className,
            classType,
            id: classId,
            teacherId: sessionStorage.getItem('id') // 创建者id（教师）
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
    if (personInfo.userGender == '男') 
        personInfo.userGender = 0;
    else 
        personInfo.userGender = 1;
    return request(
        {url: '/api/user/bindPersonInfo', method: 'post', data: personInfo}
    )
}
/**
 * 修改密码
 * @param {密码信息} passwordInfo
 */
export function editPassword(passwordInfo) {
    passwordInfo.userId = sessionStorage.getItem('id');
    return request(
        {url: '/api/user/editPassword', method: 'post', data: passwordInfo}
    )
}