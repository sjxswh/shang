<template>
	<div class="cs-offer">
		<div class="page-loading" style="width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 99;background: white;opacity: .5;" v-show="loading">
			<span class="iconfont icon-loading" style="display: block;color: black;font-size: 40px;width: 50px;height: 50px;position: absolute;top: 50%;left: 50%;margin-left: -25px;margin-top: -25px;"></span>
		</div>
		<div class="home-select">
			<span class="iconfont icon-jiankuohaoxizuo" @touchstart="reduceDate"></span>
			<router-link to="/SelectRange">
					<div>
						<span>Data range(7 days)</span>
						<p id="time">{{from.year}}/{{from.month}}/{{from.date}}-{{from.years}}/{{from.months}}/{{from.dates}}</p>
					</div>
				</router-link>
			<span class="iconfont icon-jiankuohaoxiyou" @touchstart="addDate"></span>
		</div>	
		<div style="border: .06rem solid #e4e8f1;border-bottom: none;min-height: 90%;">
			<div class="campaigns-select">
				<span class="iconfont icon-sousuo1-copy" @touchstart="inpVal"></span>
				<input type="text" placeholder="Search" id="search" style="outline: none;" />
			</div>
			<ul class="campaigns-content">
				<li v-for="data in dataList" :data="encodeURIComponent(JSON.stringify(data))">
					<div class="campaigns-img" :data="encodeURIComponent(JSON.stringify(data))">
						<a @touchstart="LinksHrf($event)" :data="encodeURIComponent(JSON.stringify(data))">
							<img src="../assets/img/1.jpg" width="100%" :data="encodeURIComponent(JSON.stringify(data))" />
						</a>
					</div>
					<div class="campaigns-content-main" :data="encodeURIComponent(JSON.stringify(data))">
						<div class="campaigns-title" :data="encodeURIComponent(JSON.stringify(data))">
							<a @touchstart="LinksHrf($event)" :data="encodeURIComponent(JSON.stringify(data))">
								<span :data="encodeURIComponent(JSON.stringify(data))">{{data["offerName"]}}</span>
							</a>
							<span class="iconfont icon-gengduo"></span>
						</div>
						<a @touchstart="LinksHrf($event)" :data="encodeURIComponent(JSON.stringify(data))">
							<div class="campaigns-info" :data="encodeURIComponent(JSON.stringify(data))">
								<div :data="encodeURIComponent(JSON.stringify(data))">
									<p :data="encodeURIComponent(JSON.stringify(data))">Revenue</p>
									<span :data="encodeURIComponent(JSON.stringify(data))">${{data.revenue}}</span>
									<p :data="encodeURIComponent(JSON.stringify(data))">Profit</p>
									<em :data="encodeURIComponent(JSON.stringify(data))">${{data.profit}}</em>
								</div>
								<div :data="encodeURIComponent(JSON.stringify(data))">
									<p :data="encodeURIComponent(JSON.stringify(data))">ROI</p>
									<em :data="encodeURIComponent(JSON.stringify(data))">${{data.roi}}</em>
									<p :data="encodeURIComponent(JSON.stringify(data))">Cost</p>
									<span :data="encodeURIComponent(JSON.stringify(data))">${{data.cost}}</span>
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
		     Year:"",
		     Month:"",
		     Dates:"",
		     Years:"",
		     Months:"",
		     Datess:"",
		     Time:"",
		     Times:"",
		     data:""
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
				console.log(newVal)
				this.search = document.getElementById("search").value
				this.from = newVal
				console.log(this.from.status)
				var that = this
				this.$ajax({
				  method: "get",
				  params:{
				  	authorization:that.token
				  },
				  url:"http://localhost:5000/api/profile",
				}).then((data) => {
				   console.log(data)
				   this.timezone = data.data.data.timezone
				   that.$ajax({
					  method: "get",
					  params:{
					  	authorization:that.token,
					  	filter:this.search,
							from:this.from.year+"-"+this.from.month+"-"+this.from.date+"T00:00",
							groupBy:"offer",
							limit:500,
							order:"-visits",
							page:1,
							status:this.from.status,
							tag:"",
							to:this.from.years+"-"+this.from.months+"-"+this.from.dates+"T00:00",
							tz:this.timezone
					  },
					  url:"http://localhost:5000/api/report",
					}).then((data) => {
						console.log(data)
						this.loading = false
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
			this.nowDate = new Date()
			this.Time = this.nowDate.getTime()-604800000 + 86400000
			this.Times = this.nowDate.getTime()+86400000
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
				  url:"http://localhost:5000/api/profile",
				}).then((data) => {
				   console.log(data)
				   that.timezone = data.data.data.timezone
				   that.$ajax({
					  method: "get",
					  params:{
					  	authorization:that.token,
					  	filter:that.search,
							from:that.from.year+"-"+that.from.month+"-"+that.from.date+"T00:00",
							groupBy:"offer",
							limit:500,
							order:"-visits",
							page:1,
							status:that.from.status,
							tag:"",
							to:that.from.years+"-"+that.from.months+"-"+that.from.dates+"T00:00",
							tz:that.timezone
					  },
					  url:"http://localhost:5000/api/report",
					}).then(function (data) {
						that.loading = false
						console.log(data)
					    that.dataList = data.data.data.rows
					});
				});	
			},
			LinksHrf (ev) {
				 this.$router.push({
            path: 'OfferDetail', 
        })
       console.log(ev.target)
				 this.data = ev.target.getAttribute("data")
				 console.log(this.data)
				var oDate = new Date();
				oDate.setDate(oDate.getDate() + 1);
				document.cookie = 'data=' + this.data + ';expires=' + oDate + ';path=/';
			},
			reduceDate(){
				console.log(this.$store.state.data)
				this.Time = this.Time - 604800000
				this.Date = new Date(parseInt(this.Time)).toLocaleString().split(" ")[0]
				this.Year = this.Date.split("/")[0]
				this.Month = this.Date.split("/")[1]
				this.Month = this.Month<10? "0"+this.Month:this.Month
				this.Dates = this.Date.split("/")[2]
				this.Dates = this.Dates<10? "0"+this.Dates:this.Dates
				this.Times = this.Times - 604800000
				this.date = new Date(parseInt(this.Times)).toLocaleString().split(" ")[0]
				this.Years = this.date.split("/")[0]
				this.Months = this.date.split("/")[1]
				this.Months = this.Months<10? "0"+this.Months:this.Months
				this.Datess = this.date.split("/")[2]
				this.Datess = this.Datess<10? "0"+this.Datess:this.Datess
				this.Data = {
						"year":this.Year,
						"month":this.Month,
						"date":this.Dates,
						"years":this.Years,
						"months":this.Months,
						"dates":this.Datess,
						"status":1,
						"groupBy":"offer"
					}
				console.log(this.Data)
				this.$store.dispatch("getSevenDate",this.Data)
			},
			addDate(){
				this.Time = this.Time + 604800000
				this.Date = new Date(parseInt(this.Time)).toLocaleString().split(" ")[0]
				this.Year = this.Date.split("/")[0]
				this.Month = this.Date.split("/")[1]
				this.Month = this.Month<10? "0"+this.Month:this.Month
				this.Dates = this.Date.split("/")[2]
				this.Dates = this.Dates<10? "0"+this.Dates:this.Dates
				this.Times = this.Times + 604800000
				this.date = new Date(parseInt(this.Times)).toLocaleString().split(" ")[0]
				this.Years = this.date.split("/")[0]
				this.Months = this.date.split("/")[1]
				this.Months = this.Months<10? "0"+this.Months:this.Months
				this.Datess = this.date.split("/")[2]
				this.Datess = this.Datess<10? "0"+this.Datess:this.Datess
				this.Data = {
						"year":this.Year,
						"month":this.Month,
						"date":this.Dates,
						"years":this.Years,
						"months":this.Months,
						"dates":this.Datess,
						"status":1,
						"groupBy":"offer"
					}
				console.log(this.Data)
				this.$store.dispatch("getSevenDate",this.Data)
			}
		}
	}
</script>

<style>
	.cs-offer{
		position: absolute;
		top: 1.24rem;
		width: 100%;
		height: 82%;
		font-size: .26rem;
		font-family: "arial, helvetica, sans-serif";
	}
	.cs-offer .campaigns-select{
		display: flex;
		width: 100%;
		height:.8rem;
		border-bottom: .06rem solid #e4e8f1;
	}
	.cs-offer .campaigns-select .iconfont{
		width: 10%;
		height: 100%;
		line-height: .8rem;
	}
	.cs-offer .campaigns-select input{
		border: none;
		width: 90%;
		height: 94%;
	}
	.cs-offer .campaigns-content {
		height: 100%;
	}
	.cs-offer .campaigns-content li{
		display: flex;
		padding: .2rem 0;
		border-bottom: .06rem solid #e4e8f1;
	}
	.cs-offer .campaigns-content li:last-child{
		border: none;
	}
	.cs-offer .campaigns-img{
		width: 18%;
	}
	.cs-offer .campaigns-img a{
		display: block;
		width: 100%;
		height: 50%;
		padding: 0 .2rem;
		box-sizing: border-box;
	}
	.cs-offer .campaigns-content-main{
		width:82% ;
		padding-right: .4rem;
	}
	.cs-offer .campaigns-title{
		display: flex;
		justify-content: space-between;
		color: black;
		font-weight: 600;
		margin-top: .2rem;
		padding-bottom: .1rem;
		border-bottom: 1px solid #dcdcdc; 
	}
	.cs-offer .campaigns-title a{
		display: block;
		width: 90%;
		text-align: left;
		color: #282828;
	}
	.cs-offer .campaigns-title a span{
		display: block;
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.cs-offer .campaigns-title .iconfont{
		color: #b0b0b0;
	}
	.cs-offer .campaigns-info{
		display: flex;
	}
	.cs-offer .campaigns-info div{
		width: 50%;
		text-align: left;
	}
	.cs-offer .campaigns-info div p{
		color: #8e8e8e;
		margin-top: .2rem;
	}
	.cs-offer .campaigns-info div em{
		color: #e1e4ed;
	}
	.cs-offer .campaigns-info div span{
		color: black;
	}
</style>