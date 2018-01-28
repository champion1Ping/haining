<template>
	<div class="customerregister">
  <!-- 弹出框开始 -->
  <el-dialog title="档案添加" :visible.sync="dialogAddFile" width="95%">
    <div>档案添加</div>
    <div style="border:1px solid;border-radius:4px;">
                
    <el-form :model="addDocumentForm" style="padding:5px">
       <el-row>
  <el-col :span="6">
    <el-button type="info"  class="left" disabled>档案编号</el-button><el-input clearable disabled v-model="addDocumentForm.documentCode"class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
        <el-button type="info" class="left" disabled>客户名称</el-button><el-input clearable  v-model="addDocumentForm.customerName"class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>交易平台</el-button><el-input clearable v-model="addDocumentForm.tradePlatform"class="right" style="width:177px"></el-input>
  </el-col>
   <el-col :span="6">
       <el-button type="info"  class="left" disabled>交易账户号</el-button><el-input clearable v-model="addDocumentForm.tradeAccount"class="right" style="width:177px"></el-input>
  </el-col>
  </el-row>
<el-row style="margin-top:10px">
    <el-col :span="6">
    <el-button type="info"  class="left" disabled>是否入金</el-button><el-select clearable v-model="addDocumentForm.wheatherGetMoney" style="width:177px" class="right" placeholder="请选择">
    <el-option
      v-for="item in this.$store.state.xialakuang.yesorno"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-col>
  <el-col :span="6">
        <el-button type="info" class="left" disabled>入金日期</el-button><el-date-picker
       @change="generateDocumentCode()" 
      v-model="addDocumentForm.getMoneyDate"
      type="date"
      class="right"
      value-format="yyyyMMdd"
      style="width:177px"
      ></el-date-picker>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>证件类型</el-button><el-select clearable v-model="addDocumentForm.certificateType" style="width:177px" class="right" placeholder="请选择">
    <el-option
      v-for="item in this.$store.state.xialakuang.certificateType"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-col>
   <el-col :span="6">
       <el-button type="info"  class="left" disabled>证件号码</el-button><el-input clearable v-model="addDocumentForm.certificateNumber"class="right" style="width:177px"></el-input>
  </el-col>
  </el-row>
  <el-row style="margin-top:10px">
    <el-col :span="6">
      <el-button type="info"  class="left" disabled>签约日期</el-button><el-date-picker
      v-model="addDocumentForm.contractDate"
      type="date"
      value-format="yyyyMMdd"
      class="right"
      style="width:177px"
      >
    </el-date-picker>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>产品类型</el-button><el-select clearable @change="productChanged()"v-model="addDocumentForm.productType" style="width:177px" class="right" placeholder="请选择">
    <el-option
      v-for="item in productTypes"
      :key="item.id"
      :label="item.productTypeName"
      :value="item.id">
    </el-option>
  </el-select>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>产品收益率</el-button><el-input clearable disabled v-model="addDocumentForm.productRate"class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>服务期限</el-button><el-input clearable  disabled v-model="addDocumentForm.serviceDate"class="right" style="width:177px"></el-input>
  </el-col>
  </el-row>
<el-row style="margin-top:10px">
    
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>投资金额</el-button><el-input clearable @change="caculateEarning()" v-model="addDocumentForm.investmentAmount" class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>预估收益</el-button><el-input clearable disabled v-model="addDocumentForm.estimatedEarnings"class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
      <el-button type="info"  class="left" disabled>联系方式</el-button><el-input clearable v-model="addDocumentForm.contactPhone"class="right"  style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
      <el-button type="info"  class="left" disabled>注册邮箱号</el-button><el-input clearable v-model="addDocumentForm.registerEmail" class="right" style="width:177px"></el-input>
  </el-col>
  </el-row>

  <el-row style="margin-top:10px">
    
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>代理商编号</el-button><el-input clearable v-model="addDocumentForm.agentCode"class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>直推人</el-button><el-input clearable  v-model="addDocumentForm.derectRecomandPersonId"class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>间推人</el-button><el-input clearable  v-model="addDocumentForm.inderectRecomandPersonId"class="right" style="width:177px"></el-input>
  </el-col>
  </el-row>

 </el-form>
  </div> 

  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogAddFile = false">取 消</el-button>
    <el-button type="primary" @click="addPersonDocument()">保存</el-button>
  </div>
</el-dialog>
<!-- 弹出框结束-->
  <div class="btn">
		<span style="color:#C9A44E;font-size:20px;" >
		客户入金登记表&nbsp;&nbsp;&nbsp;
		<el-button type="primary" @click="quit()">退出</el-button>
		<el-button type="primary" @click="addDangAn()">添加</el-button>
		<el-button type="primary" @click="searchRecords">查询</el-button>
		</span>
    </div>

    <div class="fm">
      <el-row>
  <el-col :span="6">
    <el-button type="info" class="left" disabled>档案编号</el-button><el-input clearable v-model="documentCode" class="right" style="width:180px"></el-input>
  </el-col>
  <el-col :span="6">
        <el-button type="info"  class="left" disabled>交易平台</el-button><el-input clearable  v-model="tradePlatform"class="right" style="width:180px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left" disabled>是否入金</el-button><el-select clearable v-model="wheatherGetMoney" style="width:180px" class="right" placeholder="请选择">
    <el-option
      v-for="item in this.$store.state.xialakuang.yesorno"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

  </el-col>
  <el-col :span="6">
        <el-button type="info"  class="left" disabled>产品类型</el-button><el-select clearable v-model="productType" style="width:180px" class="right" placeholder="请选择">
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
    <el-button type="info"  class="left" disabled>注册邮箱</el-button><el-input clearable  v-model="registerEmail"class="right" style="width:180px"></el-input>
  </el-col>
  <!-- <el-col :span="6">
      <el-button type="info"  class="left" disabled>份数</el-button><el-input clearable  v-model="buyNum"class="right"  style="width:180px"></el-input>-->

    </el-date-picker>
  </el-col>
  <el-col :span="6">
      <el-button type="info"  class="left" disabled>签约日期从</el-button><el-date-picker
      v-model="contractDateBegin"
      type="date"
      class="right"
      style="width:180px"
      >
    </el-date-picker>
  </el-col>
  <el-col :span="6">
    <el-button type="info"  class="left" disabled>签约日期到</el-button><el-date-picker
      v-model="contractDateEnd"
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
    :data="customerIncomeTable.slice((currentPage-1)*pageSize,currentPage*pageSize)"
    border
    style="width: 100%" height="412" header-align="center">
    <el-table-column prop="documentCode" label="档案编号" align="center" width="140"></el-table-column>
    <el-table-column prop="tradePlatform" label="交易平台" align="center" width="90"></el-table-column>
    <el-table-column prop="tradeAccount" label="交易账户号" align="center" width="100"></el-table-column>
    <el-table-column prop="wheatherGetMoney" label="是否入金" align="center" width="80" :formatter="formatter1"></el-table-column>
    <el-table-column prop="getMoneyDate" label="入金日期" align="center" width="120"></el-table-column>
    <el-table-column prop="registerEmail" label="注册邮箱" align="center" width="160"></el-table-column>
    <el-table-column prop="certificateTypeName" label="证件类型" align="center" width="90"></el-table-column>
    <el-table-column prop="certificateNumber" label="证件号" align="center" width="180"></el-table-column>
    <el-table-column prop="contactPhone" label="联系电话" align="center" width="120"></el-table-column>
    <el-table-column prop="contractDate" label="签约日期" align="center" width="120"></el-table-column>
    <el-table-column prop="productTypeName" label="产品类型" align="center" width="120" :formatter="showProductName"></el-table-column>
    <el-table-column prop="productRate" label="收益率($)" align="center" width="100"></el-table-column>
    <el-table-column prop="investmentAmount" label="投资金额($)" align="center" width="120"></el-table-column>
    <el-table-column prop="estimatedEarnings" label="预估收益" align="center" width="120"></el-table-column>
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
      :total="customerIncomeTable.length">
    </el-pagination>
  </div>
	
	
	<el-row></el-row>
	</div>
</template>
<script>
  export default{
    data(){
      return{
        customerIncomeTable:[],

        currentPage:1,
        pageSize:100,
        dialogAddFile:false,
        fileNum:'',
        dealPlatform:'',
        ifIncome:'',
        productTypes:[],
        registerEmail:'',
        nums:'',
        signStartDate:'',
        signEndDate:'',
        value1:'',
        productType:'',
        documentCode:'',
        tradePlatform:'',
        wheatherGetMoney:'',
        buyNum:'',
        contractDateEnd:'',
        contractDateBegin:'',
        registerEmail:'',
        addDocumentForm:{
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
      this.searchRecords();
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

      showProductName(row,column,cellValue){
         return  this.productTypes[cellValue-1].productTypeName;
      },
      formatter1(row,columb,cellValue){
          if (cellValue == 1) {
            return "是";
          } else {
            return "否";
          }
      },
      addPersonDocument(){
        //检验条件
        for(var field in this.addDocumentForm){
          if (field !="derectRecomandPersonId" && field !="inderectRecomandPersonId") {
            if(this.addDocumentForm[field] == ""){
            this.$message.error(field + "必填字段不能为空");
            return;
          }
          }
        }

        if (this.addDocumentForm.investmentAmount % 1000 != 0) {
          this.$message.error("投资金额必须为1000整数倍");
            return;
        }
        console.log(this.addDocumentForm.productType+","+this.addDocumentForm.productTypeName+","+this.addDocumentForm.derectRecomandPersonId+","+this.addDocumentForm.inderectRecomandPersonId);
        this.$http.post('/personDocument/addpersonDocument',
              this.qs.stringify({
                'token':sessionStorage.getItem("token"),
                'documentCode':this.addDocumentForm.documentCode,
                'customerName':this.addDocumentForm.customerName,
                'tradePlatform':this.addDocumentForm.tradePlatform,
                'tradeAccount':this.addDocumentForm.tradeAccount,
                'wheatherGetMoney':this.addDocumentForm.wheatherGetMoney,
                'getMoneyDate':this.addDocumentForm.getMoneyDate,
                'certificateType':this.addDocumentForm.certificateType,
                'certificateNumber':this.addDocumentForm.certificateNumber,
                'contractDate':this.addDocumentForm.contractDate,
                'productTypeName':this.addDocumentForm.productType,
                'productRate':this.addDocumentForm.productRate,
                'serviceDate':this.addDocumentForm.serviceDate,
                'investmentAmount':this.addDocumentForm.investmentAmount,
                'contactPhone':this.addDocumentForm.contactPhone,
                'registerEmail':this.addDocumentForm.registerEmail,
                'agentCode':this.addDocumentForm.agentCode,
                'derectRecomandPersonId':sessionStorage.getItem("derectRecomandPersonId"),
                'inderectRecomandPersonId':sessionStorage.getItem("inderectRecomandPersonId"),
                'estimatedEarnings':this.addDocumentForm.estimatedEarnings,
                'productId':this.addDocumentForm.productType,
                'maxIndex':this.$store.state.nextDocumentNum
              }))
            .then(function(res){
              console.log(JSON.stringify(res));
              var info = res['data'];
                    var code = info['code'];
                    if (code == 1) {
                      me.$message.success('添加成功');
                    }
                  var message = info['message'];
                  var data = info['data'];
            })
            .catch(function(err){

            })
      },
      caculateEarning(){
            if (this.addDocumentForm.investmentAmount % 1000 != 0) {
               this.$message.error("投资金额必须为1000整数倍");
               this.addDocumentForm.investmentAmount ="";
               return;
           }
            if (this.addDocumentForm.productType != "") {
                
                this.addDocumentForm.estimatedEarnings = parseInt(this.addDocumentForm.investmentAmount) * parseInt(this.addDocumentForm.serviceDate) * parseFloat(this.addDocumentForm.productRate) * 0.01;

            }

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
      productChanged(){
         let index = this.addDocumentForm.productType;
         this.addDocumentForm.serviceDate = this.productTypes[index-1]['serviceTime'];
         this.addDocumentForm.productRate = this.productTypes[index-1]['monthRate'];
         this.addDocumentForm.productTypeName=this.productTypes[index-1]['productTypeName'];
         if (this.addDocumentForm.investmentAmount !="") {
          this.addDocumentForm.estimatedEarnings = parseInt(this.addDocumentForm.investmentAmount) * parseInt(this.addDocumentForm.serviceDate) * parseFloat(this.addDocumentForm.productRate);
         }
      },
      addDangAn(){

          this.dialogAddFile = true;
          this.addDocumentForm.agentCode = sessionStorage.getItem("agentCode");
        this.addDocumentForm.inderectRecomandPersonId = sessionStorage.getItem("indirectRecommendationAccount");
        this.addDocumentForm.derectRecomandPersonId = sessionStorage.getItem("directRecommendationAccount");
        this.addDocumentForm.customerName = sessionStorage.getItem("userName");
          let me = this;
            this.$http.post('/personDocument/getNextDocumentIndex',
              this.qs.stringify({
                'token':sessionStorage.getItem("token")
              }))
            .then(function(res){
                  // console.log(JSON.stringify(res));
                  var info = res['data'];
                  var code = info['code'];
                  var message = info['message'];
                  if (code == 1) {
                    var data = parseInt(info['data']);
                    let nextNum = 0;
                    if (data >= 0 && data < 10) {
                      nextNum = "00"+data;
                    } else if(data > 9 && data < 100) {
                      nextNum ="0"+data;
                    }
                    me.$store.commit('saveNextDocumentCode',nextNum);
                  } else {
                     me.$message.error(message);
                  }
                  
                 
            })
            .catch(function(err){

            });


      },
      getProductTypeList(){
        this.$http.post('product/getProductVOList',
              this.qs.stringify({
                'token':sessionStorage.getItem("token")
              }))
            .then(function(res){
              var info = res['data'];
                    var code = info['code'];
                    if (code == 1) {
                      me.$message('发布成功');
                    }
                  var message = info['message'];
                  var data = info['data'];
            })
            .catch(function(err){

            })
      },
      searchRecords(){
        let me = this;
        this.$http.post('/personDocument/getPersonDocumentList',
              this.qs.stringify({
                'token':sessionStorage.getItem("token"),
                'pageNum':'',
                'pageSize':'',
                'documentCode':this.documentCode,
                'tradePlatform':this.tradePlatform,
                'wheatherGetMoney':this.wheatherGetMoney,
                'productType':this.productType,
                'registerEmail':this.registerEmail,
                'buyNum':this.buyNum,
                'contractDateBegin':this.contractDateBegin,
                'contractDateEnd':this.contractDateEnd,
              }))
            .then(function(res){
              var info = res['data'];
              alert(JSON.stringify(res));
                    var code = info['code'];
                    if (code == 1) {
                      var data = info['data'];
                      me.customerIncomeTable = data['list'];
                    }
                  
                  
            })
            .catch(function(err){

            })
      },
      generateDocumentCode(){
          this.addDocumentForm.documentCode = sessionStorage.getItem("agentCode")+this.addDocumentForm.getMoneyDate + 
          this.$store.state.nextDocumentNum;
      },
      
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
  .el-table th{
  height: 32px;
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