<template>
	<div class="cs-offer">
		<home-select></home-select>
		<div style="border: .06rem solid #e4e8f1;border-bottom: none;min-height: 90%;">
			<div class="campaigns-select">
				<span class="iconfont icon-sousuo1-copy"></span>
				<input type="text" placeholder="Search" style="outline: none;" />
			</div>
			<ul class="campaigns-content">
				<li v-for="data in dataList">
					<div class="campaigns-img">
						<router-link to="/OfferDetail">
							<img src="../assets/img/1.jpg" width="100%" />
						</router-link>
					</div>
					<div class="campaigns-content-main">
						<div class="campaigns-title">
							<router-link to="/OfferDetail">
								<span>adv-lux de</span>
							</router-link>
							<span class="iconfont icon-gengduo"></span>
						</div>
						<router-link to="/OfferDetail">
							<div class="campaigns-info">
								<div>
									<p>{{data.name}}</p>
									<span>$0.00</span>
									<p>Profit</p>
									<em>￥0.00</em>
								</div>
								<div>
									<p>Revenue</p>
									<em>$0.00</em>
									<p>Profit</p>
									<span>￥0.00</span>
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
				dataList:[
					{name:'Revenue',
					 src:"dff",
					 value:true
					},
					{name:'Visit',
					 src:"dff",
					 value:false
					},
					{name:'Click',
					 src:"dff",
					 value:true
					},
					{name:'Click',
					 src:"dff",
					 value:true
					},
				],
			}
		},
		mounted(){
		}
	}
</script>

<style>
	.cs-offer{
		position: absolute;
		top: 1.24rem;
		width: 100%;
		height: 82%;
		font-size: .3rem;
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
		height: 96%;
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
		width: 20%;
	}
	.cs-offer .campaigns-img a{
		display: block;
		width: 100%;
		height: 50%;
		padding: 0 .2rem;
		box-sizing: border-box;
	}
	.cs-offer .campaigns-content-main{
		width:80% ;
		padding-right: .4rem;
	}
	.cs-offer .campaigns-title{
		display: flex;
		justify-content: space-between;
		color: black;
		font-weight: 600;
		padding-bottom: .2rem;
		border-bottom: 1px solid #dcdcdc; 
	}
	.cs-offer .campaigns-title a{
		display: block;
		width: 90%;
		text-align: left;
		color: black;
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