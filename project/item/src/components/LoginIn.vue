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
			<p style="font-size: .4rem;color: #8199e6;text-align: center;padding: 0;" @touchstart="LiveDemo">Live Demo</p>
		</div>
		<mt-popup
		  v-model="popupVisible"
		  position="top"
		  >
		  {{value}}
		</mt-popup>
	</div>
</template>

<script>
	export default{
		data () {
			return {
				emailValue:'',
				pwdValue:'',
				popupVisible:false,
				value:"",
			}
		},
		methods:{
			ajaxClcik(){
		  	var that = this
				this.$ajax({
				  method: "post",
				  url:"https://panel.newbidder.com/auth/login",
	  			  data:{
	  				 email: that.emailValue,
					 		password:that.pwdValue
	  			  },
				}).then(function (data) {
					
			    if(data.status == 200){
			    	document.cookie= "token=" + JSON.stringify({"token":data.data.token});
			    	that.$router.push('/Dashboard')
			    }
				},function(err){
					that.popupVisible = true
					that.value = "email: must be a valid email or account/password error"
					
					setTimeout(() =>{
						that.popupVisible = false
						document.getElementsByClassName("mint-popup-top")[0].style.display = "none"
					},4000)
				});
			},
			LiveDemo () {
				var that = this
				this.$ajax({
				  method: "post",
				  url:"https://panel.newbidder.com/auth/login",
	  			  data:{
	  				 email: "chuck@newbidder.com",
					 		password:"Ihave4cars$"
	  			  },
				}).then(function (data) {
					
			    if(data.status == 200){
			    	document.cookie= "token=" + JSON.stringify({"token":data.data.token});
			    	that.$router.push('/Dashboard')
			    }
				},function(err){
					that.popupVisible = true
					that.value = "email: must be a valid email or account/password error"
					
					setTimeout(() =>{
						that.popupVisible = false
						document.getElementsByClassName("mint-popup-top")[0].style.display = "none"
					},4000)
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
	.cs-login-in .v-modal{
		width: 100%;
		height: .8rem !important;
	}
	.cs-login-in .mint-popup{
		background: #1b1b1b !important;
		opacity: 0.3;
		color: white;
		width: 100%;
		height: .8rem;
		text-align: center;
		line-height: .8rem;
	}
</style>