import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routeConfig from './router-config'
import store from './store.js'

//加载路由中间件
Vue.use(VueRouter)

//定义路由
const router = new VueRouter({
  routes: routeConfig
})

new Vue({
  router,
  store,
  el: "#app",
  render: h => h(App)
})