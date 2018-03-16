<template>
	<div class="cs-campaigns">
		<div class="page-loading" style="width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 99;background: white;opacity: .5;" v-show="loading">
			<span class="iconfont icon-loading" style="display: block;color: black;font-size: 40px;width: 50px;height: 50px;position: absolute;top: 50%;left: 50%;margin-left: -25px;margin-top: -25px;"></span>
		</div>
		<div class="home-select">
			<span class="iconfont icon-jiankuohaoxizuo" @click="reduceDate"></span>
				<router-link to="/SelectRange">
					<div>
						<span>Data range({{num}})</span>
						<p id="time">{{from.year}}/{{from.month}}/{{from.date}}-{{from.years}}/{{from.months}}/{{from.dates}}</p>
					</div>
				</router-link>
			<span class="iconfont icon-jiankuohaoxiyou" @click="addDate"></span>
		</div>	
		<div style="border: .06rem solid #e4e8f1;border-bottom: none;">
			<div class="campaigns-select">
				<span class="iconfont icon-sousuo1-copy" @click="inpVal"></span>
				<form @submit="inpVal"><input type="text" placeholder="Search" id="search" style="outline: none;" @focus="inputOnFocus" @blur="inputFocus"  /></form>
			</div>
			<ul class="campaigns-content">
				<li v-for="(data,index) in dataList" :data="JSON.stringify(data)">
					<div class="campaigns-img" :data="JSON.stringify(data)">
						<a href="javascript:;"  @click="LinksHrf($event)" :data="JSON.stringify(data)">
							<img src="../assets/img/1.jpg" width="100%" :data="JSON.stringify(data)" />
						</a>
					</div>
					<div class="campaigns-content-main" :data="JSON.stringify(data)">
						<div class="campaigns-title" :data="JSON.stringify(data)">
							<a href="javascript:;"  @click="LinksHrf($event)" :data="JSON.stringify(data)">
								<span class="dsps" v-if="data['deleted'] == 0  && data['integrations'] == 0" :data="JSON.stringify(data)">
									<img src="../assets/img/3.jpg" />
								</span>
								<span class="iconfont icon-cuowu dsps" v-if="data['deleted'] == 1" :data="JSON.stringify(data)"></span>
								<span :data="JSON.stringify(data)" class="camNmae">{{data["campaignName"]}}</span>
							</a>
							<router-link to="/Offers" :data-cId="data.campaignId" :data-name="data.campaignName" @click="cOffer($event)">
								<span class="iconfont icon-gengduo" :data-cId="data.campaignId" :data-name="data.campaignName" @click="cOffer($event)"></span>
							</router-link>
						</div>
						<div class="campaigns-switch"  :data="JSON.stringify(data)" v-if="data['deleted'] == 0 && data['integrations'] == 1">
							<p :data="JSON.stringify(data)">
								<a href="javascript:;"  @click="LinksHrf($event)" :data="JSON.stringify(data)">
									<span class="dsp" :data="JSON.stringify(data)" v-if="data['deleted'] == 0 && data['integrations'] == 1 && data['status'] == 1">{{data.campaignName.substring(0,4)}}</span>
									<span class="dsp" :data="JSON.stringify(data)" v-if="data['deleted'] == 0 && data['integrations'] == 1 && data['status'] == 0">{{data.campaignName.substring(0,4)}}</span>
									<span class="iconfont icon-bofang1 dsps" v-if="data['deleted'] == 0 && data['status'] == 1 && data['integrations'] == 1" :data="JSON.stringify(data)"></span>
									<span class="iconfont icon-zanting2 dsps" v-if="data['deleted'] == 0 && data['status'] == 0 && data['integrations'] == 1" :data="JSON.stringify(data)"></span>
								</a>
							</p>
							<p class="campaigns-pause"  @touchstart='plays($event)' v-if="data['deleted'] == 0 && data['integrations'] == 1 && data['status'] == 1">
								<span class="dspss" :data="JSON.stringify(data)">pause/Resume</span>
								<mt-switch v-model="data.active" class="play" :data-ins="data['status']" :data-id="data['id']"></mt-switch>
							</p>
							<p class="campaigns-pause"  @touchstart='plays($event)' v-if="data['deleted'] == 0 && data['integrations'] == 1 && data['status'] == 0">
								<span class="dspss" :data="JSON.stringify(data)">pause/Resume</span>
								<mt-switch v-model="data.active" class="play" :data-ins="data['status']" :data-id="data['id']"></mt-switch>
							</p>
							<p class="campaigns-pause" v-if="data['deleted'] == 0 && data['integrations'] == 0 && data['status'] == 1">
								<mt-switch v-model="data.active" disabled :data-ins="data['status']" :data-id="data['id']" style="display: none;"></mt-switch>
							</p>
							<p class="campaigns-pause" v-if="data['deleted'] == 0 && data['integrations'] == 0 && data['status'] == 0">
								<mt-switch v-model="data.active" disabled :data-ins="data['status']" :data-id="data['id']" style="display: none;"></mt-switch>
							</p>
							<p class="campaigns-pause" v-if="data['deleted'] == 1">
								<mt-switch v-model="data.active" class="play" :data-ins="data['status']" :data-id="data['id']" disabled></mt-switch>
							</p>
							<!--<p class="campaigns-pause"  @touchstart='plays($event)' v-if="data['deleted'] == 1 && data['integrations'] == 1 && data['status'] == 0">
								<mt-switch v-model="data.active" class="play" :data-ins="data['status']" :data-id="data['id']"></mt-switch>
							</p>
							<p class="campaigns-pause"  @touchstart='plays($event)' v-if="data['deleted'] == 1 && data['integrations'] == 1 && data['status'] == 1">
								<mt-switch v-model="data.active" class="play" :data-ins="data['status']" :data-id="data['id']"></mt-switch>
							</p>
							<p class="campaigns-pause" @touchstart='plays($event)' v-if="data['deleted'] == 1 && data['integrations'] == 0 && data['status'] == 1">
								<mt-switch v-model="data.active" disabled :data-ins="data['status']" :data-id="data['id']"></mt-switch>
							<p class="campaigns-pause" @touchstart='plays($event)' v-if="data['deleted'] == 1 && data['integrations'] == 0 && data['status'] == 0">
								<mt-switch v-model="data.active" disabled :data-ins="data['status']" :data-id="data['id']"></mt-switch>
							</p>-->
						</div>
						<a href="javascript:;"  @click="LinksHrf($event)" :data="JSON.stringify(data)">
							<div class="campaigns-info" :data="JSON.stringify(data)">
								<div :data="JSON.stringify(data)">
									<p :data="JSON.stringify(data)">Revenue</p>
									<span :data="JSON.stringify(data)">${{data["revenue"]}}</span>
									<p :data="JSON.stringify(data)">Visits</p>
									<em :data="JSON.stringify(data)">{{data["visits"]}}</em>
								</div>
								<div :data="JSON.stringify(data)">
									<p :data="JSON.stringify(data)">Conversion</p>
									<em :data="JSON.stringify(data)">{{data["conversions"]}}</em>
									<p :data="JSON.stringify(data)">Click</p>
									<span :data="JSON.stringify(data)">{{data["clicks"]}}</span>
								</div>
							</div>
						</a>
					</div>
				</li>
			</ul>
		</div>
		<div style="height: 1rem;width: 100%;"></div>
	</div>
</template>

<script>
	import '../assets/iconfont/iconfont3.css'
	import commont from '../assets/js/commont.js'
	export default{
		data () {
			return {
				loading:true,
				tokenCookie:[],
		    tokenCookies:[],
		    tokenname:"token",
		    token:"",
				dataList:[],
				timezone:"",
				active:true,
				archived:false,
				from:{},
				search:"",
				status:"",
				Data:"",
				groupBy:"",
				nowDate:"",
		     Date:"",
		     date:"",
		     Time:"",
		     Times:"",
		     data:"",
		     datas:{},
		     dataCid:"",
		     num:"",
			}
		},
		computed:{
			getSevenDate(){
				this.from = this.$store.state.data
			},
			
		},
		watch: {
			from (newVal,oldVal){
				this.search = document.getElementById("search").value
				this.from = newVal
				var s = newVal.years+"-"+newVal.months+"-"+newVal.dates
				var sss = newVal.year+"-"+newVal.month+"-"+newVal.date
				var ss = new Date(s)
				var ssss = new Date(sss)
				var time = ss.getTime()-ssss.getTime()
				var d = time/1000/3600/24
				if(d ==1){
					this.num = "today"
				}
				else{
					this.num = d+" days"
				}
				var that = this
				this.$ajax({
				  method: "get",
				  params:{
				  	authorization:that.token
				  },
				  url:"https://panel.newbidder.com/api/profile",
				}).then((data) => {
				   that.timezone = data.data.data.timezone
				   that.$ajax({
					  method: "get",
					  params:{
					  	authorization:that.token,
					  	filter:that.search,
							from:that.from.year+"-"+that.from.month+"-"+that.from.date+"T00:00",
							groupBy:"campaign",
							limit:500,
							order:"-visits",
							page:1,
							status:that.from.status,
							tag:"",
							to:that.from.years+"-"+that.from.months+"-"+that.from.dates+"T00:00",
							tz:that.timezone
					  },
					  url:"https://panel.newbidder.com/api/report",
					}).then(function (data) {
						that.loading = false
					    that.dataList = data.data.data.rows;
					    that.dataList.forEach((item)=>{
					    	if(item.deleted == 0 && item.status == 1){
					    		item.active = true
					    	}
					    	if(item.deleted == 0 && item.status == 0){
					    		item.active = false
					    	}
					    	if(item.deleted == 1 && item.status == 0){
					    		item.active = false
					    	}
					    	if(item.deleted == 1 && item.status == 1){
					    		item.active = false
					    	}
					    })
					});
				});	
			},
			getSevenDate (newVal,oldVal) {
				
			},
		},
		mounted(){
			this.token = commont.getCookie(this.tokenname).token
			this.nowDate = new Date()
			this.Time = this.nowDate.getTime()//-604800000 + 86400000
			this.Times = this.nowDate.getTime()+604800000
		},
		methods: {
			sub(name){
				var dsp = name.substring(0,4)
				console.log(dsp)
			},
			inpVal () {
				this.search = document.getElementById("search").value
				var that = this
				this.$ajax({
				  method: "get",
				  params:{
				  	authorization:that.token
				  },
				  url:"https://panel.newbidder.com/api/profile",
				}).then((data) => {
				   that.timezone = data.data.data.timezone
				   that.$ajax({
					  method: "get",
					  params:{
					  	authorization:that.token,
					  	filter:that.search,
							from:that.from.year+"-"+that.from.month+"-"+that.from.date+"T00:00",
							groupBy:"campaign",
							limit:500,
							order:"-visits",
							page:1,
							status:that.from.status,
							tag:"",
							to:that.from.years+"-"+that.from.months+"-"+that.from.dates+"T00:00",
							tz:that.timezone
					  },
					  url:"https://panel.newbidder.com/api/report",
					}).then(function (data) {
						that.loading = false
					    that.dataList = data.data.data.rows
					    that.dataList.forEach((item)=>{
					    	if(item.deleted == 0 && item.status == 1){
					    		item.active = true
					    	}
					    	if(item.deleted == 0 && item.status == 0){
					    		item.active = false
					    	}
					    	if(item.deleted == 1 && item.status == 0){
					    		item.active = false
					    	}
					    	if(item.deleted == 1 && item.status == 1){
					    		item.active = false
					    	}
					    })
					});
				});	
			},
			plays (ev) {
				console.log(1)
					this.dataId = ev.target.getAttribute("data-id")
					this.dataTrue = ev.target.getAttribute("data-ins")
					if(this.dataTrue == 1){
						this.status = 0
						ev.target.setAttribute("data-ins",this.status)
					}
					else{
						this.status = 1
						ev.target.setAttribute("data-ins",this.status)
					}
				var that = this
				this.$ajax({
				  method: "post",
				  data:{
				  	id:that.dataId,
				  	status:that.status
				  },
				  url:"https://panel.newbidder.com/api/campaigns/"+that.dataId+"?authorization="+that.token,
				}).then((data) => {
					console.log(data)
				});
			},
			LinksHrf (ev) {
				console.log(ev.target)
				 this.$router.push({
            path: 'CampaignsDetail', 
        })
			 this.data = ev.target.getAttribute("data")
				commont.LinksHrf(this.data)
			},
			inputFocus () {
				console.log(2)
				this.$store.dispatch("FooterHide")
			},
			inputOnFocus () {
				console.log(1)
				this.$store.dispatch("FooterShow")
			},
			cOffer(ev){
				this.datas = {"campaignName":ev.target.getAttribute("data-name"),"campaignId":ev.target.getAttribute("data-cId")}
				commont.cOffer(this.datas)
			},
			reduceDate(){
				this.Time = this.Time - 604800000
				this.Date = new Date(parseInt(this.Time))
				this.Times = this.Times - 604800000
				this.date = new Date(parseInt(this.Times))
				this.Data = commont.reduceDate(this.Date,this.date,this.$store.state.data.status)
				this.$store.dispatch("getSevenDate",this.Data)
			},
			addDate(){
				this.Time = this.Time + 604800000
				this.Date = new Date(parseInt(this.Time))
				this.Times = this.Times + 604800000
				this.date = new Date(parseInt(this.Times))
				this.Data = commont.reduceDate(this.Date,this.date,this.$store.state.data.status)
				this.$store.dispatch("getSevenDate",this.Data)
			}
		},
	}
</script>

<style>
	.input_check {position: absolute;width: 20px;height: 20px;visibility: hidden;background: #E92333;}
	.input_check+label {display: inline-block;width: 20px;height: 20px;background: green;background-position: -31px -3px;border: 1px solid skyblue;}
	em{
		font-style: normal;
	}
	.cs-campaigns{
		position: absolute;
		top: 1.24rem;
		width: 100%;
		height: 82%;
		font-size: .26rem;
		font-family: "arial, helvetica, sans-serif";
	}
	.cs-campaigns .campaigns-select{
		display: flex;
		width: 100%;
		height:.8rem;
		border-bottom: .06rem solid #e4e8f1;
	}
	.cs-campaigns .campaigns-select .iconfont{
		width: 15%;
		height: 100%;
		line-height: .8rem;
	}
	.cs-campaigns .campaigns-select form{
		width: 85%;
		height: 88%;
	}
	.cs-campaigns .campaigns-select form input{
		border: none;
		width: 100%;
		height: 100%;
		vertical-align: top;
	}
	.cs-campaigns .campaigns-content li{
		display: flex;
		padding: .2rem 0;
		border-top: .06rem solid #e4e8f1;
	}
	.cs-campaigns .campaigns-content li:nth-child(1){
		border-top: 0;
	}
	.cs-campaigns .campaigns-img{
		width: 18%;
	}
	.cs-campaigns .campaigns-img a{
		display: block;
		width: 100%;
		height: 100%;
		padding: 0 .2rem;
		padding-top: 0;
	}
	.cs-campaigns .campaigns-content-main{
		width:82% ;
		padding-right: .4rem;
	}
	.cs-campaigns .campaigns-title{
		display: flex;
		justify-content: space-between;
		color: black;
		font-weight: 600;
	}
	.cs-campaigns .campaigns-title a{
		display: flex;
		width: 90%;
		text-align: left;
		color: #282828;
		border-bottom: 1px solid #dcdcdc; 
	}
	.camNmae{
		display: block;
		width: 80%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.cs-campaigns .campaigns-title a:nth-child(2){
		display: block;
		width: 10%;
		text-align: left;
		color: #282828;
	}
	.cs-campaigns .campaigns-title .iconfont{
		color: #b0b0b0;
	}
	.cs-campaigns .campaigns-switch{
		display: flex;
		justify-content: space-between;
		padding: 0.1rem 0;
		border-bottom: 1px solid #dcdcdc; 
	}
	.cs-campaigns .campaigns-switch p:nth-child(1){
		width: 60%;
	}
	.cs-campaigns .campaigns-switch p a{
		color: #282828;
	}
	.cs-campaigns .campaigns-switch p span{
		display: block;
	}
.dsp{
	float: left;
		width: .8rem;
		height: .5rem;
		background: #02b697;
		border-radius: 4px;
		line-height: .5rem;
		color: white;
		padding: 0 .2rem;
	}
.dsps{
	float: left;
		width: .5rem;
		height: .5rem;
		line-height: .5rem;
		font-size: .5rem;
		vertical-align: middle;
		margin-right: .1rem;
	}
	.dsps img{
		width: 100%;
		height: 100%;
	}
	 .dspss{
		margin-top: .08rem;
		font-weight: 600;
	}
	.icon-cuowu{
		    color: red !important;
	}
	.icon-bofang1,.icon-yuanxuankuang2{
		color: green !important;
	}
	.icon-zanting2{
		color: #616161 !important;
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
		color: #c1c1c1;
	}
	.cs-campaigns .campaigns-info div span{
		color: #363636;
	}
</style>