<template>
	<div class="cs-offer-detail">
		<div class="home-top">
			<div class="home-header">
		  		<em class="iconfont icon-jiankuohaoxizuo" @touchstart="back"></em>
		  		<p class="home-name">{{title}}</p>
		  		<em class="home-edit">Edit</em>
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
			</div>
		</div>
		<div class="campaigns-detail-content">
			<div>
				<p>EPC</p>
				<p>EPC</p>
				<p>EPC</p>
				<p>EPC</p>
				<p>EPC</p>
				<p>EPC</p>
				<p>EPC</p>
				<p>EPC</p>
				<p>EPC</p>
				<p>EPC</p>
			</div>
			<div>
				<p>EPC</p>
				<p>EPC</p>
				<p>EPC</p>
				<p>EPC</p>
				<p>EPC</p>
				<p>EPC</p>
				<p>EPC</p>
				<p>EPC</p>
				<p>EPC</p>
				<p>EPC</p>
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
		components:{
			XChart,HomeSelect
		},
		data () {
			let option = options.option
		    return {
		     id:"container",
		     option:option,
		     data:true,
		     title:"OfferDetail"
		    }
		},
		methods:{
			back () {
		  		this.$router.go(-1)
		  	},
		}
	}
</script>

<style>
	.cs-offer-detail{
		position: absolute;
		top: 1.24rem;
		width: 100%;
		height: 90%;
		font-size: .3rem;
	}
	.cs-offer-detail .home-header{
		padding-left: 0;
	}
	.cs-offer-detail .home-header em{
		font-weight: 600;
	}
	.cs-campaigns-detail{
		position: absolute;
		top: 1.4rem;
		width: 100%;
		height: 90%;
		font-size: .3rem;
	}
	.campaigns-detail-content{
		display: flex;
		padding-left: 1.6rem;
		padding-right: .6rem;
	}
	.campaigns-detail-content div{
		width: 50%;
	}
	.campaigns-detail-content div p{
		margin: .2rem 0;
		font-size: .3rem;
		text-align: left;
	}
	.campaigns-detail-content div:nth-child(1){
		color: #CCCCCC;
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
		color: blue;
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
	.campaigns-content-main{
		width:80% ;
		padding-right: .4rem;
	}
	.cs-offer-detail .campaigns-title{
		display: flex;
		justify-content: space-between;
		height: 1rem;
		color: black;
		font-weight: 600;
		padding-bottom: .2rem;
		border-bottom: 1px solid #dcdcdc; 
	}
	.cs-offer-detail .campaigns-title span{
	display: block;
	line-height: 1rem;
}
.cs-offer-detail .campaigns-title .iconfont{
	color: #b0b0b0;
}
</style>