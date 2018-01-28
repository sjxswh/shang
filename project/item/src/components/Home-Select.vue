<template>
	<div class="home-select">
			<span class="iconfont icon-jiankuohaoxizuo" @touchstart="reduceDate"></span>
				<router-link to="/SelectRange">
					<div>
						<span>Data range(7 days)</span>
						<p id="time">{{Year}}/{{Month}}/{{Dates}} - {{Years}}/{{Months}}/{{Datess}}</p>
					</div>
				</router-link>
			<span class="iconfont icon-jiankuohaoxiyou" @touchstart="addDate"></span>
		</div>	
</template>

<script>
	import store from '../store/TodoStore'
	export default{
		data() {
			return{
				nowdate:"",
				Year:"",
		     Month:"",
		     Dates:"",
		     Years:"",
		     Months:"",
		     Datess:"",
		     sss:"",
		     Date:"",
		     date:"",
		     Time:"",
		     Times:"",
		     Data:"",
		     odldateL:"",
		     oneTime:86400000
			}
		},
		mounted(){
			this.nowDate = new Date()
			this.Time = this.nowDate.getTime()-604800000 + 86400000
			this.Times = this.nowDate.getTime()+86400000
			this.Date = new Date(parseInt(this.Time)).toLocaleString().split(" ")[0]
			this.Year = this.Date.split("/")[0]
			this.Month = this.Date.split("/")[1]
			this.Month = this.Month<10? "0"+this.Month:this.Month
			this.Dates = this.Date.split("/")[2]
			this.Dates = this.Dates<10? "0"+this.Dates:this.Dates
			this.date = new Date(parseInt(this.Times)).toLocaleString().split(" ")[0]
			this.Years = this.date.split("/")[0]
			this.Months = this.date.split("/")[1]
			this.Months = this.Months<10? "0"+this.Months:this.Months
			this.Datess = this.date.split("/")[2]
			this.Datess = this.Datess<10? "0"+this.Datess:this.Datess
			/*this.Data = {
				"from":this.Year+"-"+this.Month+"-"+this.Dates+"T00:00",
				"to":this.Years+"-"+this.Months+"-"+this.Datess+"T00:00"
			}
			this.$store.dispatch("getSevenDate",this.Data)*/
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
				/*this.Data = {
					"from":this.Year+"-"+this.Month+"-"+this.Dates+"T00:00",
					"to":this.Years+"-"+this.Months+"-"+this.Datess+"T00:00"
				}
				this.$store.dispatch("getSevenDate",this.Data)*/
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
				/*this.Data = {
					"from":this.Year+"-"+this.Month+"-"+this.Dates+"T00:00",
					"to":this.Years+"-"+this.Months+"-"+this.Datess+"T00:00"
				}
				this.$store.dispatch("getSevenDate",this.Data)*/
			}
		}
	}
</script>

<style>
</style>