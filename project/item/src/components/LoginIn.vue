<template>
	<div class="cs-login-info">
		<div class="home-top">
			<div class="home-header">
		  		<em class="home-cancel" @touchstart="back">Bcak</em>
		  		<p class="home-name">{{title}}</p>
		  		<router-link to="/">
		  			<em class="home-done">Loginout</em>
		  		</router-link>
		  	</div>
		</div>
	  	<div>gfhj</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return {
				title:"Account"
			}
		},
		mounted () {
		},
		methods:{
			back () {
		  		this.$router.go(-1)
		  	},
		}
	}
</script>

<style>
	.cs-login-info{
		position: absolute;
		top: 1.4rem;
		width: 100%;
	}


</style>