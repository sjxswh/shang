<template>
	<div class="cs-login-info">
		<div class="page-loading" style="width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 99;background: white;opacity: .5;" v-show="loading">
			<span class="iconfont icon-loading" style="display: block;color: black;font-size: 40px;width: 50px;height: 50px;position: absolute;top: 50%;left: 50%;margin-left: -25px;margin-top: -25px;"></span>
		</div>
		<div class="home-top">
			<div class="home-header">
		  		<em class="home-cancel" @touchstart="back">Bcak</em>
		  		<p class="home-name">{{title}}</p>
		  		<router-link to="/">
		  			<em class="home-done">Log out</em>
		  		</router-link>
		  	</div>
		</div>
  	<div class="login-info-content">
  		<div class="login-info-name">
  			<p>{{name.lastname}}</p>
  			<p>{{name.email}}</p>
  		</div>
  		<div>
  			<img src="../assets/img/logo-four1.png" />
  		</div>
  	</div>
  	<div class="login-info-content">
  			<span class="iconfont icon-ren"></span><span>{{name.idText}}</span>
  	</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return {
				title:"Account",
				name:"",
				loading:true
			}
		},
		mounted () {
			var that = this
			this.$ajax({
				method: "get",
			  params:{
			  	authorization:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjE0LCJleHAiOjE1MzM0NTk4MDY0NjIsImZpcnN0bmFtZSI6ImNob25nIiwiaWRUZXh0IjoiaXl0ZzNhIn0.PCyszyytd-cujLMbKe1w3n-0_aeXYsgSucLWiqrZrdU"
			  },
			  url:"https://panel.newbidder.com/api/profile",
			}).then((data) => {
				that.loading = false
				that.name = data.data.data
			})
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
		font-size: .3rem;
		color: #373737;
	}
.login-info-content{
	display: flex;
	margin: 0 .4rem;
	padding: .2rem 0;
	border-bottom: 1px solid #e9e9e9;
	
}
.login-info-content div:nth-child(1){
	width: 60%;
	box-sizing: border-box;
}
.login-info-content div:nth-child(2){
	width: 40%;
}
.login-info-content div p{
	text-align: left;
}
.login-info-content div p:nth-child(2){
	color: #777777;
	font-size: .2rem;
}
.login-info-content div img{
	width: 100%;
	height: 100%;
}
.login-info-content .iconfont{
	margin-right: .2rem;
	color: #4153c1;
}
</style>