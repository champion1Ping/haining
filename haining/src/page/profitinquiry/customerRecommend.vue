<template>
	<div class="customerRecommend">
  <div class="btn">
		<span style="color:#C9A44E;font-size:20px">
		客户推荐表&nbsp;&nbsp;&nbsp;
		<el-button type="primary">退出</el-button>
		<el-button type="primary">查询</el-button>
		<el-button type="primary">导出表格</el-button>
		</span>
    </div>

    <div class="fm">
      <el-row>
  <el-col :span="6">
    <el-button type="info"  class="left">注册账号</el-button><el-input class="right" style="width:180px"></el-input>
    
  </el-col>
  <el-col :span="6">
        <el-button type="info"  class="left">真实姓名&nbsp;&nbsp;&nbsp;&nbsp;</el-button><el-input class="right" style="width:180px"></el-input>

  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left">是否入金&nbsp;&nbsp;&nbsp;&nbsp;</el-button><el-select v-model="value" style="width:180px" class="right">
    <el-option
      v-for="item in status"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

  </el-col>
  <el-col :span="6">
        <el-button type="info"  class="left">推荐人资质&nbsp;&nbsp;&nbsp;&nbsp;</el-button><el-input class="right" style="width:180px"></el-input>
    </el-input>
  </el-col> 
  </el-row>
  <el-row style="padding-top:10px">
  <el-col :span="6">
    <el-button type="info"  class="left">直推人账号 </el-button><el-input class="right" style="width:180px"></el-input>

  </el-col>
  <el-col :span="6">
      <el-button type="info"  class="left">间推人账号</el-button><el-input class="right" style="width:180px"></el-input>
  </el-col>
  <el-col :span="6">
      <el-button type="info"  class="left">注册日期从</el-button><el-date-picker
      v-model="value1"
      type="date"
      class="right"
      style="width:180px"
      >
    </el-date-picker>
  </el-col>
  <el-col :span="6">
    <el-button type="info"  class="left">注册日期到</el-button><el-date-picker
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
    :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
    border
    style="width: 100%" header-align="center">
    <el-table-column prop="account" label="注册账号" align="center" width="180"></el-table-column>
    <el-table-column prop="realName" label="真实姓名" align="center" width="180"></el-table-column>
    <el-table-column prop="contactPhone" label="联系方式" align="center" width="180"></el-table-column>
    <el-table-column prop="sexName" label="性别" align="center" width="180"></el-table-column>
    <el-table-column prop="gmtCreate" label="注册日期" align="center" width="180"></el-table-column>
    <el-table-column prop="whetherRealName" label="是否实名" align="center" width="180"></el-table-column>
    <el-table-column prop="wheatherGetMoney" label="是否入金" align="center" width="180"></el-table-column>
    <el-table-column prop="sumMoney" label="入金金额" align="center" width="180"></el-table-column>
    <el-table-column prop="refereeQualification" label="推荐人资质" align="center" width="180"></el-table-column>
    <el-table-column prop="email" label="邮箱地址" align="center" width="180"></el-table-column>
    <el-table-column prop="agentName" label="负责代理商" align="center" width="180"></el-table-column>
    <el-table-column prop="directRecommendationAccount" label="直推人账号" align="center" width="180"></el-table-column>
    <el-table-column prop="indirectRecommendationAccount" label="间推人账号" align="center" width="180"></el-table-column>
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
      :total="tableData.length">
    </el-pagination>
  </div>
	
	
	<el-row></el-row>
	</div>
</template>
<script>
  export default{
    data(){
      return{
        currentPage:1,
        pageSize:100,
        
        value1:''
      }
    },
     
    methods:{
       handleSizeChange(size){
        this.pageSize = size;
        },
        handleCurrentChange(page){
         this.currentPage= page;
        },
      getCustomerRecommandVOList(){
          this.$http.post('/user/checkRegetCustomerRecommandVOListExcel',
          this.qs.stringify({
                'account':this.$store.state.token,
                'realName':this.$store.state.token,
                'whetherGetMoney':this.$store.state.token,
                'refereeQualification':this.$store.state.token,
                'directRecommendationAccount':this.$store.state.token,
                'indirectRecommendationAccount':this.$store.state.token,
                'gmtCreateBegin':this.$store.state.token,
                'gmtCreateEnd':this.$store.state.token,
                'pageNum':this.$store.state.token,
                'pageSize':this.$store.state.token,
             })
             )
             .then(function(res){

             })
             .catch(function(err){

             })
      },
      getCustomerRecommandVOListExcel(){
          this.$http.post('/user/checkRegetCustomerRecommandVOListExcel',
          this.qs.stringify({
                'account':this.$store.state.token,
                'realName':this.$store.state.token,
                'whetherGetMoney':this.$store.state.token,
                'refereeQualification':this.$store.state.token,
                'directRecommendationAccount':this.$store.state.token,
                'indirectRecommendationAccount':this.$store.state.token,
                'gmtCreateBegin':this.$store.state.token,
                'gmtCreateEnd':this.$store.state.token,
                'pageNum':this.$store.state.token,
                'pageSize':this.$store.state.token,
             })
             )
             .then(function(res){

             })
             .catch(function(err){

             })
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