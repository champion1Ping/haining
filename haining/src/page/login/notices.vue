<template>
	<div class="notices">
	<span style="color:#C9A44E;font-size:20px;">系统通知</span>
		<div style="margin-top:10px">
        <template v-for="notice in notices">
        <el-row>
        	{{notice.noticeContent}}
        </el-row>
        <el-row>
        	
        	{{notice.gmtCreate}}
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
				{
					content:'aaaaa',
					time:'2018-09-09'
				},
				{
					content:'bbbbb',
					time:'2018-09-10'
				},
				]
			}
		},
		created:function(){
			let me = this;
			this.$http.post('/sysNotice/getSysNoticeList',
		         this.qs.stringify({
		            'token':this.$store.state.token
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
	.notices{
		background-color:#FFFFFF;
	    margin-top: 0px;
	    margin-right:25%;
	    margin-bottom:'auto';
	    margin-left: 25%;
	    padding-left: 40px;
	    padding-top: 30px;
	    padding-bottom: 40px;
	}
	    
</style>