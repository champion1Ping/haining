<template>
   <div class="login">
   <el-row>
  <el-col :span="11">

   <span style="color:#C9A44E;font-size:20px;padding">密码登录</span>
    <el-form :label-position="labelPosition" label-width="80px" :model="secretLogin" ref="secretLogin" style="margin-top:10px">
  <el-form-item label="手机号码/用户账号" style="padding:0 0 2" prop="phoneNumber">
    <el-input v-model="secretLogin.phoneNumber" placeholder="请输入手机号码/用户账号" style="width:280px"></el-input>
  </el-form-item>
  <el-form-item label="密码" required>
    <el-input v-model="secretLogin.password" type="password" placeholder="请输入密码" style="width:280px"></el-input>
  </el-form-item>
  <el-form-item label="">
    <el-button type="text" @click.native="phoneLogin"><u>手机号码验证</u></el-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <el-button type="text"  @click.native="forgetPW" ><u>忘记密码</u></el-button>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="loginForm('secretLogin')" style="width:280px">登录</el-button>
  </el-form-item>
</el-form>
  </el-col>
  <!-- 分割线 -->
  <el-col class="line" :span="2">
    <table style="height:600px;border-color:000000;border-left-style:solid;border-width:1px"><tr><td valign="top"></td></tr></table>
  </el-col>

  <el-col :span="11">
     <span style="color:#C9A44E;font-size:20px;padding">注册账号</span>
    <el-form  label-position="top"  class="demo-ruleForm" label-width="80px" :rules="rules"  ref="accountReg" :model="accountReg" style="margin-top:10px">
  <el-form-item label="姓名" required prop="name">
    <el-input v-model="accountReg.name" placeholder="请输入真实姓名"style="width:280px"></el-input>
  </el-form-item>
  <el-form-item label="手机号码"  prop="phoneNumber">
    <el-input v-model="accountReg.phoneNumber" placeholder="请输入手机号码" style="width:280px"></el-input>
  </el-form-item>
  
  <el-form-item label="验证码" required>
    <el-input  v-model="accountReg.verifyCode" style="width:280px" placeholder="请输入手机验证码">
    <template slot="append"><el-button type="primary" style="background:#0099FF; color:#FFF;width:130px" :disabled="isDisabled" @click.native="gainVerifyCode">{{buttonName}}</el-button></template>
    </el-input>
  </el-form-item>
  <el-form-item label="代理商编号" required>
    <el-input v-model="accountReg.agencyNo" placeholder="请输入代理商编号" style="width:280px"></el-input>
  </el-form-item>
  <el-form-item label="登陆密码设置">
    <el-input v-model="accountReg.pass" type="password" placeholder="请设置密码" style="width:280px"></el-input><br/>
         <el-input v-model="accountReg.checkPass"  type="password" placeholder="请确定密码" style="width:280px"></el-input>

  </el-form-item>
 <!--  <el-form-item label="登陆密码确认"  prop="checkPass">
     <el-input v-model="accountReg.checkPass"  type="password" placeholder="请确定密码" style="width:280px"></el-input>
  </el-form-item> -->
  <el-form-item label="推荐人手机号码">
    <el-input v-model="accountReg.recommendPhoneNum" placeholder="请输入推荐人手机号码" style="width:280px"></el-input>
  </el-form-item>
  <el-form-item prop="checked">
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
      // var validatePass2 = (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('请再次输入密码'));
      //   } else if (value !== this.accountReg.pass) {
      //     callback(new Error('两次输入密码不一致!'));
      //   } else {
      //     callback();
      //   }
      // };
      var validPhone=(rule, value,callback)=>{
      if (!value){
          callback(new Error('请输入手机号码'))
      }else  if (!isvalidPhone(value)){
        callback(new Error('请输入正确的11位手机号码'))
      }else {
          callback()
      }
     };
      return {
        buttonName:'获取验证码',
        time:'120',
        isShow:true,
        labelPosition: 'top',
        isDisabled:false,
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
          agreement:false
        },
        rules:{
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          // checkPass: [
          //   { validator: validatePass2, trigger: 'blur' }
          // ],
          phoneNumber:[
            {validator:validPhone, trigger:'blur'}
          ]
        }

      };
    },
    methods:{
      phoneLogin(){
        this.$router.push('/phoneLogin');
      },
      forgetPW(){
        this.$router.push('/reset');
      },
      gainVerifyCode(){

        let mobilePhone = this.accountReg.phoneNumber;
        if (mobilePhone == '') {
            this.$message.error("手机号不能为空");
            return;
        } else if(!isvalidPhone(mobilePhone)){
            this.$message.error("请输入正确的手机号");
            return;
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
        
        this.$http.post('/account/sendMsg', qs.stringify({ 'phone': mobilePhone,'type':2}))
        .then(function(res){
            var info = res['data'];
            var code = info['code'];
            if (code == 1) {
              me.$message.success("获取验证码成功，请查收!");
            }
          var message = info['message'];
          var data = info['data'];
        })
        .catch(function(err){
            
        })
      },
      submitForm(formName) {
        if(this.accountReg.checkPass =="" || this.accountReg.pass =="") {
          this.$message.error("密码不能为空");
          return;
        } else {
          if(this.accountReg.pass !=this.accountReg.checkPass){
            this.$message.error("2次输入密码不一致");
            return;
          }
        }
        if(!this.accountReg.agreement){
            this.$message("请勾选同意协议!!!");
            return;
        }
        let me = this;
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
                    alert(JSON.stringify(response));
                    var info = response['data'];
                    var code = response['code'];
                    if (code == 1) {
                      me.$router.push('/notices');
                    } else {
                      var message = info['message'];
                      me.$message(message);
                    }
                  
            }).catch(function(error){

            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      loginForm(formName) {
        let me = this;
        this.$refs[formName].validate((valid)=>{
          if(valid) {
            this.$http.post('/account/login',
              qs.stringify({
                'phone':this.secretLogin.phoneNumber,
                'password':this.secretLogin.password,
                'loginType':2
              }))
            .then(function(res){
               alert(JSON.stringify(res));
               var info = res['data'];
               var code = info['code'];
               if (code == 1) {
                var data = info['data'];
               let token = data['token'];
               me.$store.commit('saveToken', token);
               let sysUserRoleList = data['sysUserRoleList'];
               let id = sysUserRoleList[0]['id'];
               let userId=sysUserRoleList[0]['userId'];
               let roleId = sysUserRoleList[0]['roleId'];
               me.$store.commit('saveRoleId', roleId);
               me.$router.push('/notices');
               let baseInfo = data['userBaseInfoVO'];
               me.$store.commit('saveAgentCode',baseInfo['agentCode']);
               me.$store.commit('saveDirect',baseInfo['directRecommendationAccount']);
               me.$store.commit('saveInDirect',baseInfo['indirectRecommendationAccont']);
               me.$store.commit('saveRealName',baseInfo['realName']);

               } else {
                var message = info['message'];
                me.$message(message);
               }  
               
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
    margin-top: 0px;
    /*margin-bottom: 10px;*/
    margin-right:360px;
    margin-left: 360px;
    padding-left: 40px;
    padding-top: 10px;
  }
  .el-form--label-top .el-form-item__label {
    line-height: 10px;
    float: none;
    display: inline-block;
    text-align: left;
    padding: 0 0 0px;
}
</style>


