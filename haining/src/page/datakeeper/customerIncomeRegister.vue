<template>
	<div class="customerregister">
  <!-- 弹出框开始 -->
  <el-dialog title="档案添加" :visible.sync="dialogAddFile" width="90%">
    <div>档案添加</div>
    <div style="border:1px solid;border-radius:4px;">
                
    <el-form :model="form" style="padding:10px">
       <el-row>
  <el-col :span="6">
    <el-button type="info"  class="left">档案编号</el-button><el-input class="right" style="width:150px"></el-input>
  </el-col>
  <el-col :span="6">
        <el-button type="info" class="left">客户名称</el-button><el-input class="right" style="width:150px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left">交易平台</el-button><el-input class="right" style="width:150px"></el-input>
  </el-col>
   <el-col :span="6">
       <el-button type="info"  class="left">交易账户号</el-button><el-input class="right" style="width:150px"></el-input>
  </el-col>
  </el-row>
<el-row style="margin-top:10px">
    <el-col :span="6">
    <el-button type="info"  class="left">是否入金</el-button><el-select v-model="value" style="width:150px" class="right" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-col>
  <el-col :span="6">
        <el-button type="info" class="left">入金如期</el-button><el-date-picker
      v-model="value1"
      type="date"
      class="right"
      style="width:150px"
      ></el-date-picker>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left">证件类型</el-button><el-select v-model="value" style="width:150px" class="right" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-col>
   <el-col :span="6">
       <el-button type="info"  class="left">证件号码</el-button><el-input class="right" style="width:150px"></el-input>
  </el-col>
  </el-row>
  <el-row style="margin-top:10px">
    <el-col :span="6">
      <el-button type="info"  class="left">签约日期</el-button><el-date-picker
      v-model="value1"
      type="date"
      class="right"
      style="width:150px"
      >
    </el-date-picker>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left">产品类型</el-button><el-select v-model="value" style="width:150px" class="right" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left">产品收益率</el-button><el-input class="right" style="width:150px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left">服务期限</el-button><el-input class="right" style="width:150px"></el-input>
  </el-col>
  </el-row>
<el-row style="margin-top:10px">
    
  <el-col :span="6">
       <el-button type="info"  class="left">购买份数</el-button><el-input class="right" style="width:150px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left">投资金额/</el-button><el-input class="right" style="width:150px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left">预估收益</el-button><el-input class="right" style="width:150px"></el-input>
  </el-col>
  <el-col :span="6">
      <el-button type="info"  class="left">联系方式</el-button><el-input class="right"  style="width:150px"></el-input>
  </el-col>
  </el-row>

  <el-row style="margin-top:10px">
    <el-col :span="6">
      <el-button type="info"  class="left">注册邮箱号</el-button><el-input class="right" style="width:150px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left">代理商编号</el-button><el-input class="right" style="width:150px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left">直推人</el-button><el-input class="right" style="width:150px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left">间推人</el-button><el-input class="right" style="width:150px"></el-input>
  </el-col>
  </el-row>

 </el-form>
  </div> 

  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogAddFile = false">取 消</el-button>
    <el-button type="primary" @click="dialogAddFile = false">确 定</el-button>
  </div>
</el-dialog>
<!-- 弹出框结束-->
  <div class="btn">
		<span style="color:#C9A44E;font-size:20px">
		客户入金登记表&nbsp;&nbsp;&nbsp;
		<el-button type="primary">退出</el-button>
		<el-button type="primary" @click="addDangAn()">添加</el-button>
		<el-button type="primary">保存</el-button>
		<el-button type="primary">查询</el-button>
		</span>
    </div>

    <div class="fm">
      <el-row>
  <el-col :span="6">
    <el-button type="info"  class="left">档案编号</el-button><el-input class="right" style="width:180px"></el-input>
    
  </el-col>
  <el-col :span="6">
        <el-button type="info"  class="left">交易平台</el-button><el-input class="right" style="width:180px"></el-input>

  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left">是否入金&nbsp;&nbsp;&nbsp;&nbsp;</el-button><el-input class="right" style="width:180px"></el-input>

  </el-col>
  <el-col :span="6">
        <el-button type="info"  class="left">产品类型&nbsp;&nbsp;&nbsp;&nbsp;</el-button><el-input class="right" style="width:180px"></el-input>
    </el-input>
  </el-col> 
  </el-row>
  <el-row style="padding-top:10px">
  <el-col :span="6">
    <el-button type="info"  class="left">注册邮箱</el-button><el-input class="right" style="width:180px"></el-input>
  </el-col>
  <el-col :span="6">
      <el-button type="info"  class="left">入金日期从</el-button><el-date-picker
      v-model="value1"
      type="date"
      class="right"
      style="width:180px"
      >
    </el-date-picker>
  </el-col>
  <el-col :span="6">
      <el-button type="info"  class="left">签约日期从</el-button><el-date-picker
      v-model="value1"
      type="date"
      class="right"
      style="width:180px"
      >
    </el-date-picker>
  </el-col>
  <el-col :span="6">
    <el-button type="info"  class="left">签约日期到</el-button><el-date-picker
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
    :data="tableData"
    border
    style="width: 100%" header-align="center">
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
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
        dialogAddFile:false,
        status: [{
          value: '1',
          label: '正常'
        }, {
          value: '2',
          label: '结束'
        }, {
          value: '3',
          label: '提前终止'
        }, {
          value: '4',
          label: '未交易'
        }, ],
        value1:''
      }
    },
    methods:{
      addDangAn(){
          this.dialogAddFile = true;
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
  /*日期框icon右移*/
  .el-input__prefix {
    left: 155px;
    -webkit-transition: all .3s;
    transition: all .3s;
}
  /*.el-input__prefix{
      right:0px;
  }  */


</style>