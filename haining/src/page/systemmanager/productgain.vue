<template>
	<div class="productgain">
  <div class="btn">
		<span style="color:#C9A44E;font-size:20px">产品收益维护&nbsp;&nbsp;&nbsp;
		<el-button type="primary">退出</el-button>
		<el-button type="primary">添加</el-button>
		<el-button type="primary">保存</el-button>
		</span>
    </div>

    
	<div class="tbl">
    <el-table
    :data="tableData"
    border
    style="width: 100%" header-align="center">
    <el-table-column prop="date" label="序号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="产品类型" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="服务期限（月）" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="月收益率" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="启用" align="center" width="180"></el-table-column>
  </el-table>
 
  </div>
	</div>
</template>
<script>
  export default{
    data(){
      return{
        
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
  .tbl{
    background-color:#FFFFFF;
    margin-top: 10px;
    margin-right:200px;
    margin-left: 280px;
    margin-bottom: 200px;
    padding-top: 50px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 160px;
  }
  


</style>