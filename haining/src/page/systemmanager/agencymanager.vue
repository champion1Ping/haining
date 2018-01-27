<template>
	<div class="agencymanager">
  <!-- 弹出框开始 -->
  <el-dialog title="代理商添加" :visible.sync="dialogAddAgency" width="80%">
    <div>代理商信息</div>
    <div style="border:1px solid;border-radius:4px;">
                
    <el-form :model="form" style="padding:10px" :models="addAgencyForm" ref="addAgencyForm">
       <el-row>
  <el-col :span="8">
    <el-button type="info"  class="left">代理商编号</el-button><el-input  :disabled="true" v-model="addAgencyForm.agencyCode" class="right" style="width:180px"></el-input>
  </el-col>
  <el-col :span="8">
        <el-button type="info" class="left">代理商名称</el-button><el-input class="right" v-model="addAgencyForm.agencyName" style="width:180px"></el-input>
  </el-col>
  <el-col :span="8">
       <el-button type="info"  class="left">统一社会信用代码</el-button><el-input  v-model="addAgencyForm.socialNum" class="right" style="width:180px"></el-input>
  </el-col>
  </el-row>
<el-row style="margin-top:10px">
    <el-col :span="8">
       <el-button type="info"  class="left">法定代表人</el-button><el-input class="right" v-model="addAgencyForm.loyalPerson"style="width:180px"></el-input>
  </el-col>
  <el-col :span="8">
       <el-button type="info"  class="left">联系方式</el-button><el-input class="right" v-model="addAgencyForm.contact" style="width:180px"></el-input>
  </el-col>
  </el-row>
  <el-row style="margin-top:10px">
    <el-col :span="8">
        <el-button type="info"  class="left">省份</el-button><el-select v-model="addAgencyForm.province"  @change="getMaxProvinceIndex()"style="width:180px" class="right" placeholder="请选择">
    <el-option
      v-for="item in this.$store.state.xialakuang.shengfen"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-col> 
  <el-col :span="16">
       <el-button type="info"  class="left">营业地址</el-button><el-input v-model="addAgencyForm.businessAddress"class="right" style="width:360px"></el-input>
  </el-col>
  </el-row>
  <el-row style="margin-top:10px">
    <el-col :span="8">
      <el-button type="info"  class="left">营业开始时间</el-button><el-date-picker
      v-model="addAgencyForm.bussinessStartTime"
      type="date"
      class="right"
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd"
      style="width:180px"
      >
    </el-date-picker>
  </el-col>
  <el-col :span="8">
    <el-button type="info"  class="left">营业结束时间</el-button><el-date-picker
      v-model="addAgencyForm.bussinessEndTime"
      type="date"
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd"
      class="right"
      style="width:180px"
      ></el-date-picker>
  </el-col> 
  </el-row>
 </el-form>
    </div>
    <div style="margin-top:10px;">签约信息</div>
    <div style="border:1px solid;border-radius:4px;">
    <el-row style="margin-top:10px;padding:10px;">
    <el-col :span="8">
      <el-button type="info"  class="left">签约时间</el-button><el-date-picker
      v-model="addAgencyForm.signStartTime"
      type="date"
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd"
      class="right"
      style="width:180px"
      >
    </el-date-picker>
  </el-col>
  <el-col :span="8">
    <el-button type="info"  class="left">到期时间</el-button><el-date-picker
      v-model="addAgencyForm.signEndTime"
      type="date"
      class="right"
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd"
      style="width:180px"
      ></el-date-picker>
  </el-col> 
  </el-row>
    </div>

  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogAddAgency = false">取 消</el-button>
    <el-button type="primary" @click="submitForm('addAgencyForm')">确 定</el-button>
  </div>
</el-dialog>
<!-- 弹出框结束-->

  <div class="btn">
		<span style="color:#C9A44E;font-size:20px">代理商管理&nbsp;&nbsp;&nbsp;
		<el-button type="primary" @click="quit()">退出</el-button>
		<el-button type="primary" @click="addAgency()">添加</el-button>
		<el-button type="primary" @click="query()">查询</el-button>
		</span>
    </div>

    <div class="fm">
      <el-row>
  <el-col :span="6">
    <el-button type="info" class="left" v-model="agentCode">代理商编号</el-button><el-input  class="right" style="width:180px"></el-input>
    
  </el-col>
  <el-col :span="6">
        <el-button type="info"  class="left" v-model="agentName">代理商名称</el-button><el-input class="right" style="width:180px"></el-input>

  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left">法定代表人</el-button><el-input v-model="legalRepresentative" class="right" style="width:180px"></el-input>

  </el-col>
  <el-col :span="6">
        <el-button type="info"  class="left">省份</el-button><el-select v-model="provinceId" style="width:180px" class="right" placeholder="请选择">
    <el-option
      v-for="item in this.$store.state.xialakuang.shengfen"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-col> 
  </el-row>
  <el-row style="padding-top:10px">
  
  <el-col :span="6">
      <el-button type="info"  class="left">签约时间从</el-button><el-date-picker
      v-model="bussinessStartTime"
      type="date"
      class="right"
      style="width:180px"
      >
    </el-date-picker>
  </el-col>
  <el-col :span="6">
    <el-button type="info"  class="left">签约时间到</el-button><el-date-picker
      v-model="bussinessEndTime"
      type="date"
      class="right"
      style="width:180px"
      ></el-date-picker>
    
  </el-col> 

  <el-col :span="6">
      <el-button type="info"  class="left">到期时间从</el-button><el-date-picker
      <el-button type="info"  class="left"</el-button><el-date-picker
      v-model="contractStartTime"
      type="date"
      class="right"
      style="width:180px"
      >
    </el-date-picker>
  </el-col>
  <el-col :span="6">
    <el-button type="info"  class="left">到期时间到</el-button><el-date-picker
      v-model="contractEndTime"
      type="date"
      class="right"
      style="width:180px"
      ></el-date-picker>
    
  </el-col> 
    
    
  </el-row>
    </div>
	<div class="tbl1">
    <el-table
    :data="agentData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
    :header-row-class-name="headerRowClassName"
    border
    style="width:100%;height:30%" header-align="center">
    <el-table-column prop="agentCode" label="代理商编号" align="center" width="180"></el-table-column>
    <el-table-column prop="agentName" label="代理商名称" align="center" width="180"></el-table-column>
    <el-table-column prop="unifiedSocialCreditCode" label="统一社会信用代码" align="center" width="180"></el-table-column>
    <el-table-column prop="legalRepresentative" label="法定代表人" align="center" width="180"></el-table-column>
    <el-table-column prop="contactPhone" label="联系方式" align="center" width="180"></el-table-column>
    <el-table-column prop="contractStartTime" label="签约开始日期" align="center" width="180"></el-table-column>
    <el-table-column prop="contractEndTime" label="截止日期" align="center" width="180"></el-table-column>
    <el-table-column prop="provinceName" label="省份" align="center" width="180"></el-table-column>
    <el-table-column prop="businessAddress" label="营业地址" align="center" width="180"></el-table-column>
    <el-table-column prop="bussinessStartTime" label="营业开始日期" align="center" width="180"></el-table-column>
    <el-table-column prop="bussinessEndTime" label="营业截止日期" align="center" width="180"></el-table-column>
  </el-table>
  <footer>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 50, 100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next"
      prev-text="<上一页"
      next-text="下一页>"
      :total="agentData.length">
    </el-pagination>
  </footer>
  
  </div>
	
	
	</div>
</template>
<script>
  export default{
    data(){

      return{
        total:0,
        currentPage:1,
        pageSize:100,
        agentData:[],
        dialogAddAgency:false,
        agentCode:'',
        agentName:'',
        legalRepresentative:'',
        provinceId:'',
        bussinessStartTime:'',
        bussinessEndTime:'',
        contractEndTime:'',
        contractStartTime:'',
        addAgencyForm:{
          agencyCode:'',
          agencyName:'',
          socialNum:'',
          loyalPerson:'',
          contact:'',
          province:'',
          businessAddress:'',
          bussinessStartTime:'',
          bussinessEndTime:'',
          signStartTime:'',
          signEndTime:''
        },
        
        value:'',
        value1:''
      }
    },
    created:function(){
        this.query();
    },
    methods:{
      quit(){
        this.$router.push('/notices');
      },
      headerRowClassName({row, rowIndex}){
          return 'header-row';
      },

      handleSizeChange(size){
        this.pageSize = size;
      },
      handleCurrentChange(page){
        this.currentPage= page;
      },
      addAgency(){
          //
          this.dialogAddAgency = true;
      },
      getMaxProvinceIndex(){
         let me = this;
         this.$http.post('/agent/getNextAgentCodeByProvinceId',
         this.qs.stringify({
            'provinceId':this.addAgencyForm.province
         })
         )
         .then(function(res){
            var info = res['data'];
            var code = info['code'];
            var message = info['message'];
            var data = info['data'];
            me.addAgencyForm.agencyCode = data;
         })
         .catch(function(err){

         })
      },
      
      query(){
        var t = this;
        this.$http.post('/agent/getAgentList',
          this.qs.stringify({
            'agentCode':this.agentCode,
            'agentName':this.agencyName,
            'legalRepresentative':this.legalRepresentative,
            'provinceId':this.provinceId,
            'businessStartTime':this.bussinessStartTime,
            'businessEndTime':this.bussinessEndTime,
            'contractStartTime':this.contractStartTime,
            'contractEndTime':this.contractEndTime,
            'pageNum':'',
            'pageSize':'100'
          }))
         .then(function(res){
          alert(JSON.stringify(res));
          var info = res['data'];
          var code = info['code'];
          var message = info['message'];
          var data = info['data'];
          t.agentData = data['list'];

         })
         .catch(function(err){

         })

      },
      submitForm(formName){
         let obj = {};
          obj = this.$store.state.xialakuang.shengfen.find((item)=>{
              return item.value === this.addAgencyForm.province;
          });
          let provinceName = obj.label;
        var me = this;
        for(var field in this.addAgencyForm){
          if(this.addAgencyForm[field] == ""){
            this.$message.error("必填字段不能为空");
            return;
          }
        }
        alert(this.addAgencyForm.bussinessStartTime+","+this.addAgencyForm.bussinessEndTime);
        this.$http.post('/agent/addAgentInfo',
          this.qs.stringify({
            'agentCode':this.addAgencyForm.agencyCode,
            'agentName':this.addAgencyForm.agencyName,
            'unifiedSocialCreditCode':this.addAgencyForm.socialNum,
            'legalRepresentative':this.addAgencyForm.loyalPerson,
            'provinceId':this.addAgencyForm.province,
            'provinceName':provinceName,
            'contactPhone':this.addAgencyForm.contact,
            'businessAddress':this.addAgencyForm.businessAddress,
            'businessStartTime':this.addAgencyForm.bussinessStartTime,
            'businessEndTime':this.addAgencyForm.bussinessEndTime,
            'contractStartTime':this.addAgencyForm.signStartTime,
            'contractEndTime':this.addAgencyForm.signEndTime
          }))
        .then(function(res){
           var info = res['data'];
           var code = info['code'];
           var message =info['message'];
           if (code == 1) {
              me.$message("添加成功");
              //字段清空
              me.$refs[me.addAgencyForm].resetFields();
           } else {
              me.$message(message);
           }

        })
        .catch(function(err){
             me.$message(err);
        })
      }
    }

  }
</script>

<style>
  .el-table .header-row {
    background-color:#f0f8eb;
  }
  
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
  .el-pagination{flex:1;}
  /*.el-input__prefix{
      right:0px;
  }  */
/*footer{position:absolute;bottom:0;width:100%;height:100px;}*/

</style>