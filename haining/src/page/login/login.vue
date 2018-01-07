<template>
   <div class="login">
   <el-row>
  <el-col :span="11">
   <span style="color:#C9A44E;font-size:20px;padding">密码登录</span>
    <el-form :label-position="labelPosition" label-width="80px" :model="secretLogin" style="margin-top:20px">
  <el-form-item label="手机号码" style="padding:0 0 2">
    <el-input v-model="secretLogin.phoneNumber" placeholder="请输入手机号码" style="width:240px"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="secretLogin.password" placeholder="请输入密码" style="width:240px"></el-input>
  </el-form-item>
  <el-form-item label="">
    <el-button type="text" @click.native="phoneLogin"><u>手机号码验证</u></el-button>
    <el-button type="text" @click.native="forgetPW" ><u>忘记密码</u></el-button>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('numberValidateForm')" style="width:240px">登录</el-button>
  </el-form-item>
</el-form>
  </el-col>
  <!-- 分割线 -->
  <el-col class="line" :span="2">
    <table style="height:600px;border-color:000000;border-left-style:solid;border-width:1px"><tr><td valign="top"></td></tr></table>
  </el-col>

  <el-col :span="11">
     <span style="color:#C9A44E;font-size:20px;padding">注册账号</span>
    <el-form  label-position="top"  class="demo-ruleForm" label-width="80px" :model="formRegister" style="margin-top:20px">
  <el-form-item label="姓名">
    <el-input v-model="formRegister.name" placeholder="请输入真实姓名"style="width:240px"></el-input>
  </el-form-item>
  <el-form-item label="手机号码">
    <el-input v-model="formRegister.phoneNumber" placeholder="请输入手机号码" style="width:240px"></el-input>
  </el-form-item>
  
  <el-form-item label="验证码">
    <el-input  v-model="formRegister.verifyCode" style="width:240px" placeholder="请输入手机验证码">
    <template slot="append"><el-button type="primary" style="background:#0099FF; color:#FFF">获取验证码</el-button></template>
    </el-input>
  </el-form-item>
  <el-form-item label="代理商编号">
    <el-input v-model="formRegister.agencyNo" placeholder="请输入代理商编号" style="width:240px"></el-input>
  </el-form-item>
  <el-form-item label="登陆密码设置">
    <el-input v-model="formRegister.firstpw" placeholder="请设置密码" style="width:240px"></el-input><br/>
     <el-input v-model="formRegister.secondpw" placeholder="请确定密码" style="width:240px"></el-input>
  </el-form-item>
  <el-form-item label="推荐人手机号码">
    <el-input v-model="formRegister.recommendPhoneNum" placeholder="请输入推荐人手机号码" style="width:240px"></el-input>
  </el-form-item>
  <el-form-item>
  <el-checkbox v-model="formRegister.agreement">同意并接受《服务条款》</el-checkbox><el-button type="primary" @click="submitForm('numberValidateForm')" style="width:100px">注册</el-button>
  </el-form-item>
  
</el-form>
</el-col>
</el-row>
</div>
</template>

<script>
   export default {
    data() {
      return {
        isShow:true,
        labelPosition: 'top',
        secretLogin: {
          phoneNumber: '',
          password: ''
        },
        formRegister:{
          name:'',
          phoneNumber:'',
          verifyCode:'',
          agencyNo:'',
          firstpw:'',
          secondpw:'',
          recommendPhoneNum:'',
          agreement:''
        }
      };
    },
    methods: {
      phoneLogin(){
        alert(this.$store.state.xialakuang.shengfen);
        this.$router.push('/phoneLogin');
      },
      forgetPW(){
        this.$router.push('/reset');
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
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


