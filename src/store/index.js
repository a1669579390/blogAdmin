import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //用于存放全局变量
    user:{}
  },
  mutations: {
    setUser(state,user){
      state.user = user
    }
  },
  actions: {

  },
  modules: {
  }
})
