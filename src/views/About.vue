<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="login1">登录</button>
    <button @click="ceshi">登录</button>
  </div>
</template>
<script>
import jwt from 'jsonwebtoken'
import {login} from '../api/login'
export default {
  data(){
    return{

    }
  },
  methods:{
    login1(){
      login(this,'data').then(res=>{
        console.log(res)
      })
    },
    ceshi(){
      this.axios.post('/users/api')
      .then(res=>{
        console.log(res)
      })
    }
  },
  mounted(){

  }
}
</script>