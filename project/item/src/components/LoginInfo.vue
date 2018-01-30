<template>
	<div class="cs-login-info">
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
			}
		},
		mounted () {
			var that = this
			this.$ajax({
				method: "get",
			  params:{
			  	authorization:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjE0LCJleHAiOjE1MzM0NTk4MDY0NjIsImZpcnN0bmFtZSI6ImNob25nIiwiaWRUZXh0IjoiaXl0ZzNhIn0.PCyszyytd-cujLMbKe1w3n-0_aeXYsgSucLWiqrZrdU"
			  },
			  url:"http://localhost:5000/api/profile",
			}).then((data) => {
				console.log(data.data.data)
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