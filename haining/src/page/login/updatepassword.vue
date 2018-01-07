<template>
	<div class="resetpw">
		<span style="color:#C9A44E;font-size:20px;">修改密码</span>
		<el-form label-position="top" :model="updateForm" style="margin-top:20px">
		   <el-form-item label="新密码设置">
		    <el-input v-model="updateForm.firstpw" placeholder="请设置密码" style="width:280px"></el-input><br/>
		     <el-input v-model="updateForm.secondpw" placeholder="请确认密码" style="width:280px"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="updatePW()" style="width:280px">确认</el-button>
		  </el-form-item>
		</el-form>

	</div>
</template>
<script>
	export default{
		data(){
			return{
				updateForm:{
					firstpw:'',
					secondpw:''
				}	
			}
		},
		methods:{
			updatePW(){

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