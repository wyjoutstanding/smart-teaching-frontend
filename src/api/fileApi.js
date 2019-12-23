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
