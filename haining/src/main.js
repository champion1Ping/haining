import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routeConfig from './router-config'
import store from './store.js'
import axios from 'axios'
import qs from 'qs'



//加载路由中间件
Vue.use(VueRouter)
axios.defaults.baseURL = 'http://111.230.221.41:8087'  //test
//axios.defaults.baseURL = 'http://111.230.221.41:8080' //normal
Vue.prototype.$http = axios
Vue.prototype.qs = qs
//定义路由
const router = new VueRouter({
  routes: routeConfig
})
router.beforeEach((to, from, next) => {    
     //to即将进入的目标路由对象，from当前导航正要离开的路由， next  :  下一步执行的函数钩子
     if(to.path === '/login')  { 
     	sessionStorage.removeItem("token");
		  sessionStorage.removeItem("roleId");
		  sessionStorage.removeItem("userName");
     	next()
        
      }  // 如果即将进入登录路由，则直接放行
     else {     //进入的不是登录路由

          if(to.meta.requiresAuth && !sessionStorage.getItem('token')) {
          	next({ path: '/login' })} 

          //下一跳路由需要登录验证，并且还未登录，则路由定向到  登录路由

          else { next() }}  //如果不需要登录验证，或者已经登录成功，则直接放行

          }   
      )

new Vue({
  router,
  store,
  el: "#app",
  render: h => h(App),
  
})