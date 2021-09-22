import axios from 'axios'
import status from './status'

export function request(config) {
    const ins = axios.create({
        baseURL: 'https://api.shop.eduwork.cn',
        timeout: 5000,
    })

    // 请求拦截
    ins.interceptors.request.use(
        config => {
            //如果接口需要认证才可以访问，在这统一设置
            const token = window.localStorage.getItem('token')
            // console.log('request', token)
            if (token) {
                config.headers.Authorization = 'Bearer ' + token
            }
            // 直接放行
            return config
        },
        err => {
            return Promise.reject(err);
        })

    ins.interceptors.response.use(
        res => { return res.data },
        err => {
            // 如果有需要授权才可以访问的接口，统一去login授权

            // 如果有错误，这里进行处理，显示错误信息
            return Promise.reject(err);
        })

    return ins(config)
}