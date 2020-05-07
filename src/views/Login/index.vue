<template>
    <div class="login-container"  v-on:keyup.enter="submitForm('ruleForm')" >
        <div class="form">
            <div class="title">后台管理系统</div>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item  prop="pass">
                    <el-input type="text" v-model="ruleForm.pass" autocomplete="off" placeholder="账号"></el-input>
                </el-form-item>
                <el-form-item  prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" :loading="loading" @click="submitForm('ruleForm')">登录</el-button>
                </el-form-item>
            </el-form>
        </div>      
    </div>
</template>
<script>
  import {login} from '../../api/login';
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入管理员账户'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }
         callback();
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: ''
        },
        loading:false,
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true
            login(this,this.ruleForm)
            this.loading = false
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>
<style lang="scss" scoped>
    $bg:#2d3a4b;
    .login-container{
        min-height: 100vh;
        width: 100%;
        background-color: $bg;
        overflow: hidden;
        display: flex;
        align-items: center; /*定义body的元素垂直居中*/
        justify-content: center; /*定义body的里的元素水平居中*/
    }
    .title{
        font-size: 26px;
        color: #eee;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
    }
    .form{
        width: 25%;
        margin: -5% 0 0 0;
    }
    .demo-ruleForm /deep/ .el-input__inner{
        background: rgba(0,0,0,0.1);;
        border: 1px solid rgba(255,255,255,0.1);
        line-height: 1;
        height: 50px;
        color: #ffffff;
    }
    .demo-ruleForm /deep/ .el-button{
        width: 100%;
        margin: 10px 0 0 0;
    }
</style>