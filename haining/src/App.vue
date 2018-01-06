<template>
  <div id="app" style="background-color:#D3DCE8">
  <el-container>
  <el-header><v-header></v-header></el-header>
  <!-- <div style="position: relative;height: 60px;width: 100%;"></div> -->
  <el-main>
  <transition name="fade">
              <router-view class="view"></router-view>
            </transition>
</el-main>
</el-container>
</div>
</template>

<script>

import Vue from 'vue'
import header from './page/common/header'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'
Vue.use(Element)
export default {
  name: 'app',
  data: function (){
    return {
      active:true,
      headerFixed : true,
      menushow:true
      
    }
  },
  created: function(){
    this.$router.push('/login');
  },
  methods: {

  },
  components: {
      'v-header': header
    },
  watch: {
     '$route': function (to,from) {
         if(to.path == '/login'){
             this.isShow = true ;
         }else if(to.path == '/activeManage'){
             this.active = false ;
         }
     }
  }
}
</script>

<style>
 .el-main0{-webkit-box-flex:1;-ms-flex:1;flex:1; background-color: #fff; padding: 500px 70px; }
 .el-main{
    padding: 10px 0px 10px 0px;
 }
.el-header{
  background-color:#FFFFFF;
  /*margin-top: 100px;
    margin-right:100px;
    margin-left: 280px;*/
  
}
  
  
</style>
