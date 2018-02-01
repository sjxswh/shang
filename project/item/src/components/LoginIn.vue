<template>
	<div class="cs-login-in">
		<div class="logo">
			<img src="../assets/img/logo-four1.png" />
		</div>
		<div class="login-in-info">
			<p>Account e-mail</p>
			<div>
				<span class="iconfont icon-email"></span><input type="email" v-model="emailValue"/>
			</div>
			<p>Password</p>
			<div>
				<span class="iconfont icon-suo"></span><input type="password" v-model="pwdValue"/>
			</div>
				<button @touchstart="ajaxClcik">Log in</button>
			<p style="font-size: .4rem;color: #8199e6;text-align: center;padding: 0;">log in as guest</p>
		</div>
	</div>
</template>

<script>
	export default{
		data () {
			return {
				emailValue:'',
				pwdValue:''
			}
		},
		methods:{
			ajaxClcik(){
		  		var that = this
				this.$ajax({
				  method: "post",
				  url:"http://ec2-13-114-229-73.ap-northeast-1.compute.amazonaws.com:5000/auth/login",
	  			  data:{
	  				 email: that.emailValue,
					 		password:that.pwdValue
	  			  },
				}).then(function (data) {
					console.log(data)
				    if(data.status == 200){
				    	document.cookie= "token=" + JSON.stringify({"token":data.data.token});
				    	that.$router.push('/Dashboard')
				    }
				});
			}
		}
	}
</script>

<style>
	.cs-login-in{
		width: 100%;
		height: 100%;
		font-size: .26rem;
	}
	.cs-login-in .logo{
		margin: 1rem 1.4rem .6rem;
		
	}
	.cs-login-in .logo img{
		width: 100%;
	}
	.login-in-info{
		margin: 0 .8rem;
	}
	.login-in-info div{
		display: flex;
		height: .6rem;
		border-bottom: 1px solid #a6adbf;
	}
	.login-in-info p{
		text-align: left;
		padding-left: .9rem;
		margin-top: .3rem;
		color: #a6adbf;
	}
	.login-in-info div span{
		display: block;
		width: 15%;
		line-height: .6rem;
		color: #a6adbf;
	}
	.login-in-info div input{
		width: 90%;
		
		border: none;
		outline: none;
	}
	.login-in-info button{
		display: block;
		width: 100%;
		height: .8rem;
		margin-top: .3rem;
		background: #8199e6;
		border: 1px solid #8199e6;
		font-size: .3rem;
		color: white;
		outline: none;
	}
</style>