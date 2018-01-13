<template>
   <div class="login">
   <el-row>
  <el-col :span="11">
   <span style="color:#C9A44E;font-size:20px;padding">密码登录</span>
    <el-form :label-position="labelPosition" label-width="80px" :model="secretLogin" ref="secretLogin" style="margin-top:20px">
  <el-form-item label="手机号码" style="padding:0 0 2" prop="phoneNumber">
    <el-input v-model="secretLogin.phoneNumber" placeholder="请输入手机号码" style="width:240px"></el-input>
  </el-form-item>
  <el-form-item label="密码" required>
    <el-input v-model="secretLogin.password" type="password" placeholder="请输入密码" style="width:240px"></el-input>
  </el-form-item>
  <el-form-item label="">
    <el-button type="text" @click.native="phoneLogin"><u>手机号码验证</u></el-button>
    <el-button type="text" @click.native="forgetPW" ><u>忘记密码</u></el-button>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('secretLogin')" style="width:240px">登录</el-button>
  </el-form-item>
</el-form>
  </el-col>
  <!-- 分割线 -->
  <el-col class="line" :span="2">
    <table style="height:600px;border-color:000000;border-left-style:solid;border-width:1px"><tr><td valign="top"></td></tr></table>
  </el-col>

  <el-col :span="11">
     <span style="color:#C9A44E;font-size:20px;padding">注册账号</span>
    <el-form  label-position="top"  class="demo-ruleForm" label-width="80px" :rules="rules"  ref="accountReg" :model="accountReg" style="margin-top:20px">
  <el-form-item label="姓名" required prop="name">
    <el-input v-model="accountReg.name" placeholder="请输入真实姓名"style="width:240px"></el-input>
  </el-form-item>
  <el-form-item label="手机号码"  prop="phoneNumber">
    <el-input v-model="accountReg.phoneNumber" placeholder="请输入手机号码" style="width:240px"></el-input>
  </el-form-item>
  
  <el-form-item label="验证码" required>
    <el-input  v-model="accountReg.verifyCode" style="width:240px" placeholder="请输入手机验证码">
    <template slot="append"><el-button type="primary" style="background:#0099FF; color:#FFF" @click.native="gainVerifyCode">{{buttonName}}</el-button></template>
    </el-input>
  </el-form-item>
  <el-form-item label="代理商编号" required>
    <el-input v-model="accountReg.agencyNo" placeholder="请输入代理商编号" style="width:240px"></el-input>
  </el-form-item>
  <el-form-item label="登陆密码设置"  prop="pass">
    <el-input v-model="accountReg.pass" type="password" placeholder="请设置密码" style="width:240px"></el-input><br/>
  </el-form-item>
  <el-form-item label="登陆密码确认"  prop="checkPass">
     <el-input v-model="accountReg.checkPass"  type="password" placeholder="请确定密码" style="width:240px"></el-input>
  </el-form-item>
  <el-form-item label="推荐人手机号码">
    <el-input v-model="accountReg.recommendPhoneNum" placeholder="请输入推荐人手机号码" style="width:240px"></el-input>
  </el-form-item>
  <el-form-item>
  <el-checkbox v-model="accountReg.agreement">同意并接受《服务条款》</el-checkbox><el-button type="primary" @click="submitForm('accountReg')" style="width:100px">注册</el-button>
  </el-form-item>
  
</el-form>
</el-col>
</el-row>
</div>
</template>

<script>
   import qs from 'qs'
   import {isvalidPhone} from '../common/utils.js'
   export default {
    data() {
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
  }
      return {
        buttonName:'获取验证码',
        time:'120',
        isShow:true,
        labelPosition: 'top',
        secretLogin: {
          phoneNumber: '',
          password: ''
        },
        accountReg:{
          name:'',
          phoneNumber:'',
          verifyCode:'',
          agencyNo:'',
          pass:'',
          checkPass:'',
          recommendPhoneNum:'',
          agreement:''
        },
        rules:{
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          phoneNumber:[
            {validator:validPhone, trigger:'blur'}
          ]
        }

      };
    },
    methods: {
      phoneLogin(){
        this.$router.push('/phoneLogin');
      },
      forgetPW(){
        this.$router.push('/reset');
      },
      gainVerifyCode(){

        let mobilePhone = this.accountReg.phoneNumber;
        let me = this;  
        me.isDisabled = true;  
        let interval = window.setInterval(function() {  
            me.buttonName = '（' + me.time + '秒）后重新发送';  
            --me.time;  
            if(me.time < 0) {  
                me.buttonName = "重新发送";  
                me.time = 120;  
                me.isDisabled = false;  
                window.clearInterval(interval);  
            }  
        }, 1000);  
        
        this.$http.post('/account/sendMsg', qs.stringify({ 'phone': mobilePhone,'type':2}))
        .then(function(res){
            var json = JSON.stringify(res);
            alert(typeof(json));
        })
        .catch(function(err){
            alert(err);
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.post('/account/register',
              qs.stringify({
                'phone':this.accountReg.phoneNumber,
                'userName':this.accountReg.name,
                'verifyCode':this.accountReg.verifyCode,
                'agentCode':this.accountReg.agencyNo,
                'loginPwd':this.accountReg.pass,
                'refereePhone':this.accountReg.recommendPhoneNum

              }))
            .then(function(response){
              var json = JSON.stringify(response);

            }).catch(function(error){

            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid)=>{
          if(valid) {
            this.$http.post('/account/login',
              qs.stringify({
                'phone':this.secretLogin.phoneNumber,
                'password':this.secretLogin.password,
                'loginType':2
              }))
            .then(function(res){
               var result = JSON.stringify(res);
               alert(result);
               var info = res['data'];
               var code = info['code'];
               var message = info['message'];
               var data = info['data'];
               let token = data['token'];
               let sysUserRoleList = data['sysUserRoleList'];
               let id = sysUserRoleList['id'];
               let userId=sysUserRoleList['userId'];
               let roleId = sysUserRoleList['roleId'];
               alert(id+','+userId+','+roleId);

            })
            .catch(function(err){

            })
          }else {
            console.log('error submit!!');
            return false;
          }
        })
      }
    }
  }
</script>
<style>
  .login{
    background-color:#FFFFFF;
    margin-top: 50px;
    margin-right:300px;
    margin-left: 180px;
    padding-left: 40px;
    padding-top: 40px;
  }
  .el-form--label-top .el-form-item__label {
    line-height: 20px;
    float: none;
    display: inline-block;
    text-align: left;
    padding: 0 0 0px;
}
</style>


