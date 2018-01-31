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
			<span class="iconfont icon-jiankuohaoxizuo"></span>
				<router-link to="/SelectRange">
					<div>
						<span>Data range(7 days)</span>
						<p id="time">{{from.year}}/{{from.month}}/{{from.date}}-{{from.years}}/{{from.months}}/{{from.dates}}</p>
					</div>
				</router-link>
			<span class="iconfont icon-jiankuohaoxiyou"></span>
		</div>
		<div class="campaigns-all">
			<div class="campaigns-img">
				<img src="../assets/img/1.jpg" width="100%" />
			</div>
			<div class="campaigns-content-main">
				<div class="campaigns-title">
					<span>{{Data["landerName"]}}</span>
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
		<!--<x-chart :id="id" :option="option"></x-chart>-->
		<div style="height: 2rem;width: 100%;position: relative;background: white;"></div>
	</div>
</template>

<script>
	import XChart from '@/components/XChart';
	import options from '../chart-option/campaigns-detail-options';
	import HomeSelect from '@/components/Home-Select';
	export default{
		name:"LanderDetail",
		components:{
			XChart,HomeSelect
		},
		data () {
			let option = options.option
		    return {
		     id:"container",
		     option:option,
		     data:true,
		     title:"LanderDetail",
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
	  	
		}
	}
</script>

<style>

</style>