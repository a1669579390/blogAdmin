<template>
    <div id="app">
        <el-menu 
            default-active="1" 
            class="el-menu-vertical-demo" 
            @open="handleOpen" 
            @close="handleClose"            
            background-color="#304156"
            text-color="#bfcbd9"
            active-text-color="#409eff"
            :collapse="isCollapse"
            >
            <div style="width:20px;height:100px"></div>
            <el-menu-item index="1">
                <i class="el-icon-s-home"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-s-custom"></i>
                <span slot="title">用户管理</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-s-order"></i>
                <span slot="title">博客管理</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-s-comment"></i>
                <span slot="title">消息通知</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<style>
.el-menu-vertical-demo{
  min-height: 100vh;
}
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 210px;
    min-height: 100vh;
  }
</style>

<script>
import { mapState } from 'vuex';
  export default {
    data() {
      return {
        // isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    computed:{
      ...mapState(['isCollapse'])
    }
  }
</script>