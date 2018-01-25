<template>
	<div class="cs-time-range">
		<div class="time-range-title">Campaigns that were</div>
		<select  @touchstart="actives($event)">
			<option selected :data-id="1">Active</option>
			<option :data-id="0">Archived</option>
			<option>With Traffic</option>
			<option :data-id="2">All</option>
		</select>
		<div class="time-range-title">Timezone</div>
		<select>
			<option v-for="data in timezones" style="word-break:break-all;width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">{{data.name}}</option>
		</select>
		<div class="time-range-title">In</div>
		<select>
			<option selected data-ins="0">Today</option>
			<option data-ins="1">Yesterday</option>
			<option data-ins="2">Last 7 Days</option>
			<option data-ins="3">Last 14 Days</option>
			<option data-ins="4">This week</option>
			<option data-ins="5">This Month</option>
		</select>
		<div class="time-range-select">
			<span @touchstart="openPicker();clickDate()">{{Year}}/{{Month}}/{{Dates}}</span>
			<span @touchstart="openPickers();clickDate()">{{Years}}/{{Months}}/{{Datess}}</span>
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
				timezones:"",
				timeS:"",
				vModal:"",
				tokenCookie:[],
		     tokenCookies:[],
		     tokenname:"token",
		     token:"",
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
	      	this.vModal = document.getElementsByClassName("mint-datetime-confirm")[0]
		   		this.Year = this.pickerVisible.getFullYear()
		   		this.Month = this.pickerVisible.getMonth()+1
		   		this.Month = this.Month<10?"0"+this.Month:this.Month
		   		this.Dates = this.pickerVisible.getDate()
		   		this.Dates = this.Dates<10?"0"+this.Dates:this.Dates
		   		this.Years = this.pickerVisibles.getFullYear()
		   		this.Months = this.pickerVisibles.getMonth()+1
		   		this.Months = this.Months<10?"0"+this.Months:this.Months
		   		this.Datess = this.pickerVisibles.getDate()
		   		this.Datess = this.Datess<10?"0"+this.Datess:this.Datess
		   		console.log(1)
		   	},
	      actives (ev) {
	      	/*console.log()
	      	var obj=document.getElementById('mySelect');
					var items=document.getElementById("sect").options;//获取select的所有option
					var index=obj.selectedIndex; //序号，取当前选中选项的序号
					var val = obj.options[index].value;*/
	      }
	    },
	   mounted () {
	   	let that = this
	   	this.pickerVisible = new Date();
	   	this.pickerVisibles = new Date();
	   	this.Year = this.pickerVisible.getFullYear()
   		this.Month = this.pickerVisible.getMonth()+1
   		this.Month = this.Month<10?"0"+this.Month:this.Month
   		this.Dates = this.pickerVisible.getDate()
   		this.Dates = this.Dates<10?"0"+this.Dates:this.Dates
   		this.Years = this.pickerVisibles.getFullYear()
   		this.Months = this.pickerVisibles.getMonth()+1
   		this.Months = this.Months<10?"0"+this.Months:this.Months
   		this.Datess = this.pickerVisibles.getDate()+1
   		this.Datess = this.Datess<10?"0"+this.Datess:this.Datess
   	  this.vModal = document.getElementsByClassName("mint-datetime-confirm")[0]
   	  console.log(this.vModal)
	   	this.vModal.addEventListener("click",this.clickDate)
	   	
	   	this.tokenname = this.tokenname + '='
			this.tokenCookie=document.cookie.split(";")
			for(var i = 0; i < this.tokenCookie.length; i++){
				this.tokenCookies = this.tokenCookie[i]
				while (this.tokenCookies.charAt(0) == " ") this.tokenCookies = this.tokenCookies.substring(1);
    		if(this.tokenCookies.indexOf(this.tokenname) != -1) {
    			this.token = this.tokenCookies.substring(this.tokenname.length, this.tokenCookies.length)
    		}
			}
		  this.$ajax({
			  method: "get",
			  url:"http://beta.newbidder.com/timezones",
			  params:{
			  	token:this.token
			  }
			}).then((data) => {
			    that.timezones = data.data.data.timezones
			});
			
	   },
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