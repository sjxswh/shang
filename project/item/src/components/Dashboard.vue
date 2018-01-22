<template>
	<div class="cs-dashboard">
		<home-select></home-select>
		<div >
			<ul style="border: .06rem solid #e4e8f1;border-bottom: none;">
				<li>
					<p>Revenue</p>
					<span>$0.00</span>
				</li>
				<li>
					<p>Cost</p>
					<span>$0.00</span>
				</li>
				<li>
					<p>Profit</p>
					<span style="color: #CCCCCC;">$0.00</span>
				</li>
				<li>
					<p>POI</p>
					<span style="color: #CCCCCC;">0%</span>
				</li>
				<li>
					<p>Visits</p>
					<span>0</span>
				</li>
				<li>
					<p>Clicks</p>
					<span>0</span>
				</li>
			</ul>
			<x-chart :id="id" :option="option"></x-chart>
			<div style="height: 1rem;width: 100%;position: relative;top: -.5rem;background: white;">
				<p style="height: 2rem;"></p>
			</div>
		</div>
	</div>
</template>

<script>
	import XChart from '@/components/XChart'
	import options from '../chart-option/Dashboard-options'
	import HomeSelect from '@/components/Home-Select'
	
	export default{
		components: {
			XChart,HomeSelect
		},
		data () {
			let option = options.option
		    return {
		     id:"container",
		     option:option,
		     date:"",
		     timezone:"",
		     Years:"",
		     Month:"",
		     Date:"",
		     day:""
		    }
		},
		mounted(){
			let token=document.cookie.split("=")[1];
			let that = this
			console.log(token)
			this.date = new Date() 
			
		  this.$ajax({
			  method: "get",
			  url:"http://beta.newbidder.com/api/profile?authorization=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjE0LCJleHAiOjE1MzM0NTk4MDY0NjIsImZpcnN0bmFtZSI6ImNob25nIiwiaWRUZXh0IjoiaXl0ZzNhIn0.PCyszyytd-cujLMbKe1w3n-0_aeXYsgSucLWiqrZrdU",
			}).then((data) => {
			   console.log(data)
			   that.timezone = data.data.data.timezone
			   that.day = "+day"
			   that.$ajax({
				  method: "get",
				  url:"http://beta.newbidder.com/api/report?authorization=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjE0LCJleHAiOjE1MzM0NTk4MDY0NjIsImZpcnN0bmFtZSI6ImNob25nIiwiaWRUZXh0IjoiaXl0ZzNhIn0.PCyszyytd-cujLMbKe1w3n-0_aeXYsgSucLWiqrZrdU&from=2018-01-15T00:00&groupBy=day&limit=7&order="+that.day+"&page=1&status=1&to=2018-01-16T00:00&tz="+that.timezone,
				  
				}).then(function (data) {
				    console.log(data)
				});
			});	
		
		   /*	this.$ajax({
			  method: "get",
			  url:"http://localhost:5000/api/report?authorization=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjE0LCJleHAiOjE1MzM0NTk4MDY0NjIsImZpcnN0bmFtZSI6ImNob25nIiwiaWRUZXh0IjoiaXl0ZzNhIn0.PCyszyytd-cujLMbKe1w3n-0_aeXYsgSucLWiqrZrdU",
			  data:{
			  	from:new Date(),
				groupBy:"hour",
				order:"hour",
				status:1,
				to:new Date(),
				tz:"-12:00"
			  }
			}).then(function (data) {
			    that.timezones = data.data.data.timezones
			});	*/
		},
		methods:{
			
		},
		
	}
</script>

<style>
	.cs-dashboard{
		width: 100%;
		height: 73%;
		position: absolute;
		top: 1.24rem;
		color: #797979;
		font-size: .24rem;
	}
	.cs-dashboard ul{
		display: flex;
		flex-flow:  row wrap;
	}
	.cs-dashboard ul li{
		width: 50%;
		padding: .1rem .2rem;
		border-right: .06rem solid #e4e8f1;
		border-bottom: .06rem solid #e4e8f1;
	}
	.cs-dashboard ul li:nth-child(2n){
		border-right: none;
	}
	.cs-dashboard ul li p{
		text-align: left;
		margin-bottom: .2rem;
	}
	.cs-dashboard ul li span{
		display: block;
		text-align: right;
		font-size: .3rem;
		color: black;
	}
</style>