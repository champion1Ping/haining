<template>
	<!-- <header class="header" :class="{ 'header-fixed' : headerFixed }"> -->
	<div class="header">
    <el-row>
        <el-col :span="6">
        <img src="../../assets/logo.png" style="padding:5px 5px 1px 100px" />
        </el-col>
        <el-col :span="14">
        <div v-if="this.$store.state.roleId > 0">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			  <el-submenu index="1" v-if="this.$store.state.roleId===3">
			    <template slot="title"><span style="font-size:25px">系统管理</span></template>
			    <el-menu-item index="/systemNotice">系统公告发布</el-menu-item>
			    <el-menu-item index="/agencymanager">代理商创建</el-menu-item>
			    <el-menu-item index="/usermanager">系统用户管理</el-menu-item>
			    <el-menu-item index="/productgain">产品收益率维护</el-menu-item>
			  </el-submenu>
			  <el-submenu index="2" v-if="this.$store.state.roleId !==1">
			    <template slot="title"><span style="font-size:25px">数据登记</span></template>
			          <el-menu-item index="/customer" v-if="this.$store.state.roleId !==1">客户入金登记表</el-menu-item>
			    <el-menu-item index="/contractgain" v-if="this.$store.state.roleId===3">合同收益分配表</el-menu-item>
			  </el-submenu>
			  <el-submenu index="3">
			    <template slot="title"><span style="font-size:25px">收益查询</span></template>
			    <el-menu-item index="/customerGain" v-if="this.$store.state.roleId !==1">客户收益表</el-menu-item>
			    <el-menu-item index="/agencyprofit" v-if="this.$store.state.roleId!==2">代理商收益表</el-menu-item>
			    <el-menu-item index="/customerRecommend" v-if="this.$store.state.roleId===3">推荐客户表</el-menu-item>
			  </el-submenu>
		  </el-menu>
		  </div>
        </el-col>
        <el-col :span="3" v-if="this.$store.state.roleId > 0">
        	<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			  <el-submenu index="1">
			    <template slot="title" ><span style="font-size:15px">真实姓名</span></template>
			    <el-menu-item index="/personinfo">个人信息</el-menu-item>
			    <el-menu-item index="/updatepw" v-if="this.$store.state.roleId  !==2">修改密码</el-menu-item>
			    <el-menu-item index="/login" @click="loginout()">退出登录</el-menu-item>
			  </el-submenu>
			  
		  </el-menu>

        </el-col>
       	<el-col :span="1" v-if="this.$store.state.roleId > 0">
       	<el-button type="text" @click="getNotice()"><span style="font-size:15px;color:#FF0047">通知</span></el-button>
       	</el-col>
    </el-row>
  </div>  
</template>
<script>
	//roleId 1-代理商 2-客户 3-管理员
	export default{
		data(){
			return {
				
				isShow:false
			}
		},
		methods:{
			handleSelect(index,indexPath){
				var to;
				for(var i in indexPath)
				{
					if(i == 1) {
						to = indexPath[i];

					}
				}
				// alert(to);
				this.$router.push(to);
			},
			getNotice(){
				this.$router.push('/notices');
			},
			loginout(){
				//清除登录相关信息
				this.$store.commit('saveRoleId', 0);
			}
		}
		
	}
</script>
<style>
	/* 头部导航 */
	.el-menu--horizontal .el-submenu {
    float: center;
    position: relative;
}

</style>