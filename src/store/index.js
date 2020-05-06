import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //用于存放全局变量
    // 侧边栏是否展开 false 展开
    isCollapse:false,
    user:{},
    userpath:'home',
    breadcurmb:'首页'
  },
  mutations: {
    setUser(state,user){
      state.user = user
    },
    setCollapse(state,isCollapse){
      state.isCollapse = isCollapse
    },
    setPath(state,userpath){
      state.userpath = userpath
    },
    setbreadcurmb(state,breadcurmb){
      state.breadcurmb = breadcurmb
    }
  },
  actions: {

  },
  modules: {
  }
})
