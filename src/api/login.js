// 封装登录接口
//post
import jwt from 'jsonwebtoken'
import store from '../store/index'

let login = function(that,data){
    return new Promise((resolve,reject)=>{
        that.axios({
            method:'post',
            url: '/user/login',
            data
          })
          .then(res=>{
            //   resolve(res)
            localStorage.setItem('user',res.data.token)
            let data = jwt.decode(res.data.token)
            store.state.user = data
            console.log(store.state.user)
          })
          .catch(err=>{
              reject(err)
          })
    })
}

export { login }