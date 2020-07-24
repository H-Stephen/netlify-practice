import axios from "axios";
import { Message } from "element-ui";
import store from "@/store";

const handleError = () => {
  // 这里只处理token失效
  // 其他异常报错由业务代码自行catch处理-避免重复报错同时也需要让报错信息可自定义
  let timer;
  return error => {
    const { response } = error;
    if (response.status === 401) {
      Message.error("登录超时，请重新登录！");
      if (timer) return;
      timer = setTimeout(() => {
        store.dispatch("user/logout");
      }, 1200);
    }
  };
};

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    const { token } = store.getters;
    if (token) {
      // eslint-disable-next-line
      config.headers.common['Authorization'] = `Bearer ${token}`
    }
    return config;
  },
  error => {
    // do something with request error
    handleError(error);
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    // const { data } = response
    // if(data.code!==0) {
    //   // do something
    // }
    return Promise.resolve(response);
  },
  error => {
    handleError(error);
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

export default service;
