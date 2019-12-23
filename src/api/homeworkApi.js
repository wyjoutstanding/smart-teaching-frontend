import request from '@/utils/request' //引入封装好的 axios 请求

/**
 * 创建作业信息
 * @param {作业实体} homeworkEntity 
 */
export function createHomework(homeworkEntity) {
    return request({
        url: '/api/homework/createHomework',
        method: 'post',
        data: homeworkEntity
    })
}
/**
 * 发布作业
 * @param {发布作业信息} postHomeworkInfo 
 */
export function postHomework(postHomeworkInfo) {
    return request({
        url: '/api/homework/postHomework',
        method: 'post',
        data: postHomeworkInfo,
        params: {
            teacherId: sessionStorage.getItem('id') // 教师id
        }
    })
}
/**
 * 修改作业信息
 * @param {作业实体} homeworkEntity 
 */
export function modifyHomework(homeworkEntity) {
    return request({
        url: '/api/homework/modifyHomework',
        method: 'post',
        data: homeworkEntity,
        params: {
            teacherId: sessionStorage.getItem('id') // 教师id
        }
    })
}

/**
 * 获取作业
 */
export function getHomework() {
    return request({ //使用封装好的 axios 进行网络请求
        url: '/api/homework/getHomework',
        method: 'get', // get与post写法不同，这里需要传递参数，而不是data
        params: { //提交的数据
            userId: sessionStorage.getItem('id') // 用户id
        }
    })
}
/**
 * 获取老师对应作业班级详细信息
 */
export function getClassHomeworkRichInfo() {
    return request({ //使用封装好的 axios 进行网络请求
        url: '/api/homework/getClassHomeworkRichInfo',
        method: 'get', // get与post写法不同，这里需要传递参数，而不是data
        params: { //提交的数据
            userId: sessionStorage.getItem('id') // 用户id
        }
    })
}
/**
 * 删除作业
 * @param {作业id} homeworkId 
 */
export function deleteHomework(homeworkId) {
    return request({ //使用封装好的 axios 进行网络请求
        url: '/api/homework/deleteHomework',
        method: 'get', // get与post写法不同，这里需要传递参数，而不是data
        params: { //提交的数据
            teacherId: sessionStorage.getItem('id'), // 用户id
            homeworkId // 作业id
        }
    })
}