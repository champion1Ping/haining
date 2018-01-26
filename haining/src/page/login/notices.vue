<template>
	<div class="notices">
	<span style="color:#C9A44E;font-size:20px;">系统通知</span>
		<div>
        <template v-for="notice in notices">
        <el-row>
        	{{notice.content}}
        </el-row>
        <el-row>
        	
        	{{notice.time}}
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
			this.$http.post('/sysNotice/getSysNoticeList',
		         this.sq.stringify({
		            'token':this.$store.state.token
		         })
		         )
		         .then(function(res){
		         	alert(JSON.stringify(res));

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
	    margin-top: 50px;
	    margin-right:20%;
	    margin-bottom:'auto';
	    margin-left: 20%;
	    padding-left: 40px;
	    padding-top: 40px;
	    padding-bottom: 40px;
	}
	    
</style>