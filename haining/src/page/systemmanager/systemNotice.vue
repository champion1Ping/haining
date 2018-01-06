<template>
<div class="notice">
	<div class="tab">系统公告发布&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<el-button type="primary">退出</el-button></div>

	<div class="content">
	<el-row>
		<el-col :span="12">To: &nbsp;&nbsp;&nbsp;&nbsp;
		<el-select v-model="value" placeholder="请选用户性质">
			<el-option
	      v-for="item in options"
	      :key="item.value"
	      :label="item.label"
	      :value="item.value">
	       </el-option>
	     </el-select>
		</el-col>
		<el-col :span="12">
			<el-radio v-model="radio" label="1">系统内通知</el-radio>
            <el-radio v-model="radio" label="2">短信通知</el-radio>
		</el-col>
	</el-row>
	<el-row>
	<el-input
	  type="textarea"
	  :rows="10"
	  placeholder="请输入内容"
	  v-model="textarea">
	</el-input>
		
	</el-row>	
    <el-row>
    <el-col align="right"><el-button type="primary">发布</el-button></el-col>
    </el-row>
  
	</div>
</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				radio:'1',
				options:[
   				   {
   				   	label:"全部",
   				   	value:'1'
   				   },
   				   {
   				   	label:"客户",
   				   	value:'2'
   				   },
   				   {
   				   	label:"代理商",
   				   	value:'3'
   				   },
   				   {
   				   	label:"管理员",
   				   	value:'4'
   				   }

				]
			}
		}
	}
</script>
<style>
	.tab{
		background-color:#FFFFFF;
		margin-top: 1px;
		padding-top: 10px;
		padding-bottom: 30px;
	}
	.content{
		background-color:#FFFFFF;
		margin-top: 4px;
		margin-left: 400px;
		margin-right: 300px;
		margin-bottom: 20%;
	}
</style>