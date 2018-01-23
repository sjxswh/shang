<template>
	<div class="cs-campaigns">
		<home-select></home-select>
		<div style="border: .06rem solid #e4e8f1;border-bottom: none;">
			<div class="campaigns-select">
				<span class="iconfont icon-sousuo1-copy"></span>
				<input type="text" placeholder="Search" style="outline: none;" />
			</div>
			<ul class="campaigns-content">
				<li v-for="data in dataList">
					<div class="campaigns-img">
						<router-link to="/CampaignsDetail">
							<img src="../assets/img/1.jpg" width="100%" />
						</router-link>
					</div>
					<div class="campaigns-content-main">
						<div class="campaigns-title">
							<router-link to="/CampaignsDetail">
								<span>{{data["campaignName"]}}</span>
							</router-link>
							<span class="iconfont icon-gengduo"></span>
						</div>
						<div class="campaigns-switch">
							<p>
								<router-link to="/CampaignsDetail">
									<span><img src="../assets/img/2.jpg" /></span>
									<span><img src="../assets/img/3.jpg" /></span>
									<span>pause/Resume</span>
								</router-link>
							</p>
							<p class="campaigns-pause">
								<mt-switch v-if="data['deleted'] == 0 && data['integrations'] == 1" v-model="active" class="play" @touchchange="play"></mt-switch>
								<mt-switch v-if="data['deleted'] == 0 && data['integrations'] == 0" v-model="active" disabled></mt-switch>
								<mt-switch v-if="data['deleted'] == 1 && data['integrations'] == 1" v-model="archived" class="puse"></mt-switch>
								<mt-switch v-if="data['deleted'] == 1 && data['integrations'] == 0" v-model="archived" disabled></mt-switch>
							</p>
						</div>
						<router-link to="/CampaignsDetail">
							<div class="campaigns-info">
								<div>
									<p>Revenue</p>
									<span>${{data["revenue"]}}.00</span>
									<p>Profit</p>
									<em>${{data["profit"]}}.00</em>
								</div>
								<div>
									<p>ROI</p>
									<em>{{data["roi"]}}%</em>
									<p>Cost</p>
									<span>${{data["cost"]}}.00</span>
								</div>
							</div>
						</router-link>
					</div>
				</li>
			</ul>
		</div>
		<div style="height: 1rem;width: 100%;"></div>
	</div>
</template>

<script>
	import HomeSelect from '@/components/Home-Select'
	
	export default{
		components: {
			HomeSelect
		},
		data () {
			return {
				tokenCookie:[],
		     tokenCookies:[],
		     tokenname:"token",
		     token:"",
				dataList:[],
				timezone:"",
				active:true,
				archived:false,
				status:""
			}
		},
		mounted(){
			this.tokenCookie=document.cookie.split(";")
			for(var i = 0; i < this.tokenCookie.length; i++){
				this.tokenCookies = this.tokenCookie[i].split("=");
				if(this.tokenname != this.tokenCookies[0]){
					this.token = this.tokenCookies[1];
				}
			}
			var that = this
			this.$ajax({
			  method: "get",
			  params:{
			  	authorization:that.token
			  },
			  url:"http://beta.newbidder.com/api/profile",
			}).then((data) => {
			   console.log(data)
			   that.timezone = data.data.data.timezone
			   that.$ajax({
				  method: "get",
				  params:{
				  	authorization:that.token,
				  	filter:"",
						from:"2018-01-22T00:00",
						groupBy:"campaign",
						limit:500,
						order:"-visits",
						page:1,
						status:2,
						tag:"",
						to:"2018-01-23T00:00",
						tz:that.timezone
				  },
				  url:"http://beta.newbidder.com/api/report",
				}).then(function (data) {
					console.log(data)
				    that.dataList = data.data.data.rows
				});
			});	
		},
		methods: {
			play () {
				console.log(this.active)
			}
		}
	}
</script>

<style>
	em{
		font-style: normal;
	}
	.cs-campaigns{
		position: absolute;
		top: 1.24rem;
		width: 100%;
		height: 90%;
		font-size: .3rem;
	}
	.cs-campaigns .campaigns-select{
		display: flex;
		width: 100%;
		height:.8rem;
		border-bottom: .06rem solid #e4e8f1;
	}
	.cs-campaigns .campaigns-select .iconfont{
		width: 10%;
		height: 100%;
		line-height: .8rem;
	}
	.cs-campaigns .campaigns-select input{
		border: none;
		width: 90%;
		height: 94%;
	}
	.cs-campaigns .campaigns-content li{
		display: flex;
		padding: .2rem 0;
		border-bottom: .06rem solid #e4e8f1;
	}
	
	.cs-campaigns .campaigns-img{
		width: 20%;
	}
	.cs-campaigns .campaigns-img a{
		display: block;
		width: 100%;
		height: 50%;
		padding: 0 .2rem;
		padding-top: 0;
	}
	.cs-campaigns .campaigns-content-main{
		width:80% ;
		padding-right: .4rem;
	}
	.cs-campaigns .campaigns-title{
		display: flex;
		justify-content: space-between;
		color: black;
		font-weight: 600;
	}
	.cs-campaigns .campaigns-title a{
		display: block;
		width: 90%;
		text-align: left;
		color: black;
	}
	.cs-campaigns .campaigns-title a span{
		display: block;
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.cs-campaigns .campaigns-title .iconfont{
		color: #b0b0b0;
	}
	.cs-campaigns .campaigns-switch{
		display: flex;
		justify-content: space-between;
		height: .8rem;
		padding: 0.1rem 0;
		border-top: 1px solid #dcdcdc;
		border-bottom: 1px solid #dcdcdc; 
	}
	.cs-campaigns .campaigns-switch p a{
		display: flex;
		color: black;
	}
	.cs-campaigns .campaigns-switch p span{
		display: block;
	}
	.cs-campaigns .campaigns-switch p span:nth-child(1) img{
		width: .8rem;
		height: .5rem;
	}
	.cs-campaigns .campaigns-switch p span:nth-child(2) img{
		width: .5rem;
		height: .5rem;
	}
	.cs-campaigns .campaigns-switch p span:nth-child(3){
		margin-top: .08rem;
		margin-left: 1.2rem;
		font-weight: 600;
	}
	.cs-campaigns .campaigns-switch .campaigns-pause{
		display: flex;
	}
	.cs-campaigns .campaigns-pause .mint-switch-core::before{
		width: .76rem !important;
		height: .36rem !important;
		border-radius: .2rem;
	}
	.cs-campaigns .campaigns-pause .mint-switch-core::after{
		width: .4rem;
		height: .36rem;
	}
	.cs-campaigns .campaigns-switch .mint-switch-core{
		width: .8rem;
		height: .4rem;
		margin: 0;
		border-radius: .2rem;
		background-color: #49da61 !important;
		border-color: #49da61 !important;
	}
	.cs-campaigns .campaigns-info{
		display: flex;
	}
	.cs-campaigns .campaigns-info div{
		width: 50%;
		text-align: left;
	}
	.cs-campaigns .campaigns-info div p{
		color: #8e8e8e;
		margin: .2rem 0 .06rem;
	}
	.cs-campaigns .campaigns-info div em{
		color: #e1e4ed;
		text-align: left;
	}
	.cs-campaigns .campaigns-info div span{
		color: black;
	}
</style>