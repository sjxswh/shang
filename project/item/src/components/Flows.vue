<template>
	<div class="cs-offer">
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
		<div style="border: .06rem solid #e4e8f1;border-bottom: none;min-height: 90%;">
			<div class="campaigns-select">
				<span class="iconfont icon-sousuo1-copy" @click="inpVal"></span>
				<form @submit="inpVal"><input type="text" placeholder="Search" id="search" style="outline: none;" @focus="inputOnFocus" @blur="inputFocus"  /></form>
			</div>
			<ul class="campaigns-content">
				<li v-for="data in dataList" :data="JSON.stringify(data)">
					<div class="campaigns-img" :data="JSON.stringify(data)">
						<a @click="LinksHrf($event)" :data="JSON.stringify(data)">
							<img src="../assets/img/1.jpg" width="100%" :data="JSON.stringify(data)" />
						</a>
					</div>
					<div class="campaigns-content-main" :data="JSON.stringify(data)">
						<div class="campaigns-title" :data="JSON.stringify(data)">
							<a @click="LinksHrf($event)" :data="JSON.stringify(data)">
								<span :data="JSON.stringify(data)">{{data["flowName"]}}</span>
							</a>
							<router-link to="/Offers" :data-cId="data.flowId" :data-name="data.flowName"  @click="cOffer($event)" class="flowOffer">
								<span class="iconfont icon-gengduo" :data-cId="data.flowId" :data-name="data.flowName"   @click="cOffer($event)"></span>
							</router-link>
						</div>
						<a @click="LinksHrf($event)" :data="JSON.stringify(data)">
							<div class="campaigns-info" :data="JSON.stringify(data)">
								<div :data="JSON.stringify(data)">
									<p :data="JSON.stringify(data)">Revenue</p>
									<span :data="JSON.stringify(data)">${{data.revenue}}</span>
									<p :data="JSON.stringify(data)">Visits</p>
									<em :data="JSON.stringify(data)">{{data.visits}}</em>
								</div>
								<div :data="JSON.stringify(data)">
									<p :data="JSON.stringify(data)">Conversion</p>
									<em :data="JSON.stringify(data)">{{data.conversions}}</em>
									<p :data="JSON.stringify(data)">Click</p>
									<span :data="JSON.stringify(data)">{{data.clicks}}</span>
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
	import commont from '../assets/js/commont.js'
	export default{
		data () {
			return {
				loading:true,
				dataList:[],
				tokenCookie:[],
		    tokenCookies:[],
		    tokenname:"token",
		    token:"",
		    from:{},
				search:"",
				status:"",
				Data:"",
				groupBy:"",
				nowDate:"",
		     Date:"",
		     Time:"",
		     Times:"",
		     data:"",
		     datas:{},
		     num:""
			}
		},
		computed:{
			getSevenDate(){
				console.log(this.$store.state.data)
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
				   this.timezone = data.data.data.timezone
				   that.$ajax({
					  method: "get",
					  params:{
					  	authorization:that.token,
					  	filter:this.search,
							from:this.from.year+"-"+this.from.month+"-"+this.from.date+"T00:00",
							groupBy:"flow",
							limit:500,
							order:"-visits",
							page:1,
							status:this.from.status,
							tag:"",
							to:this.from.years+"-"+this.from.months+"-"+this.from.dates+"T00:00",
							tz:this.timezone
					  },
					  url:"https://panel.newbidder.com/api/report",
					}).then((data) => {
						console.log(data)
						this.loading= false
					    this.dataList = data.data.data.rows;
					    /*that.dataList.forEach((item)=>{
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
					    })*/
					});
				});	
			},
			getSevenDate (newVal,oldVal) {
				
			},
		},
		mounted () {
			this.token = commont.getCookie(this.tokenname).token
			this.nowDate = new Date()
			this.Time = this.nowDate.getTime()//-604800000 + 86400000
			this.Times = this.nowDate.getTime()+604800000
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
				  url:"https://panel.newbidder.com/api/profile",
				}).then((data) => {
				   that.timezone = data.data.data.timezone
				   that.$ajax({
					  method: "get",
					  params:{
					  	authorization:that.token,
					  	filter:that.search,
							from:that.from.year+"-"+that.from.month+"-"+that.from.date+"T00:00",
							groupBy:"flow",
							limit:500,
							order:"-visits",
							page:1,
							status:that.from.status,
							tag:"",
							to:that.from.years+"-"+that.from.months+"-"+that.from.dates+"T00:00",
							tz:that.timezone
					  },
					  url:"https://panel.newbidder.com/api/report",
					}).then((data) => {
						that.loading = false
					    that.dataList = data.data.data.rows
					});
				});	
			},
			LinksHrf (ev) {
				 this.$router.push({
            path: 'OfferDetail', 
        })
			 this.data = ev.target.getAttribute("data")
				commont.LinksHrf(this.data)
			},
			cOffer(ev){
				this.datas = {"flowName":ev.target.getAttribute("data-name"),"flowId":ev.target.getAttribute("data-cId")}
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
			},
			inputFocus () {
				this.$store.dispatch("FooterHide")
			},
			inputOnFocus () {
				this.$store.dispatch("FooterShow")
			},			
		}
	}
</script>

<style>
	
</style>