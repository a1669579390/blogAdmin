import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //用于存放全局变量
    // 侧边栏是否展开 false 展开
    isCollapse:false,
    user:{}
  },
  mutations: {
    setUser(state,user){
      state.user = user
    },
    setCollapse(state,isCollapse){
      state.isCollapse = isCollapse
    }
  },
  actions: {

  },
  modules: {
  }
})
