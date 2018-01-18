<template>
	<div class="resetpw">
		<span style="color:#C9A44E;font-size:20px;">修改密码</span>
		<el-form label-position="top" :model="updateForm" ref="updateForm" :rules="rules" style="margin-top:20px">
		   <el-form-item label="新密码设置" prop="pass">
		    <el-input v-model="updateForm.pass" type="password" placeholder="请设置密码" style="width:280px"></el-input><br/>
		  </el-form-item>

		  <el-form-item label="新密码确认" prop="checkpass">
		     <el-input v-model="updateForm.checkpass" type="password" placeholder="请确认密码" style="width:280px"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="submitForm('updateForm')" style="width:280px">确认</el-button>
		  </el-form-item>
		</el-form>

	</div>
</template>
<script>
    import qs from 'qs';
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
				alert(this.$store.state.token);
				this.$refs[formName].validate((valid)=>{
					if(valid) {
						this.$http.post('/account/loginResetPwd',
							qs.stringify({
								'pwd':this.updateForm.checkpass,
								'token':this.$store.state.token
							}))
						.then(function(res){
							alert(JSON.stringify(res));
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
	    margin-bottom: 100px;
	    margin-left: 20%;
	    padding-left: 240px;
	    padding-top: 40px;
	    padding-bottom: 40px;
	}
	.el-form--label-top .el-form-item__label{
		line-height: 20px;
	}
</style>