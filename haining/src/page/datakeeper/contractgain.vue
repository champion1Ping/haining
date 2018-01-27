<template>
	<div class="contractgain">
  <div class="btn">
		<span style="color:#C9A44E;font-size:20px">
		合同收益分配表&nbsp;&nbsp;&nbsp;
		<el-button type="primary" @click="quit()">退出</el-button>
		<el-button type="primary" @click="getContractDitrubuteIncomeList()">查询</el-button>
		<el-button type="primary" @click="exportToExcel()">导出表格</el-button>
		</span>
    </div>

    <div class="fm">
      <el-row>
  <el-col :span="6">
    <el-button type="info"  class="left">档案编号</el-button><el-input v-model="documentCode" class="right" style="width:180px"></el-input>
    
  </el-col>
  <el-col :span="6">
        <el-button type="info"  class="left">客户名称</el-button><el-input v-model="coustomerName" class="right" style="width:180px"></el-input>

  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left">投资金额</el-button><el-select v-model="amountType" style="width:180px" class="right">
    <el-option
      v-for="item in this.$store.state.xialakuang.investMoney"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-col>
  <el-col :span="6">
        <el-button type="info"  class="left">产品类型</el-button><el-select v-model="productType" style="width:180px" class="right">
    <el-option
      v-for="item in productTypes"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-col> 
  </el-row>
  <el-row style="padding-top:10px">
  <el-col :span="6">
    <el-button type="info"  class="left">交易状态 </el-button><el-select v-model="dealStatus" style="width:180px" class="right">
    <el-option
      v-for="item in this.$store.state.xialakuang.dealStatus"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select><!-- <el-input class="right" style="width:180px"></el-input> -->
  </el-col>
  <el-col :span="6">
      <el-button type="info"  class="left">产品收益率</el-button><el-input v-model="productRate" class="right" style="width:180px"></el-input>
  </el-col>
  <el-col :span="6">
      <el-button type="info"  class="left">截止日期从</el-button><el-date-picker
      v-model="tradeEndDateBegin"
      type="date"
      class="right"
      style="width:180px"
      >
    </el-date-picker>
  </el-col>
  <el-col :span="6">
    <el-button type="info"  class="left">截止日期到</el-button><el-date-picker
      v-model="tradeEndDateEnd"
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
    <el-table-column prop="documentCode" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="customerName" label="客户名称" align="center" width="180"></el-table-column>
    <el-table-column prop="investmentAmount" label="投资金额($)" align="center" width="180"></el-table-column>
    <el-table-column prop="contractIncome" label="合同收益($)" align="center" width="180"></el-table-column>
    <el-table-column prop="firstTradeDate" label="首交易日" align="center" width="180"></el-table-column>
    <el-table-column prop="productTypeName" label="产品类型" align="center" width="180"></el-table-column>
    <el-table-column prop="tradeEndDate" label="截止日期" align="center" width="180"></el-table-column>
    <el-table-column prop="tradeStatus" label="交易状态" align="center" width="180"></el-table-column>
    <el-table-column prop="productRate" label="产品收益率" align="center" width="180"></el-table-column>
    <el-table-column prop="derectRecomandPersonName" label="直推人" align="center" width="180"></el-table-column>
    <el-table-column prop="derectRecomandRate" label="直推收益率" align="center" width="180"></el-table-column>
    <el-table-column prop="inderectRecomandPersonName" label="间推人" align="center" width="180"></el-table-column>
    <el-table-column prop="inderectRecomandRate" label="间推收益率" align="center" width="180"></el-table-column>
    <el-table-column prop="agentCode" label="代理商编号" align="center" width="180"></el-table-column>
    <el-table-column prop="agentRate" label="代理收益率" align="center" width="180"></el-table-column>
    <el-table-column prop="customerIncome" label="客户收益($)" align="center" width="180"></el-table-column>
    <el-table-column prop="derectIncome" label="直推人收益($)" align="center" width="180"></el-table-column>
    <el-table-column prop="inderectIncome" label="间推人收益($)" align="center" width="180"></el-table-column>
    <el-table-column prop="agentIncome" label="代理商收益($)" align="center" width="180"></el-table-column>
    <el-table-column prop="companyIncome" label="公司收益($)" align="center" width="180"></el-table-column>
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
        pageSize:100,
        currentPage:1,
        tableData:[],
        documentCode:'',
        customerName:'',
        amountType:'',
        productType:'',
        dealStatus:'',
        productRate:'',
        tradeEndDateBegin:'',
        tradeEndDateEnd:'',
        value1:'',
        }
    },
    created:function(){
       this.getContractDitrubuteIncomeList();
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
      getContractDitrubuteIncomeList(){
        var me = this;
        this.$http.post('/personDocument/getContractDitrubuteIncomeList',
              this.qs.stringify({
                'token':this.$store.state.token,
                'pageNum':'',
                'pageSize':'',
                'documentCode':this.documentCode,
                'amountType':this.amountType,
                'tradeStatus':this.tradeStatus,
                'productType':this.productType,
                'productRate':this.productRate,
                'customerName':this.customerName,
                'tradeEndDateBegin':this.tradeEndDateBegin,
                'tradeEndDateEnd':this.tradeEndDateEnd,
              }))
            .then(function(res){
                    // alert(JSON.stringify(res));
                    var info = res['data'];
                    var code = info['code'];
                    var message = info['message'];
                    var data = info['data'];
                    me.tableData = data['page']['list'];
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