<template>
	<div class="notices">
	<span style="color:#C9A44E;font-size:20px;">系统通知</span>
		<div style="margin-top:10px">
        <template v-for="notice in notices">
        <el-row>
        	{{notice.noticeContent}}
        </el-row>
        <el-row>
        	<el-col :span="18">&nbsp;&nbsp;</el-col>
        	<el-col :span="6">{{notice.gmtCreate}}</el-col>
        	
        </el-row>
        <el-row><hr/></el-row>
           
        </template>
       </div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				notices:[
				
				]
			}
		},
		created:function(){
			let me = this;
			this.$http.post('/sysNotice/getNoticeList',
		         this.qs.stringify({
		            'token':sessionStorage.getItem("token")
		         })
		         )
		         .then(function(res){
		         	var info = res['data'];
		            var code = info['code'];
		            if (code == 1) {
		            	var data = info['data'];
		            	me.notices = data
		            } else {
		            	 var message = info['message'];
		            	 me.$message.error(message);
		            }
		         
		          

		         })
		         .catch(function(err){

		         })
			
		},
		methods:{
			getMyNoticeCount(){
				 this.$http.post('/notice/getMyNoticeCount',
		         this.sq.stringify({
		            'token':sessionStorage.getItem("token"),
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
	.notices{
		background-color:#FFFFFF;
	    margin-top: 0px;
	    margin-right:25%;
	    margin-bottom:'auto';
	    margin-left: 25%;
	    padding-left: 40px;
	    padding-right: 40px;
	    padding-top: 30px;
	    padding-bottom: 40px;
	}
	    
</style>