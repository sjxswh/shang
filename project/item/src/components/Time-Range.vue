<template>
	<div class="cs-time-range">
		<div class="time-range-title">Campaigns that were</div>
		<select>
			<option>Active</option>
			<option>Archived</option>
			<option>With Traffic</option>
			<option>All</option>
		</select>
		<div class="time-range-title">Timezone</div>
		<select>
			<option v-for="data in timezones">{{data.name}}</option>
		</select>
		<div class="time-range-title">In</div>
		<select>
			<option>Today</option>
			<option>Yesterday</option>
			<option>Last 7 Days</option>
			<option>Last 14 Days</option>
			<option>This week</option>
			<option>This Month</option>
		</select>
		<div class="time-range-select">
			<span @click="openPicker">{{Year}}/{{Month}}/{{Dates}}</span>
			<span @click="openPickers">{{Years}}/{{Months}}/{{Datess}}</span>
		</div>
		   <mt-datetime-picker
		   	  ref="picker"
			  v-model="pickerVisible"
			  type="date"
			  year-format="{value}"
			  month-format="{value}"
			  date-format="{value}"
			  :endDate="endDate"
			  :startDate="startDate">
			</mt-datetime-picker>
			<mt-datetime-picker
		   	  ref="pickers"
			  v-model="pickerVisibles"
			  type="date"
			  year-format="{value}"
			  month-format="{value}"
			  date-format="{value}"
			  :endDate="endDate"
			  :startDate="startDate">
			</mt-datetime-picker>
	</div>
</template>

<script>
	export default{
		name:"TimeRange",
		data () {
			return {
				pickerVisible: "",
				pickerVisibles: "",
				endDate:new Date(),
				startDate:new Date("2010/1/1"),
				Year:"",
				Month:"",
				Dates:"",
				Years:"",
				Months:"",
				Datess:"",
				timezones:""
			}
		},
		methods: {
	      openPicker() {
	        this.$refs.picker.open();
	      },
	       openPickers() {
	        this.$refs.pickers.open();
	      },
	      clickDate(){
		   		this.Year = this.pickerVisible.getFullYear()
		   		this.Month = this.pickerVisible.getMonth()+1
		   		this.Dates = this.pickerVisible.getDate()
		   		this.Years = this.pickerVisibles.getFullYear()
		   		this.Months = this.pickerVisibles.getMonth()+1
		   		this.Datess = this.pickerVisibles.getDate()
		   	}
	    },
	   mounted () {
	   	let that = this
	   	this.pickerVisible = new Date();
	   	this.pickerVisibles = new Date();
	   	this.Year = this.pickerVisible.getFullYear()
   		this.Month = this.pickerVisible.getMonth()+1
   		this.Dates = this.pickerVisible.getDate()
   		this.Years = this.pickerVisibles.getFullYear()
   		this.Months = this.pickerVisibles.getMonth()+1
   		this.Datess = this.pickerVisibles.getDate()+1
	   	var vModal = document.getElementsByClassName("mint-datetime-confirm")[0]
	   	window.addEventListener("click",this.clickDate)
	   	this.$ajax({
		  method: "get",
			  url:"https://panel.newbidder.com/timezones",
			}).then(function (data) {
			    that.timezones = data.data.data.timezones
			});
	   },
	   updated () {
	   	
	   }
	}
</script>

<style>
	.cs-time-range{
		font-size: .36rem;
	}
	.cs-time-range select{
		width: 100%;
		height: .8rem;
		outline: none;
		border: none;
	}
	.cs-time-range option{
		width: 100%;
	}
	.time-range-title{
		font-size: .3rem;
		color: #848891;
		text-align: left;
		margin: .2rem 0;
	}
	.time-range-select{
		display: flex;
		justify-content: space-between;
		margin-top: .2rem;
	}
	.time-range-select span{
		width: 48%;
		height: .8rem;
		line-height: .8rem;
		background: white;
	}
</style>