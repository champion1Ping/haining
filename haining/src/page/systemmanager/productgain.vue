<template>
	<div class="productgain">
  <!-- 弹出框开始 -->
  <el-dialog title="产品信息" :visible.sync="addProductDialog" width="60%">
    <div>产品收益维护</div>
    <div style="border:1px solid;border-radius:4px;">
    <el-form :model="form" style="padding:10px" :models="addProduct" ref="addProduct">
    <el-row>
      <el-button type="info" style="margin-bottom:10px;" class="left" disabled>序号</el-button><el-input clearable  v-model="addProduct.sequenceNumber" class="right" style="width:200px"></el-input>
    </el-row>
     <el-row> 
    <el-button type="info" style="margin-bottom:10px;" class="left" disabled>产品类型</el-button><el-input clearable   v-model="addProduct.productType" class="right" style="width:200px"></el-input>
    </el-row>
    <el-row>
        <el-button type="info"  style="margin-bottom:10px;" class="left" disabled>服务期限(月）</el-button><el-input clearable class="right" v-model="addProduct.serviceTime" style="width:200px"></el-input>
        </el-row>
      <el-row>
       <el-button type="info" style="margin-bottom:10px;" class="left" disabled>产品收益率(%）</el-button><el-input clearable  v-model="addProduct.monthRate" class="right" style="width:200px"></el-input>
       </el-row>
        <el-row>
       <el-button type="info" style="margin-bottom:10px;" class="left" disabled>是否启用</el-button><el-select clearable v-model="addProduct.enableFlag"  style="width:200px" class="right" placeholder="请选择">
    <el-option
      v-for="item in this.$store.state.xialakuang.yesorno"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
       </el-row>
  </el-form>
    </div>

  <div slot="footer" class="dialog-footer">
    <el-button @click="addProductDialog = false">取 消</el-button>
    <el-button type="primary" @click="saveProduct()">确 定</el-button>
  </div>
</el-dialog>
  <div class="btn">
		<span style="color:#C9A44E;font-size:20px">产品收益维护&nbsp;&nbsp;&nbsp;
		<el-button type="primary" @click="quit()">退出</el-button>
		<el-button type="primary" @click="openAddDialog()">添加</el-button>
		</span>
    </div>

    
	<div class="product">
    <el-table
    size="mini"
    :data="tableData"
    border
    style="width: 100%;" height="412" header-align="center">
    <el-table-column prop="sequenceNumber" label="序号" align="center" width="80px">
           <el-input clearable v-model="sequenceNumber"></el-input>
    </el-table-column>
    <el-table-column prop="productTypeName" label="产品类型" align="center" width="180px">
           <el-input clearable v-model="productTypeName" id="productTypeName"></el-input>
    </el-table-column>
    <el-table-column prop="serviceTime" label="服务期限（月）" align="center" width="200px">
           <el-input clearable v-model="serviceTime"></el-input>
    </el-table-column>
    <el-table-column prop="monthRate" label="月收益率" align="center" width="120px">
           <el-input clearable v-model="monthRate"></el-input>
    </el-table-column>
    <el-table-column prop="enableFlag" label="是否启用" align="center" width="150px" :formatter="formatter1">
           <el-input clearable v-model="enableFlag" ></el-input>
    </el-table-column>
    <el-table-column prop="id" label="维护" align="center" width="180px">
           <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">维护</el-button>
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
         operationType:'',
         id:'',
         products:[],
         productTypeName:'',
         serviceTime:'',
         monthRate:'',
         enableFlag:'',
         addProductDialog:false,
        addProduct:{
          id:'',
          sequenceNumber:'',
          productType:'',
          serviceTime:'',
          monthRate:'',
          enableFlag:'',
        }
       
      }
    },
    created:function(){
     
          this.getData();
    },
    
    methods:{
      getData(){
       let me = this;
        this.$http.post('/product/getProductInfoList',
              this.qs.stringify({
                'token':sessionStorage.getItem("token")
              }))
            .then(function(res){
                  console.log(JSON.stringify(res));
                  var info = res['data'];
                  var code = info['code'];
                  var message = info['message'];
                  if(code == 1){
                    var data = info['data'];
                    me.tableData = data['list'];
                  } else {
                    me.$message.error(message);
                  }
                  
            })
            .catch(function(err){

            })
    },
      formatter1(row,column,cellValue){
          if (cellValue == 1) {
            return "是";
          } else {
            return "否";
          }
      },
      openAddDialog(){
          this.addProductDialog = true;
          this.operationType = 1;
      },
      quit(){
        this.$router.push('/notices');
      },
      handleClick(row){
        this.addProduct.id = row.id;
        this.addProduct.sequenceNumber = row.sequenceNumber;
        this.addProduct.productType = row.productTypeName;
        this.addProduct.serviceTime = row.serviceTime;
        this.addProduct.monthRate = row.monthRate;
        this.addProduct.enableFlag = row.enableFlag;
        this.addProductDialog = true;
        this.operationType = 0;
      },
      saveProduct(){
        let me = this;
        if (this.addProduct.productType == "") {
            this.$message.error("产品类型不能为空");
            return;
        }
        let pro = new Object();
        pro.id = (this.operationType == 1 ? "": this.addProduct.id)
        pro.sequenceNumber = this.addProduct.sequenceNumber;
        pro.productTypeName = this.addProduct.productType;
        pro.serviceTime = this.addProduct.serviceTime;
        pro.monthRate = this.addProduct.monthRate;
        pro.enableFlag = this.addProduct.enableFlag;
        this.products.push(pro);
        console.log(this.products);
        this.$http.post('/product/addProduct',
              this.qs.stringify({
                'token':sessionStorage.getItem("token"),
                'productList':JSON.stringify(this.products),
              }))
            .then(function(res){
              var info = res['data'];
                    var code = info['code'];
                    if (code == 1) {
                      me.$message('操作成功');
                      me.products =[];
                      //刷新
                      me.getData();
                      for(var field in me.addProduct){
                         me.addProduct[field] ="";
                      }
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
    padding-top: 50px;
    padding-left: 10px;
    padding-right: 10px;
  }
  


</style>