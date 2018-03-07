<template>
	<div class="cs-dashboard" :getSevenDate="getSevenDate">
		<div class="page-loading" style="width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 99;background: white;opacity: .5;" v-show="loading">
			<span class="iconfont icon-loading" style="display: block;color: black;font-size: 40px;width: 50px;height: 50px;position: absolute;top: 50%;left: 50%;margin-left: -25px;margin-top: -25px;"></span>
		</div>
		<div class="home-select">
			<span class="iconfont icon-jiankuohaoxizuo" @touchstart="reduceDate"></span>
				<router-link to="/SelectRange">
					<div>
						<span>Data range({{num}})</span>
						<p id="time">{{from.year}}/{{from.month}}/{{from.date}}-{{from.years}}/{{from.months}}/{{from.dates}}</p>
					</div>
				</router-link>
			<span class="iconfont icon-jiankuohaoxiyou" @touchstart="addDate"></span>
		</div>	
		<div >
			<ul style="border: .06rem solid #e4e8f1;border-bottom: none;">
				<li>
					<p>Revenue</p>
					<span v-if="totals['revenue'] == null ">$0</span>
					<span v-if="totals['revenue'] != null ">${{ totals["revenue"] }}</span>
				</li>
				<li>
					<p>Cost</p>
					<span v-if="totals['cost'] == null ">$0</span>
					<span v-if="totals['cost'] != null ">${{ totals["cost"] }}</span>
				</li>
				<li>
					<p>Profit</p>
					<span style="color: #CCCCCC;" v-if="totals['profit'] != null ">${{ totals["profit"] }}</span>
					<span style="color: #CCCCCC;" v-if="totals['profit'] == null ">$0</span>
				</li>
				<li>
					<p>ROI</p>
					<span style="color: #CCCCCC;" v-if="totals['roi'] == null ">0%</span>
					<span style="color: #CCCCCC;" v-if="totals['roi'] != null ">{{ totals["roi"] }}%</span>
				</li>
				<li>
					<p>Visits</p>
					<span v-if="totals['visits'] == null ">0</span>
					<span v-if="totals['visits'] != null ">{{ totals["visits"] }}</span>
				</li>
				<li>
					<p>Clicks</p>
					<span v-if="totals['clicks'] == null ">0</span>
					<span v-if="totals['clicks'] != null ">{{ totals["clicks"] }}</span>
				</li>
			</ul>
			<div :id="id"></div>
			<div style="height: 1rem;width: 100%;position: relative;top: -.3rem;background: white;">
				<p style="height: 2rem;"></p>
			</div>
		</div>
	</div>
</template>

<script>
	import HighCharts from 'highcharts'
	import commont from '../assets/js/commont.js'
	export default{
		data () {
		    return {
		    	loading:true,
		    	totals:"",
		     date:"",
		     timezone:"",
		     nowDate:"",
		     Date:"",
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
		     params:{},
		     num:""
		    }
		},
		computed:{
			getSevenDate(){
				this.from = this.$store.state.data
			}
		},
		watch: {
			from(newVal,oldVal){
				var that = this
				this.from = newVal;
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
				this.$ajax({
			  method: "get",
			  params:{
			  	authorization:that.token
			  },
			  url:"https://panel.newbidder.com/api/profile",
			}).then((data) => {
			   that.timezone = data.data.data.timezone
			   this.params = {
				  	authorization:that.token,
				  	from:that.from.year+"-"+that.from.month+"-"+that.from.date+"T00:00",
				  	groupBy:"day",
				  	order:"+day",
				  	status:1,
				  	to:that.from.years+"-"+that.from.months+"-"+that.from.dates+"T00:00",
				  	tz:that.timezone
					}
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
					  params:this.params,
					  url:"https://panel.newbidder.com/api/report",
					}).then(function (data) {
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
					    	that.categories[i] = data.data.data.rows[i]["id"]
					    }
				    }else{
				    	that.revenue[0]=0
					    	that.cost[0]= 0
					    	that.profit[0]= 0
					    	that.roi[0]= 0
					    	that.visits[0]= 0
					    	that.clicks[0]= 0
					    	that.categories[0] = that.from.year+"-"+that.from.month+"-"+that.from.date
				    }
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
			this.token = commont.getCookie(this.tokenname).token
			this.nowDate = new Date()
			this.Time = this.nowDate.getTime()
			this.Times = this.nowDate.getTime()+ 604800000
		},
		methods:{
			reduceDate(){
				this.Time = this.Time - 604800000
				this.Date = new Date(parseInt(this.Time))
				this.Times = this.Times - 604800000
				this.date = new Date(parseInt(this.Times))
				this.Data = commont.reduceDate(this.Date,this.date,this.$store.state.data.status)
				this.$store.dispatch("getSevenDate",this.Data)
			},
			addDate(){
				this.Time = this.Time + 604800000
				this.Date = new Date(parseInt(this.Time))
				this.Times = this.Times + 604800000
				this.date = new Date(parseInt(this.Times))
				this.Data = commont.reduceDate(this.Date,this.date,this.$store.state.data.status)
				this.$store.dispatch("getSevenDate",this.Data)
			}
		},
		
		
	}
</script>

<style>
	.cs-dashboard{
		width: 100%;
		height: 82%;
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