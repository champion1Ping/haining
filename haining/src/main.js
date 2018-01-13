import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routeConfig from './router-config'
import store from './store.js'
import axios from 'axios'
import qs from 'qs'
//加载路由中间件
Vue.use(VueRouter)
axios.defaults.baseURL = 'http://111.230.221.41:8080'
Vue.prototype.$http = axios
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