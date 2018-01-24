<template>
	<div class="notices">
	<span style="color:#C9A44E;font-size:20px;">系统通知</span>

	</div>
</template>
<script>
	export default{
		data(){
			return {

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