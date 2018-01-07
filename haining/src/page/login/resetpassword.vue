<template>
	<div class="resetpw">
		<span style="color:#C9A44E;font-size:20px;">重置密码</span>
		<el-form label-position="top" :model="resetForm" style="margin-top:20px">
			<el-form-item label="手机号码" style="padding:0 0 2">
            <el-input v-model="resetForm.phoneNumber" placeholder="请输入手机号码" style="width:280px"></el-input>
	      </el-form-item>
		  <el-form-item label="验证码">
		    <el-input  v-model="resetForm.verifyCode" style="width:280px" placeholder="请输入手机验证码">
		    <template slot="append"><el-button type="primary" style="background:#0099FF; color:#FFF">获取验证码</el-button></template>
		    </el-input>
		  </el-form-item>

		   <el-form-item label="新密码设置">
		    <el-input v-model="resetForm.firstpw" placeholder="请设置密码" style="width:280px"></el-input><br/>
		     <el-input v-model="resetForm.secondpw" placeholder="请确定密码" style="width:280px"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="resetPW()" style="width:280px">确认重置</el-button>
		  </el-form-item>
		</el-form>

	</div>
</template>
<script>
	export default{
		data(){
			return{
				resetForm:{
					phoneNumber:'',
					verifyCode:'',
					firstpw:'',
					secondpw:''
				}	
			}
		},
		methods:{
			resetPW(){
				alert("reset");
			}
		}
	}
</script>
<style>
	.resetpw{
		 background-color:#FFFFFF;
	    margin-top: 50px;
	    margin-right:20%;
	    margin-left: 20%;
	    padding-left: 240px;
	    padding-top: 40px;
	    padding-bottom: 40px;
	}
	.el-form--label-top .el-form-item__label{
		line-height: 20px;
	}
</style>