<template>
    <div id="app">
        <breadcumb></breadcumb>
        <tabview></tabview>
    </div>
</template>
<script>
import breadcumb from './components/breadcumb';
import tabview from './components/tabviews';
export default {
    data(){
        return{
            
        }
    },
    components:{
        breadcumb,
        tabview
    }
}
</script>
<style scoped>
    #app{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
</style>