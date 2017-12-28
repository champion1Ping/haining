<template>
<div id="app">
<el-row>
	<el-col :span="6">
	<div><h3>密码登录</h3></div>
		<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="手机号码">
    <el-input v-model="formLabelAlign.phoneNumber" placeholder="请输入手机号码"style="width:200px"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="formLabelAlign.password" placeholder="请输入密码" style="width:200px"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('numberValidateForm')" style="width:100px">登录</el-button>
  </el-form-item>
</el-form>
	</el-col>
	<el-col><el-col class="line" :span="2">-</el-col></el-col>
	<el-col></el-col>
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


