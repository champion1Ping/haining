<template>
	<div class="resetpw">
		<span style="color:#C9A44E;font-size:20px;">修改密码</span>
		<el-form label-position="top" :model="updateForm" ref="updateForm" :rules="rules" style="margin-top:20px">
		   <el-form-item label="新密码设置" prop="pass">
		    <el-input v-model="updateForm.pass" placeholder="请设置密码" style="width:280px"></el-input><br/>
		  </el-form-item>

		  <el-form-item label="新密码确认" prop="checkpass">
		     <el-input v-model="updateForm.checkpass" placeholder="请确认密码" style="width:280px"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="submitForm('updateForm')" style="width:280px">确认</el-button>
		  </el-form-item>
		</el-form>

	</div>
</template>
<script>
	export default{
		data(){
			var validatePass = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请输入密码'));
	        } else {
	          if (this.updateForm.checkpass !== '') {
	            this.$refs.updateForm.validateField('checkpass');
	          }
	          callback();
	        }
	      };
	      var validatePass2 = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请再次输入密码'));
	        } else if (value !== this.updateForm.pass) {
	          callback(new Error('两次输入密码不一致!'));
	        } else {
	          callback();
	        }
	      };
			return{
				updateForm:{
					pass:'',
					checkpass:''
				},
				rules:{
		          pass: [
		            { validator: validatePass, trigger: 'blur' }
		          ],
		          checkpass: [
		            { validator: validatePass2, trigger: 'blur' }
		          ],

                }	
			}
		},
		methods:{
			submitForm(formName){
				this.$refs[formName].validate((valid)=>{
					if(valid) {
						this.$http.post('/account/loginResetPwd',
							qs.stringify({

							}))
						.then(function(res){

						})
						.catch(function(err){

						})
					} else {

					}
				})
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