<template>
	<div class="customerregister">
  <!-- 弹出框开始 -->
  <el-dialog title="档案添加" :visible.sync="dialogAddFile" width="95%">
    <div>档案添加</div>
    <div style="border:1px solid;border-radius:4px;">
                
    <el-form :model="addDocumentForm" style="padding:5px">
       <el-row>
  <el-col :span="6">
    <el-button type="info"  class="left">档案编号</el-button><el-input disabled v-model="addDocumentForm.documentCode"class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
        <el-button type="info" class="left">客户名称</el-button><el-input disabled v-model="addDocumentForm.customerName"class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left">交易平台</el-button><el-input v-model="addDocumentForm.tradePlatform"class="right" style="width:177px"></el-input>
  </el-col>
   <el-col :span="6">
       <el-button type="info"  class="left">交易账户号</el-button><el-input v-model="addDocumentForm.tradeAccount"class="right" style="width:177px"></el-input>
  </el-col>
  </el-row>
<el-row style="margin-top:10px">
    <el-col :span="6">
    <el-button type="info"  class="left">是否入金</el-button><el-select v-model="addDocumentForm.wheatherGetMoney" style="width:177px" class="right" placeholder="请选择">
    <el-option
      v-for="item in this.$store.state.xialakuang.yesorno"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-col>
  <el-col :span="6">
        <el-button type="info" class="left">入金日期</el-button><el-date-picker
       @change="generateDocumentCode()" 
      v-model="addDocumentForm.getMoneyDate"
      type="date"
      class="right"
      value-format="yyyyMMdd"
      style="width:177px"
      ></el-date-picker>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left">证件类型</el-button><el-select v-model="addDocumentForm.certificateType" style="width:177px" class="right" placeholder="请选择">
    <el-option
      v-for="item in this.$store.state.xialakuang.certificateType"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-col>
   <el-col :span="6">
       <el-button type="info"  class="left">证件号码</el-button><el-input v-model="addDocumentForm.certificateNumber"class="right" style="width:177px"></el-input>
  </el-col>
  </el-row>
  <el-row style="margin-top:10px">
    <el-col :span="6">
      <el-button type="info"  class="left">签约日期</el-button><el-date-picker
      v-model="addDocumentForm.contractDate"
      type="date"
      value-format="yyyyMMdd"
      class="right"
      style="width:177px"
      >
    </el-date-picker>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left">产品类型</el-button><el-select @change="productChanged()"v-model="addDocumentForm.productType" style="width:177px" class="right" placeholder="请选择">
    <el-option
      v-for="item in productTypes"
      :key="item.id"
      :label="item.productTypeName"
      :value="item.id">
    </el-option>
  </el-select>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left">产品收益率</el-button><el-input disabled v-model="addDocumentForm.productRate"class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left">服务期限</el-button><el-input  disabled v-model="addDocumentForm.serviceDate"class="right" style="width:177px"></el-input>
  </el-col>
  </el-row>
<el-row style="margin-top:10px">
    
  <el-col :span="6">
       <el-button type="info"  class="left">投资金额</el-button><el-input @change="caculateEarning()" v-model="addDocumentForm.investmentAmount" class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left">预估收益</el-button><el-input disabled v-model="addDocumentForm.estimatedEarnings"class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
      <el-button type="info"  class="left">联系方式</el-button><el-input v-model="addDocumentForm.contactPhone"class="right"  style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
      <el-button type="info"  class="left">注册邮箱号</el-button><el-input v-model="addDocumentForm.registerEmail" class="right" style="width:177px"></el-input>
  </el-col>
  </el-row>

  <el-row style="margin-top:10px">
    
  <el-col :span="6">
       <el-button type="info"  class="left">代理商编号</el-button><el-input disabled v-model="addDocumentForm.agentCode"class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left">直推人</el-button><el-input disabled v-model="addDocumentForm.derectRecomandPersonId"class="right" style="width:177px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left">间推人</el-button><el-input disabled v-model="addDocumentForm.inderectRecomandPersonId"class="right" style="width:177px"></el-input>
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
    <span type="info" class="left">档案编号</span><el-input v-model="documentCode" class="right" style="width:180px"></el-input>
  </el-col>
  <el-col :span="6">
        <span type="info"  class="left">交易平台</span><el-input  v-model="tradePlatform"class="right" style="width:180px"></el-input>
  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left">是否入金</el-button><el-select v-model="wheatherGetMoney" style="width:180px" class="right" placeholder="请选择">
    <el-option
      v-for="item in this.$store.state.xialakuang.yesorno"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

  </el-col>
  <el-col :span="6">
        <el-button type="info"  class="left">产品类型</el-button><el-select v-model="productType" style="width:180px" class="right" placeholder="请选择">
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
    <el-button type="info"  class="left">注册邮箱</el-button><el-input  v-model="registerEmail"class="right" style="width:180px"></el-input>
  </el-col>
  <!-- <el-col :span="6">
      <el-button type="info"  class="left">份数</el-button><el-input  v-model="buyNum"class="right"  style="width:180px"></el-input>-->

    </el-date-picker>
  </el-col>
  <el-col :span="6">
      <el-button type="info"  class="left">签约日期从</el-button><el-date-picker
      v-model="contractDateBegin"
      type="date"
      class="right"
      style="width:180px"
      >
    </el-date-picker>
  </el-col>
  <el-col :span="6">
    <el-button type="info"  class="left">签约日期到</el-button><el-date-picker
      v-model="contractDateEnd"
      type="date"
      class="right"
      style="width:180px"
      ></el-date-picker>
    
  </el-col> 
    
  </el-row>
    </div>
	<div class="tbl">
    <el-table
    :data="customerIncomeTable.slice((currentPage-1)*pageSize,currentPage*pageSize)"
    border
    style="width: 100%" header-align="center">
    <el-table-column prop="documentCode" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="tradePlatform" label="交易平台" align="center" width="180"></el-table-column>
    <el-table-column prop="tradeAccount" label="交易账户号" align="center" width="180"></el-table-column>
    <el-table-column prop="wheatherGetMoney" label="是否入金" align="center" width="180" :formatter="formatter1"></el-table-column>
    <el-table-column prop="wheatherGetMoneyName" label="入金日期" align="center" width="180"></el-table-column>
    <el-table-column prop="registerEmail" label="注册邮箱" align="center" width="180"></el-table-column>
    <el-table-column prop="certificateTypeName" label="证件类型" align="center" width="180"></el-table-column>
    <el-table-column prop="certificateNumber" label="证件号" align="center" width="180"></el-table-column>
    <el-table-column prop="contactPhone" label="联系电话" align="center" width="180"></el-table-column>
    <el-table-column prop="contractDate" label="签约日期" align="center" width="180"></el-table-column>
    <el-table-column prop="productType" label="产品类型" align="center" width="180"></el-table-column>
    <el-table-column prop="productRate" label="收益率($)" align="center" width="180"></el-table-column>
    <el-table-column prop="investmentAmount" label="投资金额($)" align="center" width="180"></el-table-column>
    <el-table-column prop="estimatedEarnings" label="预估收益" align="center" width="180"></el-table-column>
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
    created(){
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
        alert(this.addDocumentForm.productType+","+this.addDocumentForm.productTypeName+","+this.addDocumentForm.derectRecomandPersonId+","+this.addDocumentForm.inderectRecomandPersonId);
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
                'derectRecomandPersonId':this.addDocumentForm.derectRecomandPersonId,
                'inderectRecomandPersonId':this.addDocumentForm.inderectRecomandPersonId,
                'estimatedEarnings':this.addDocumentForm.estimatedEarnings,
                'productId':this.addDocumentForm.productType,
                'maxIndex':this.$store.state.nextDocumentNum
              }))
            .then(function(res){
              alert(JSON.stringify(res));
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
                alert(this.addDocumentForm.investmentAmount +","+this.addDocumentForm.serviceDate+","+this.addDocumentForm.productRate);
                this.addDocumentForm.estimatedEarnings = parseInt(this.addDocumentForm.investmentAmount) * parseInt(this.addDocumentForm.serviceDate) * parseFloat(this.addDocumentForm.productRate);

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
                  // alert(JSON.stringify(res));
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
              // alert(JSON.stringify(res));
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
  .left{
    width: 120px;
    border-radius: 4px;
    border: 1px solid;
    box-sizing: border-box;
    padding:7.75px 0 7.75px 0;
    display:inline-block;
    border-color: #DEDAD6;
    border-top-right-radius:0px; 
    border-bottom-right-radius:0px;
    border-right-width: 0px;
    color: #1e1c1c;
    background-color: #E6E6E6; 
    text-align:center;

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