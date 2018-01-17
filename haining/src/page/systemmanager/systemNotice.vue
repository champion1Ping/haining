<template>
<div class="notice">
	<div class="tab"><span style="color:#C9A44E;font-size:20px;padding">系统公告发布&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><el-button type="primary">退出</el-button></div>

	<div class="content">
	<el-row>
		<el-col :span="12">To: &nbsp;&nbsp;&nbsp;&nbsp;
		<el-select v-model="value" placeholder="请选择用户性质">
			<el-option
	      v-for="item in this.$store.state.usertype.notice"
	      :key="item.value"
	      :label="item.label"
	      :value="item.value">
	       </el-option>
	     </el-select>
		</el-col>
		<!-- <el-col :span="12" style="padding-top:10px;">
			<el-checkbox v-model="system" label="1" >系统内通知</el-checkbox>
            <el-checkbox v-model="message" label="2">短信通知</el-checkbox>
		</el-col> -->
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
				system:false,
				message:false,
				
			}
		},
		methods:{
			change(){
				alert(this.system);
			},
			getMyNoticeCount(){
				 this.$http.post('/notice/getMyNoticeCount',
		         this.sq.stringify({
		            'token':this.$store.state.token
		         })
		         )
		         .then(function(res){

		         })
		         .catch(function(err){

		         })
			},
			getNoticeList(){
				 this.$http.post('/notice/getNoticeList',
		         this.sq.stringify({
		            'token':this.$store.state.token
		         })
		         )
		         .then(function(res){

		         })
		         .catch(function(err){

		         })
			},


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