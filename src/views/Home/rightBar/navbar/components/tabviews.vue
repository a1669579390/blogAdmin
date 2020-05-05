<template>
    <transition name="slide-fade">
        <div id="app">
            <component v-bind:is="view"></component>
        </div>
    </transition>
</template>
<script>
export default {
    data(){
        return{
            view:''
        }
    }
}
</script>
<style  scoped>
    #app{
        height: 34px;
        width: 100%;
        background: #fff;
        border-bottom: 1px solid #d8dce5;
        -webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,0.12), 0 0 3px 0 rgba(0,0,0,0.04);
        box-shadow: 0 1px 3px 0 rgba(0,0,0,0.12), 0 0 3px 0 rgba(0,0,0,0.04);
    }
</style>