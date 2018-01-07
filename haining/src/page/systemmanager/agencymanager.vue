<template>
	<div class="agencymanager">
  <!-- 弹出框开始 -->
  <el-dialog title="代理商添加" :visible.sync="dialogAddAgency" width="80%">
    <div>代理商信息</div>
    <div style="border:1px solid;border-radius:4px;">
                
    <el-form :model="form" style="padding:10px">
       <el-row>
  <el-col :span="8">
    <el-button type="info"  class="left">代理商编号</el-button><el-input class="right" style="width:180px"></el-input>
  </el-col>
  <el-col :span="8">
        <el-button type="info" class="left">代理商名称</el-button><el-input class="right" style="width:180px"></el-input>
  </el-col>
  <el-col :span="8">
       <el-button type="info"  class="left">统一社会信用代码</el-button><el-input class="right" style="width:180px"></el-input>
  </el-col>
  </el-row>
<el-row style="margin-top:10px">
    <el-col :span="8">
       <el-button type="info"  class="left">法定代表人</el-button><el-input class="right" style="width:180px"></el-input>
  </el-col>
  <el-col :span="8">
       <el-button type="info"  class="left">联系方式</el-button><el-input class="right" style="width:180px"></el-input>
  </el-col>
  </el-row>
  <el-row style="margin-top:10px">
    <el-col :span="8">
        <el-button type="info"  class="left">省份</el-button><el-select v-model="value" style="width:180px" class="right" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-col> 
  <el-col :span="16">
       <el-button type="info"  class="left">营业地址</el-button><el-input class="right" style="width:360px"></el-input>
  </el-col>
  </el-row>
  <el-row style="margin-top:10px">
    <el-col :span="8">
      <el-button type="info"  class="left">营业开始时间</el-button><el-date-picker
      v-model="value1"
      type="date"
      class="right"
      style="width:180px"
      >
    </el-date-picker>
  </el-col>
  <el-col :span="8">
    <el-button type="info"  class="left">营业结束时间</el-button><el-date-picker
      v-model="value1"
      type="date"
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
      v-model="value1"
      type="date"
      class="right"
      style="width:180px"
      >
    </el-date-picker>
  </el-col>
  <el-col :span="8">
    <el-button type="info"  class="left">到期时间</el-button><el-date-picker
      v-model="value1"
      type="date"
      class="right"
      style="width:180px"
      ></el-date-picker>
  </el-col> 
  </el-row>
    </div>

  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogAddAgency = false">取 消</el-button>
    <el-button type="primary" @click="dialogAddAgency = false">确 定</el-button>
  </div>
</el-dialog>
<!-- 弹出框结束-->

  <div class="btn">
		<span style="color:#C9A44E;font-size:20px">代理商管理&nbsp;&nbsp;&nbsp;
		<el-button type="primary">退出</el-button>
		<el-button type="primary" @click="addAgency()">添加</el-button>
		<el-button type="primary">查询</el-button>
		</span>
    </div>

    <div class="fm">
      <el-row>
  <el-col :span="6">
    <el-button type="info" class="left">代理商编号</el-button><el-input class="right" style="width:180px"></el-input>
    
  </el-col>
  <el-col :span="6">
        <el-button type="info"  class="left">代理商名称</el-button><el-input class="right" style="width:180px"></el-input>

  </el-col>
  <el-col :span="6">
       <el-button type="info"  class="left">法定代表人</el-button><el-input class="right" style="width:180px"></el-input>

  </el-col>
  <el-col :span="6">
        <el-button type="info"  class="left">省份</el-button><el-select v-model="value" style="width:180px" class="right" placeholder="请选择">
    <el-option
      v-for="item in options"
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
      v-model="value1"
      type="date"
      class="right"
      style="width:180px"
      >
    </el-date-picker>
  </el-col>
  <el-col :span="6">
    <el-button type="info"  class="left">签约时间到</el-button><el-date-picker
      v-model="value1"
      type="date"
      class="right"
      style="width:180px"
      ></el-date-picker>
    
  </el-col> 

  <el-col :span="6">
      <el-button type="info"  class="left">到期时间从</el-button><el-date-picker
      <el-button type="info"  class="left"</el-button><el-date-picker
      v-model="value1"
      type="date"
      class="right"
      style="width:180px"
      >
    </el-date-picker>
  </el-col>
  <el-col :span="6">
    <el-button type="info"  class="left">到期时间到</el-button><el-date-picker
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
    :data="tableData"
    border
    style="width: 100%" header-align="center">
    <el-table-column prop="date" label="代理商编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
    <el-table-column prop="date" label="档案编号" align="center" width="180"></el-table-column>
  </el-table>
  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 50, 100]"
      :page-size="10"
      layout="total, sizes, prev, pager, next"
      prev-text="<上一页"
      next-text="下一页>"
      :total="70">
    </el-pagination>
  </div>
	
	
	<el-row></el-row>
	</div>
</template>
<script>
  export default{
    data(){

      return{
        dialogAddAgency:false,
        options:[
          { label:'北京',value:'1'},
        { label:'天津',value:'1'},
        { label:'河北',value:'1'},
        { label:'山西',value:'1'},
        { label:'内蒙古',value:'1'},
        { label:'辽宁',value:'1'},
        { label:'吉林',value:'1'},
        { label:'黑龙江',value:'1'},
        { label:'上海',value:'1'},
        { label:'江苏',value:'1'},
        { label:'浙江省',value:'1'},
        { label:'安徽',value:'1'},
        { label:'福建',value:'1'},
        { label:'江西',value:'1'},
        { label:'山东',value:'1'},
        { label:'河南',value:'1'},
        { label:'湖北',value:'1'},
        { label:'湖南',value:'1'},
        { label:'广东',value:'1'},
        { label:'广西',value:'1'},
        { label:'海南',value:'1'},
        { label:'重庆',value:'1'},
        { label:'四川',value:'1'},
        { label:'贵州',value:'1'},
        { label:'云南',value:'1'},
        { label:'西藏',value:'1'},
        { label:'陕西',value:'1'},
        { label:'甘肃省',value:'1'},
        { label:'青海',value:'1'},
        { label:'宁夏',value:'1'},
        { label:'新疆',value:'1'},
        ],
        status: [{
          value: '1',
          label: '正常'
        }, {
          value: '2',
          label: '结束'
        }, {
          value: '3',
          label: '提前终止'
        }, {
          value: '4',
          label: '未交易'
        }, ],
        value1:''
      }
    },
    methods:{
      addAgency(){
          this.dialogAddAgency = true;
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
  /*.el-input__prefix{
      right:0px;
  }  */


</style>