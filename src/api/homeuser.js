let userlist = function(that){
    return new Promise((resolve,reject)=>{
        that.axios.get('/admin/index')
        .then(res => {
            resolve(res)
        })
        .catch(err => {
            reject(err)
        })
    })
    
}
export {userlist}