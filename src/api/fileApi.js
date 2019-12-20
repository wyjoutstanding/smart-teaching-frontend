import request from '@/utils/request' //引入封装好的 axios 请求

/**
 * 获取指定类型的文件
 */
export function getFiles(fileType) { //获取文件接口
    return request({ //使用封装好的 axios 进行网络请求
        url: '/api/file/getFiles',
        method: 'get', // get与post写法不同，这里需要传递参数，而不是data
        params: { //提交的数据
            authorId: sessionStorage.getItem('id'), // 用户id
            fileType // 文件类型
        }
    })
}
/**
 * 下载文件
 * @param {文件id} fileId 
 */
export function downloadFile(fileId) { //获取文件接口
    return request({ //使用封装好的 axios 进行网络请求
        url: '/api/file/downloadFile',
        method: 'get', // get与post写法不同，这里需要传递参数，而不是data
        responseType: 'blob', // 格式设置，一定要指定，否则二进制乱码
        params: { //提交的数据
            // authorId: sessionStorage.getItem('id'), // 用户id
            fileId // 文件类型
        }
    })
}
/**
 * 删除文件
 * @param {文件id} fileId 
 */
export function deleteFile(fileId) { //登录接口
    return request({ //使用封装好的 axios 进行网络请求
        url: '/api/file/deleteFile',
        method: 'get', // get与post写法不同，这里需要传递参数，而不是data
        params: { //提交的数据
            authorId: sessionStorage.getItem('id'), // 用户id
            id: fileId // 文件id
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