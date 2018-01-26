<template>
	<div class="cs-time-range">
		<div class="time-range-title">Campaigns that were</div>
		<select @change="actives($event)" id="ss">
			<option selected :data-id="1">Active</option>
			<option :data-id="0">Archived</option>
			<option>With Traffic</option>
			<option :data-id="2">All</option>
		</select>
		<div class="time-range-title">Timezone</div>
		<select @change="activess($event)">
			<option v-for="(item,index) in timezones" :data-ids="item.utcShift">{{item.name}}</option>
		</select>
		<div class="time-range-title">In</div>
		<select @change="activesss($event)">
			<option selected :data-ins="0">Today</option>
			<option :data-ins="1">Yesterday</option>
			<option :data-ins="2">Last 7 Days</option>
			<option :data-ins="3">Last 14 Days</option>
			<option :data-ins="4">This week</option>
			<option :data-ins="5">This Month</option>
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
		     objS:"",
		     switchSta:"",
		     timeZone:"",
		     dayIn:""
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
		   		this.Month = this.Month<10?"0"+this.Month:this.Month
		   		this.Dates = this.pickerVisible.getDate()
		   		this.Dates = this.Dates<10?"0"+this.Dates:this.Dates
		   		this.Years = this.pickerVisibles.getFullYear()
		   		this.Months = this.pickerVisibles.getMonth()+1
		   		this.Months = this.Months<10?"0"+this.Months:this.Months
		   		this.Datess = this.pickerVisibles.getDate()
		   		this.Datess = this.Datess<10?"0"+this.Datess:this.Datess
		   	},
	      actives (ev) {
	      	this.objS = ev.target;
	      	//console.log(ev.target.value)
					//this.$store.dispatch("DrillDowns",objS.value)
	        for(var i=0;i<this.objS.options.length;i++){
	        	this.objS.options[i].removeAttribute("selected");
						if(this.objS.options[i].value== this.objS.value){
							this.objS.options[i].setAttribute("selected","selected");
							this.switchSta = this.objS.options[i].getAttribute("data-id")
							this.$store.dispatch("DrillDowns",this.switchSta)
						}
					}
	      },
	      activess (ev) {
	      	this.objS = ev.target;
					//this.$store.dispatch("DrillDowns",objS.value)
	        for(var i=0;i<this.objS.options.length;i++){
	        	this.objS.options[i].removeAttribute("selected");
						if(this.objS.options[i].value== this.objS.value){
							this.objS.options[i].setAttribute("selected","selected");
							this.timeZone = this.objS.options[i].getAttribute("data-ids")
							this.$store.dispatch("DrillDownss",this.timeZone)
						}
					}
	      },
	      activesss (ev) {
	      	this.objS = ev.target;
					//this.$store.dispatch("DrillDowns",objS.value)
	        for(var i=0;i<this.objS.options.length;i++){
	        	this.objS.options[i].removeAttribute("selected");
						if(this.objS.options[i].value== this.objS.value){
							this.objS.options[i].setAttribute("selected","selected");
							this.dayIn = this.objS.options[i].getAttribute("data-ins")
							if(this.dayIn == 0){
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
					   		this.$store.dispatch("DrillDownss",{"from":"this.Year+"-"+this.Month+"-"+this.Dates",})
							}
						}
					}
	      }
	    },
	    watch: {
				
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
   		window.addEventListener("click",this.activesss)
	   	//this.$store.dispatch("dataTime",this.objS.value)
	   	this.vModal = Array.from(document.getElementsByClassName("mint-datetime-confirm"))
   	  this.vModal.forEach((v,k)=>{
   	  	v.addEventListener("touchstart",this.clickDate)
   	  })
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