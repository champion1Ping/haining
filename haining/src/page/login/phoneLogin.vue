<template>
	<div class="phoneLogin">
		<h3>手机验证登录</h3>
		<el-form  label-position='top' label-width="80px" :model="formLabelAlign">
  <el-form-item label="手机号码">
    <el-input v-model="formLabelAlign.phoneNumber" placeholder="请输入手机号码"style="width:280px"></el-input>
  </el-form-item>
  <el-form-item label="手机验证码">
    <el-input  v-model="input3" style="width:280px" placeholder="请输入手机验证码">
    <template slot="append"><el-button type="primary" style="background:#0099FF; color:#FFF">获取验证码</el-button></template>
    </el-input>
  </el-form-item>
  <el-form-item label="">
    <el-button type="text" @click.native="phoneLogin"><u>密码登录</u></el-button>
    <el-button type="text" @click.native="forgetPW"><u>我要注册</u></el-button>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('numberValidateForm')" style="width:280px">登录</el-button>
  </el-form-item>
</el-form>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				formLabelAlign: {
		          phoneNumber: '',
		          password: ''
		        },
			}
		}
	}
</script>
<style>
	.phoneLogin{
    background-color:#FFFFFF;
    margin-top: 50px;
    margin-right:200px;
    margin-left: 280px;
    margin-bottom: 200px;
    padding-top: 50px;
    padding-left: 200px;
    padding-bottom: 160px;
  }


</style>