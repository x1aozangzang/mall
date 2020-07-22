import axios from 'axios'
//axios的封装
export function request1(config) {
    const instance1 = axios.create({
            baseURL: 'http://123.207.32.32:8000',
            timeout: 5000
        })
        //请求拦截
    instance1.interceptors.request.use(config => {
            return config
        }, err => {})
        //响应拦截
    instance1.interceptors.response.use(res => {
        return res.data
    }, err => {

    })
    return instance1(config)
}
export function request2(config) {
    const instance2 = axios.create({
            baseURL: 'http://152.136.185.210:8000/api/n3',
            timeout: 5000
        })
        //请求拦截
    instance2.interceptors.request.use(config => {
            return config
        }, err => {})
        //响应拦截
    instance2.interceptors.response.use(res => {
        return res.data
    }, err => {

    })
    return instance2(config)
}