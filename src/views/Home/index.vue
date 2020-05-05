<template>
    <div class="home">
        <leftBar></leftBar>
        <rightBar></rightBar>
    </div>
</template>
<script>
import leftBar from './leftbar'
import rightBar from './rightBar';
export default {
    data(){
        return{

        }
    },
    components:{
        leftBar,
        rightBar
    }
}
</script>
<style scoped>
.home{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
</style>