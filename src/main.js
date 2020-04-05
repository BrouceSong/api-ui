// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import ElementUI from 'element-ui'
import './assets/base.css'
import 'element-ui/lib/theme-chalk/index.css'
import DefaultLayout from './layouts/Default'
import Fragment from 'vue-fragment'
// 配置cookie
import cookie from 'vue-cookie'
Vue.prototype.$cookie = cookie
Vue.use(Fragment.Plugin)

Vue.component('default-layout', DefaultLayout)
Vue.config.productionTip = false
Vue.use(ElementUI)
// 安装路由
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 启用 ElementUI
  render: h => h(App)
})
