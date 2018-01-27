<template>
  <div class="personInfo">
  <div class="baseinfo">
  <el-row>
  <el-col :span="12"><div><h3>基本信息</h3></div></el-col>
  <el-col :span="12" align="right">
  	<el-button type="primary" @click="updateUserBaseInfo()">保存</el-button>
  </el-col>
  </el-row>
  	<el-row :gutter="20">
  	<el-col :span="12">
  	 <el-form :model="baseinfo" label-position="left" ref="baseinfo" label-width="120px" class="demo-ruleForm">
  	 	<el-form-item label="注册账号:">
  	 		<el-input v-model="baseinfo.account" style="width:200px"></el-input>
  	 	</el-form-item>
  	 	<el-form-item label="联系方式:">
  	 		<el-input v-model="baseinfo.phoneNumber" style="width:200px"></el-input>
  	 	</el-form-item> 
  	 	<el-form-item label="是否入金:">
  	 		<el-select  v-model="baseinfo.ifCharged"  style="width:200px">
          <el-option
            v-for="item in this.$store.state.xialakuang.yesorno"
            :key="item.value"
            :label="item.label"
            :value="item.value">
    </el-option>
        </el-select>
  	 	</el-form-item>
  	 	<el-form-item label="推荐人资质:">
  	 		<el-select  v-model="baseinfo.recommendPersonQualification"  style="width:200px">
          <el-option
            v-for="item in this.$store.state.xialakuang.yesorno"
            :key="item.value"
            :label="item.label"
            :value="item.value">
    </el-option>
        </el-select>
  	 	</el-form-item>
  	 	<el-form-item label="我的邮箱:">
  	 		<el-input v-model="baseinfo.email" style="width:200px"></el-input>
  	 	</el-form-item>
  	 	<el-form-item label="直接推荐人账号:">
  	 		<el-input v-model="baseinfo.directRecommendationAccount" style="width:200px"></el-input>
  	 	</el-form-item>
  	 </el-form>
  	 </el-col>
  	 <el-col :span="12">
  	 	<el-form :model="baseinfo" ref="baseinfo" label-position="left" label-width="120px" class="demo-ruleForm">
  	 	<el-form-item label="真实姓名: ">
  	 		<el-input v-model="baseinfo.realName" style="width:200px"></el-input>
  	 	</el-form-item>
  	 	<el-form-item label="性别: ">
  	 		<el-select  v-model="baseinfo.sex"  style="width:200px">
          <el-option
            v-for="item in this.$store.state.xialakuang.sex"
            :key="item.value"
            :label="item.label"
            :value="item.value">
    </el-option>
        </el-select>
  	 	</el-form-item>
  	 	<el-form-item label="是否实名: ">
  	 		<el-select  v-model="baseinfo.nameVerified"  style="width:200px">
          <el-option
            v-for="item in this.$store.state.xialakuang.yesorno"
            :key="item.value"
            :label="item.label"
            :value="item.value">
    </el-option>
        </el-select>
  	 	</el-form-item>
  	 	<el-form-item label="负责代理商编号: ">
  	 		<el-input v-model="baseinfo.agentCode" style="width:200px"></el-input>
  	 	</el-form-item>
  	 	<el-form-item label="间接推荐人账号: ">
  	 		<el-input v-model="baseinfo.indirectRecommendAccount" style="width:200px"></el-input>
  	 	</el-form-item>
  	 </el-form>
  	 </el-col>
  	 </el-row>
     </div>

     <div class="verifyname">
      <el-row>
      	<el-col :span="12"><div><h3>实名验证</h3></div></el-col>
  	<el-col :span="12" align="right">
  	<el-button type="primary">申请推荐人</el-button>
 	 </el-col>
      </el-row>
      <el-row>
      	<el-form model="realNameVerify" :rules="rules" ref="realNameVerify" label-width="120px" label-position="left" class="demo-ruleForm">
      		<el-form-item label="真实姓名:">
  	 		<el-input v-model="realNameVerify.realName" style="width:200px"></el-input>
  	 	</el-form-item>
      <!-- <el-form-item> -->

      <el-form :inline="true" label-width="120px"  model="realNameVerify">
      <el-form-item label="证件类型:">
        <el-select  v-model="realNameVerify.certificateType"  style="width:200px">
          <el-option label="身份证" value="1"></el-option>
          <el-option label="护照" value="2"></el-option>
        </el-select>

      </el-form-item>
       <el-form-item label="证件号码:">
        <el-input v-model="realNameVerify.certificateNumber" style="width:200px"></el-input>
        </el-form-item>
        </el-form>
        <!-- </el-form-item> -->
      	</el-form>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div>证件正面照</div>
          <el-upload v-if="frontUploader"
  action="http://111.230.221.41:8080/user/uploadPic"
  list-type="picture-card"
  limit="1"
  :data="certificateFrontData"
  :on-preview="handlePictureCardPreview0"
  :on-success="handleFrontSuccess"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible" size="tiny">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
        </el-col>
        <el-col :span="8">
          <div>证件反面照</div>
           <el-upload v-if="backUploaded"
  action="http://111.230.221.41:8080/user/uploadPic"
  :data="certificateBackData"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview1"
  :on-success="handleBackSuccess"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible" size="tiny">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
        </el-col>
        <el-col :span="8">
          <div>居住地址证明</div>
           <el-upload v-if="liveAddressUploaded"
           :data="liveAddressData"
  action="http://111.230.221.41:8080/user/uploadPic"
  list-type="picture-card"
  :on-success="handleAddressSuccess"
  :on-preview="handlePictureCardPreview2"
  :on-remove="handleRemove">

  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible" size="tiny">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
        </el-col>
      </el-row>
      </div>

    <div class="recommendinfo">
    <el-row>
        <el-col :span="12"><div><h3>我的推荐信息</h3></div></el-col>
      </el-row>
      <el-row>
      <el-form label-position="left">
        <el-form :inline="true" label-width="120px"  >
      <el-form-item label="我的会员星级:">
       <el-input v-model="vipStarLevel" style="width:200px"></el-input>
      </el-form-item>
       <el-form-item label="我的入金金额:">
        <el-input v-model="chargedMoney" style="width:200px"></el-input>
        </el-form-item>
        </el-form>

        <el-form :inline="true" label-width="120px"  >
      <el-form-item label="我的直推奖利率:">
       <el-input v-model="directRecommendRate" style="width:200px"></el-input>
      </el-form-item>
       <el-form-item label="我的间推奖利率:">
        <el-input v-model="indirectRecommendRate" style="width:200px"></el-input>
        </el-form-item>
        </el-form>
      </el-form>
      </el-row>

      <el-row>
        <el-col :span="12" style="padding:5px">
        直推客户信息
        <el-table
        :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
        border
        style="width: 100%" header-align="center">
        <el-table-column prop="account" label="序号" align="center" width="80"></el-table-column>
        <el-table-column prop="realName" label="名称" align="center" width="80"></el-table-column>
        <el-table-column prop="contactPhone" label="在线合同数" align="center" width="150px"></el-table-column>
      </el-table>
        </el-col>
        <el-col :span="12" style="padding:5px;">
        间推客户信息
        <el-table
        :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
        border
        style="width: 100%" header-align="center">
        <el-table-column prop="account" label="序号" align="center" width="80"></el-table-column>
        <el-table-column prop="realName" label="名称" align="center" width="80"></el-table-column>
        <el-table-column prop="contactPhone" label="在线合同数" align="center" width="150px"></el-table-column>
      </el-table>
        </el-col>
        
      </el-row>
      
     </div> 
  </div>
 
</template>
<script>
  export default {
    data() {
      return {
        tableData:[],
        credentialsFront:'',
        credentialsBack:'',
        liveAddressCredential:'',
        vipStarLevel:'',
        frontUploader:true,
        backUploaded:true,
        liveAddressUploaded:true,
        chargedMoney:'',
        directRecommendRate:'',
        indirectRecommendRate:'',
        certificateFrontData:{
          picType:'1',
            account:sessionStorage.getItem("account"),
            file:""
        },
        certificateBackData:{
            picType:'2',
            account:sessionStorage.getItem("account"),
            file:""
        },
        liveAddressData:{
            picType:'3',
            account:sessionStorage.getItem("account"),
            file:""
        },
        baseinfo:{
            account:'',
            phoneNumber:'',
            ifCharged:'',
            recommendPersonQualification:'',
            email:'',
            directRecommendationAccount:'',
            realName:'',
            sex:'',
            nameVerified:'',
            agentCode:'',
            indirectRecommendationAccount:''

        },
        realNameVerify:{
           realName:'',
           certificateNumber:'',
           certificateType:''
        },
       
        
      };
    },
    created:function(){
      var me = this;
      this.$http.post('/user/getUserBaseInfo',
             this.qs.stringify({
                'token':sessionStorage.getItem("token")
             })
             )
             .then(function(res){
                alert(JSON.stringify(res));
                var info = res['data'];
                var code = info['code'];
                var message = info['message'];
                var data = info['data'];
                alert(JSON.stringify(data));
                me.baseinfo.account = data['account'];
                me.baseinfo.realName = data['realName'];
                me.realNameVerify.realName = data['realName'];
                me.baseinfo.phoneNumber = data['contactPhone'];
                // me.baseinfo.recommendPersonQualification=(data['refereeQualification']==1?'是':'否');
                me.baseinfo.recommendPersonQualification=data['refereeQualification'];
                // me.baseinfo.ifCharged = (data['wheatherGetMoney']==1?'是':'否');
                me.baseinfo.ifCharged=data['wheatherGetMoney'];
                // me.baseinfo.sex= (data['sex']==1?'男':'女');
                me.baseinfo.sex=data['sex'];
                me.baseinfo.email = data['email'];
                // me.baseinfo.nameVerified =(data['wheatherRealName']==1?'是':'否');
                me.baseinfo.nameVerified=data['whetherRealName'];
                me.baseinfo.directRecommendationAccount=data['directRecommendationAccount'];
                me.baseinfo.agentCode = data['agentCode'];
                me.baseinfo.indirectRecommendAccount=data['indirectRecommendationAccount'];
                me.realNameVerify.certificateType = data['certificateType'];
                me.realNameVerify.certificateNumber=data['certificateNumber'];
             })
             .catch(function(err){

             })
    },
    methods: {
      
      handleFrontSuccess(response, file, fileList){
        alert(response);
      },
      handleBackSuccess(response,file,fileList){
        alert(JSON.stringify(response));
        // this.backUploaded = false;
      },
      handleAddressSuccess(response, file, fileList){

      },
      getDate (strDate) {
        let st = strDate;
        let a = st.split(" ");
        let b = a[0].split("-");
        let date = new Date(b[0], b[1] - 1, b[2]);
        return date;
      },
      
      updateUserBaseInfo(){
        alert(this.baseinfo.sex);
          let sexId = this.baseinfo.sex==''
          this.$http.post('/user/updateUserBaseInfo',
             this.qs.stringify({
                'token':this.$store.state.token,
                'account':this.baseinfo.account,
                'realName':this.baseinfo.realName,
                'sex':this.baseinfo.sex,
                'email':this.baseinfo.email,
                'contactPhone':this.baseinfo.phoneNumber,
                'whetherRealName':this.baseinfo.nameVerified,
                'wheatherGetMoney':this.baseinfo.ifCharged,
                'refereeQualification':this.baseinfo.recommendPersonQualification,
                'directRecommendationAccount':this.baseinfo.directRecommendationAccount,
                'agentCode':this.baseinfo.agentCode,
                'indirectRecommendationAccount':this.baseinfo.indirectRecommendationAccount
             })
             )
             .then(function(res){
                alert(JSON.stringify(res));
                var info = res['data'];
                    var code = info['code'];
                    if (code == 1) {
                      me.$message('更新成功');
                    } else {
                      var message = info['message'];
                      $.message(message);
                    }
                  
             })
             .catch(function(err){

             })
      },
      uploadPic(){
         this.$http.post('/user/uploadPic',
          this.qs.stringify({
                'account':this.$store.state.realName,
                'file':this.$store.state.token,
                'picType':1,
             })
             )
             .then(function(res){

             })
             .catch(function(err){

             })
      },
       checkRealName(){
         this.$http.post('/user/checkRealName',
          this.qs.stringify({
                'account':this.$store.state.token,
                'realName':this.$store.state.token,
                'certificateType':this.$store.state.token,
                'certificateNumber':this.$store.state.token,
                'file':this.$store.state.token
             })
             )
             .then(function(res){

             })
             .catch(function(err){

             })  
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
.personInfo{
    margin-top: 5px;
    margin-right:20%;
    margin-left: 30%;
    
}

.baseinfo{
  background-color:#FFFFFF;
  padding: 10px;
}
.verifyname{
  background-color:#FFFFFF;
    margin-top: 6px;
    padding: 10px;
}
.recommendinfo{
  background-color:#FFFFFF;
    margin-top: 6px;
    padding: 10px;
}
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
