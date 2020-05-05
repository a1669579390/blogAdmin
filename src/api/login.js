// 封装登录接口
//post
import jwt from 'jsonwebtoken'
import store from '../store/index'

let login = function(that,data){
    return new Promise((resolve,reject)=>{
        that.axios({
            method:'post',
            url: '/users/login',
            data
          })
          .then(res=>{
            if(res.data.code === 200){
              localStorage.setItem('user',res.data.token)
              let data = jwt.decode(res.data.token)
              store.state.user = data
              that.$message({
                message:'欢迎回来！',
                type:'success',
                duration:'5000',
                center:true,
                offset:30
              });
              resolve(res)
              that.$router.push('/home')
            }else{
              that.$message({
                message:'管理员账户或者密码错误！禁止进入！',
                type:'error',
                duration:'5000',
                center:true,
                offset:30
              });
            }            
          })
          .catch(err=>{
              reject(err)
          })
    })
}

export { login }