<template>
	<div class="contractgain">
  <div class="btn">
		<span style="color:#C9A44E;font-size:20px">
		代理商收益表&nbsp;&nbsp;&nbsp;
		<el-button type="primary" @click="quit()">退出</el-button>
		<el-button type="primary" @click="agentProfitQuery()">查询</el-button>
		<el-button type="primary" @click="exportToExcel()">导出表格</el-button>
		</span>
    </div>

    <div class="fm">
      <el-row>
  <el-col :span="6">
    <el-button type="info"  class="left" disabled>档案编号</el-button><el-input clearable class="right" v-model="documentCode" style="width:180px"></el-input>
    
  </el-col>
  <el-col :span="6">
        <el-button type="info"  class="left" disabled>客户名称&nbsp;&nbsp;&nbsp;&nbsp;</el-button><el-input clearable  v-model="customerName" class="right" style="width:180px"></el-input>

  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>投资金额&nbsp;&nbsp;&nbsp;&nbsp;</el-button><el-select clearable v-model="investmentAmount" style="width:180px" class="right">
    <el-option
      v-for="item in this.$store.state.xialakuang.investMoney"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

  </el-col>
  <el-col :span="6">
        <el-button type="info"  class="left" disabled>产品类型&nbsp;&nbsp;&nbsp;&nbsp;</el-button><el-select clearable v-model="productId" style="width:180px" class="right" placeholder="请选择">
    <el-option
      v-for="item in productTypes"
      :key="item.id"
      :label="item.productTypeName"
      :value="item.id">
    </el-option>
  </el-select>
    </el-input>
  </el-col> 
  </el-row>
  <el-row style="padding-top:10px">
  <el-col :span="6">
    <el-button type="info"  class="left" disabled>交易状态 </el-button><el-select clearable  v-model="tradeStatus" style="width:180px" class="right">
    <el-option
      v-for="item in this.$store.state.xialakuang.dealStatus"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select><!-- <el-input clearable class="right" style="width:180px"></el-input> -->
  </el-col>
  <el-col :span="6">
      <el-button type="info"  class="left" disabled>产品收益率</el-button><el-input clearable class="right"  v-model="productRate" style="width:180px"></el-input>
  </el-col>
  <el-col :span="6">
      <el-button type="info"  class="left" disabled>截止日期从</el-button><el-date-picker
      v-model="startDate"
      type="date"
      class="right"
      style="width:180px"
      >
    </el-date-picker>
  </el-col>
  <el-col :span="6">
    <el-button type="info"  class="left" disabled>截止日期到</el-button><el-date-picker
      v-model="endDate"
      type="date"
      class="right"
      style="width:180px"
      ></el-date-picker>
    
  </el-col> 
    
  </el-row>
    </div>
	<div class="tbl" style="margin:10px;">
    <el-table
    size="mini"
    :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
    border
    style="width: 100%" header-align="center">
    <el-table-column prop="documentCode" label="档案编号" align="center" width="140px"></el-table-column>
    <el-table-column prop="customerName" label="客户名称" align="center" width="100px"></el-table-column>
    <el-table-column prop="investmentAmount" label="投资金额($)" align="center" width="100"></el-table-column>
    <el-table-column prop="contractIncome" label="合同收益($)" align="center" width="100"></el-table-column>
    <el-table-column prop="firstTradeDate" label="首交易日" align="center" width="120"></el-table-column>
    <el-table-column prop="productTypeName" label="产品类型" align="center"  width="100"></el-table-column>
    <el-table-column prop="tradeEndDate" label="截止日期" align="center" width="120"></el-table-column>
    <el-table-column prop="tradeStatusName" label="交易状态" align="center" width="100"></el-table-column>
    <el-table-column prop="productRate" label="产品收益率" align="center" width="100"></el-table-column>
    <el-table-column prop="agentCode" label="代理商编号" align="center" width="120"></el-table-column>
    <el-table-column prop="agentRate" label="代理收益率" align="center" width="100"></el-table-column>
    <el-table-column prop="agentIncome" label="代理商收益($)" align="center" width="100"></el-table-column>
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
        productTypes:[],
        documentCode:'',
        customerName:'',
        investmentAmount:'',
        productId:'',
        productRate:'',
        tradeStatus:'',
        startDate:'',
        endDate:'',
        value1:''
      }
    },
    created(){
       this.agentProfitQuery();
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
                  console.log(JSON.stringify(me.productTypes));

            })
            .catch(function(err){

            });
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
      agentProfitQuery(){
        let me = this;
        this.$http.post('/personDocument/getContractDitrubuteIncomeList',
              this.qs.stringify({
                'token':sessionStorage.getItem("token"),

                'documentCode':this.documentCode,
                'customerName':this.customerName,
                'investmentAmount':this.investmentAmount,
                'productId':this.productId,
                'productRate':this.productRate,
                'tradeEndDateBegin':this.startDate,
                'tradeEndDateEnd':this.endDate,
                'pageNum':'',
                'pageSize':'',

              }))
            .then(function(res){
              // console.log(JSON.stringify(res));
              var info = res['data'];
              var code = info['code'];
              var data = info['data'];
              me.tableData = data['page']['list'];
            })
            .catch(function(err){

            })
      },
      formatJson(filterVal, jsonData) {
　　　　　　return jsonData.map(v => filterVal.map(j => v[j]))
　　　　},
      exportToExcel(){
        require.ensure([], () => {
　　　　　　　　const { export_json_to_excel } = require('../../vendor/Export2Excel');
　　　　　　　　const tHeader = ['档案编号', '客户名称', '投资金额($)', '合同收益($)', '姓名','首交易日','产品类型','截止日期','交易状态','产品收益率','代理商编号','代理收益率','代理商收益($)']; //对应表格输出的title
　　　　　　　　const filterVal = ['documentCode', 'customerName', 'investmentAmount', 'contractIncome', 'firstTradeDate','firstTradeDate','productTypeName','tradeEndDate','tradeStatusName','productRate','agentCode','agentRate','agentIncome'];
　　　　　　　　const list = this.tableData;
　　　　　　　　const data = this.formatJson(filterVal, list);
　　　　　　　　export_json_to_excel(tHeader, data, '代理商收益表'); //对应下载文件的名字
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
  
  /*.el-input__prefix{
      right:0px;
  }  */


</style>