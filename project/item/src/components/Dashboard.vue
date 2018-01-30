<template>
	<div class="cs-dashboard" :getSevenDate="getSevenDate">
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
		<div >
			<ul style="border: .06rem solid #e4e8f1;border-bottom: none;">
				<li>
					<p>Revenue</p>
					<span v-if="totals['revenue'] == 'null' ">$0</span>
					<span v-if="totals['revenue'] != 'null' ">${{ totals["revenue"] }}</span>
				</li>
				<li>
					<p>Cost</p>
					<span v-if="totals['cost'] == 'null' ">$0</span>
					<span v-if="totals['cost'] != 'null' ">${{ totals["cost"] }}</span>
				</li>
				<li>
					<p>Profit</p>
					<span style="color: #CCCCCC;" v-if="totals['profit'] != 'null' ">${{ totals["profit"] }}</span>
					<span style="color: #CCCCCC;" v-if="totals['profit'] == 'null' ">$0</span>
				</li>
				<li>
					<p>ROI</p>
					<span style="color: #CCCCCC;" v-if="totals['roi'] == 'null' ">0%</span>
					<span style="color: #CCCCCC;" v-if="totals['roi'] != 'null' ">{{ totals["roi"] }}%</span>
				</li>
				<li>
					<p>Visits</p>
					<span v-if="totals['visits'] == 'null' ">0</span>
					<span v-if="totals['visits'] != 'null' ">{{ totals["visits"] }}</span>
				</li>
				<li>
					<p>Clicks</p>
					<span v-if="totals['clicks'] == 'null' ">0</span>
					<span v-if="totals['clicks'] != 'null' ">{{ totals["clicks"] }}</span>
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
		    	loading:true,
		    	totals:"",
		     date:"",
		     timezone:"",
		     nowDate:"",
		     Date:"",
		     Year:"",
		     Month:"",
		     Dates:"",
		     Years:"",
		     Months:"",
		     Datess:"",
		     Data:"",
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
		     params:{}
		    }
		},
		computed:{
			getSevenDate(){
				this.from = this.$store.state.data
			}
		},
		watch: {
			from(newVal,oldVal){
				console.log(newVal)
				var that = this
				this.from = newVal;
				this.$ajax({
			  method: "get",
			  params:{
			  	authorization:that.token
			  },
			  url:"http://localhost:5000/api/profile",
			}).then((data) => {
			   console.log(data)
			   that.timezone = data.data.data.timezone
			   if(that.from.dates - that.from.date>1 && that.from.dates - that.from.date<14){
					this.params = {
				  	authorization:that.token,
				  	from:that.from.year+"-"+that.from.month+"-"+that.from.date+"T00:00",
				  	groupBy:"day",
				  	order:"+day",
				  	status:1,
				  	to:that.from.years+"-"+that.from.months+"-"+that.from.dates+"T00:00",
				  	tz:that.timezone
					}
				}
				console.log(that.token)
					if(that.from.dates - that.from.date == 1){
						this.params = {
					  	authorization:this.token,
					  	from:this.from.year+"-"+that.from.month+"-"+that.from.date+"T00:00",
					  	groupBy:"hour",
					  	order:"hour",
					  	status:1,
					  	to:that.from.years+"-"+that.from.months+"-"+that.from.dates+"T00:00",
					  	tz:that.timezone
						}
					}		
					that.$ajax({
					  method: "get",
					  params:that.params,
					  url:"http://localhost:5000/api/report",
					}).then(function (data) {
				    console.log(data)
				    that.loading = false
				    that.totals = data.data.data.totals
				    that.revenue = []
				    that.cost = []
				    that.profit = []
				    that.roi = []
				    that.visits = []
				    that.clicks = []
				    that.categories = []
				    if(data.data.data.rows.length > 0){
					    for(var i =0 ;i < data.data.data.rows.length; i++){
					    	that.revenue[i]=data.data.data.rows[i]["revenue"]
					    	that.cost[i]= data.data.data.rows[i]["cost"]
					    	that.profit[i]= data.data.data.rows[i]["profit"]
					    	that.roi[i]= data.data.data.rows[i]["roi"]
					    	that.visits[i]= data.data.data.rows[i]["visits"]
					    	that.clicks[i]= data.data.data.rows[i]["clicks"]
					    	that.categories[i] = data.data.data.rows[i]["categories"]
					    }
				    }else{
				    	that.revenue[0]=0
					    	that.cost[0]= 0
					    	that.profit[0]= 0
					    	that.roi[0]= 0
					    	that.visits[0]= 0
					    	that.clicks[0]= 0
					    	that.categories[0] = that.from.years+"-"+that.from.months+"-"+that.from.date
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
			},
			getSevenDate (newVal,oldVal) {
				
			}
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
			/*this.Date = new Date()
			this.Month = this.Date.getMonth()+1
			this.Month = this.Month<10?"0"+this.Month:this.Month
			this.from = {
				"year":this.Date.getFullYear(),
				"month":this.Month,
				"date":this.Date.getDate(),
				"years":this.Date.getFullYear(),
				"months":this.Month,
				"dates":this.Date.getDate()
			}*/
			this.nowDate = new Date()
			this.Time = this.nowDate.getTime()-604800000 + 86400000
			this.Times = this.nowDate.getTime()+86400000
		},
		methods:{
			reduceDate(){
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
					}
				console.log(this.Data)
				this.$store.dispatch("getSevenDate",this.Data)
			}
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