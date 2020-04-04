import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      meta: {
        layout: 'default'
      },
      component: Index
    },
    {
      path: '/login',
      name: '登陆',
      meta: {
        layout: 'default'
      },
      component: Login
    }
  ]
})
