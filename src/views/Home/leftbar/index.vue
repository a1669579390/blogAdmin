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
            <el-menu-item index="1" >
              <div @click="redirect('home','首页')">
                <i class="el-icon-s-home"></i>
                <span slot="title">首页</span>
              </div>              
            </el-menu-item>
            <el-menu-item index="2">
              <div @click="redirect('userasp','用户管理')">
                <i class="el-icon-s-custom"></i>
                <span slot="title">用户管理</span>
              </div>               
            </el-menu-item>
                <el-submenu index="3">
                    <template slot="title">
                        <div>
                            <i class="el-icon-s-order"></i>
                            <span slot="title">博客管理</span>
                        </div>
                    </template>
                <el-menu-item-group>
                      <el-menu-item index="3-1" @click="redirect('articleControl','博客管理')">
                        博客添加
                      </el-menu-item>
                      <el-menu-item index="3-2">博客修改</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="4">
                <div @click="redirect($event)">
                    <i class="el-icon-s-comment"></i>
                    <span slot="title">消息通知</span>
                </div>
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
import { mapState,mapMutations } from 'vuex';
  export default {
    data() {
      return {
        // isCollapse: true
      };
    },
    methods: {
      ...mapMutations(['setPath','setbreadcurmb']),
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      redirect(name,zh){
        this.setbreadcurmb(zh)
        this.setPath(name)
      }
    },
    computed:{
      ...mapState(['isCollapse'])
    }
  }
</script>