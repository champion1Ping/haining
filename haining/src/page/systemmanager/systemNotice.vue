<template>
<div class="notice">
	<div class="tab"><span style="margin-left:10px;color:#C9A44E;font-size:20px;padding">&nbsp;&nbsp;系统公告发布&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><el-button type="primary" @click="quit()">退出</el-button></div>

	<div class="content">
	<el-row>
		<el-col :span="12">&nbsp;&nbsp;&nbsp;To:&nbsp;&nbsp;&nbsp;
		<el-select v-model="toType" placeholder="请选择用户性质">
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
	  v-model="noticeContent">
	</el-input>
		
	</el-row>	
    <el-row>
    <el-col align="right"><el-button type="primary" @click="sendNotice()">发布</el-button></el-col>
    </el-row>
  
	</div>
</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				toType:'',
				noticeContent:'',
				
			}
		},
		
		methods:{
			quit(){
				this.$router.push('/notices');
			},
			change(){
				
			},
			sendNotice(){
				if(this.toType== ""){
					this.$message.error("请选择发送对象");
					return;
				}
				if(this.noticeContent==""){
					this.$message.error("请输入公告内容");
					return;
				}
				let me = this;
				this.$http.post('/sysNotice/sendNotice',
							this.qs.stringify({
								 'token':sessionStorage.getItem("token"),
								'toType':this.toType,
								'sysType':1,
								'noticeContent':this.noticeContent
							}))
						.then(function(res){
							var info = res['data'];
				            var code = info['code'];
				            if (code == 1) {
				            	me.$message.success('发布成功');
				            	me.toType = "";
				            	me.noticeContent = "";
				            } else {
				            	var message = info['message'];
				            	me.$message.error(message);
				            }
				          
				          var data = info['data'];
						})
						.catch(function(err){

						})
			}
			


		}
	}
</script>
<style>
	.tab{
		background-color:#FFFFFF;
		margin-top: 1px;
		padding-top: 10px;
		padding-bottom: 10px;
	}
	.content{
		background-color:#FFFFFF;
		margin-top: 10px;
		margin-left: 360px;
		margin-right: 360px;
		margin-bottom: 20%;
	}
	.left{
    width: 120px;
    display:inline-block;
    border-color: #DEDAD6;
    border-top-right-radius:0px; 
    border-bottom-right-radius:0px;
    border-right-width: 0px;
    color: #1e1c1c;
    background-color: #E6E6E6; 

  }
  .right > .el-input__inner{
      border-top-left-radius:0px; 
      border-bottom-left-radius:0px; 
      border-left-width: 0px;
      height: 36px;
    .el-button{
    line-height:0.6
    }
    
  }
  /*下拉框 + 日期选择框*/
  .right > .el-input > .el-input__inner{
      border-top-left-radius:0px; 
      border-bottom-left-radius:0px; 
      border-left-width: 0px;
      height: 36px;
    
  }
  
</style>