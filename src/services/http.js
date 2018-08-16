/**
 * http服务，支持get, post
 */
import axios from 'axios'
import {Loading, Message} from 'element-ui'
import router from '@/router'
import vm from './vm.js'
import vueCookies from 'vue-cookies'

const API_HOST = process.env.API_HOST

let loadingInstance

// http service
export default {
  // url 为api.js提供的url
  // param 为url参数
  // body为post body数据
  // makeApiUrl将 param拼接在url上
  post (url, param, body) {
    let totalUrl = makeApiUrl(url, param)
    return axios.post(totalUrl, body)
  },
  get (url, param) {
    let totalUrl = makeApiUrl(url, param)
    return axios.get(totalUrl, {params: param})
  }
}

/**
 * http拦截器，请求前
 * 设置loading，非login请求增加token
 */
axios.interceptors.request.use(config => {
  loadingInstance = Loading.service({fullscreen: true, background: 'rgba(0, 0, 0, 0.7)'})
  // const token = vueCookies.get('token')
  //
  // if (token) {
  //   if (router.history.current.name !== 'login') {
  //     config.headers.Authorization = token
  //   }
  // }
  return config
}, error => {
  loadingInstance.close()
  Message.error({
    message: '请求超时'
  })
  return Promise.reject(error)
})

/**
 * http拦截器，请求后
 * 关闭loading
 * 授权失败跳转至登录页面
 */
axios.interceptors.response.use(data => {
  loadingInstance.close()
  if (data.data !== null && typeof data.data === 'object') {
    // 处理200状态码
    if (data.status && data.status === 200) {
      return data.data.data
    } else {
      // 授权失败，调回登录页面
      if (data.status === 401) {
        vm.$alert('授权失效，请重新登录', {
          confirmButtonText: '确定',
          callback: action => {
            router.replace({
              path: '/login'
            })
          }
        })
      }
      return Promise.reject(data.data.msg)
    }
  }
}, error => {
  loadingInstance.close()
  Message.error({
    message: '加载失败'
  })
  return Promise.reject(error)
})

// 带cookie请求
axios.defaults.withCredentials = true

// 拼接url
function makeApiUrl (url, params) {
  let api = url.split('?')
  let apiUrl = api[0]

  for (var i in params) {
    apiUrl = apiUrl.replace('{' + i + '}', encodeURIComponent(params[i]))
  }

  return API_HOST + apiUrl
}
