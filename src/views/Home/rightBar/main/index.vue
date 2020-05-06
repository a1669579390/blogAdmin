<template>
    <div class="show">
        <transition name="slide-fade" mode="out-in">
            <keep-alive>
                <component v-bind:is="view"></component>
            </keep-alive>                      
        </transition>
    </div>

</template>
<script>
import { mapState } from 'vuex';
import home from '@/components/userList';
export default {
    data(){
        return{
            view:'home'
        }
    },
    computed:{
        ...mapState(['userpath']),
    },
    components:{
        home,
        userasp:()=>import('@/components/userasp'),
        articleControl:()=>import('../../tinymce')
    },

    watch:{
        userpath(){
            this.$nextTick(()=>{
                 this.view = this.userpath 
            })        
        }
    },
    created(){
    }
}
</script>
<style scoped>
    .slide-fade-enter-active {
        transition: all .5s ease;
    }
    .slide-fade-leave-active {
        transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateY(20px);
        opacity: 0;
    }
    .show{
        padding: 32px 0 0 0;
        background-color: #f0f2f5;
    }
</style>