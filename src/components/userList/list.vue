<template>
    <div class="list">
        <ul>
            <li v-for="item in result" :key="item.id">
                <i :class="item.class"></i>
                <div class="content">
                    <i>{{item.title}}</i>
                     <countTo :startVal='startVal' :endVal='item.value' :duration='5000'></countTo>
                </div>              
            </li>
        </ul>
    </div>
</template>
<script>
import countTo from 'vue-count-to';
import {userlist} from '@/api/homeuser.js';
export default {
    components: { countTo },
    data(){
        return{
            startVal: 0,
            endVal: 10,
            result:[]
        }
    },
    methods:{
        getList(){
            userlist(this).then(res=>{
                console.log(res.data.result)
                this.result = res.data.result
            })
        }
    },
    mounted(){
        this.getList()
    }
}
</script>
<style scoped>
    .list{
        width: 100%;
    }
    .list>ul{
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
        list-style: none;
    }
    .list>ul>li{
        width: 20%;
        height: 95px;
        cursor: pointer;
        font-size: 12px;
        padding: 23px 0 0 23px;
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        color: #666;
        background: #fff;
        -webkit-box-shadow: 4px 4px 40px rgba(0,0,0,0.05);
        box-shadow: 4px 4px 40px rgba(0,0,0,0.05);
        border-color: rgba(0,0,0,0.05);
    }
    .card{
        width: 48px;
        height: 48px;
        font-size: 48px;
        padding: 15px;
        color: #40c9c6;
        transition: all .6s;
    }
    .list>ul>li:nth-child(2)>.card{
        color: #36a3f7;
    }
    .list>ul>li:nth-child(2):hover>.card{
        background-color: #36a3f7;
    }
    .list>ul>li:hover .card{
        color: #fff;
        background-color: #40c9c6;
        border-radius: 8px;
    }
    .content{
        display: flex;
        flex-direction: column;
        padding: 10px 20px;
        width: 40%;
        text-align: center;
    }
    .content>i{
        line-height: 18px;
        font-style: normal;
        color: rgba(0,0,0,0.45);
        font-size: 16px;
        margin-bottom: 12px;
        font-weight: bold;
    }
    .content span{
        font-size: 20px;
        color: #666;
        font-weight: bold;
    }
</style>