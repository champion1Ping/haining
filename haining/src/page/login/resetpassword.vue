
<template>
	<div class="resetpw">
		<span style="color:#C9A44E;font-size:20px;">重置密码</span>
		<el-form label-position="top" :model="resetForm" style="margin-top:20px" :rules="rules" ref="resetForm">
			<el-form-item label="手机号码" style="padding:0 0 2" prop="phoneNumber">
            <el-input v-model="resetForm.phoneNumber" placeholder="请输入手机号码" style="width:280px"></el-input>
	      </el-form-item>
		  <el-form-item label="验证码" prop="verifyCode">
		    <el-input  v-model="resetForm.verifyCode" style="width:280px" placeholder="请输入手机验证码">
		    <template slot="append"><el-button type="primary" style="background:#0099FF; color:#FFF;width:130px" :disabled="isDisabled" @click.native="gainVerifyCode">{{buttonName}}</el-button></template>
		    </el-input>
		  </el-form-item>

		   <el-form-item label="新密码设置" prop="pass">
		    <el-input v-model="resetForm.pass" placeholder="请设置密码" style="width:280px"></el-input><br/>
		  </el-form-item>
		   <el-form-item label="新密码设置" prop="checkpass">
		     <el-input v-model="resetForm.checkpass" placeholder="请确定密码" style="width:280px"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="submitForm('resetForm')" style="width:280px">确认重置</el-button>
		  </el-form-item>
		</el-form>

	</div>
</template>
<script>
    import qs from 'qs'
   import {isvalidPhone} from '../common/utils.js'
      
	export default{
		data(){
		   var validatePass = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请输入密码'));
	        } else {
	          if (this.accountReg.secondpw !== '') {
	            this.$refs.accountReg.validateField('checkPass');
	          }
	          callback();
	        }
	      };
	      var validatePass2 = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请再次输入密码'));
	        } else if (value !== this.accountReg.pass) {
	          callback(new Error('两次输入密码不一致!'));
	        } else {
	          callback();
	        }
	      };
	      var validPhone=(rule, value,callback)=>{
	      if (!value){
	          callback(new Error('请输入手机号码'))
	      }else  if (!isvalidPhone(value)){
	        callback(new Error('请输入正确的11位手机号码'))
	      }else {
	          callback()
	      }
	     };
			return{
				buttonName:'获取验证码',
				time:'120',
				resetForm:{
					phoneNumber:'',
					verifyCode:'', 
					pass:'',
					checkpass:''
				},
				rules:{
		          phoneNumber:[
		            {validator:validPhone, trigger:'blur'}
		          ],
		          verifyCode:[
		            {required:true, message:'请输入验证码',trigger:'blur'}
		          ],
		          pass: [
		            { validator: validatePass, trigger: 'blur' }
		          ],
		          checkPass: [
		            { validator: validatePass2, trigger: 'blur' }
		          ]
                }	
			}
		},
		methods:{
			gainVerifyCode(){
				let mobilePhone = this.resetForm.phoneNumber;
		        let me = this;  
		        me.isDisabled = true;  
		         let interval = window.setInterval(function() {  
		               me.buttonName = '剩余' + me.time + '秒';  
		               --me.time;  
		              if(me.time < 0) {  
		                me.buttonName = "重新发送";  
		                me.time = 120;  
		                me.isDisabled = false;  
		                window.clearInterval(interval);  
		              }  
		             }, 1000);  
		        this.$http.post('/account/sendMsg', qs.stringify({ 'phone': mobilePhone,'type':1}))
		        .then(function(res){
		            // alert(JSON.stringify(res));
		            var info = res['data'];
		            var code = info['code'];
		            
		            if (code == 1){
		            	me.$message("发送成功，请查收");
		            } else {
		            	let message = info['message'];
		            	me.$message(message);
		            }

		             
		        })
		        .catch(function(err){
		            console.log(err);
		        })
		            
			},
			submitForm(formName){
				this.$refs[formName].validate((valid)=>{
					if(valid) {
						this.$http.post('/account/resetPwd',
							qs.stringify({
								'phone':this.resetForm.phoneNumber,
								'verifyCode':this.resetForm.verifyCode,
								'pwd':this.resetForm.checkpass
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
	    margin-bottom: 100px;
	    padding-left: 240px;
	    padding-top: 40px;
	    padding-bottom: 40px;
	}
	.el-form--label-top .el-form-item__label{
		line-height: 20px;
	}
</style>