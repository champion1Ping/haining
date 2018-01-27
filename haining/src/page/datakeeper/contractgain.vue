<template>
	<div class="contractgain">
    <!-- 弹出框开始 -->
  <el-dialog title="合同收益修改" :visible.sync="updateContractDialog" width="95%">
    <div>收益修改</div>
    <div style="border:1px solid;border-radius:4px;">
                
    <el-form :model="updateContract" style="padding:5px">
       <el-row>
  <el-col :span="6">
    <el-button type="info"  class="left" disabled>档案编号</el-button><el-input clearable  v-model="updateContract.documentCode"class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
        <el-button type="info" class="left" disabled>客户名称</el-button><el-input clearable  v-model="updateContract.customerName"class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>投资金额</el-button><el-input clearable v-model="updateContract.investmentAmount"class="right" style="width:177px"></el-input>
  </el-col>
   <el-col :span="6">
       <el-button type="info"  class="left" disabled>合同收益</el-button><el-input clearable v-model="updateContract.contractIncome"class="right" style="width:177px"></el-input>
  </el-col>
  </el-row>


<el-row style="margin-top:10px">
    <el-col :span="6">
    <el-button type="info"  class="left" disabled>产品类型</el-button><el-select clearable v-model="updateContract.productType" style="width:177px" class="right" placeholder="请选择">
    <el-option
      v-for="item in productTypes"
      :key="item.id"
      :label="item.productTypeName"
      :value="item.id">
    </el-option>
  </el-select>
  </el-col>
  <el-col :span="6">
        <el-button type="info" class="left" disabled>首交易日</el-button><el-date-picker
      v-model="updateContract.firstTradeDate"
      type="date"
      class="right"
      value-format="yyyyMMdd"
      style="width:177px"
      ></el-date-picker>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>期限截止日</el-button>
    <el-date-picker
      v-model="updateContract.tradeEndDate"
      type="date"
      class="right"
      value-format="yyyyMMdd"
      style="width:177px"
      ></el-date-picker>
  </el-select>
  </el-col>
   <el-col :span="6">
       <el-button type="info"  class="left" disabled>交易状态</el-button><el-select clearable v-model="updateContract.tradeStatus" style="width:180px" class="right">
    <el-option
      v-for="item in this.$store.state.xialakuang.dealStatus"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-col>
  </el-row>

  <el-row style="margin-top:10px">
    <el-col :span="6">
      <el-button type="info"  class="left" disabled>产品收益率</el-button><el-input clearable v-model="updateContract.productRate"class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>客户收益额</el-button><el-input clearable v-model="updateContract.customerIncome"class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>直推收益率</el-button><el-input clearable  v-model="updateContract.derectRecomandRate"class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>直推收益额</el-button><el-input clearable   v-model="updateContract.derectIncome"class="right" style="width:177px"></el-input>
  </el-col>
  </el-row>


<el-row style="margin-top:10px">
    
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>间推收益率</el-button><el-input clearable v-model="updateContract.inderectRecomandRate" class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>间推收益额</el-button><el-input clearable  v-model="updateContract.inderectIncome"class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
      <el-button type="info"  class="left" disabled>代理商收益率</el-button><el-input clearable v-model="updateContract.agentRate"class="right"  style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
      <el-button type="info"  class="left" disabled>代理商收益额</el-button><el-input clearable v-model="updateContract.agentIncome" class="right" style="width:177px"></el-input>
  </el-col>
  </el-row>

  <el-row style="margin-top:10px">
    
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>公司收益额</el-button><el-input clearable  v-model="updateContract.companyIncome"class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>直推人</el-button><el-input clearable  v-model="updateContract.derectRecomandPersonId"class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>间推人</el-button><el-input clearable  v-model="updateContract.inderectRecomandPersonId"class="right" style="width:177px"></el-input>
  </el-col>
  </el-row>

 </el-form>
  </div> 

  <div slot="footer" class="dialog-footer">
    <el-button @click="updateContractDialog = false">取 消</el-button>
    <el-button type="primary" @click="updateContract()">修改</el-button>
  </div>
</el-dialog>
<!-- 弹出框结束-->


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
    <el-button type="info"  class="left" disabled>档案编号</el-button><el-input clearable v-model="documentCode" class="right" style="width:180px"></el-input>
    
  </el-col>
  <el-col :span="6">
        <el-button type="info"  class="left" disabled>客户名称</el-button><el-input clearable v-model="coustomerName" class="right" style="width:180px"></el-input>

  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>投资金额</el-button><el-select clearable v-model="amountType" style="width:180px" class="right">
    <el-option
      v-for="item in this.$store.state.xialakuang.investMoney"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-col>
  <el-col :span="6">
        <el-button type="info"  class="left" disabled>产品类型</el-button><el-select clearable v-model="productType" style="width:180px" class="right">
    <el-option
      v-for="item in productTypes"
      :key="item.id"
      :label="item.productTypeName"
      :value="item.id">
    </el-option>
  </el-select>
  </el-col> 
  </el-row>
  <el-row style="padding-top:10px">
  <el-col :span="6">
    <el-button type="info"  class="left" disabled>交易状态 </el-button><el-select clearable v-model="dealStatus" style="width:180px" class="right">
    <el-option
      v-for="item in this.$store.state.xialakuang.dealStatus"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select><!-- <el-input clearable class="right" style="width:180px"></el-input> -->
  </el-col>
  <el-col :span="6">
      <el-button type="info"  class="left" disabled>产品收益率</el-button><el-input clearable v-model="productRate" class="right" style="width:180px"></el-input>
  </el-col>
  <el-col :span="6">
      <el-button type="info"  class="left" disabled>截止日期从</el-button><el-date-picker
      v-model="tradeEndDateBegin"
      type="date"
      class="right"
      style="width:180px"
      >
    </el-date-picker>
  </el-col>
  <el-col :span="6">
    <el-button type="info"  class="left" disabled>截止日期到</el-button><el-date-picker
      v-model="tradeEndDateEnd"
      type="date"
      class="right"
      style="width:180px"
      ></el-date-picker>
  </el-col> 
    
  </el-row>
    </div>
	<div class="tbl" style="margin:10px;">
    <el-table
    :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
    border
    style="width: 100%" header-align="center">
    <el-table-column prop="documentCode" label="档案编号" align="center" width="180"></el-table-column>
     <el-table-column
      label="操作"
      align="center"
      width="120px">
      <template slot-scope="scope">
        <el-button @click="update(scope.row)" type="text" size="small">修改</el-button>
      </template>
    </el-table-column>
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
        updateContractDialog:false,
        pageSize:100,
        currentPage:1,
        tableData:[],
        productTypes:[],
        documentCode:'',
        customerName:'',
        amountType:'',
        productType:'',
        dealStatus:'',
        productRate:'',
        tradeEndDateBegin:'',
        tradeEndDateEnd:'',
        updateContract:{
          documentCode:'',
          customerName:'',
          tradePlatform:'',
          tradeAccount:'',
          wheatherGetMoney:'',
          getMoneyDate:'',
          certificateType:'',
          certificateNumber:'',
          contractDate:'',
          productType:'',
          productTypeName:'',
          productRate:'',
          serviceDate:'',
          investmentAmount:'',
          contactPhone:'',
          registerEmail:'',
          agentCode:'',
          derectRecomandPersonId:'',
          inderectRecomandPersonId:'',
          estimatedEarnings:'',
        }
      }
    },
    created:function(){
       this.getContractDitrubuteIncomeList();
       let me = this;
      this.$http.post('/product/getProductVOList',
              this.qs.stringify({
                'token':sessionStorage.getItem("token")
              }))
            .then(function(res){
                  var info = res['data'];
                  var code = info['code'];
                  var message = info['message'];
                  var data = info['data'];
                  me.productTypes = data;

            })
            .catch(function(err){

            });
    },
    methods:{
      update(row){
         this.updateContract.documentCode = row.documentCode;
         this.updateContract.customerName = row.customerName;
         this.updateContract.investmentAmount = row.investmentAmount;
         this.updateContract.contractIncome = row.contractIncome;
         this.updateContract.productType = row.productTypeName;
         this.updateContract.firstTradeDate = row.firstTradeDate;
         this.updateContract.tradeEndDate = row.tradeEndDate;
         this.updateContract.tradeStatus = row.tradeStatus;
         this.updateContract.productRate = row.productRate;
         this.updateContract.customerIncome = row.customerIncome;
         this.updateContract.derectRecomandRate = row.derectRecomandRate;
         this.updateContract.derectIncome = row.derectIncome;
         this.updateContract.inderectRecomandRate = row.inderectRecomandRate;
         this.updateContract.inderectIncome = row.inderectIncome;
         this.updateContract.agentRate = row.agentRate;
         this.updateContract.agentIncome = row.agentIncome;
         this.updateContract.companyIncome = row.companyIncome;
         this.updateContract.derectRecomandPersonId = row.derectRecomandPersonId;
         this.updateContract.inderectRecomandPersonId = row.inderectRecomandPersonId;
         this.updateContractDialog = true;
      },
      formatJson(filterVal, jsonData) {
　　　　　　return jsonData.map(v => filterVal.map(j => v[j]))
　　　　},
      exportToExcel(){
        require.ensure([], () => {
　　　　　　　　const { export_json_to_excel } = require('../../vendor/Export2Excel');
　　　　　　　　const tHeader = ['档案编号', '客户名称', '投资金额($)', '合同收益($)', '首交易日','产品类型','截止日期','交易状态','产品收益率','直推人','直推收益率','间推人','间推收益率','代理商编号','代理收益率','客户收益($)','直推人收益($)','间推人收益($)','代理商收益($)','公司收益($)']; //对应表格输出的title
　　　　　　　　const filterVal = ['documentCode', 'customerName', 'investmentAmount', 'contractIncome', 'firstTradeDate','productTypeName','tradeEndDate','tradeStatus','productRate','derectRecomandPersonName','derectRecomandRate','inderectRecomandPersonName','inderectRecomandRate','agentCode','agentRate','customerIncome','derectIncome','inderectIncome','agentIncome','companyIncome'];
　　　　　　　　const list = this.tableData;
　　　　　　　　const data = this.formatJson(filterVal, list);
　　　　　　　　export_json_to_excel(tHeader, data, '合同收益分配表'); //对应下载文件的名字
　　　　　　})
      },
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
                'token':sessionStorage.getItem("token"),
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
                    if(code == 1) {
                      var data = info['data'];
                      me.tableData = data['page']['list'];
                    } else {
                      var message = info['message'];
                      me.$message.error(message);
                    }
                    
                    
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