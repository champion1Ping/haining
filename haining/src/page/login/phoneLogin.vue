<template>
	<div class="phoneLogin">
		<h3>手机验证登录</h3>
		<el-form  label-position='top' label-width="80px" :model="verifyCodeLogin" ref="verifyCodeLogin" :rules="rules">
  <el-form-item label="手机号码" prop="phoneNumber">
    <el-input v-model="verifyCodeLogin.phoneNumber" placeholder="请输入手机号码"style="width:280px"></el-input>
  </el-form-item>
  <el-form-item label="手机验证码" prop="verifyCode">
    <el-input  v-model="verifyCodeLogin.verifyCode" style="width:280px" placeholder="请输入手机验证码">
    <template slot="append"><el-button type="primary" style="background:#0099FF; color:#FFF;width:130px" @click.native="gainVerifyCode">{{buttonName}}</el-button></template>
    </el-input>
  </el-form-item>
  <el-form-item label="">
    <el-button type="text" @click.native="secretLogin"><u>密码登录</u></el-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <el-button type="text" @click.native="forgetPW"><u>我要注册</u></el-button>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('verifyCodeLogin')" style="width:280px">登录</el-button>
  </el-form-item>
</el-form>
	</div>
</template>
<script type="text/javascript">
import qs from 'qs'
import {isvalidPhone} from '../common/utils.js'
	export default{
		data(){
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
        time:'120',
        buttonName:'获取验证码',
				verifyCodeLogin: {
		          phoneNumber: '',
		          verifyCode: ''
		        },
        rules:{
          phoneNumber:[
            {validator:validPhone, trigger:'blur'}
          ],
          verifyCode:[
            {required:true, message:'请输入验证码',trigger:'blur'}
          ]
        }    
			}
		},
    methods:{
        gainVerifyCode(){
        let mobilePhone = this.verifyCodeLogin.phoneNumber;
        if(mobilePhone == "") {
           this.$message("请先输入手机号");
           return;
        } else {
          if(!isvalidPhone(mobilePhone)) {
              this.$message("请输入正确的11位手机号码");
              return;
          }
        }
        let me = this;  
        me.isDisabled = true;  
         let interval = window.setInterval(function() {  
               me.buttonName = '剩余' + me.time + '秒';  
               --me.time;  
              if(me.time < 0) {  
                me.buttonName = "获取验证码";  
                me.time = 120;  
                me.isDisabled = false;  
                window.clearInterval(interval);  
              }  
             }, 1000);  
        this.$http.post('/account/sendMsg', qs.stringify({ 'phone': mobilePhone,'type':1}))
        .then(function(res){
            var info = res['data'];
            var code = info['code'];
            var message = info['message'];
            if (code == 1){
              me.$message("发送成功，请查收");
            } else {
              me.$message(message);
            }
             
        })
        .catch(function(err){
            console.log(err);
        })
      },
        submitForm(formName) {
          let me = this;
          this.$refs[formName].validate(valid=>{
            if(valid){
                this.$http.post('/account/login',
                  qs.stringify({
                    'phone':this.verifyCodeLogin.phoneNumber,
                    'verifyCode':this.verifyCodeLogin.verifyCode,
                    'loginType':'1'
                    }))
                .then(function(res){
                    var info = res['data'];
                    var code = info['code'];
                    if (code == 1) {
                       this.$router.push('/notices');
                    } else {
                      let message = info['message'];
                      me.$message(message);
                    }
                  
                 
                })
                .catch(function(err){

                })
            } else {
              console.log('error submit!!');
              return false;
            }
          })
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
    padding-bottom: 30px;
  }


</style>