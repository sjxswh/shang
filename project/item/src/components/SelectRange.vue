<template>
	<div class="cs-select-range">
		<div class="home-top">
		  	<div class="home-header">
		  		<em class="home-cancel" @touchstart="back">Cancel</em>
		  		<p class="home-name">{{title}}</p>
		  		<em class="home-done">Done</em>
		  	</div>
	  	</div>
		<div class="select-range-title">
			<span @touchstart="selectTile()" class="select-range-active">Time Range</span>
			<span @touchstart="selectTile()">Group by</span>
		</div>
		<div class="select-content">
			<div class="cs-time-range cs-time-range-active">
				<div class="time-range-title">Campaigns that were</div>
				<select @change="actives($event)" id="switch">
					<option selected :data-id="1">Active</option>
					<option :data-id="0">Archived</option>
					<option>With Traffic</option>
					<option :data-id="2">All</option>
				</select>
				<div class="time-range-title">Timezone</div>
				<select @change="activess($event)" id="timezone">
					<option v-for="(item,index) in timezones" :key="index" :data-ins="item.utcShift" :data-ids="item.id">{{item.name}}</option>
				</select>
				<div class="time-range-title">In</div>
				<select @change="activess($event)" id="dayin">
					<option selected :data-ins="0">Today</option>
					<option :data-ins="1">Yesterday</option>
					<option :data-ins="2">Last 7 Days</option>
					<option :data-ins="3">Last 14 Days</option>
					<option :data-ins="4">This week</option>
					<option :data-ins="5">This Month</option>
				</select>
				<div class="time-range-select">
					<span @click="openPicker();clickDate()">{{Year}}/{{Month}}/{{Dates}}</span>
					<span @click="openPickers();clickDate()">{{Years}}/{{Months}}/{{Datess}}</span>
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
			<div class="cs-group-by ">
				<div class="group-by-title">Campaigns that were</div>
				<select @change="selects($event)" id="DrillDown">
					<option :data-val="'flow'">Flows</option>
					<option :data-val="'lander'">Lander</option>
					<option :data-val="'traffic'">Traffic Source</option>
					<option :data-val="'affiliate'">Affiliate Network</option>
					<option :data-val="'tsWebsiteId'">WebSite ID</option>
					<option :data-val="'brand'">Brands</option>
					<option :data-val="'browserVersion'">Brower versions</option>
					<option :data-val="'browser'">Browers</option>
					<option selected="selected" :data-val="'city'">City</option>
					<option :data-val="'connectionType'">Connection Type</option>
					<option :data-val="'country'">County</option>
					<option :data-val="'day'">Day</option>
					<option :data-val="'hour'">Hour</option>
					<option :data-val="'hourOfDay'">HourOfDay</option>
					<option :data-val="'deviceType'">Device Type</option>
				</select>
				<div style="border: .06rem solid #e4e8f1;border-bottom: none;min-height: 90%;">
			<ul class="campaigns-content">
				<li v-show="length">
					<div class="campaigns-content-main">
						this is empty
					</div>
				</li>
				<li v-for="data in dataList" :data="encodeURIComponent(JSON.stringify(data))" @touchstart="LinksHrf($event)">
					<div class="campaigns-content-main" :data="encodeURIComponent(JSON.stringify(data))">
						<div class="campaigns-title" :data="encodeURIComponent(JSON.stringify(data))">
								<span :data="encodeURIComponent(JSON.stringify(data))">{{data.id}}</span>
						</div>
							<div class="campaigns-info" :data="encodeURIComponent(JSON.stringify(data))">
								<div :data="encodeURIComponent(JSON.stringify(data))">
									<p :data="encodeURIComponent(JSON.stringify(data))">Revenue</p>
									<span :data="encodeURIComponent(JSON.stringify(data))">${{data.revenue}}</span>
									<p :data="encodeURIComponent(JSON.stringify(data))">Profit</p>
									<em :data="encodeURIComponent(JSON.stringify(data))">${{data.profit}}</em>
								</div>
								<div :data="encodeURIComponent(JSON.stringify(data))">
									<p :data="encodeURIComponent(JSON.stringify(data))">ROI</p>
									<em :data="encodeURIComponent(JSON.stringify(data))">${{data.roi}}</em>
									<p :data="encodeURIComponent(JSON.stringify(data))">Cost</p>
									<span :data="encodeURIComponent(JSON.stringify(data))">${{data.cost}}</span>
								</div>
							</div>
					</div>
				</li>
			</ul>
		</div>
			</div>
		</div>
		<component style="margin: .6rem .8rem 0;"></component>
	</div>
</template>

<script>
	export default{
		name:"SelectRange",
		data(){
			return {
				flow:"flow",
				lander:"lander",
				title:"Select range",
				length:true,
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
		     tokennames:"data",
		     selectData:"",
		     token:"",
		     objS:"",
		     switchSta:"",
		     timeZone:"",
		     dayIn:"",
		     ss:"123",
		     Data:{},
		     firstname:"",
		     lastname:"",
		     Time:"",
		     Times:"",
		     nowDate:"",
		     switchOp:"",				groupBy:"",
				group:"",
				dataList:[],
				froms:"",
				data:""
			}
		},
		mounted () {
			this.nowDate = new Date()
			this.Time = this.nowDate.getTime()//-604800000 + 86400000
	   	this.pickerVisible = new Date(parseInt(this.Time)).toLocaleString().split(" ")[0]
			this.Year = this.pickerVisible.split("/")[0]
			this.Month = this.pickerVisible.split("/")[1]
			this.Month = this.Month<10? "0"+this.Month:this.Month
			this.Dates = this.pickerVisible.split("/")[2]
			this.Dates = this.Dates<10? "0"+this.Dates:this.Dates
			this.Times = this.nowDate.getTime()+86400000
			this.pickerVisibles = new Date(parseInt(this.Times)).toLocaleString().split(" ")[0]
			this.Years = this.pickerVisibles.split("/")[0]
			this.Months = this.pickerVisibles.split("/")[1]
			this.Months = this.Months<10? "0"+this.Months:this.Months
			this.Datess = this.pickerVisibles.split("/")[2]
			this.Datess = this.Datess<10? "0"+this.Datess:this.Datess
   		window.addEventListener("change",this.activesss)
   		this.switchOp = Array.from(document.getElementById("switch").options)
	    	this.switchOp.forEach((v,k)=>{
	    		if(v.getAttribute('selected')){
	    			this.switchSta = v.getAttribute("data-id")
	    		}
	    	})
	    	this.groupBy = Array.from(document.getElementById("DrillDown").options)
	    	this.groupBy.forEach((v,k)=>{
	    		if(v.getAttribute('selected')){
	    			this.group = v.getAttribute("data-val")
	    		}
	    	})
	   	this.Data = {
				"year":this.Year,
				"month":this.Month,
				"date":this.Dates,
				"years":this.Years,
				"months":this.Months,
				"dates":this.Datess,
				"status":this.switchSta,
				"groupBy":this.group
			}
			this.$store.dispatch("getSevenDate",this.Data)
	   	this.vModal = Array.from(document.getElementsByClassName("mint-datetime-confirm"))
   	  this.vModal.forEach((v,k)=>{
   	  	v.addEventListener("click",this.clickDate)
   	  })
	   	this.tokenname = this.tokenname + '='
	   	this.tokennames = this.tokennames + '='
			this.tokenCookie=document.cookie.split(";")
			for(var i = 0; i < this.tokenCookie.length; i++){
				this.tokenCookies = this.tokenCookie[i]
				while (this.tokenCookies.charAt(0) == " ") this.tokenCookies = this.tokenCookies.substring(1);
    		if(this.tokenCookies.indexOf(this.tokenname) != -1) {
    			this.token = this.tokenCookies.substring(this.tokenname.length, this.tokenCookies.length)
    		}
    		if(this.tokenCookies.indexOf(this.tokennames) != -1) {
    			this.selectData = JSON.parse(decodeURIComponent(this.tokenCookies.substring(this.tokennames.length, this.tokenCookies.length)))
    		}
			}
		  this.$ajax({
			  method: "get",
			  url:"http://localhost:5000/timezones",
			  params:{
			  	token:this.token
			  }
			}).then((data) => {
			    this.timezones = data.data.data.timezones
			});
		},
		computed:{
			getSevenDate(){
				console.log(this.$store.state.data)
				this.froms = this.$store.state.data
			},
		},
		watch: {
			froms (newVal,oldVal){
				console.log(newVal)
				this.$ajax({
				  method: "get",
				  params:{
				  	authorization:this.token
				  },
				  url:"http://localhost:5000/api/profile",
				}).then((data) => {
				   console.log(data)
				   console.log(this.Year)
				   this.timezone = data.data.data.timezone
				   if(this.selectData.campaignName){
					   	this.params = {
						  	campaign:this.selectData.id,
						  	authorization:this.token,
						  	filter:"",
								from:this.Year+"-"+this.Month+"-"+this.Dates+"T00:00",
								groupBy:this.group,
								limit:50,
								order:"-visits",
								page:1,
								status:this.status,
								tag:"",
								to:this.Years+"-"+this.Months+"-"+this.Datess+"T00:00",
								tz:this.timezone
						  }
					   }
					   else if(this.selectData.offerName){
					   	this.params = {
						  	offer:this.selectData.id,
						  	authorization:this.token,
						  	filter:"",
								from:this.Year+"-"+this.Month+"-"+this.Dates+"T00:00",
								groupBy:this.group,
								limit:50,
								order:"-visits",
								page:1,
								status:this.status,
								tag:"",
								to:this.Years+"-"+this.Months+"-"+this.Datess+"T00:00",
								tz:this.timezone
						  }
					   }
					   else if(this.selectData.flowName){
					   	this.params = {
						  	flow:this.selectData.id,
						  	authorization:this.token,
						  	filter:"",
								from:this.Year+"-"+this.Month+"-"+this.Dates+"T00:00",
								groupBy:this.group,
								limit:50,
								order:"-visits",
								page:1,
								status:this.status,
								tag:"",
								to:this.Years+"-"+this.Months+"-"+this.Datess+"T00:00",
								tz:this.timezone
						  }
					   }
					   else if(this.selectData.landerName){
					   	this.params = {
						  	lander:this.selectData.id,
						  	authorization:this.token,
						  	filter:"",
								from:this.Year+"-"+this.Month+"-"+this.Dates+"T00:00",
								groupBy:this.group,
								limit:50,
								order:"-visits",
								page:1,
								status:this.status,
								tag:"",
								to:this.Years+"-"+this.Months+"-"+this.Datess+"T00:00",
								tz:this.timezone
						  }
					   }
					   else if(this.selectData.trafficName){
					   	this.params = {
						  	traffic:this.selectData.id,
						  	authorization:this.token,
						  	filter:"",
								from:this.Year+"-"+this.Month+"-"+this.Dates+"T00:00",
								groupBy:this.group,
								limit:50,
								order:"-visits",
								page:1,
								status:this.status,
								tag:"",
								to:this.Years+"-"+this.Months+"-"+this.Datess+"T00:00",
								tz:this.timezone
						  }
					   }
					   else if(this.selectData.name){
					   	this.params = {
						  	affiliate:this.selectData.id,
						  	authorization:this.token,
						  	filter:"",
								from:this.Year+"-"+this.Month+"-"+this.Dates+"T00:00",
								groupBy:this.group,
								limit:50,
								order:"-visits",
								page:1,
								status:this.status,
								tag:"",
								to:this.Years+"-"+this.Months+"-"+this.Datess+"T00:00",
								tz:this.timezone
						  }
				   }
				   this.$ajax({
					  method: "get",
					  params:this.params,
					  url:"http://localhost:5000/api/report",
					}).then((data) => {
					   this.dataList = data.data.data.rows
					   if(this.dataList.length == 0){
					   	this.length = true
					   }
					   else{
					   	this.length = false
					   }
					});
				});	
			},
			getSevenDate (newVal,oldVal) {
				console.log(newVal)
			},
		},
		methods:{
			 selectTile(){
			 	var SelectRange = Array.from(document.getElementsByClassName("select-range-title")[0].children)
			 	var SelectContent = Array.from(document.getElementsByClassName("select-content")[0].children)
			 	var Index
			 	SelectRange.forEach(function(v,k){
					v.onclick = function(){
						Index = k;
						SelectRange.forEach(function(v){
							v.className = ""
						})
						SelectContent.forEach(function(v){
							v.className = v.className.replace(/cs-time-range-active/g, ' ')
						})
						SelectRange[Index].className = "select-range-active";
						SelectContent[Index].className += "cs-time-range-active"
					}
				})
			 },
			back () {
		  		this.$router.go(-1)
		  	},
		  	openPicker() {
	        this.$refs.picker.open();
	      },
	      openPickers() {
	        this.$refs.pickers.open();
	      },
	      LinksHrf (ev) {
				 this.$router.push({
            path: 'Detail', 
        })
       console.log(ev.target)
				 this.data = ev.target.getAttribute("data")
				 console.log(this.data)
				var oDate = new Date();
				oDate.setDate(oDate.getDate() + 1);
				document.cookie = 'data=' + this.data + ';expires=' + oDate + ';path=/';
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
		   		this.Data = {
						"year":this.Year,
						"month":this.Month,
						"date":this.Dates,
						"years":this.Years,
						"months":this.Months,
						"dates":this.Datess,
						"status":this.switchSta,
						"groupBy":this.group
					}
					this.$store.dispatch("getSevenDate",this.Data)
		   	},
	      actives (ev) {
	      	this.objS = ev.target;
	        for(var i=0;i<this.objS.options.length;i++){
	        	this.objS.options[i].removeAttribute("selected");
						if(this.objS.options[i].value== this.objS.value){
							this.objS.options[i].setAttribute("selected","selected");
							this.switchSta = this.objS.options[i].getAttribute("data-id")
							this.Data = {
								"year":this.Year,
								"month":this.Month,
								"date":this.Dates,
								"years":this.Years,
								"months":this.Months,
								"dates":this.Datess,
								"status":this.switchSta,
								"groupBy":this.group
							}
							this.$store.dispatch("getSevenDate",this.Data)
						}
					}
	      },
	      activess (ev) {
	      	this.objS = ev.target;
	        for(var i=0;i<this.objS.options.length;i++){
						if(this.objS.options[i].value== this.objS.value){
							this.timeZone = this.objS.options[i].getAttribute("data-ins")
							this.timeS = this.objS.options[i].getAttribute("data-ids")
							this.$ajax({
			      		method: "get",
							  params:{
							  	authorization:this.token
							  },
						  url:"http://localhost:5000/api/groups",
			      	}).then((data)=>{
			      		this.firstname = data.data.data.groups[0].firstname
			      		this.lastname = data.data.data.groups[0].lastname
			      		this.$ajax({
				      		method: "post",
								  data:{
								  	"companyname":"Tzula Entertainment Co.,LTD",
								  	"firstname":this.firstname,
								  	"homescreen":"Campaign list",
								  	"lastname":this.lastname,
								  	"tel":"",
								  	"timezone":this.timeZone,
								  	"timezoneId":this.timeS
								  },
							  url:"http://localhost:5000/api/profile?authorization="+this.token,
				      	}).then((data) => {
				      		//console.log(data)
				      	})
			      	})
						}
					}
	      },
	      activesss (ev) {
	      	this.objS = ev.target;
	        for(var i=0;i<this.objS.options.length;i++){
	        	this.objS.options[i].removeAttribute("selected");
						if(this.objS.options[i].value== this.objS.value){
							this.dayIn = this.objS.options[i].getAttribute("data-ins")
							if(this.dayIn == 0){
					   		this.Time = this.nowDate.getTime()//-604800000 + 86400000
						   	this.pickerVisible = new Date(parseInt(this.Time)).toLocaleString().split(" ")[0]
								this.Year = this.pickerVisible.split("/")[0]
								this.Month = this.pickerVisible.split("/")[1]
								this.Month = this.Month<10? "0"+this.Month:this.Month
								this.Dates = this.pickerVisible.split("/")[2]
								this.Dates = this.Dates<10? "0"+this.Dates:this.Dates
								this.Times = this.nowDate.getTime()+86400000
								this.pickerVisibles = new Date(parseInt(this.Times)).toLocaleString().split(" ")[0]
								this.Years = this.pickerVisibles.split("/")[0]
								this.Months = this.pickerVisibles.split("/")[1]
								this.Months = this.Months<10? "0"+this.Months:this.Months
								this.Datess = this.pickerVisibles.split("/")[2]
								this.Datess = this.Datess<10? "0"+this.Datess:this.Datess
					   		this.Data = {
									"year":this.Year,
									"month":this.Month,
									"date":this.Dates,
									"years":this.Years,
									"months":this.Months,
									"dates":this.Datess,
									"status":this.switchSta,
									"groupBy":this.group
								}
					   		this.$store.dispatch("getSevenDate",this.Data)
							}
							if(this.dayIn == 1){
					   		this.Time = this.nowDate.getTime()-86400000//-604800000 + 86400000
						   	this.pickerVisible = new Date(parseInt(this.Time)).toLocaleString().split(" ")[0]
								this.Year = this.pickerVisible.split("/")[0]
								this.Month = this.pickerVisible.split("/")[1]
								this.Month = this.Month<10? "0"+this.Month:this.Month
								this.Dates = this.pickerVisible.split("/")[2]
								this.Dates = this.Dates<10? "0"+this.Dates:this.Dates
								this.Times = this.nowDate.getTime()
								this.pickerVisibles = new Date(parseInt(this.Times)).toLocaleString().split(" ")[0]
								this.Years = this.pickerVisibles.split("/")[0]
								this.Months = this.pickerVisibles.split("/")[1]
								this.Months = this.Months<10? "0"+this.Months:this.Months
								this.Datess = this.pickerVisibles.split("/")[2]
								this.Datess = this.Datess<10? "0"+this.Datess:this.Datess
					   		this.Data = {
									"year":this.Year,
									"month":this.Month,
									"date":this.Dates,
									"years":this.Years,
									"months":this.Months,
									"dates":this.Datess,
									"status":this.switchSta,
									"groupBy":this.group
								}
					   		console.log(this.Data)
					   		this.$store.dispatch("getSevenDate",this.Data)
							}
							if(this.dayIn == 2){
					   		this.Time = this.nowDate.getTime()-604800000 + 86400000
						   	this.pickerVisible = new Date(parseInt(this.Time)).toLocaleString().split(" ")[0]
								this.Year = this.pickerVisible.split("/")[0]
								this.Month = this.pickerVisible.split("/")[1]
								this.Month = this.Month<10? "0"+this.Month:this.Month
								this.Dates = this.pickerVisible.split("/")[2]
								this.Dates = this.Dates<10? "0"+this.Dates:this.Dates
								this.Times = this.nowDate.getTime()+ 86400000
								this.pickerVisibles = new Date(parseInt(this.Times)).toLocaleString().split(" ")[0]
								this.Years = this.pickerVisibles.split("/")[0]
								this.Months = this.pickerVisibles.split("/")[1]
								this.Months = this.Months<10? "0"+this.Months:this.Months
								this.Datess = this.pickerVisibles.split("/")[2]
								this.Datess = this.Datess<10? "0"+this.Datess:this.Datess
					   		this.Data = {
									"year":this.Year,
									"month":this.Month,
									"date":this.Dates,
									"years":this.Years,
									"months":this.Months,
									"dates":this.Datess,
									"status":this.switchSta,
									"groupBy":this.group
								}
					   		this.$store.dispatch("getSevenDate",this.Data)
							}
							if(this.dayIn == 3){
					   		this.Time = this.nowDate.getTime()-604800000- 604800000+ 86400000
						   	this.pickerVisible = new Date(parseInt(this.Time)).toLocaleString().split(" ")[0]
								this.Year = this.pickerVisible.split("/")[0]
								this.Month = this.pickerVisible.split("/")[1]
								this.Month = this.Month<10? "0"+this.Month:this.Month
								this.Dates = this.pickerVisible.split("/")[2]
								this.Dates = this.Dates<10? "0"+this.Dates:this.Dates
								this.Times = this.nowDate.getTime()+ 86400000
								this.pickerVisibles = new Date(parseInt(this.Times)).toLocaleString().split(" ")[0]
								this.Years = this.pickerVisibles.split("/")[0]
								this.Months = this.pickerVisibles.split("/")[1]
								this.Months = this.Months<10? "0"+this.Months:this.Months
								this.Datess = this.pickerVisibles.split("/")[2]
								this.Datess = this.Datess<10? "0"+this.Datess:this.Datess
					   		this.Data = {
									"year":this.Year,
									"month":this.Month,
									"date":this.Dates,
									"years":this.Years,
									"months":this.Months,
									"dates":this.Datess,
									"status":this.switchSta,
									"groupBy":this.group
								}
					   		this.$store.dispatch("getSevenDate",this.Data)
							}
							if(this.dayIn == 3){
					   		this.Time = this.nowDate.getTime()-604800000- 604800000+ 86400000
						   	this.pickerVisible = new Date(parseInt(this.Time)).toLocaleString().split(" ")[0]
								this.Year = this.pickerVisible.split("/")[0]
								this.Month = this.pickerVisible.split("/")[1]
								this.Month = this.Month<10? "0"+this.Month:this.Month
								this.Dates = this.pickerVisible.split("/")[2]
								this.Dates = this.Dates<10? "0"+this.Dates:this.Dates
								this.Times = this.nowDate.getTime()+ 86400000
								this.pickerVisibles = new Date(parseInt(this.Times)).toLocaleString().split(" ")[0]
								this.Years = this.pickerVisibles.split("/")[0]
								this.Months = this.pickerVisibles.split("/")[1]
								this.Months = this.Months<10? "0"+this.Months:this.Months
								this.Datess = this.pickerVisibles.split("/")[2]
								this.Datess = this.Datess<10? "0"+this.Datess:this.Datess
					   		this.Data = {
									"year":this.Year,
									"month":this.Month,
									"date":this.Dates,
									"years":this.Years,
									"months":this.Months,
									"dates":this.Datess,
									"status":this.switchSta,
									"groupBy":this.group
								}
					   		this.$store.dispatch("getSevenDate",this.Data)
							}
						}
					}
	      },
	  	selects (ev) {
	  		var that = this
	      	this.objS = ev.target;
	        for(var i=0;i<this.objS.options.length;i++){
	        	this.objS.options[i].removeAttribute("selected");
						if(this.objS.options[i].value== this.objS.value){
							this.objS.options[i].setAttribute("selected","selected");
							this.group = this.objS.options[i].getAttribute("data-val")
							this.Data = {
								"year":this.Year,
								"month":this.Month,
								"date":this.Dates,
								"years":this.Years,
								"months":this.Months,
								"dates":this.Datess,
								"status":this.switchSta,
								"groupBy":this.group
							}
							this.$store.dispatch("getSevenDate",this.Data)
						}
					}
	      },
		},
		
	}
	
</script>

<style>
	
	.cs-select-range{
		position: absolute;
		top: 1.2rem;
		width: 100%;
		height: 91%;
		background: #e0e7ef;
		font-size: .26rem;
		overflow: auto;
		font-family: "arial, helvetica, sans-serif";
	}
	.select-range-title{
		display: flex;
		margin: .4rem .8rem;
	}
	.select-range-title span{
		width: 50%;
		padding: .1rem 0;
		border: 1px solid #6482d8;
		font-size: .3rem;
	}
	.select-range-active{
		background: #6482d8;
		color: white;
	}
	.select-content{
		margin:.4rem .8rem;
	}
	.cs-time-range{
		display: none;
		font-size: .36rem;
	}
	.cs-time-range select{
		width: 100%;
		height: .8rem;
		outline: none;
		border: none;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.cs-time-range option{
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		word-break:break-all
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
	.cs-group-by{
		font-size: .36rem;
		display: none;
	}
	.cs-group-by select{
		width: 100%;
		height: .8rem;
		outline: none;
		border: none;
	}
	.cs-group-by option{
		outline: none;
		border: none;
	}
	.group-by-title{
		font-size: .3rem;
		color: #848891;
		text-align: left;
		margin: .2rem 0;
	}
	.cs-time-range-active{
		display: block;
	}
	.cs-select-range .campaigns-content {
		height: 100%;
		width: 100%;
		background: white;
		margin-top: .3rem;
	}
	.cs-select-range .campaigns-content li{
		display: flex;
		padding: .2rem .2rem;
		border-bottom: .1rem solid #e4e8f1;
		border-radius: .1rem;
	}
	.cs-select-range .campaigns-content li:last-child{
		border: none;
	}
	.cs-select-range .campaigns-content-main{
		width:100% ;
	}
	.cs-select-range .campaigns-title{
		display: flex;
		justify-content: space-between;
		color: black;
		font-weight: 600;
		border-bottom: 1px solid #dcdcdc; 
	}
	.cs-select-range .campaigns-title a{
		display: block;
		width: 90%;
		text-align: left;
		color: black;
		font-size: .24rem;
	}
	.cs-select-range .campaigns-title .iconfont{
		color: #b0b0b0;
	}
	.cs-select-range .campaigns-info{
		display: flex;
	}
	.cs-select-range .campaigns-info div{
		width: 50%;
		text-align: left;
		font-size: .2rem;
	}
	.cs-select-range .campaigns-info div p{
		color: #8e8e8e;
		margin-top: .2rem;
	}
	.cs-select-range .campaigns-info div em{
		color: #e1e4ed;
	}
	.cs-select-range .campaigns-info div span{
		color: black;
	}
</style>