<template>

   <div class="login">
   <el-row>
  <el-col :span="12">
   <h3>密码登录</h3>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="手机号码">
    <el-input v-model="formLabelAlign.phoneNumber" placeholder="请输入手机号码"style="width:240px"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="formLabelAlign.password" placeholder="请输入密码" style="width:240px"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="submitForm('numberValidateForm')" style="width:240px">登录</el-button>
  </el-form-item>

</el-form>
  </el-col>
  <el-col class="line" :span="2">-</el-col>
  <el-col :span="10">
    <div><h3>注册账号</h3></div>
    <el-form :label-position="labelPosition"  class="demo-ruleForm" label-width="80px" :model="formRegister">
  <el-form-item label="姓名">
    <el-input v-model="formRegister.name" placeholder="请输入真实姓名"style="width:240px"></el-input>
  </el-form-item>
  <el-form-item label="手机号码">
    <el-input v-model="formLabelAlign.password" placeholder="请输入手机号码" style="width:240px"></el-input>
  </el-form-item>
  
  <el-form-item label="验证码">
    <el-input v-model="formLabelAlign.password" placeholder="请输入收到的验证码" style="width:160px"></el-input>
    <el-button type="primary" @click="submitForm('numberValidateForm')" style="width:100px">获取验证码</el-button>
  </el-form-item>
  <el-form-item label="代理商编号">
    <el-input v-model="formLabelAlign.password" placeholder="请输入代理商编号" style="width:240px"></el-input>
  </el-form-item>
  <el-form-item label="登陆密码设置">
    <el-input v-model="formLabelAlign.password" placeholder="请设置密码" style="width:240px"></el-input><br/>
     <el-input v-model="formLabelAlign.password" placeholder="请确定密码" style="width:240px"></el-input>
  </el-form-item>
  <el-form-item label="推荐人手机号码">
    <el-input v-model="formLabelAlign.password" placeholder="请输入推荐人手机号码" style="width:240px"></el-input>
  </el-form-item>
  <el-form-item>
  <el-checkbox v-model="checked">同意并接受《服务条款》</el-checkbox><el-button type="primary" @click="submitForm('numberValidateForm')" style="width:100px">注册</el-button>
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
        labelPosition: 'top',
        formLabelAlign: {
          phoneNumber: '',
          password: ''
        },
        formRegister:{
          name:''
        }
      };
    },
    methods: {
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
    margin-top: 100px;
    margin-right:100px;
    margin-left: 280px;
  }
</style>


