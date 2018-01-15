<template>
	<div class="usermanager">

<!-- 弹出框开始 -->
  <el-dialog title="用户添加" :visible.sync="dialogAddUser" width="80%">
    <div>用户信息</div>
    <div style="border:1px solid;border-radius:4px;">
                
    <el-form :model="form" style="padding:10px">
       <el-row>
  <el-col :span="8">
    <el-button type="info"  class="left">用户账号</el-button><el-input v-model="userAccount"class="right" style="width:180px"></el-input>
  </el-col>
  <el-col :span="8">
        <el-button type="info" class="left">用户名称</el-button><el-input v-model="userName" class="right" style="width:180px"></el-input>
  </el-col>
  <el-col :span="8">
       <el-button type="info"  class="left">联系方式</el-button><el-input v-model="contactPhone" class="right" style="width:180px"></el-input>
  </el-col>
  </el-row>
<el-row style="margin-top:10px">
    <el-col :span="8">
       <el-button type="info"  class="left">用户性质</el-button><el-select v-model="userType" style="width:180px" class="right" placeholder="请选择">
    <el-option
      v-for="item in this.$store.state.usertype.usermanager"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-col>
  <el-col :span="8">
       <el-button type="info"  class="left">代理商编码</el-button><el-select v-model="agentCode" style="width:180px" class="right" placeholder="请选择">
    <el-option
      v-for="item in this.$store.state.usertype.usermanager"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-col>
  <el-col :span="8">
       <el-button type="info"  class="left">代理商名称</el-button><el-input v-model="agentName" class="right" style="width:180px"></el-input>
  </el-col>
  </el-row>
  <el-row style="margin-top:10px">
    <el-col :span="8">
        <el-button type="info"  class="left">是否冻结</el-button><el-select v-model="freeze" style="width:180px" class="right" placeholder="请选择">
    <el-option
      v-for="item in this.$store.state.xialakuang.yesorno"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-col> 
  <el-col :span="16">
       <el-button type="info"  class="left">冻结日期</el-button><el-date-picker
      v-model="freezeDate"
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
      <el-button type="info"  class="left">新密码</el-button><el-input v-model="pass"  class="right" style="width:180px"></el-input>
  </el-col>
  <el-col :span="8">
    <el-button type="info"  class="left">确认密码</el-button><el-input v-model="checkpass" class="right" style="width:180px"></el-input>
  </el-col> 
  </el-row>
    </div>

  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogAddUser = false">取 消</el-button>
    <el-button type="primary" @click="dialogAddUser = false">确 定</el-button>
  </div>
</el-dialog>
<!-- 弹出框结束-->

  <div class="btn">
		<span style="color:#C9A44E;font-size:20px">
		用户管理&nbsp;&nbsp;&nbsp;
		<el-button type="primary">退出</el-button>
		<el-button type="primary" @click="addUser()">添加</el-button>
		<el-button type="primary">查询</el-button>
		</span>
    </div>

    <div class="fm">
      <el-row>
  <el-col :span="6">
    <el-button type="info"  class="left">用户账号</el-button><el-input class="right" style="width:180px"></el-input>
    
  </el-col>
  <el-col :span="6">
        <el-button type="info"  class="left">用户名称&nbsp;&nbsp;&nbsp;&nbsp;</el-button><el-input class="right" style="width:180px"></el-input>

  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left">用户性质&nbsp;&nbsp;&nbsp;&nbsp;</el-button><el-select v-model="userType" style="width:180px" class="right" placeholder="请选择">
    <el-option
      v-for="item in this.$store.state.usertype.usermanager"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-col>
  <el-col :span="6">
        <el-button type="info"  class="left">是否冻结&nbsp;&nbsp;&nbsp;&nbsp;</el-button><el-select v-model="value" style="width:180px" class="right">
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
    <el-button type="info"  class="left">联系方式</el-button><el-input class="right" style="width:180px"></el-input>
  </el-col>
  <el-col :span="6">
      <el-button type="info"  class="left">直推人号码</el-button><el-input class="right" style="width:180px"></el-input>
  </el-col>
  <el-col :span="6">
      <el-button type="info"  class="left">创建时间从</el-button><el-date-picker
      v-model="value1"
      type="date"
      class="right"
      style="width:180px"
      >
    </el-date-picker>
  </el-col>
  <el-col :span="6">
    <el-button type="info"  class="left">创建时间到</el-button><el-date-picker
      v-model="value1"
      type="date"
      class="right"
      style="width:180px"
      ></el-date-picker>
    
  </el-col> 
    
  </el-row>
    </div>
	<div class="tbl">
    <el-table
    :data="userTable"
    border
    style="width: 100%" header-align="center">
    <el-table-column prop="userAccount" label="用户账号" align="center" width="180"></el-table-column>
    <el-table-column prop="userName" label="用户名称" align="center" width="180"></el-table-column>
    <el-table-column prop="userType" label="用户性质" align="center" width="180"></el-table-column>
    <el-table-column prop="agentName" label="代理商名称" align="center" width="180"></el-table-column>
    <el-table-column prop="contactPhone" label="联系方式" align="center" width="180"></el-table-column>
    <el-table-column prop="createTime" label="创建时间" align="center" width="180"></el-table-column>
    <el-table-column prop="freeze" label="是否冻结" align="center" width="180"></el-table-column>
    <el-table-column prop="freezeDate" label="冻结时间" align="center" width="180"></el-table-column>
    <el-table-column prop="agentCode" label="代理商编号" align="center" width="180"></el-table-column>
    <el-table-column prop="directRecommendPhoneNumber" label="直接推荐人号码" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="用户信息明细" align="center" width="180"></el-table-column>
  </el-table>
  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 50, 100]"
      :page-size="10"
      layout="total, sizes, prev, pager, next"
      prev-text="<上一页"
      next-text="下一页>"
      :total="70">
    </el-pagination>
  </div>
	
	
	<el-row></el-row>
	</div>
</template>
<script>
  export default{
    data(){
      return{
        dialogAddUser:false,
        userAccount:'',
        userName:'',
        contactPhone:'',
        userType:'',
        agentCode:'',
        agentName:'',
        freeze:'',
        freezeDate:'',
        pass:'',
        checkpass:'',
        value1:''
      }
    },
    created:function(){
       alert("a");
    },
    methods:{
      addUser(){
         this.dialogAddUser = true;
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