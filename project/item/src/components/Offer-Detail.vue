<template>
	<div class="cs-offer-detail">
		<div class="home-top">
			<div class="home-header">
		  		<em class="iconfont icon-jiankuohaoxizuo" @touchstart="back"></em>
		  		<p class="home-name">{{title}}</p>
		  		<em class="home-edit edit" @touchstart="edit">Edit</em>
		  		<em class="home-edit dones" @touchstart="done" style="display: none;">Done</em>
		  	</div>
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
		<div class="campaigns-all">
			<div class="campaigns-img">
				<img src="../assets/img/1.jpg" width="100%" />
			</div>
			<div class="campaigns-content-main">
				<div class="campaigns-title">
					<span>{{Data["offerName"]}}</span>
					<span class="iconfont icon-gengduo"></span>
				</div>
			</div>
		</div>
		<div class="campaigns-detail-content">
			<div>
				<span class="iconfont icon-shanchuanniucopy zititubiao " @touchstart="detele"></span>
				<p>Visits</p>
				<p>{{Data["visits"]}}</p>
				<span class="iconfont icon-icmenumore zititubiao "></span>
			</div>
			<div>
				<span class="iconfont icon-shanchuanniucopy zititubiao " @touchstart="detele"></span>
				<p>Clicks</p>
				<p>{{Data["clicks"]}}</p>
				<span class="iconfont icon-icmenumore zititubiao " ></span>
			</div>
			<div>
				<span class="iconfont icon-shanchuanniucopy zititubiao " @touchstart="detele"></span>
				<p>Conversions</p>
				<p>{{Data["conversions"]}}</p>
				<span class="iconfont icon-icmenumore zititubiao "></span>
			</div>
			<div>
				<span class="iconfont icon-shanchuanniucopy zititubiao " @touchstart="detele"></span>
				<p>Revenue</p>
				<p>${{Data["revenue"]}}</p>
				<span class="iconfont icon-icmenumore zititubiao "></span>
			</div>
			<div>
				<span class="iconfont icon-shanchuanniucopy zititubiao " @touchstart="detele"></span>
				<p>Cost</p>
				<p>${{Data["cost"]}}</p>
				<span class="iconfont icon-icmenumore zititubiao "></span>
			</div>
			<div>
				<span class="iconfont icon-shanchuanniucopy zititubiao " @touchstart="detele"></span>
				<p>CPV</p>
				<p>${{Data["cpv"]}}</p>
				<span class="iconfont icon-icmenumore zititubiao "></span>
			</div>
			<div>
				<span class="iconfont icon-shanchuanniucopy zititubiao " @touchstart="detele"></span>
				<p>Profit</p>
				<p>${{Data["profit"]}}</p>
				<span class="iconfont icon-icmenumore zititubiao "></span>
			</div>
			<div>
				<span class="iconfont icon-shanchuanniucopy zititubiao " @touchstart="detele"></span>
				<p>CTR</p>
				<p>{{Data["ctr"]}}%</p>
				<span class="iconfont icon-icmenumore zititubiao "></span>
			</div>
			<div>
				<span class="iconfont icon-shanchuanniucopy zititubiao " @touchstart="detele"></span>
				<p>CR</p>
				<p>{{Data["cr"]}}%</p>
				<span class="iconfont icon-icmenumore zititubiao "></span>
			</div>
			<div>
				<span class="iconfont icon-shanchuanniucopy zititubiao " @touchstart="detele"></span>
				<p>CV</p>
				<p>{{Data["cv"]}}%</p>
				<span class="iconfont icon-icmenumore zititubiao "></span>
			</div>
			<div>
				<span class="iconfont icon-shanchuanniucopy zititubiao " @touchstart="detele"></span>
				<p>ROI</p>
				<p>{{Data["roi"]}}%</p>
				<span class="iconfont icon-icmenumore zititubiao "></span>
			</div>
			<div>
				<span class="iconfont icon-shanchuanniucopy zititubiao " @touchstart="detele"></span>
				<p>EPV</p>
				<p>${{Data["epv"]}}</p>
				<span class="iconfont icon-icmenumore zititubiao "></span>
			</div>
			<div>
				<span class="iconfont icon-shanchuanniucopy zititubiao " @touchstart="detele($event)"></span>
				<p>EPC</p>
				<p>${{Data["epc"]}}</p>
				<span class="iconfont icon-icmenumore zititubiao "></span>
			</div>
		</div>
		<div class="campaigns-detail-report">Drilldown report</div>
		<x-chart :id="id" :option="option"></x-chart>
		<div style="height: 2rem;width: 100%;position: relative;top: -.5rem;background: white;"></div>
	</div>
</template>

<script>
	import XChart from '@/components/XChart';
	import options from '../chart-option/campaigns-detail-options';
	import HomeSelect from '@/components/Home-Select';
	export default{
		name:"OfferDetail",
		components:{
			XChart,HomeSelect
		},
		data () {
			let option = options.option
		    return {
		     id:"container",
		     option:option,
		     data:true,
		     title:"OfferDetail",
		     tokenCookie:[],
		     tokenCookies:[],
		     tokenname:"data",
		     tokennames:"token",
		     token:"",
		     nowDate:"",
		     Date:"",
		     Year:"",
		     Month:"",
		     Dates:"",
		     Years:"",
		     Months:"",
		     Datess:"",
		     Data:"",
		     Time:"",
		     Times:"",
		     from:""
		    }
		},
		computed:{
			getSevenDate(){
				console.log(this.$store.state.data)
				this.from = this.$store.state.data
			},
			
		},
		watch: {
			from(newVal,oldVAl){
				console.log(newVal)
				this.from = newVal
				console.log(this.from.status)
				var that = this
				
			},
			getSevenDate (newVal,oldVAl){
				
			}
		},
		mounted(){
			this.tokenname = this.tokenname + '='
			this.tokennames = this.tokennames + '='
			this.tokenCookie=document.cookie.split(";")
			for(var i = 0; i < this.tokenCookie.length; i++){
				this.tokenCookies = this.tokenCookie[i]
				while (this.tokenCookies.charAt(0) == " ") this.tokenCookies = this.tokenCookies.substring(1);
    		if(this.tokenCookies.indexOf(this.tokenname) != -1) {
    			this.Data = JSON.parse(decodeURIComponent(this.tokenCookies.substring(this.tokenname.length, this.tokenCookies.length)))
    			console.log(this.Data)
    		}
    		if(this.tokenCookies.indexOf(this.tokennames) != -1) {
    			this.token = decodeURIComponent(this.tokenCookies.substring(this.tokennames.length, this.tokenCookies.length))
    			console.log(this.token)
    		}
			}
			console.log(this.$store.state.switchSta)
			this.nowDate = new Date()
			this.Time = this.nowDate.getTime()-604800000 + 86400000
			this.Times = this.nowDate.getTime()+86400000
		},
		methods:{
			back () {
		  		this.$router.go(-1)
		  	},
		  	done () {
	  		var csCam = document.getElementsByClassName("campaigns-detail-content")[0];
	  		csCam.style.paddingLeft = 1.6+"rem";
	  		csCam.style.paddingRight = 0.6+"rem";
	  		var iconfont = Array.from(document.getElementsByClassName("zititubiao"))
	  		iconfont.forEach(function(v,k){
	  			iconfont[k].className = iconfont[k].className.replace(/iconfont-active/g, ' ')
	  		})
	  		var edits = document.getElementsByClassName("edit")[0]
	  		edits.style.display ="block"
	  		var dones = document.getElementsByClassName("dones")[0]
	  		dones.style.display ="none"
	  	},
	  	edit () {
	  		var csCam = document.getElementsByClassName("campaigns-detail-content")[0];
	  		csCam.style.paddingLeft = 0;
	  		csCam.style.paddingRight = 0;
	  		var iconfont = Array.from(document.getElementsByClassName("zititubiao"))
	  		iconfont.forEach(function(v,k){
	  			iconfont[k].className += "iconfont-active"
	  		})
	  		var dones = document.getElementsByClassName("dones")[0]
	  		dones.style.display ="block"
	  		var edits = document.getElementsByClassName("edit")[0]
	  		edits.style.display ="none"
	  	},
	  	detele (ev) {
	  		ev.target.parentNode.remove()
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
						"status":1
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
						"status":1
					}
				console.log(this.Data)
				this.$store.dispatch("getSevenDate",this.Data)
			}
		}
	}
</script>

<style>
	.cs-offer-detail{
		position: absolute;
		top: 1.24rem;
		width: 100%;
		height: 90%;
		font-size: .26rem;
		font-family: "arial, helvetica, sans-serif";
	}
	.cs-offer-detail .home-header{
		padding-left: 0;
	}
	.cs-offer-detail .home-header em{
		font-weight: 600;
	}
	.cs-offer-detail .cs-campaigns-detail{
		position: absolute;
		top: 1.4rem;
		width: 100%;
		height: 90%;
		font-size: .3rem;
	}
	.cs-offer-detail .campaigns-detail-content{
		padding-left: 1.6rem;
		padding-right: .6rem;
	}
	.cs-offer-detail .campaigns-detail-content div{
		display: flex;
		color: #8c8c8c;
	}
	.cs-offer-detail .campaigns-detail-content div .iconfont{
		display: none;
		width: 30%;
		margin: .1rem 0;
	}
	.cs-offer-detail .campaigns-detail-content div .iconfont-active{
		display: block !important;
		transition: display 2s;
	}
	.cs-offer-detail .icon-shanchuanniucopy{
		color: red;
	}
	.cs-offer-detail .campaigns-detail-content div p{
		width: 64%;
		margin: .1rem 0;
		font-size: .2rem;
		text-align: left;
	}
	.cs-offer-detail .campaigns-detail-content div p:nth-of-type(2){
		width: 20%;
		color: #3f3f3f;
	}
	.cs-offer-detail .campaigns-detail-report {
		display: block;
		padding: .3rem 0;
		margin-left: 1.6rem;
		margin-right: .6rem;
		border-top: 1px solid #CCCCCC;
		border-bottom: 1px solid #CCCCCC;
		font-size: .3rem;
		text-align: left;
		color: #4c98fa;
	}
	.cs-offer-detail .campaigns-all{
		display: flex;
		padding-top: .2rem;
		border-top: .08rem solid #e4e8f1;
	}
	.cs-offer-detail .campaigns-img {
		display: block;
		width: 20%;
		height: 50%;
		padding: 0 .2rem;
		box-sizing: border-box;
	}
	.cs-offer-detail .campaigns-content-main{
		width:80% ;
		padding-right: .4rem;
	}
	.cs-offer-detail .campaigns-title{
		display: flex;
		justify-content: space-between;
		height: .5rem;
		margin-top: .2rem;
		color: black;
		font-weight: 600;
		border-bottom: 1px solid #dcdcdc; 
	}
	.cs-offer-detail .campaigns-title span:nth-child(1){
		width: 90%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		text-align: left;
	}
	.cs-offer-detail .campaigns-title span:nth-child(2){
		width: 10%;
		text-align: center;
	}
.cs-offer-detail .campaigns-title .iconfont{
	color: #b0b0b0;
}
</style>