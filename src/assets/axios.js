import jwt from 'jsonwebtoken'
import axios from 'axios'

 const Axios = axios.create({
    baseURL: "http://localhost:3000",
    // withCredentials: true
})

Axios.interceptors.request.use(
    config => {
        console.log("进入请求拦截器...");
        // if (config.method === "post") {
        //     config.data = qs.stringify(config.data)
        // }
        if (localStorage.getItem("user")) {
            config.headers.token = localStorage.getItem("user");
        }
        if (sessionStorage.getItem("user")) {
            config.headers.token = sessionStorage.getItem("user");
        }
        return config;
    },
    error => {
        // console.log("===发送请求拦截器报错===")
        // console.log(error);
        // console.log("===end===");
        Promise.reject(error);
    }
);

export default {
    install: function(Vue, Option) {
        Vue.prototype.axios = Axios;
    }
}