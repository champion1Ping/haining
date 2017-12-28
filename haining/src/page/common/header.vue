<template>
	<header class="header" :class="{ 'header-fixed' : headerFixed }">
    <el-row>
        <el-col :span="6">
        <img src="../../assets/logo.png" style="padding:5px 5px 1px 100px" />
        </el-col>
        <el-col :span="12">

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

        </el-col>

    </el-row>
    </header>
</template>
<script>
	export default{

	}
</script>
<style>
	/* 头部导航 */
header{z-index: 1000;min-width: 1200px;transition: all 0.5s ease;  border-top: solid 4px #3091F2;  background-color: #fff;  box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);  }
header.header-fixed{position: fixed;top: 0;left: 0;right: 0;}
header .el-menu-demo{padding-left: 100px!important;}
</style>