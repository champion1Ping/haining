<template>
  <div class="login">
  <el-row>
  <el-col :span="12"><div><h3>基本信息</h3></div></el-col>
  <el-col :span="12">
  	<el-button type="primary">保存</el-button>
  </el-col>
  </el-row>
  	<el-row :gutter="200">
  	<el-col :span="12">
  	 <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  	 	<el-form-item label="注册账号:  ">
  	 		<el-input v-model="ruleForm.account" style="width:200px"></el-input>
  	 	</el-form-item>
  	 	<el-form-item label="联系方式:  ">
  	 		<el-input v-model="ruleForm.phoneNumber" style="width:200px"></el-input>
  	 	</el-form-item> 
  	 	<el-form-item label="是否入金:  ">
  	 		<el-select  v-model="ruleForm.nameVerified"  style="width:200px">
          <el-option label="是" value="1"></el-option>
          <el-option label="否" value="2"></el-option>
        </el-select>
  	 	</el-form-item>
  	 	<el-form-item label="推荐人资质:  ">
  	 		<el-select  v-model="ruleForm.recommend"  style="width:200px">
          <el-option label="是" value="1"></el-option>
          <el-option label="否" value="2"></el-option>
        </el-select>
  	 	</el-form-item>
  	 	<el-form-item label="我的邮箱:  ">
  	 		<el-input v-model="ruleForm.name" style="width:200px"></el-input>
  	 	</el-form-item>
  	 	<el-form-item label="直接推荐人账号: ">
  	 		<el-input v-model="ruleForm.directRecommendAccount" style="width:200px"></el-input>
  	 	</el-form-item>
  	 </el-form>
  	 </el-col>
  	 <el-col :span="12">
  	 	<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  	 	<el-form-item label="真实姓名: ">
  	 		<el-input v-model="ruleForm.name" style="width:200px"></el-input>
  	 	</el-form-item>
  	 	<el-form-item label="性别: ">
  	 		<el-select  v-model="ruleForm.sex"  style="width:200px">
          <el-option label="男" value="1"></el-option>
          <el-option label="女" value="2"></el-option>
        </el-select>
  	 	</el-form-item>
  	 	<el-form-item label="是否实名: ">
  	 		<el-select  v-model="ruleForm.nameVerified"  style="width:200px">
          <el-option label="是" value="1"></el-option>
          <el-option label="否" value="2"></el-option>
        </el-select>
  	 	</el-form-item>
  	 	<el-form-item label="负责代理商编号: ">
  	 		<el-input v-model="ruleForm.proxyNumber" style="width:200px"></el-input>
  	 	</el-form-item>
  	 	<el-form-item label="间接推荐人账号: ">
  	 		<el-input v-model="ruleForm.indirectRecommendAccount" style="width:200px"></el-input>
  	 	</el-form-item>
  	 </el-form>
  	 </el-col>
  	 </el-row>
      
      <el-row>
      	<el-col :span="12"><div><h3>实名验证</h3></div></el-col>
  	<el-col :span="12">
  	<el-button type="primary">申请推荐人</el-button>
 	 </el-col>
      </el-row>
      <el-row>
      	<el-form model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      		<el-form-item label="真实姓名:  ">
  	 		<el-input v-model="ruleForm.account" style="width:200px"></el-input>
  	 	</el-form-item>
      <el-form-item>
      <el-form :inline="true">
      <el-form-item label="证件类型: ">
        <el-select  v-model="ruleForm.sex"  style="width:200px">
          <el-option label="身份证" value="1"></el-option>
          <el-option label="护照" value="2"></el-option>
        </el-select>

      </el-form-item>
       <el-form-item label="证件号码:  ">
        <el-input v-model="ruleForm.account" style="width:200px"></el-input>
        </el-form-item>
        </el-form>
        </el-form-item>
      	</el-form>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div>证件正面照</div>
          <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        </el-col>
        <el-col :span="8">
          <div>证件反面照</div>
           <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        </el-col>
        <el-col :span="8">
          <div>居住地址证明</div>
           <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        </el-col>
      </el-row>

    <el-row>
        <el-col :span="12"><div><h3>我的推荐信息</h3></div></el-col>
      </el-row>

  </div>
 
</template>
<script>
  export default {
    data() {
      return {
        period: [
          {required: true, message: '请选择重复周期', trigger: 'change'}
        ],
        starDate: [
          {type: 'date', required: true, message: '请选择开始日期', trigger: 'change'}
        ],
        endDate: [
          {type: 'date', required: true, message: '请选择结束日期', trigger: 'change'}
        ],
        pickerOptionsStart: {
          disabledDate (time) {
            return time.getTime() < 1488297600000 || time.getTime() >= Date.now();
          }
        },
        pickerOptionsOver: {
          disabledDate (time) {
            return time.getTime() < 1488297600000 || time.getTime() >= Date.now();
          }
        },
        forbidden: true,
        redStar: false,
        ruleForm: {
          name: '',
          type: '',
          way: [],
          date: '',
          period: '',
          starDate: '',
          endDate: '',
          delivery: false,
          other: '',
        },
        rules: {
          name: [
            {required: true, message: '请输入待办事项名称', trigger: 'blur'},
            {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}
          ],
          type: [
            {required: true, message: '请选择待办事项类型', trigger: 'change'}
          ],
          way: [
            {type: 'array', required: true, message: '请至少选择一个提醒方式', trigger: 'change'}
          ],
          date: [
            {type: 'date', required: true, message: '请选择提醒时间', trigger: 'change'}
          ],
          period: [],
          starDate: [],
          endDate: [],
          other: [
            {required: true, message: '请填写其他信息', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      getDate (strDate) {
        let st = strDate;
        let a = st.split(" ");
        let b = a[0].split("-");
        let date = new Date(b[0], b[1] - 1, b[2]);
        return date;
      },
      // 开始时间禁止晚于结束时间；
      starTimeChang (val) {
        const starTime = this.getDate(val);
        this.pickerOptionsOver = {
          disabledDate (time) {
            return time.getTime() <= starTime || time.getTime() >= Date.now();
          }
        }
      },
      // 结束时间禁止早于开始时间
      endTimeChang (val) {
        let endTime = this.getDate(val);
        this.pickerOptionsStart = {
          disabledDate (time) {
            return time.getTime() < 1488297600000 || time.getTime() >= endTime;
          }
        }
      },
      changeOnOff(val) {
        if (val === true) {
//          开启重复提醒功能，给表单验证添加相应规则，并添加红色星号。
          this.forbidden = false;
          this.redStar = true;
          this.$set(this.rules, "starDate", this.starDate);
          this.$set(this.rules, "endDate", this.endDate);
          this.$set(this.rules, "period", this.period);
          this.$refs['ruleForm'].validate();
        } else {
//          关闭重复提醒功能，将表单验证中的相应规则，替换为空，并移除红色星号。不能删除相关规则，否则无法重新验证了，残留表单验证信息。
          this.forbidden = true;
          this.redStar = false;
          this.$set(this.rules, "starDate", [{type: 'date', required: false, trigger: 'change'}]);
          this.$set(this.rules, "endDate", [{type: 'date', required: false, trigger: 'change'}]);
          this.$set(this.rules, "period", [{}]);
          this.$refs['ruleForm'].validate();
        }
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let para = Object.assign({}, this.ruleForm);
            console.log(para);
            this.$message({
              message: "提交成功，请在控制台查看json!！",
              type: 'success'
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style>
  .form-section {
    padding: 10px;
    width: 800px;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
