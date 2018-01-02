<template>
	<!-- <header class="header" :class="{ 'header-fixed' : headerFixed }"> -->
	<div class="header">
    <el-row>
        <el-col :span="6">
        <img src="../../assets/logo.png" style="padding:5px 5px 1px 100px" />
        </el-col>
        <el-col :span="12">
        <div v-show="isShow">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			  <el-submenu index="1">
			    <template slot="title">系统管理</template>
			    <el-menu-item index="1-1">选项1</el-menu-item>
			    <el-menu-item index="1-2">选项2</el-menu-item>
			    <el-menu-item index="1-3">选项3</el-menu-item>
			  </el-submenu>
			  <el-submenu index="2">
			    <template slot="title">数据登记</template>
			          <el-menu-item index="2-1">选项1</el-menu-item>
			    <el-menu-item index="2-2">选项2</el-menu-item>
			    <el-menu-item index="2-3">选项3</el-menu-item>
			  </el-submenu>
			  <el-submenu index="3">
			    <template slot="title">数据登记</template>
			    <el-menu-item index="3-1">选项1</el-menu-item>
			    <el-menu-item index="3-2">选项2</el-menu-item>
			    <el-menu-item index="3-3">选项3</el-menu-item>
			  </el-submenu>
		  </el-menu>
		  </div>
        </el-col>
    </el-row>
  </div>  
</template>
<script>
	export default{
		data(){
			return {
				
			}
		},
		
	}
</script>
<style>
	/* 头部导航 */

</style>