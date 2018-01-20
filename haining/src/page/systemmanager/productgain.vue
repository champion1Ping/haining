<template>
	<div class="productgain">
  <div class="btn">
		<span style="color:#C9A44E;font-size:20px">产品收益维护&nbsp;&nbsp;&nbsp;
		<el-button type="primary">退出</el-button>
		<el-button type="primary" @click="addProduct()">添加</el-button>
		<el-button type="primary" @click="saveProduct()">保存</el-button>
		</span>
    </div>

    
	<div class="product">
    <el-table
    :data="tableData"
    border
    style="width: 100%;" header-align="center">
    <el-table-column prop="id" label="序号" align="center" width="180">
      <template slot-scope="scope">
           <el-input v-model="scope.row.id"></el-input>
       </template>
    </el-table-column>
    <el-table-column prop="productTypeName" label="产品类型" align="center" width="180">
      <template slot-scope="scope">
           <el-input v-model="scope.row.productTypeName" id="productTypeName"></el-input>
       </template>
    </el-table-column>
    <el-table-column prop="serviceTime" label="服务期限（月）" align="center" width="180">
      <template slot-scope="scope">
           <el-input v-model="scope.row.serviceTime"></el-input>
       </template>
    </el-table-column>
    <el-table-column prop="monthRate" label="月收益率" align="center" width="180">
      <template slot-scope="scope">
           <el-input v-model="scope.row.monthRate"></el-input>
       </template>
    </el-table-column>
    <el-table-column prop="enableFlag" label="启用" align="center" width="180">
      <template slot-scope="scope">
           <el-checkbox  v-model="scope.row.enableFlag"></el-checkbox>
       </template>
    </el-table-column>
  </el-table>
 
  </div>
	</div>
</template>
<script>
  export default{
    data(){
      return{
        tableData:[],
        num:'',
        productType:'',
        serviceTime:'',
        monthRate:'',
        start:false,
      }
    },
    created:function(){
      let me = this;
        this.$http.post('/product/getProductInfoList',
              this.qs.stringify({
                'token':this.$store.state.token
              }))
            .then(function(res){
              alert(JSON.stringify(res));
                  var info = res['data'];
                  var code = info['code'];
                  var message = info['message'];
                  var data = info['data'];
                  me.tableData = data['list'];
            })
            .catch(function(err){

            })
    },
    methods:{
      addProduct(){
        this.tableData.push('{}');
      },
      saveProduct(){
        let productTyeName = document.getElementById('productTypeName');
        alert(productTypeName.value);
        let me = this;
        let enableFlag = (this.start?1:0);
        this.$http.post('/product/addProduct',
              this.qs.stringify({
                'id':'',
                'productType':this.productType,
                'serviceTime':this.serviceTime,
                'monthRate':this.monthRate,
                'enableFlag':this.enableFlag
              }))
            .then(function(res){
              var info = res['data'];
                    var code = info['code'];
                    if (code == 1) {
                      me.$message('添加成功');
                    } else {
                       var message = info['message'];
                       me.$message(message);
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
  .product{
    background-color:#FFFFFF;
    margin-top: 10px;
    margin-right:200px;
    margin-left: 280px;
    margin-bottom: 200px;
    padding-top: 50px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 160px;
  }
  


</style>