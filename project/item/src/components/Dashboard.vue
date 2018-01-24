<template>
	<div class="cs-dashboard" :getSevenDate="getSevenDate">
		<home-select></home-select>
		<div >
			<ul style="border: .06rem solid #e4e8f1;border-bottom: none;">
				<li>
					<p>Revenue</p>
					<span>${{ totals["revenue"] }}</span>
				</li>
				<li>
					<p>Cost</p>
					<span>${{ totals["cost"] }}</span>
				</li>
				<li>
					<p>Profit</p>
					<span style="color: #CCCCCC;">${{ totals["profit"] }}</span>
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
			<div :id="id"></div>
			<div style="height: 1rem;width: 100%;position: relative;top: -.5rem;background: white;">
				<p style="height: 2rem;"></p>
			</div>
		</div>
	</div>
</template>

<script>
	//import XChart from '@/components/XChart'
	import HomeSelect from '@/components/Home-Select'
	import HighCharts from 'highcharts'
	export default{
		components: {
			HomeSelect
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
		     cost:[],
		     profit:[],
		     roi:[],
		     visits:[],
		     clicks:[],
		     categories:[],
		     id:"container",
		     tokenCookie:[],
		     tokenCookies:[],
		     tokenname:"token",
		     token:"",
		     from:"",
		    }
		},
		computed:{
			getSevenDate(){
				return this.from = this.$store.state.data
			}
		},
		watch: {
			getSevenDate (newVal,oldVal) {
				var that = this
				this.from = newVal;
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
				  	from:that.from["from"],
				  	limit:7,
				  	groupBy:"day",
				  	order:"+day",
				  	page:1,
				  	status:1,
				  	to:that.from["to"],
				  	tz:that.timezone
				  },
				  url:"http://beta.newbidder.com/api/report",
				}).then(function (data) {
				    console.log(data)
				    that.totals = data.data.data.totals
				    that.revenue = []
				    that.cost = []
				    that.profit = []
				    that.roi = []
				    that.visits = []
				    that.clicks = []
				    that.categories = []
				    for(var i =0 ;i < data.data.data.rows.length; i++){
				    	that.revenue[i]= data.data.data.rows[i]["revenue"]
				    	that.cost[i]= data.data.data.rows[i]["cost"]
				    	that.profit[i]= data.data.data.rows[i]["profit"]
				    	that.roi[i]= data.data.data.rows[i]["roi"]
				    	that.visits[i]= data.data.data.rows[i]["visits"]
				    	that.clicks[i]= data.data.data.rows[i]["clicks"]
				    	that.categories[i] = data.data.data.rows[i]["id"]
				    }
				    console.log(that.categories)
				    HighCharts.chart(that.id,{
		     	 title: {
					        text: ''
					    },
					    subtitle: {
					        text: ''
					    },
					    xAxis: {
					        categories: that.categories,
					        tickInterval: 1
					    },
					    yAxis: {
					        title: {
					            text: ''
					        },
					        minPadding:0,
					        startOnTick:false
					    },
					    legend: {
					        layout: 'vertical',
					        align: 'right',
					        verticalAlign: 'middle'
					    },
					    /*plotOptions: {
					        series: {
					            label: {
					                connectorAllowed: false
					            },
					            pointStart: 2010
					        }
					    },*/
					    series: [{
					        name: 'Revenue',
					        data: that.revenue
					    }, {
					        name: 'Cost',
					        data: that.cost
					    }, {
					        name: 'Profit',
					        data: that.profit
					    }, {
					        name: 'ROI',
					        data: that.roi
					    }, {
					        name: 'Visits',
					        data: that.visits
					    }, {
					        name: 'Clicks',
					        data: that.clicks
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
		     })
				});
			});	
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
		  /*this.$ajax({
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
				  	from:that.from["from"],
				  	limit:7,
				  	groupBy:"day",
				  	order:"+day",
				  	page:1,
				  	status:1,
				  	to:that.from["to"],
				  	tz:that.timezone
				  },
				  url:"http://beta.newbidder.com/api/report",
				}).then(function (data) {
				    console.log(data.data.data.rows)
				    console.log(data)
				    that.totals = data.data.data.totals
				    for(var i =0 ;i < data.data.data.rows.length; i++){
				    	that.revenue[i]= data.data.data.rows[i]["revenue"]
				    	that.cost[i]= data.data.data.rows[i]["cost"]
				    	that.profit[i]= data.data.data.rows[i]["profit"]
				    	that.roi[i]= data.data.data.rows[i]["roi"]
				    	that.visits[i]= data.data.data.rows[i]["visits"]
				    	that.clicks[i]= data.data.data.rows[i]["clicks"]
				    	that.categories[i] = data.data.data.rows[i]["id"]
				    }
				    console.log(that.categories)
				    HighCharts.chart(that.id,{
		     	 title: {
					        text: ''
					    },
					    subtitle: {
					        text: ''
					    },
					    xAxis: {
					        categories: that.categories,
					        tickInterval: 1
					    },
					    yAxis: {
					        title: {
					            text: ''
					        },
					        minPadding:0,
					        startOnTick:false
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
					        data: that.revenue
					    }, {
					        name: 'Cost',
					        data: that.cost
					    }, {
					        name: 'Profit',
					        data: that.profit
					    }, {
					        name: 'ROI',
					        data: that.roi
					    }, {
					        name: 'Visits',
					        data: that.visits
					    }, {
					        name: 'Clicks',
					        data: that.clicks
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
		     })
				});
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