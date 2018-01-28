<template>
	<div class="customerRecommend">
  <div class="btn">
		<span style="color:#C9A44E;font-size:20px">
		客户推荐表&nbsp;&nbsp;&nbsp;
		<el-button type="primary" @click="quit()">退出</el-button>
		<el-button type="primary" @click="recommendCustomerQuery()">查询</el-button>
		<el-button type="primary" @click="exportToExcel()">导出表格</el-button>
		</span>
    </div>

    <div class="fm">
      <el-row>
  <el-col :span="6">
    <el-button type="info"  class="left" disabled>注册账号</el-button><el-input clearable v-model="account" class="right" style="width:180px"></el-input>
    
  </el-col>
  <el-col :span="6">
        <el-button type="info"  class="left" disabled>真实姓名&nbsp;&nbsp;&nbsp;&nbsp;</el-button><el-input clearable v-model="realName" class="right" style="width:180px"></el-input>

  </el-col>
  
    
  </el-row>
    </div>
	<div class="tbl" style="margin:10px;">
    <el-table
    size="mini"
    :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
    border
    style="width: 100%" header-align="center">
    <el-table-column prop="account" label="注册账号" align="center" width="120"></el-table-column>
    <el-table-column prop="realName" label="真实姓名" align="center" width="100"></el-table-column>
    <el-table-column prop="contactPhone" label="联系方式" align="center" width="120"></el-table-column>
    <el-table-column prop="sexName" label="性别" align="center" width="100"></el-table-column>
    <el-table-column prop="gmtCreate" label="注册日期" align="center" width="100"></el-table-column>
    <el-table-column prop="whetherRealName" label="是否实名" align="center" width="90"></el-table-column>
    <el-table-column prop="wheatherGetMoney" label="是否入金" align="center" width="90"></el-table-column>
    <el-table-column prop="sumMoney" label="入金金额" align="center" width="100"></el-table-column>
    <el-table-column prop="refereeQualification" label="推荐人资质" align="center" width="100"></el-table-column>
    <el-table-column prop="email" label="邮箱地址" align="center" width="160"></el-table-column>
    <el-table-column prop="agentName" label="负责代理商" align="center" width="220"></el-table-column>
    <el-table-column prop="directRecommendationAccount" label="直推人账号" align="center" width="100"></el-table-column>
    <el-table-column prop="indirectRecommendationAccount" label="间推人账号" align="center" width="100"></el-table-column>
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
        tableData:[],
        account:'',
        realName:'',
        wheatherGetMoney:'',
        refereeQualification:'',
        directRecommendationAccount:'',
        indirectRecommendationAccount:'',
        gmtCreateStart:'',
        gmtCreateEnd:'',
        
      }
    },
    created(){
      this.recommendCustomerQuery();
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
      recommendCustomerQuery(){
          let me = this;
          this.$http.post('/user/getCustomerRecommandVOList',
          this.qs.stringify({
            'token':sessionStorage.getItem("token"),

                'account':this.account,
                'realName':this.realName,
                'whetherGetMoney':this.wheatherGetMoney,
                'refereeQualification':this.refereeQualification,
                'directRecommendationAccount':this.directRecommendationAccount,
                'indirectRecommendationAccount':this.indirectRecommendationAccount,
                'gmtCreateBegin':this.gmtCreateStart,
                'gmtCreateEnd':this.gmtCreateEnd,
                'pageNum':this.currentPage,
                'pageSize':this.pageSize,
             })
             )
             .then(function(res){
              alert(JSON.stringify(res));
              var info = res['data'];
              var code = info['code'];
              if (code == 1) {
                var data = info['data'];
                me.tableData = data['list'];
              } else {
                var message = info['message'];
                me.$message(message);
              }
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
　　　　　　　　const tHeader = ['注册账号', '真实姓名', '联系方式', '性别', '注册日期','是否实名','是否入金','入金金额','推荐人资质','邮箱地址','负责代理商','直推人账号','间推人账号']; //对应表格输出的title
　　　　　　　　const filterVal = ['account', 'realName', 'contactPhone', 'sexName', 'gmtCreate','whetherRealName','whetherGetMoney','sumMoney','refereeQualification','email','agentName','directRecommendationAccount','indirectRecommendationAccount'];
　　　　　　　　const list = this.tableData;
　　　　　　　　const data = this.formatJson(filterVal, list);
　　　　　　　　export_json_to_excel(tHeader, data, '客户推荐表'); //对应下载文件的名字
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
  /*.el-button--info.is-disabled{
    color: #2a2626;
  }*/
  button.el-button.left.el-button--info.is-disabled{
    color: #2a2626;
  }
  .left{
    display:inline-block;
    border-color: #DEDAD6;
    border-top-right-radius:0px; 
    border-bottom-right-radius:0px;
    border-right-width: 0px;
    color: #292323;;
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