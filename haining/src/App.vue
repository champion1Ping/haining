<template>
  <div id="app" class="parent" style="background-color:#D3DCE8">
  <el-container>
  <el-header><v-header></v-header></el-header>
  <!-- <div style="position: relative;height: 60px;width: 100%;"></div> -->
  <el-main>
  <transition name="fade">
     <keep-alive>
              <router-view class="view"></router-view>
     </keep-alive>         
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
  created(){
 
  },
  methods: {
    
  },
  components: {
      'v-header': header
    },
  watch: {
     '$route': function (to,from) {
         
     }
  }
}
</script>

<style>
html, body{ margin:0; height:100%; }
#app { margin:0; height:100%; }
 .parent{
  flex-flow: column;
  display:flex;
 }
 /*.el-main0{-webkit-box-flex:1;-ms-flex:1;flex:1; background-color: #fff; padding: 500px 70px; }*/
 .el-main{
    background-color: #EEEEEE;
    padding-top: 5px;

    padding-left: 0px;
    padding-right: 0px;
    flex:1;
 }
.el-header{
  background-color:#FFFFFF;
  /*margin-top: 100px;
    margin-right:100px;
    margin-left: 280px;*/

  
}
  button.el-button.left.el-button--info.is-disabled{
    border-top:2px;
    border-top-left-radius:2px; 
    border-bottom-left-radius:2px; 
    border-left-width: 0px;
    color: #2a2626;
    font-size: 12px;
    height: 36px;
  } 

  .left{
    width: 120px;
    display:inline-block;
    border-color: #DEDAD6;
    border-top-right-radius:0px; 
    border-bottom-right-radius:0px;
    border-right-width: 0px;
    color: #1e1c1c;
    background-color: #E6E6E6; 

  }
   /*输入框*/
  .right > .el-input__inner{
      border-top-left-radius:0px; 
      border-bottom-left-radius:0px; 
      border-left-width: 0px;
      height: 36px;
    
  }
  /*下拉框 + 日期选择框*/
  .right > .el-input > .el-input__inner{
      border-top-left-radius:0px; 
      border-bottom-left-radius:0px; 
      border-left-width: 0px;
      height: 36px;
    
  }
  .el-input__prefix {
    left: 155px;
    -webkit-transition: all .3s;
    transition: all .3s;
  }
  
</style>
