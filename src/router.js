import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      //定义是否显示底部导航的标识 true表示当前路由显示
      meta:{
        showFooter:true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/linkman',
      name: 'linkman',
      component: () => import('./views/Linkman.vue'),
      meta:{
        showFooter:true
      }
     },
     {
      path: '/message',
      name: 'message',
      component: () => import('./views/Message.vue'),
      meta:{
        showFooter:true
      }
     },
     {
      path:'/',
      redirect:'/login'  //默认跳转的页面
    },
    {
      path: '/mines',
      name: 'mines',
      component: () => import('./views/Mines.vue'),
      meta:{
        showFooter:true
      }
     },
     {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
     },
     {
      path: '/menu',
      name: 'menu',
      component: () => import('./views/Menu.vue')
     }
  ]
})
