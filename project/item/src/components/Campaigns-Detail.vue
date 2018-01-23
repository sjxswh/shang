<template>
	<div class="cs-campaigns-detail">
		<div class="home-top">
			<div class="home-header">
		  		<em class="iconfont icon-jiankuohaoxizuo" @touchstart="back"></em>
		  		<p class="home-name">{{title}}</p>
		  		<em class="home-edit" @touchstart="edit">Edit</em>
		  	</div>
		</div>
		<home-select></home-select>
		<div class="campaigns-all">
			<div class="campaigns-img">
				<img src="../assets/img/1.jpg" width="100%" />
			</div>
			<div class="campaigns-content-main">
				<div class="campaigns-title">
					<span>adv-lux de</span>
					<span class="iconfont icon-gengduo"></span>
				</div>
				<div class="campaigns-switch">
					<p>
						<span><img src="../assets/img/2.jpg" /></span>
						<span><img src="../assets/img/3.jpg" /></span>
						<span>pause/Resume</span>
					</p>
					<p class="campaigns-pause">
						<mt-switch v-model="data"></mt-switch>
					</p>
				</div>
				<div class="campaigns-info">
					<div>Change campaigns bid</div>
					<div><em>$</em><span>0.02</span></div>
				</div>
			</div>
		</div>
		<div class="campaigns-detail-content">
			<div>
				<span class="iconfont icon-shanchuanniucopy zititubiao " @touchstart="detele"></span>
				<p>dfsdsf</p>
				<p>df</p>
				<span class="iconfont icon-icmenumore zititubiao "></span>
			</div>
			<div>
				<span class="iconfont icon-shanchuanniucopy zititubiao "></span>
				<p>dfgfh</p>
				<p>d</p>
				<span class="iconfont icon-icmenumore zititubiao "></span>
			</div>
			<div>
				<span class="iconfont icon-shanchuanniucopy zititubiao "></span>
				<p>ghgj</p>
				<p>g</p>
				<span class="iconfont icon-icmenumore zititubiao "></span>
			</div>
			<div>
				<span class="iconfont icon-shanchuanniucopy zititubiao "></span>
				<p>yuhj</p>
				<p>EhPC</p>
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
		components: {
			XChart,HomeSelect
		},
		data () {
			let option = options.option
		    return {
		     id:"container",
		     option:option,
		     data:true,
		     title:"CampaignsDetail"
		    }
		},
		mounted(){
			
		},
		methods:{
			back () {
		  		this.$router.go(-1)
		  	},
	  	edit () {
	  		var csCam = document.getElementsByClassName("campaigns-detail-content")[0];
	  		csCam.style.paddingLeft = 0;
	  		csCam.style.paddingRight = 0;
	  		var iconfont = Array.from(document.getElementsByClassName("zititubiao"))
	  		iconfont.forEach(function(v,k){
	  			iconfont[k].className += "iconfont-active"
	  		})
	  	},
	  	detele () {
	  		var detele = Array.from(document.getElementsByClassName("icon-shanchuanniucopy"))
	  		detele.forEach(function(v,k){
	  			v.onclick = function(){
	  				v.parentNode.remove()
	  			}
	  		})
	  	}
		}
	}
</script>

<style>
	.cs-campaigns-detail{
		position: absolute;
		top: 1.24rem;
		width: 100%;
		height: 80%;
		font-size: .26rem;
	}
	.cs-campaigns-detail .home-header{
		padding-left: 0;
	}
	.cs-campaigns-detail .home-header em{
		font-weight: 600;
	}
	.campaigns-detail-content{
		padding-left: 1.6rem;
		padding-right: .6rem;
	}
	.campaigns-detail-content div{
		display: flex;
		color: #8c8c8c;
	}
	.campaigns-detail-content div .iconfont{
		display: none;
		width: 16%;
		margin: .2rem 0;
	}
	.campaigns-detail-content div .iconfont-active{
		display: block !important;
		transition: display 2s;
	}
	.icon-shanchuanniucopy{
		color: red;
	}
	.campaigns-detail-content div p{
		width: 42%;
		margin: .2rem 0;
		font-size: .3rem;
		text-align: left;
	}
	.campaigns-detail-content div p:nth-of-type(2){
		color: #3f3f3f;
	}
	.campaigns-detail-report {
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