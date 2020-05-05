<template>
    <transition name="slide-fade"  appear>
        <div class="breadcrumb">           
            <div class="breadcrumb_1">
                <i :class="isCollapse==true? 'el-icon-s-fold' : 'el-icon-s-unfold'"
                style="font-size:28px;height:50px;line-height:50px;padding-left:10px;width:50px"
                @click="show"
                    ></i>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                </el-breadcrumb> 
            </div>
            <div class="breadcrumb_2">
                <screenfull></screenfull>
                <el-dropdown>
                <span class="el-dropdown-link">
                    <el-avatar :src="avatar"></el-avatar>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item divided>退出登录</el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
            </div>   
        </div>
    </transition>
</template>
<script>
import avatar from '@/assets/imgs/87105301a636c2f4fcf044f9f95bdf64.gif'
import {mapState,mapMutations} from 'vuex';
import screenfull from '@/components/Screenfull'
export default {
    data(){
        return{
            icon:'el-icon-s-fold',
            avatar:avatar
        }
    },
    components:{
        screenfull
    },
    methods:{
        ...mapMutations(['setCollapse']),
        show(){
            this.setCollapse(!this.isCollapse)
        }
    },
    computed: {
        ...mapState(['isCollapse'])
    },
}
</script>
<style  scoped>
    .breadcrumb{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 50px;
        background: #fff;
        -webkit-box-shadow: 0 1px 4px rgba(0,21,41,0.08);
        box-shadow: 0 1px 4px rgba(0,21,41,0.08);
    }
    .breadcrumb_1{
        width: 90%;      
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .breadcrumb_2{
        display: flex;
        width: 10%;
        justify-content: space-around;
        align-items: center;
        padding: 0 30px 0 0 ;
    }
    .slide-fade-enter-active {
        transition: all .5s ease;
    }
    .slide-fade-leave-active {
        transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateX(20px);
        opacity: 0;
    }
</style>