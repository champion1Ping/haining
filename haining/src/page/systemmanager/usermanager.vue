<template>
	<div class="usermanager">
  <div class="btn">
		<span style="color:#C9A44E;font-size:20px">
		合同收益分配表&nbsp;&nbsp;&nbsp;
		<el-button type="primary">退出</el-button>
		<el-button type="primary">添加</el-button>
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
       <el-button type="info"  class="left">用户性质&nbsp;&nbsp;&nbsp;&nbsp;</el-button><el-input class="right" style="width:180px"></el-input>

  </el-col>
  <el-col :span="6">
        <el-button type="info"  class="left">是否冻结&nbsp;&nbsp;&nbsp;&nbsp;</el-button><el-select v-model="value" style="width:180px" class="right">
    <el-option
      v-for="item in status"
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
    :data="tableData"
    border
    style="width: 100%" header-align="center">
    <el-table-column prop="date" label="用户账号" align="center" width="180"></el-table-column>
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
        status: [{
          value: '1',
          label: '是'
        }, {
          value: '2',
          label: '否'
        },],
        value1:''
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