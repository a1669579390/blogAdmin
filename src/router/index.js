import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

  const routes = [
    {
      path: '/redirect',
      name:'redirect',
      component: () => import('@/views/redirect/index'),
      // hidden: true,
    },
  {
    path: '/Login',
    name: 'Login',
    component: ()=>import('@/views/Login/index')
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home/index')
  },
  {
    path: '/',
    redirect: '/Login',
  }
]

const router = new VueRouter({
  routes
})

export default router
