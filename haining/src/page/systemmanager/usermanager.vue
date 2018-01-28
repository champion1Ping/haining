<template>
	<div class="usermanager">
<el-dialog title="选择代理商" :visible.sync="dialogChooseAgent" width="75%">
  <el-form :model="chooseAgentForm">
      <el-button type="info"  class="left" disabled>代理商编码</el-button><el-input clearable v-model="chooseAgentForm.agentCode"class="right" style="width:180px"></el-input>
      <el-button type="info"  class="left" disabled>代理商名称</el-button><el-input clearable v-model="chooseAgentForm.agentName"class="right" style="width:180px"></el-input>
      <el-button type="primary" @click="searchAgentList">查询</el-button>
  </el-form>
   <el-table
    :data="agentTable.slice((currentPage-1)*pageSize,currentPage*pageSize)"
    border
    style="width: 100%" header-align="center">
    <el-table-column prop="agentCode" label="代理商编码" align="center" ></el-table-column>
    <el-table-column prop="agentName" label="代理商名称" align="center"></el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">选定</el-button>
      </template>
    </el-table-column>
  </el-table>
</el-dialog>
<!-- 用户添加弹出框开始 -->
  <el-dialog title="用户添加" :visible.sync="dialogAddUser" width="80%">
    <div>用户信息</div>
    <div style="border:1px solid;border-radius:4px;">
                
    <el-form :model="addUserForm" style="padding:10px">
       <el-row>
  <el-col :span="8">
    <el-button type="info"  class="left" disabled>用户账号</el-button><el-input clearable v-model="addUserForm.userAccount"class="right" style="width:180px"></el-input>
  </el-col>
  <el-col :span="8">
        <el-button type="info" class="left" disabled>用户名称</el-button><el-input clearable v-model="addUserForm.userName" class="right" style="width:180px"></el-input>
  </el-col>
  <el-col :span="8">
       <el-button type="info"  class="left" disabled>联系方式</el-button><el-input clearable v-model="addUserForm.contactPhone" class="right" style="width:180px"></el-input>
  </el-col>
  </el-row>
<el-row style="margin-top:10px">
    <el-col :span="8">
       <el-button type="info"  class="left" disabled>用户性质</el-button><el-select clearable v-model="addUserForm.userType" style="width:180px" class="right" placeholder="请选择">
    <el-option
      v-for="item in this.$store.state.usertype.usermanager"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-col>
  <el-col :span="8">
       <el-button type="info"  class="left" disabled>代理商编码</el-button><el-select clearable @focus="chooseAgent"v-model="addUserForm.agentCode" style="width:180px" class="right" placeholder="请选择">
    <el-option
      v-for="item in empty"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-col>
  <el-col :span="8">
       <el-button type="info"  class="left" disabled>代理商名称</el-button><el-input clearable v-model="addUserForm.agentName" class="right" style="width:180px"></el-input>
  </el-col>
  </el-row>
  <el-row style="margin-top:10px">
    <el-col :span="8">
        <el-button type="info"  class="left" disabled>是否冻结</el-button><el-select clearable v-model="addUserForm.ifFrozen" style="width:180px" class="right" placeholder="请选择">
    <el-option
      v-for="item in this.$store.state.xialakuang.yesorno"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-col> 
  <el-col :span="16">
       <el-button type="info"  class="left" disabled>冻结日期</el-button><el-date-picker
      v-model="addUserForm.freezeDate"
      type="date"
      format="yyyy-MM-dd"
      value-format="yyyy-MM-dd"
      class="right"
      style="width:180px"
      >
    </el-date-picker>
  </el-col>
  </el-row>
  
 </el-form>
    </div>
    <div style="margin-top:10px;">密码信息</div>
    <div style="border:1px solid;border-radius:4px;">
    <el-row style="margin-top:10px;padding:10px;">
    <el-col :span="8">
      <el-button type="info"  class="left" disabled>新密码</el-button><el-input clearable v-model="addUserForm.pass"  type="password"class="right" style="width:180px"></el-input>
  </el-col>
  <el-col :span="8">
    <el-button type="info"  class="left" disabled>确认密码</el-button><el-input clearable v-model="addUserForm.checkpass" type="password" class="right" style="width:180px"></el-input>
  </el-col> 
  </el-row>
    </div>

  <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="addUser()">保存</el-button>
  </div>
</el-dialog>
<!-- 弹出框结束-->

  <div class="btn">
		<span style="color:#C9A44E;font-size:20px">
		用户管理&nbsp;&nbsp;&nbsp;
		<el-button type="primary" @click="quit()">退出</el-button>
		<el-button type="primary" @click="dialogAddUser = true">添加</el-button>
		<el-button type="primary" @click="getUserList">查询</el-button>
		</span>
    </div>

    <div class="fm">
      <el-row>
  <el-col :span="6">
    <el-button type="info"  class="left" disabled>用户账号</el-button><el-input clearable v-model="userAccount"class="right" style="width:180px"></el-input>
    
  </el-col>
  <el-col :span="6">
        <el-button type="info"  class="left" disabled>用户名称&nbsp;&nbsp;&nbsp;&nbsp;</el-button><el-input clearable v-model="userName" class="right" style="width:180px"></el-input>

  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>用户性质&nbsp;&nbsp;&nbsp;&nbsp;</el-button><el-select clearable v-model="userType" style="width:180px" class="right" placeholder="请选择">
    <el-option
      v-for="item in this.$store.state.usertype.usermanager"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-col>
  <el-col :span="6">
        <el-button type="info"  class="left" disabled>是否冻结&nbsp;&nbsp;&nbsp;&nbsp;</el-button><el-select clearable v-model="ifFrozen" style="width:180px" class="right">
    <el-option
      v-for="item in this.$store.state.xialakuang.yesorno"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
    </el-select>
  </el-col> 
  </el-row>
  <el-row style="padding-top:10px">
  <el-col :span="6">
    <el-button type="info"  class="left" disabled>联系方式</el-button><el-input clearable class="right"v-model="contactPhone" style="width:180px"></el-input>
  </el-col>
  <el-col :span="6">
      <el-button type="info"  class="left" disabled>直推人号码</el-button><el-input clearable v-model="directRecommendationAccount" class="right" style="width:180px"></el-input>
  </el-col>
  <el-col :span="6">
      <el-button type="info"  class="left" disabled>创建时间从</el-button><el-date-picker
      v-model="createTimeFrom"
      type="date"
      class="right"
      style="width:180px"
      >
    </el-date-picker>
  </el-col>
  <el-col :span="6">
    <el-button type="info"  class="left" disabled>创建时间到</el-button><el-date-picker
      v-model="createTimeTo"
      type="date"
      class="right"
      style="width:180px"
      ></el-date-picker>
    
  </el-col> 
    
  </el-row>
    </div>
	<div class="systemUserManager" style="margin:10px;">
    <el-table
    size="mini"
    :data="userTable.slice((currentPage-1)*pageSize,currentPage*pageSize)"
    border
    style="width: 100%" header-align="center">
    <el-table-column prop="account" label="用户账号" align="center" width="180"></el-table-column>
    <el-table-column prop="userName" label="用户名称" align="center" width="180"></el-table-column>
    <el-table-column prop="userTypeName" label="用户性质" align="center" width="180"></el-table-column>
    <el-table-column prop="agentName" label="代理商名称" align="center" width="180"></el-table-column>
    <el-table-column prop="contactPhone" label="联系方式" align="center" width="180"></el-table-column>
    <el-table-column prop="gmtCreate" label="创建时间" align="center" width="180"></el-table-column>
    <el-table-column prop="whetherFreezeName" label="是否冻结" align="center" width="180"></el-table-column>
    <el-table-column prop="freezeDate" label="冻结时间" align="center" width="180"></el-table-column>
    <el-table-column prop="agentCode" label="代理商编号" align="center" width="180"></el-table-column>
    <el-table-column prop="directRecommendPhoneNumber" label="直接推荐人号码" align="center" width="180"></el-table-column>
    <el-table-column
      label="信息明细"
      align="center"
      width="120px">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">明细</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 50, 100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next"
      prev-text="<上一页"
      next-text="下一页>"
      :total="userTable.length">
    </el-pagination>
  </div>
	
	
	<el-row></el-row>
	</div>
</template>
<script>
  export default{

    data(){
      return{
        userTable:[],
        agentTable:[],
        chooseAgentForm:{
          agentName:'',
          agentCode:''
        },
        empty:[],
        currentPage:1,
        pageSize:100,
        dialogAddUser:false,
        dialogChooseAgent:false,
        userAccount:'',
        userName:'',
        contactPhone:'',
        userType:'',
        agentCode:'',
        agentName:'',
        ifFrozen:'',
        directRecommendationAccount:'',
        createTimeFrom:'',
        createTimeTo:'',
        addUserForm:{
          userAccount:'',
          userName:'',
          contactPhone:'',
          userType:'',
          agentCode:'',
          agentName:'',
          ifFrozen:'',
          pass:'',
          checkpass:'',
          freezeDate:'',
        }
      }
    },
    created:function(){
      this.getUserList();
    },
    methods:{
      quit(){
        this.$router.push('/notices');
      },
      handleSizeChange(size){
        this.pageSize = size;
      },
      handleCurrentChange(page){
        this.currentPage= page;
      },
      addUser(){
           for(var field in this.addUserForm){
          if(this.addUserForm[field] == ""){
            this.$message.error("必填字段不能为空");
            return;
          }
        }
          this.dialogAddUser = true;
          var me = this;
          this.$http.post('/user/addUser',
          this.qs.stringify({
                'account':this.addUserForm.userAccount,
                'userName':this.addUserForm.userName,
                'contactPhone':this.addUserForm.contactPhone,
                'userType':this.addUserForm.userType,
                'whetherFreeze':this.addUserForm.ifFrozen,
                'freezeDate':this.addUserForm.freezeDate,
                'agentName':this.addUserForm.agentName,
                'agentCode':this.addUserForm.agentCode,
                'pwd':this.addUserForm.checkpass,
             })
             )
             .then(function(res){
              alert(JSON.stringify(res));
              var info = res['data'];
              var code = info['code'];
              var message = info['message'];
              if(code == 1){
                  me.$message("添加成功");
                  me.dialogAddUser = false;
              }
             })
             .catch(function(err){

             })
      },
      chooseAgent(event){
         this.dialogChooseAgent = true;

      },
      //选择代理商列表查询
      searchAgentList(){
        let me = this;
        this.$http.post('/agent/searchAgentList',
         this.qs.stringify({
            'agentCode':'',
            'agentName':'',
            'pageNum':'',
            'pageSize':''

         })
         )
         .then(function(res){
            alert(JSON.stringify(res));
                var info = res['data'];
              var code = info['code'];
              var message = info['message'];
              var data = info['data'];
              me.agentTable = data['list'];
         })
         .catch(function(err){

         })
      },
      getUserList(){
          let me = this;
          this.$http.post('/user/getUserList',
          this.qs.stringify({
                'account':this.userAccount,
                'userName':this.userName,
                'contactPhone':this.contactPhone,
                'userType':this.userType,
                'whetherFreeze':this.ifFrozen,
                'freezeDate':'',
                'agentName':this.agentName,
                'agentCode':this.agentCode,
                'directRecommendationAccount':this.directRecommendationAccount,
                'gmtCreateBegin':this.createTimeFrom,
                'gmtCreateEnd':this.createTimeTo,
                'pageNum':'',
                'pageSize':'',
             })
             )
             .then(function(res){
                alert(JSON.stringify(res));
                var info = res['data'];
              var code = info['code'];
              var message = info['message'];
              var data = info['data'];
              me.userTable = data['list'];

             })
             .catch(function(err){

             })
      },
      handleClick(row){
         this.$router.push({ name: 'person', params: { userId: row.id }});
         // this.addUserForm.agentCode = row.agentCode;
         // this.addUserForm.agentName = row.agentName;
         // this.dialogChooseAgent = false;
      }
    }
  }
</script>

<style>
  .btn{
    /*margin-top: 1px;*/
    background-color: #ffffff;
    padding: 10px;
  }
  .fm{
    background-color: #ffffff;
    padding: 20px;
  }
  .left{
    display:inline-block;
    border-color: #DEDAD6;
    border-top-right-radius:0px; 
    border-bottom-right-radius:0px;
    border-right-width: 0px;
    color: #1e1c1c;
    background-color: #E6E6E6; 

  }
  /*输入框*/
  .right > .el-input__inner{
      border-top-left-radius:0px; 
      border-bottom-left-radius:0px; 
      border-left-width: 0px;
    
  }
  /*下拉框 + 日期选择框*/
  .right > .el-input > .el-input__inner{
      border-top-left-radius:0px; 
      border-bottom-left-radius:0px; 
      border-left-width: 0px;
    
  }
  .el-input__prefix {
    left: 155px;
    -webkit-transition: all .3s;
    transition: all .3s;
}
  /*.el-input__prefix{
      right:0px;
  }  */


</style>