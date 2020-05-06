<template>
    <div id="app">
        <navbar class="navbar"></navbar>
        <app-main class="main"></app-main>    
    </div>
</template>
<script>
import navbar from './navbar'
import appmain from './main'
export default {
    data(){
        return{

        }
    },
    components:{
        navbar,
        'app-main':appmain
    }
}
</script>
<style scoped>
    #app{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .navbar{
        width: 100%;
    }
    .main{
        width: 100%;
        height: 100%;
    }
    .slide-fade-enter-active {
        transition: all .5s ease;
    }
    .slide-fade-leave-active {
        transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateY(10px);
        opacity: 0;
    }
</style>

