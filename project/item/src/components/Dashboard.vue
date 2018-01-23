<template>
	<div class="cs-dashboard">
		<home-select></home-select>
		<div >
			<ul style="border: .06rem solid #e4e8f1;border-bottom: none;">
				<li>
					<p>Revenue</p>
					<span>${{ totals["revenue"] }}.00</span>
				</li>
				<li>
					<p>Cost</p>
					<span>${{ totals["cost"] }}.00</span>
				</li>
				<li>
					<p>Profit</p>
					<span style="color: #CCCCCC;">${{ totals["profit"] }}.00</span>
				</li>
				<li>
					<p>ROI</p>
					<span style="color: #CCCCCC;" v-if="totals['roi'] != 'null' ">0%</span>
					<span style="color: #CCCCCC;" v-if="totals['roi'] == 'null' ">{{ totals["roi"] }}%</span>
				</li>
				<li>
					<p>Visits</p>
					<span>{{ totals["visits"] }}</span>
				</li>
				<li>
					<p>Clicks</p>
					<span>{{ totals["clicks"] }}</span>
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
	import HomeSelect from '@/components/Home-Select'
	
	export default{
		components: {
			XChart,HomeSelect
		},
		data () {
		    return {
		    	totals:"",
		     date:"",
		     timezone:"",
		     Years:"",
		     Month:"",
		     Date:"",
		     day:"",
		     revenue:[],
		     id:"container",
		     option:{
		     	 title: {
					        text: ''
					    },
					    subtitle: {
					        text: ''
					    },
					    yAxis: {
					        title: {
					            text: ''
					        }
					    },
					    legend: {
					        layout: 'vertical',
					        align: 'right',
					        verticalAlign: 'middle'
					    },
					    plotOptions: {
					        series: {
					            label: {
					                connectorAllowed: false
					            },
					            pointStart: 2010
					        }
					    },
					    series: [{
					        name: 'Revenue',
					        data: [1,2]
					    }, {
					        name: 'Cost',
					        data: [24916, 24064]
					    }, {
					        name: 'Profit',
					        data: [11744, 17722]
					    }, {
					        name: 'POI',
					        data: [3434, 1223]
					    }, {
					        name: 'Visits',
					        data: [12908, 5948]
					    }, {
					        name: 'Clicks',
					        data: [12908, 5948]
					    }],
					    responsive: {
					        rules: [{
					            condition: {
					                maxWidth: 500
					            },
					            chartOptions: {
					                legend: {
					                    layout: 'horizontal',
					                    align: 'center',
					                    verticalAlign: 'bottom'
					                }
					            }
					        }]
					    }
		     },
		     tokenCookie:[],
		     tokenCookies:[],
		     tokenname:"token",
		     token:"",
		    }
		},
		mounted(){
			this.tokenCookie=document.cookie.split(";")
			for(var i = 0; i < this.tokenCookie.length; i++){
				this.tokenCookies = this.tokenCookie[i].split("=");
				if(this.tokenname != this.tokenCookies[0]){
					this.token = this.tokenCookies[1];
					
				}
			}
			let that = this
			
			this.date = new Date() 
		  this.$ajax({
			  method: "get",
			  params:{
			  	authorization:that.token
			  },
			  url:"http://beta.newbidder.com/api/profile",
			}).then((data) => {
			   console.log(data)
			   that.timezone = data.data.data.timezone
			   that.day = "+day"
			   that.$ajax({
				  method: "get",
				  params:{
				  	authorization:that.token,
				  	from:"2018-01-22T00:00",
				  	groupBy:"hour",
				  	order:"hour",
				  	status:1,
				  	to:"2018-01-23T00:00",
				  	tz:that.timezone
				  },
				  url:"http://beta.newbidder.com/api/report",
				}).then(function (data) {
				    console.log(data.data.data.rows)
				    console.log(data)
				    that.totals = data.data.data.totals
				    for(var i =0 ;i < data.data.data.rows.length; i++){
				    	that.revenue[i]= data.data.data.rows[i]["revenue"]
				    	
				    }
				});
			});	
			
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