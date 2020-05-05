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
        /* background-color: green; */
    }
</style>

