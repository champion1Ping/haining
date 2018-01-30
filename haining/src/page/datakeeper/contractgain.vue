<template>
	<div class="contractgain">
    <!-- 弹出框开始 -->
  <el-dialog title="合同收益修改" :visible.sync="updateContractDialog" width="95%">
    <div>收益修改</div>
    <div style="border:1px solid;border-radius:4px;">
                
    <el-form :model="updateContract" style="padding:5px">
       <el-row>
  <el-col :span="6">
    <el-button type="info"  class="left" disabled>档案编号</el-button><el-input  disabled v-model="updateContract.documentCode"class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
        <el-button type="info" class="left" disabled>客户名称</el-button><el-input   v-model="updateContract.customerName"class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>投资金额</el-button><el-input clearable disabled v-model="updateContract.investmentAmount"class="right" style="width:177px"></el-input>
  </el-col>
   <el-col :span="6">
       <el-button type="info"  class="left" disabled>合同收益</el-button><el-input clearable v-model="updateContract.contractIncome"class="right" style="width:177px"></el-input>
  </el-col>
  </el-row>


<el-row style="margin-top:10px">
    <el-col :span="6">
    <el-button type="info"  class="left" disabled>产品类型</el-button><el-select @change="changeProductType()"  v-model="updateContract.productType" style="width:177px" class="right" placeholder="请选择">
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
      value-format="yyyy-MM-dd"
      style="width:177px"
      ></el-date-picker>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>期限截止日</el-button>
    <el-date-picker
    disabled
      v-model="updateContract.tradeEndDate"
      type="date"
      class="right"
      value-format="yyyy-MM-dd"
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
      <el-button type="info"  class="left" disabled>产品收益率</el-button><el-input disabled v-model="updateContract.productRate"class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>客户月收益</el-button><el-input  v-model="updateContract.customerIncome"class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>直推收益率</el-button><el-input clearable   v-model="updateContract.derectRecomandRate"class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>直推月收益</el-button><el-input     v-model="updateContract.derectIncome"class="right" style="width:177px"></el-input>
  </el-col>
  </el-row>


<el-row style="margin-top:10px">
    
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>间推收益率</el-button><el-input  clearable v-model="updateContract.inderectRecomandRate" class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>间推月收益</el-button><el-input   v-model="updateContract.inderectIncome"class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
      <el-button type="info"  class="left" disabled>代理商收益率</el-button><el-input  clearable v-model="updateContract.agentRate"class="right"  style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
      <el-button type="info"  class="left" disabled>代理商月收益</el-button><el-input   
       v-model="updateContract.agentIncome" class="right" style="width:177px"></el-input>
  </el-col>
  </el-row>

  <el-row style="margin-top:10px">
    
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>公司月收益</el-button><el-input  v-model="updateContract.companyIncome"class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>交易平台</el-button><el-input clearable  v-model="updateContract.tradePlatform"class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>交易账号</el-button><el-input clearable  v-model="updateContract.tradeAccount"class="right" style="width:177px"></el-input>
  </el-col>
  </el-row>

 </el-form>
  </div> 

  <div slot="footer" class="dialog-footer">
    <el-button @click="updateContractDialog = false">取 消</el-button>
    <el-button type="primary" @click="modify()">修改</el-button>
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
    size="mini"
    :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
    border
    style="width: 100%" height="412"  header-align="center">
    <el-table-column prop="documentCode" label="档案编号" align="center" width="180"></el-table-column>
     <el-table-column
      label="操作"
      align="center"
      width="120px">
      <template slot-scope="scope">
        <el-button @click="update(scope.row)" type="text" size="small">修改</el-button>
      </template>
    </el-table-column>
    <el-table-column prop="customerName" label="客户名称" align="center" width="90"></el-table-column>
        <el-table-column prop="tradePlatform" label="交易平台" align="center" width="90"></el-table-column>
    <el-table-column prop="tradeAccount" label="交易账户号" align="center" width="90"></el-table-column>
    <el-table-column prop="investmentAmount" label="投资金额($)" align="center" width="100"></el-table-column>
    <el-table-column prop="contractIncome" label="合同收益($)" align="center" width="100"></el-table-column>
    <el-table-column prop="firstTradeDate" label="首交易日" align="center" width="100"></el-table-column>
    <el-table-column prop="productTypeName" label="产品类型" align="center" width="80" ></el-table-column>
    <el-table-column prop="tradeEndDate" label="截止日期" align="center" width="100"></el-table-column>
    <el-table-column prop="tradeStatus" label="交易状态" align="center" width="90"></el-table-column>
    <el-table-column prop="productRate" label="产品收益率" align="center" width="90"></el-table-column>
    <el-table-column prop="derectRecomandPersonName" label="直推人" align="center" width="90"></el-table-column>
    <el-table-column prop="derectRecomandRate" label="直推收益率" align="center" width="90"></el-table-column>
    <el-table-column prop="inderectRecomandPersonName" label="间推人" align="center" width="90"></el-table-column>
    <el-table-column prop="inderectRecomandRate" label="间推收益率" align="center" width="90"></el-table-column>
    <el-table-column prop="agentCode" label="代理商编号" align="center" width="100"></el-table-column>
    <el-table-column prop="agentRate" label="代理收益率" align="center" width="90"></el-table-column>
    <el-table-column prop="customerIncome" label="客户月收益($)" align="center" width="100"></el-table-column>
    <el-table-column prop="derectIncome" label="直推人月收益($)" align="center" width="100"></el-table-column>
    <el-table-column prop="inderectIncome" label="间推人月收益($)" align="center" width="100"></el-table-column>
    <el-table-column prop="agentIncome" label="代理商月收益($)" align="center" width="100"></el-table-column>
    <el-table-column prop="companyIncome" label="公司月收益($)" align="center" width="100"></el-table-column>
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
        contracts:[],
        tempServiceDate:'',
        tempProductRate:'',

        serviceDate:'',
        tradeEndDateBegin:'',
        tradeEndDateEnd:'',
        updateContract:{
          id:'',
          firstTradeDate:'',
          tradeEndDate:'',
          documentCode:'',
          tradeStatus:'',
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
          derectRecomandRate:'',
          inderectRecomandRate:'',
          agentRate:'',
          derectIncome:'',
          inderectIncome:'',
          agentIncome:'',
          companyIncome:'',
          estimatedEarnings:'',
        }
      }
    },
    watch:{
        updateContract:{
         handler:function(val,oldVal){
         let index = this.updateContract.productType;
         if(this.updateContract.firstTradeDate !="") {
           //更新截止日期
           let startDate = this.updateContract.firstTradeDate.split('-');
           let year = startDate[0];
           let month = parseInt(startDate[1]);
           let day = startDate[2];
           // console.log(year+","+month+","+day);
           let addMonth = this.tempServiceDate;
           let totalMonth = month + parseInt(addMonth);
           let addYear = parseInt(totalMonth/12);
           let newMonth = totalMonth - 12 * addYear;
           let newYear = parseInt(year) + parseInt(addYear);
           // console.log(newYear+","+newMonth+","+day);
           this.updateContract.tradeEndDate = newYear +'-'+(newMonth<10?'0'+newMonth:newMonth)+'-'+day;



         }
         this.tempServiceDate = this.productTypes[index-1]['serviceTime'];
         this.updateContract.productRate = this.productTypes[index-1]['monthRate'];
         // this.updateContract.customerIncome = parseInt(this.updateContract.investmentAmount) * parseInt(this.tempServiceDate) * parseFloat(this.updateContract.productRate) * 0.01;
          let t1 = parseFloat(this.updateContract.customerIncome);
          let t2 = parseFloat(this.updateContract.derectIncome);
           let t3 = parseFloat(this.updateContract.inderectIncome);
           let t4= parseFloat(this.updateContract.agentIncome);

          let a = parseFloat(this.updateContract.contractIncome);
           let b = parseFloat(this.updateContract.contractIncome);
           let c = parseFloat(this.updateContract.productRate) * 0.01;
          let d = parseInt(this.updateContract.derectRecomandRate) * 0.01;
          let e = parseInt(this.updateContract.inderectRecomandRate) * 0.01;
          let n = parseInt(this.tempServiceDate);
          let f = parseInt(this.updateContract.agentRate)*0.01;
          if(b - a * n *c > 0){
              t1 = a*n*c;
          }else {
              t1 = b;
          }
          this.updateContract.customerIncome = t1;
          if (b-t1-a*d*n>=0){
             t2=a*d*n
          }else if (b-t1<=0){
             t2 = 0;
          }else {
              t2=b-t1
          }
          // console.log(b+","+t1+","+a+","+d+","+n+","+t2);
          this.updateContract.derectIncome = t2;

          
        if (b-t1-t2-a*e*n>=0) {
           t3=a*e*n
        }else if(b-t1-t2<=0) {
          t3 = 0;
        }else{
          t3=b-t1-t2
        }
        // console.log(b+","+t1+","+t2 + "," + a+","+e+","+n+","+t3);
        // console.log(this.updateContract.inderectIncome);
        this.updateContract.inderectIncome = t3;

        if(b-t1-t2-t3-a*f*n>=0) {
          t4=a*f*n
        } else if (b-t1-t2-t3<=0){
          t4 = 0;
        }else {
          t4=b-t1-t2-t3
        }
       // console.log(b+","+t1+","+t2 + ","+t3+"," + a+","+f+","+n+","+t4);

        this.updateContract.agentIncome = t4;
        this.updateContract.companyIncome = b - t1 -t2 - t3 -t4;


         },
         deep:true//对象内部的属性监听，也叫深度监听
      }
    },
   
    created:function(){
      let me = this;
       this.$http.post('/product/getProductVOList',
              this.qs.stringify({
                'token':sessionStorage.getItem("token")
              }))
            .then(function(res){
                  var info = res['data'];
                  var code = info['code'];
                  if (code ==1){
                     var message = info['message'];
                     var data = info['data'];
                     me.productTypes = data;
                     me.getContractDitrubuteIncomeList();
                  }
                 

            })
            .catch(function(err){

            });
       
       
            
    },
    methods:{

      // showProductName(row,column,cellValue){
        
      //    return  this.productTypes[cellValue-1].productTypeName;
        
      // },
      modify(){
          let me = this;
          let obj = new Object();
          alert(this.updateContract.tradeStatus);
          obj.documentCode= this.updateContract.documentCode;
                  obj.id = this.updateContract.id;
                  obj.customerName=this.updateContract.customerName;
                  obj.tradePlatform=this.updateContract.tradePlatform;
                  obj.tradeAccount=this.updateContract.tradeAccount;
                  obj.investmentAmount=this.updateContract.investmentAmount;
                  obj.contractIncome=this.updateContract.contractIncome;
                  obj.productType=this.updateContract.productType;
                  obj.firstTradeDate=this.updateContract.firstTradeDate;
                  obj.tradeEndDate=this.updateContract.tradeEndDate;
                  obj.tradeStatus=this.updateContract.tradeStatus;
                  obj.productRate=this.updateContract.productRate;
                  obj.customerIncome=this.updateContract.customerIncome;
                  obj.derectRecomandRate=this.updateContract.derectRecomandRate;
                  obj.derectIncome=this.updateContract.derectIncome;
                  obj.inderectIncome=this.updateContract.inderectIncome;
                  obj.inderectRecomandRate=this.updateContract.inderectRecomandRate;
                  obj.agentIncome=this.updateContract.agentIncome;
                  obj.agentRate=this.updateContract.agentRate;
                  obj.companyIncome=this.updateContract.companyIncome;
          obj.documentCode = this.updateContract.documentCode;
          this.contracts.push(obj);
      this.$http.post('/personDocument/updateContractDitrubuteIncome',
              this.qs.stringify({
                'token':sessionStorage.getItem("token"),
                'contractDitrubuteIncomeVOList':JSON.stringify(this.contracts),
                
              }))
            .then(function(res){
                  // console.log(JSON.stringify(res));
                  var info = res['data'];
                  var code = info['code'];
                  var message = info['message'];
                  var data = info['data'];
                  if(code == 1){
                      me.$message.success(message);
                      me.contracts = [];
                      me.getContractDitrubuteIncomeList();
                      me.updateContractDialog = false;
                  }else {
                      me.$message.error(message);
                  }

            })
            .catch(function(err){

            });
      },
     
      update(row){
         this.updateContract.documentCode = row.documentCode;
         this.updateContract.customerName = row.customerName;
         this.updateContract.tradePlatform = row.tradePlatform;
         this.updateContract.tradeAccount = row.tradeAccount;
         this.updateContract.investmentAmount = row.investmentAmount;
         this.updateContract.contractIncome = row.contractIncome;
         this.updateContract.productType = parseInt(row.productTypeName);
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
         this.tempServiceDate = this.productTypes[this.updateContract.productType-1]['serviceTime'];
         this.updateContract.id = row.id;
         // console.log(this.tempServiceDate);
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
        let me = this;
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
                    // console.log(JSON.stringify(res));
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