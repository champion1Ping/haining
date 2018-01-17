<template>
	
</template>
<script>
	export default{
		data(){
			return {

			}
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
			}
		}
	}
</script>
<style>
	
</style>