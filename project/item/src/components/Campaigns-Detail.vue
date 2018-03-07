<template>
	<div class="cs-campaigns-detail">
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
						<span>Data range({{num}})</span>
						<p id="time">{{from.year}}/{{from.month}}/{{from.date}}-{{from.years}}/{{from.months}}/{{from.dates}}</p>
					</div>
				</router-link>
			<span class="iconfont icon-jiankuohaoxiyou"></span>
		</div>	
		<div class="campaigns-all">
			<div class="campaigns-img" @click="back">
				<img src="../assets/img/1.jpg" width="100%" />
			</div>
			<div class="campaigns-content-main">
				<div class="campaigns-title" @click="back">
					<span>{{Data["campaignName"]}}</span>
					<span class="iconfont icon-gengduo"></span>
				</div>
				<div class="campaigns-switch">
					<p @click="back">
						<span><img src="../assets/img/2.jpg" /></span>
						<span><img src="../assets/img/3.jpg" /></span>
						<span>pause/Resume</span>
					</p>
					<p class="campaigns-pause"  @touchstart='plays($event)'>
						<mt-switch v-if="Data['deleted'] == 0 && Data['integrations'] == 1 && Data['status'] == 1" v-model="active" class="play" :data-ins="Data['status']" :data-id="Data['id']"></mt-switch>
					</p>
					<p class="campaigns-pause"  @touchstart='plays($event)'>
						<mt-switch v-if="Data['deleted'] == 0 && Data['integrations'] == 1 && Data['status'] == 0" v-model="archived" class="play" :data-ins="Data['status']" :data-id="Data['id']"></mt-switch>
					</p>
					<p class="campaigns-pause"  @touchstart='plays($event)'>
						<mt-switch v-if="Data['deleted'] == 0 && Data['integrations'] == 0 && Data['status'] == 1"" v-model="active" disabled :data-ins="Data['status']" :data-id="Data['id']"></mt-switch>
					</p>
					<p class="campaigns-pause"  @touchstart='plays($event)'>
						<mt-switch v-if="Data['deleted'] == 0 && Data['integrations'] == 0 && Data['status'] == 0"" v-model="archived" disabled :data-ins="Data['status']" :data-id="Data['id']"></mt-switch>
					</p>
					<p class="campaigns-pause"  @touchstart='plays($event)'>
						<mt-switch v-if="Data['deleted'] == 1 && Data['integrations'] == 1 && Data['status'] == 1" v-model="archived" class="puse" :data-ins="Data['status']" :data-id="Data['id']"></mt-switch>
					</p>
					<p class="campaigns-pause"  @touchstart='plays($event)'>
						<mt-switch v-if="Data['deleted'] == 1 && Data['integrations'] == 1 && Data['status'] == 0" v-model="archived" class="puse" :data-ins="Data['status']" :data-id="Data['id']"></mt-switch>
					</p>
					<p class="campaigns-pause"  @touchstart='plays($event)'>
						<mt-switch v-if="Data['deleted'] == 1 && Data['integrations'] == 0 && Data['status'] == 1" v-model="archived" disabled :data-ins="Data['status']" :data-id="Data['id']"></mt-switch>
					</p>
					<p class="campaigns-pause"  @touchstart='plays($event)'>
						<mt-switch v-if="Data['deleted'] == 1 && Data['integrations'] == 0 && Data['status'] == 0" v-model="archived" disabled :data-ins="Data['status']" :data-id="Data['id']"></mt-switch>
					</p>
					
				</div>
				<div class="campaigns-info" @click="back">
					<div>Change campaigns bid</div>
					<div><em>$</em><span>{{Data["bidPrice"]}}</span></div>
				</div>
			</div>
		</div>
		<div class="campaigns-detail-content">
			<div>
				<span class="iconfont icon-shanchuanniucopy zititubiao " @touchstart="detele"></span>
				<p>External Campaigns</p>
				<p>{{Data["TheirCampName"]}}</p>
				<span class="iconfont icon-icmenumore zititubiao "></span>
			</div>
			<div>
				<span class="iconfont icon-shanchuanniucopy zititubiao " @touchstart="detele"></span>
				<p>BID</p>
				<p>${{Data["bidPrice"]}}</p>
				<span class="iconfont icon-icmenumore zititubiao " ></span>
			</div>
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
		<div style="height: 2rem;width: 100%;background: white;"></div>
	</div>
</template>

<script>
	import commont from '../assets/js/commont.js'
	export default{
		name:"CampaignsDetail",
		data () {
		    return {
		     edits:"Edit",
		     value:true,
		     title:"CampaignsDetail",
		     dataList:[],
		     active:true,
		     archived:false,
		     tokenCookie:[],
		     tokenCookies:[],
		     tokenname:"data",
		     tokennames:"token",
		     token:"",
		     Data:"",
		     nowDate:"",
		     Data:"",
		     Time:"",
		     Times:"",
		     from:"",
		     params:"",
		     num:""
		    }
		},
		computed:{
			getSevenDate(){
				this.from = this.$store.state.data
			},
			
		},
		watch: {
			from(newVal,oldVAl){
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
				
			},
			getSevenDate (newVal,oldVAl){
				
			}
		},
		mounted(){
			this.token = commont.getCookie(this.tokennames).token
    	this.Data = commont.getCookie(this.tokenname)
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
	  	
		},
		
	}
</script>

<style>
	.cs-campaigns-detail{
		position: absolute;
		top: 1.24rem;
		width: 100%;
		height: 80%;
		font-size: .26rem;
		font-family: "arial, helvetica, sans-serif";
	}
	.cs-campaigns-detail .home-header{
		padding-left: 0;
	}
	.cs-campaigns-detail .home-header em{
		font-weight: 600;
	}
	.cs-campaigns-detail .campaigns-detail-content{
		padding-left: 1.6rem;
		padding-right: .6rem;
	}
	.cs-campaigns-detail .campaigns-detail-content div{
		display: flex;
		color: #8c8c8c;
	}
	.cs-campaigns-detail .campaigns-detail-content div .iconfont{
		display: none;
		width: 16%;
		margin: .1rem 0;
	}
	.cs-campaigns-detail .campaigns-detail-content div .iconfont-active{
		display: block !important;
		transition: display 2s;
	}
	.cs-campaigns-detail .icon-shanchuanniucopy{
		color: red;
	}
	.cs-campaigns-detail .campaigns-detail-content div p{
		width: 64%;
		margin: .1rem 0;
		font-size: .2rem;
		text-align: left;
	}
	.cs-campaigns-detail .campaigns-detail-content div p:nth-of-type(2){
		width: 20%;
		color: #3f3f3f;
	}
	.cs-campaigns-detail .campaigns-detail-report {
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
	.cs-campaigns-detail .campaigns-all{
		display: flex;
		padding: .2rem 0;
		margin: 0 0 .2rem ;
		border-top: .08rem solid #e4e8f1;
		border-bottom: .08rem solid #e4e8f1;
	}
	.cs-campaigns-detail .campaigns-img {
		display: block;
		width: 20%;
		height: 50%;
		padding: .2rem;
		box-sizing: border-box;
	}
	.cs-campaigns-detail .campaigns-content-main{
		width:80% ;
		padding-right: .4rem;
	}
	.cs-campaigns-detail .campaigns-title{
		display: flex;
		justify-content: space-between;
		font-weight: 600;
		text-align: left;
		color: black;
	}
	.cs-campaigns-detail .campaigns-title span:nth-child(1){
		width: 90%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.cs-campaigns-detail .campaigns-title span:nth-child(2){
		width: 10%;
		text-align: center;
	}
	.cs-campaigns-detail .campaigns-title .iconfont{
		color: #b0b0b0;
	}
	.cs-campaigns-detail .campaigns-switch{
		display: flex;
		justify-content: space-between;
		height: .8rem;
		padding: 0.1rem 0;
		box-sizing: border-box;
		border-top: 1px solid #dcdcdc;
		border-bottom: 1px solid #dcdcdc; 
	}
	.cs-campaigns-detail .campaigns-switch p{
		display: flex;
		color: black;
	}
	.cs-campaigns-detail .campaigns-switch p span{
		display: block;
	}
	.cs-campaigns-detail .campaigns-switch p span:nth-child(1) img{
		width: .8rem;
		height: .5rem;
	}
	.cs-campaigns-detail .campaigns-switch p span:nth-child(2) img{
		width: .5rem;
		height: .5rem;
	}
	.cs-campaigns-detail .campaigns-switch p span:nth-child(3){
		margin-top: .08rem;
		margin-left: 1.2rem;
	}
	.cs-campaigns-detail .campaigns-switch .campaigns-pause{
		display: flex;
	}
	.cs-campaigns-detail .campaigns-pause .mint-switch-core::before{
		width: .76rem !important;
		height: .36rem !important;
		-moz-border-radius: .2rem;
	  -webkit-border-radius: .2rem;
	  border-radius: .2rem;
	}
	.cs-campaigns-detail .campaigns-pause .mint-switch-core::after{
		width: .4rem;
		height: .36rem;
	}
	.cs-campaigns-detail .campaigns-switch .mint-switch-core{
		width: .8rem;
		height: .4rem;
		margin: 0;
		-moz-border-radius: .2rem;
	  -webkit-border-radius: .2rem;
	  border-radius: .2rem;
		background-color: #49da61 !important;
		border-color: #49da61 !important;
	}
	.cs-campaigns-detail .campaigns-info{
		display: flex;
	}
	.cs-campaigns-detail .campaigns-info div{
		height: .5rem;
		line-height: .5rem;
		margin: .2rem 0;
		font-weight: 600;
	}
	.cs-campaigns-detail .campaigns-info div:nth-child(1){
		width: 60%;
		text-align: left;
	}
	.cs-campaigns-detail .campaigns-info div:nth-child(2){
		display: flex;
		justify-content: space-around;
		width: 40%;
		margin-right: 0;
		-moz-border-radius: .1rem;
	  -webkit-border-radius: .1rem;
	  border-radius: .1rem;
	  background: #eaf1f9;
	}
	.cs-campaigns-detail .campaigns-info div:nth-child(2) em{
		height: .3rem;
		width: .3rem;
		line-height: .3rem;
		margin-top: 4%;
		font-size: .24rem;
		color: #e4ebf3;
		background: #bfcbd9;
		-moz-border-radius: 50%;
	  -webkit-border-radius: 50%;
	  border-radius: 50%;
	}
	
</style>