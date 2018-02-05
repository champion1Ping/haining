<template>
	<!-- <header class="header" :class="{ 'header-fixed' : headerFixed }"> -->
	<div class="header">
    <el-row>
        <el-col :span="6">
        <img src="../../assets/logo.png" style="padding:10px 10px 5px 80px" />
        </el-col>
        <el-col :span="14">
        <div v-if="this.$store.state.roleId > 0 || id > 0 ">
          <el-menu  class="el-menu-demo" mode="horizontal" @select="handleSelect">
			  <el-submenu index="1" v-if="this.$store.state.roleId==3 ">
			    <template slot="title"><span style="font-size:20px;color:#333333;">系统管理</span></template>
			    <el-menu-item index="/systemNotice">系统公告发布</el-menu-item>
			    <el-menu-item index="/agencymanager">代理商创建</el-menu-item>
			    <el-menu-item index="/usermanager">系统用户管理</el-menu-item>
			    <el-menu-item index="/productgain">产品收益率维护</el-menu-item>
			  </el-submenu>
			  <el-submenu index="2" v-if="this.$store.state.roleId !=1 ">
			    <template slot="title"><span style="font-size:20px;color:#333333">数据登记</span></template>
			          <el-menu-item index="/customer" v-if="this.$store.state.roleId !=1">客户入金登记表</el-menu-item>
			    <el-menu-item index="/contractgain" v-if="this.$store.state.roleId==3" >合同收益分配表</el-menu-item>
			  </el-submenu>
			  <el-submenu index="3">
			    <template slot="title"><span style="font-size:20px;color:#333333">收益查询</span></template>
			    <el-menu-item index="/customerGain" style="text-align:center" v-if="this.$store.state.roleId !=1">客户收益表</el-menu-item>
			    <el-menu-item index="/agencyprofit" v-if="this.$store.state.roleId!=2">代理商收益表</el-menu-item>
			    <el-menu-item index="/customerRecommend" v-if="this.$store.state.roleId==3">推荐客户表</el-menu-item>
			  </el-submenu>
		  </el-menu>
		  </div>
        </el-col>
        <el-col :span="2" v-if="this.$store.state.roleId > 0">
        	
        	<el-menu  class="el-menu-demo" mode="horizontal" @select="handleSelect">
			  <el-submenu index="1">

			    <template slot="title" ><span style="font-size:14px;color:#333333">{{this.$store.state.realName?this.$store.state.realName:userName}}</span></template>


			    <el-menu-item index="/personinfo" v-if="this.$store.state.roleId==2 ">个人信息</el-menu-item>
			    <el-menu-item index="/updatepw" v-if="this.$store.state.roleId  !=2 ">修改密码</el-menu-item>
			    <el-menu-item index="/login" >退出登录</el-menu-item>
			  </el-submenu>
			  
		  </el-menu>
        </el-col>

       	<el-col :span="2" v-if="this.$store.state.roleId > 0">
       	<el-button type="text" @click="getNotice()" style="padding-top:8px;"><span style="line-height:3;font-size:14px;color:#FF6240;">通知&nbsp;&nbsp;&nbsp; (<span>{{this.$store.state.noticeCount?this.$store.state.noticeCount:count}}</span><span>)</span></span></el-button>

       	</el-col>
    </el-row>
  </div>  
</template>
<script>
	//roleId 1-代理商 2-客户 3-管理员
	export default{
		data(){
			return {
				roleId:this.$store.state.roleId,
				id:sessionStorage.getItem("roleId"),
				userName:sessionStorage.getItem("userName"),
				isShow:false,
				count:sessionStorage.getItem("noticesNum"),
			}
		},
		watch:{
			userName(val,oldVal){
				
				//alert(val+","+oldVal);
			}
		},
		created:function(){
			alert("header"); 
			this.id = sessionStorage.getItem("roleId");
			this.$store.commit('saveRoleId', this.id);
			console.log(this.roleId+","+this.id);
			this.userName = sessionStorage.getItem("userName");
			let me = this;
				this.$http.post('/notice/getMyNoticeCount',
							this.qs.stringify({
								'token':sessionStorage.getItem("token")
							}))
						.then(function(res){
							var info = res['data'];
				            var code = info['code'];
				            if (code == 1) {
				            	var data = info['data'];
				            	me.$store.commit('saveNoticesCount', data);
				            	sessionStorage.setItem("noticesNum", data);
				            	me.count = data;
				            } else {
				            	var message = info['message'];
				            	me.$message.error(message);

				            }
				          
				          
						})
						.catch(function(err){

						})
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
				// console.log(to);
				if (to=="/personinfo") {
				   sessionStorage.setItem("personId",this.$store.state.userid);
				}
				if (to=="/loginout") {
					this.id =0;
					sessionStorage.removeItem("token");
					sessionStorage.removeItem("roleId");
					sessionStorage.removeItem("userName");
					this.$store.commit('saveRoleId', 0);
				}
				this.$router.push(to);
			},
			getNotice(){
				this.$router.push('/notices');
			},
			
		}
		
	}
</script>
<style>
	/*子菜单文字居中*/
	.el-menu-item{
		text-align:center;
	}
	.el-submenu .el-menu-item:hover{
		color: #FFF;
		background-color: #409EFF;
	}
	/* 头部导航 */
	.el-menu--horizontal .el-submenu {
    float: center;
    position: relative;
  }
    .el-submenu .el-menu-item{
    	min-width: 60px;
    }




</style>