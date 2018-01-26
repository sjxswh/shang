<template>
	<div class="cs-campaigns">
		<home-select></home-select>
		<div style="border: .06rem solid #e4e8f1;border-bottom: none;">
			<div class="campaigns-select">
				<span class="iconfont icon-sousuo1-copy" @touchstart="inpVal"></span>
				<input type="text" placeholder="Search" id="search" style="outline: none;" />
			</div>
			<ul class="campaigns-content">
				<li v-for="(data,index) in dataList">
					<div class="campaigns-img">
						<a href="javascript:;"  @touchstart="LinksHrf($event)" :data="JSON.stringify(data)">
							<img src="../assets/img/1.jpg" width="100%" :data="JSON.stringify(data)" />
						</a>
					</div>
					<div class="campaigns-content-main">
						<div class="campaigns-title">
							<a href="javascript:;"  @touchstart="LinksHrf($event)">
								<span :data="JSON.stringify(data)">{{data["campaignName"]}}</span>
							</a>
							<span class="iconfont icon-gengduo"></span>
						</div>
						<div class="campaigns-switch">
							<p>
								<a href="javascript:;"  @touchstart="LinksHrf($event)" :data="JSON.stringify(data)">
									<span><img src="../assets/img/2.jpg" :data="JSON.stringify(data)"/></span>
									<span><img src="../assets/img/3.jpg" :data="JSON.stringify(data)"/></span>
									<span :data="JSON.stringify(data)">pause/Resume</span>
								</a>
							</p>
							<p class="campaigns-pause"  @touchstart='plays($event)'>
								<mt-switch v-if="data['deleted'] == 0 && data['integrations'] == 1 && data['status'] == 1" v-model="data.active" class="play" :data-ins="data['status']" :data-id="data['id']"></mt-switch>
							</p>
							<p class="campaigns-pause"  @touchstart='plays($event)'>
								<mt-switch v-if="data['deleted'] == 0 && data['integrations'] == 1 && data['status'] == 0" v-model="data.active" class="play" :data-ins="data['status']" :data-id="data['id']"></mt-switch>
							</p>
							<p class="campaigns-pause">
								<mt-switch v-if="data['deleted'] == 0 && data['integrations'] == 0" v-model="data.active" disabled :data-ins="data['status']" :data-id="data['id']"></mt-switch>
							</p>
							<p class="campaigns-pause"  @touchstart='plays($event)'>
								<mt-switch v-if="data['deleted'] == 1 && data['integrations'] == 1 && data['status'] == 0" v-model="data.active" class="puse" :data-ins="data['status']" :data-id="data['id']"></mt-switch>
							</p>
							<p class="campaigns-pause"  @touchstart='plays($event)'>
								<mt-switch v-if="data['deleted'] == 1 && data['integrations'] == 1 && data['status'] == 1" v-model="data.active" class="puse" :data-ins="data['status']" :data-id="data['id']"></mt-switch>
							</p>
							<p class="campaigns-pause">
								<mt-switch v-if="data['deleted'] == 1 && data['integrations'] == 0" v-model="data.active" disabled :data-ins="data['status']" :data-id="data['id']"></mt-switch>
							</p>
						</div>
						<a href="javascript:;"  @touchstart="LinksHrf($event)">
							<div class="campaigns-info" :data="JSON.stringify(data)">
								<div :data="JSON.stringify(data)">
									<p>Revenue</p>
									<span>${{data["revenue"]}}</span>
									<p>Profit</p>
									<em>${{data["profit"]}}</em>
								</div>
								<div :data="JSON.stringify(data)">
									<p>ROI</p>
									<em>{{data["roi"]}}%</em>
									<p>Cost</p>
									<span>${{data["cost"]}}</span>
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
				from:"",
				search:"",
				playSw:"",
				dataId:"",
				dataTrue:"",
				status:"",
				Data:"",
				groupBy:"",
			}
		},
		computed:{
			getSevenDate(){
				console.log(this.$store.state.data)
				return this.from = this.$store.state.data
			},
			/*dateTime () {
				console.log(this.$store.state.groupBy)
				return this.groupBy = this.$store.state.groupBy
			}*/
		},
		watch: {
			/*dateTime(newVal,oldVal){
				this.search = document.getElementById("search").value
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
					  	filter:that.search,
							from:that.from["from"],
							groupBy:that.groupBy,
							limit:50,
							order:"-visits",
							page:1,
							status:2,
							tag:"",
							to:that.from["to"],
							tz:that.timezone
					  },
					  url:"http://beta.newbidder.com/api/report",
					}).then(function (data) {
						console.log(data)
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
			},*/
			getSevenDate (newVal,oldVal) {
				this.search = document.getElementById("search").value
				this.from = newVal
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
					  	filter:that.search,
							from:that.from["from"],
							groupBy:"campaign",
							limit:50,
							order:"-visits",
							page:1,
							status:2,
							tag:"",
							to:that.from["to"],
							tz:that.timezone
					  },
					  url:"http://beta.newbidder.com/api/report",
					}).then(function (data) {
						console.log(data)
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
			active (val,oldval){
          console.log(this.active)
      },
		},
		mounted(){
			this.tokenname = this.tokenname + '='
			this.tokenCookie=document.cookie.split(";")
			for(var i = 0; i < this.tokenCookie.length; i++){
				this.tokenCookies = this.tokenCookie[i]
				while (this.tokenCookies.charAt(0) == " ") this.tokenCookies = this.tokenCookies.substring(1);
    		if(this.tokenCookies.indexOf(this.tokenname) != -1) {
    			this.token = this.tokenCookies.substring(this.tokenname.length, this.tokenCookies.length)
    		}
			}
			console.log(this.groupBy)
				
		},
		methods: {
			inpVal () {
				this.search = document.getElementById("search").value
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
					  	filter:that.search,
							from:that.from["from"],
							groupBy:"campaign",
							limit:20,
							order:"-visits",
							page:1,
							status:2,
							tag:"",
							to:that.from["to"],
							tz:that.timezone
					  },
					  url:"http://beta.newbidder.com/api/report",
					}).then(function (data) {
						console.log(data)
					    that.dataList = data.data.data.rows
					});
				});	
			},
			plays (ev) {
					this.dataId = ev.target.getAttribute("data-id")
					this.dataTrue = ev.target.getAttribute("data-ins")
					if(this.dataTrue == 1){
						this.status = 0
					}
					else if(this.dataTrue == 0){
						this.status = 1
					}
				var that = this
				this.$ajax({
				  method: "post",
				  data:{
				  	id:that.dataId,
				  	status:that.status
				  },
				  url:"http://beta.newbidder.com/api/campaigns/"+that.dataId+"?authorization="+that.token,
				}).then((data) => {
					console.log(data)
				});
			},
			LinksHrf (ev) {
				 this.$router.push({
            path: 'CampaignsDetail', 
        })
       console.log(ev.target)
				 this.Data = ev.target.getAttribute("data")
				 console.log(this.Data)
				var oDate = new Date();
				oDate.setDate(oDate.getDate() + 1);
				document.cookie = 'data=' + encodeURIComponent(this.Data) + ';expires=' + oDate + ';path=/';
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
		height: 90%;
		font-size: .26rem;
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
		color: #282828;
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
		color: #282828;
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
		color: #363636;
	}
</style>