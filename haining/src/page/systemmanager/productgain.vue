<template>
	<div class="productgain">
  <!-- 弹出框开始 -->
  <el-dialog title="产品信息" :visible.sync="addProductDialog" width="60%">
    <div>产品收益维护</div>
    <div style="border:1px solid;border-radius:4px;">
    <el-form :model="form" style="padding:10px" :models="addProduct" ref="addProduct">
    <el-row>
      <el-button type="info" style="margin-bottom:10px;" class="left" disabled>序号</el-button><el-input clearable  v-model="addProduct.num" class="right" style="width:200px"></el-input>
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
    <el-button type="primary" @click="submitForm('addProductForm')">确 定</el-button>
  </div>
</el-dialog>
  <div class="btn">
		<span style="color:#C9A44E;font-size:20px">产品收益维护&nbsp;&nbsp;&nbsp;
		<el-button type="primary" @click="quit()">退出</el-button>
		<el-button type="primary" @click="openAddDialog()">添加</el-button>
		<el-button type="primary" @click="saveProduct()">保存</el-button>
		</span>
    </div>

    
	<div class="product">
    <el-table
    :data="tableData"
    border
    style="width: 100%;" header-align="center">
    <el-table-column prop="id" label="序号" align="center" width="180">
           <el-input clearable v-model="id"></el-input>
    </el-table-column>
    <el-table-column prop="productTypeName" label="产品类型" align="center" width="180">
           <el-input clearable v-model="productTypeName" id="productTypeName"></el-input>
    </el-table-column>
    <el-table-column prop="serviceTime" label="服务期限（月）" align="center" width="180">
           <el-input clearable v-model="serviceTime"></el-input>
    </el-table-column>
    <el-table-column prop="monthRate" label="月收益率" align="center" width="180">
           <el-input clearable v-model="monthRate"></el-input>
    </el-table-column>
    <el-table-column prop="enableFlag" label="操作" align="center" width="180">
           <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">{{enableFlag==0 ? "启用":"停用" }}</el-button>
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
         id:'',
         productTypeName:'',
         serviceTime:'',
         monthRate:'',
         enableFlag:'',
         addProductDialog:false,
        addProduct:{
          num:'',
          productType:'',
          serviceTime:'',
          monthRate:'',
          enableFlag:'',
        }
       
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
    methods:{
      openAddDialog(){
          this.addProductDialog = true;
      },
      quit(){
        this.$router.push('/notices');
      },
      addProduct(){
        
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
    padding-top: 50px;
    padding-left: 10px;
    padding-right: 10px;
  }
  


</style>