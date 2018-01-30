<template>
  <div class="home">
  	<div class="home-top">
  		<div class="home-header" v-show="isShowHO">
	  		<em class="iconfont icon-renwode" @touchstart="Accountpush"></em>
	  		<p class="home-name">{{title}}</p>
	  		<router-link to="/SelectRange"><em class="iconfont icon-shezhi"></em></router-link>
	  	</div>
  	</div>
    <router-view></router-view>
    <Footer :isTrue ="LoginShows" :isFalse= "getIsTrues" :campaignsShow="CampaignsShow" v-show="isShowF"></Footer>
  </div>
</template>

<script>
	import Footer from '@/components/Footer'
	import store from '../store/TodoStore'
export default {
  components: {
  	Footer
  },
  data () {
    return {
     title:"Dashboard",
     isShowHO:true,
     isShowF:true,
     Date:"",
     date:"",
     Year:"",
     Month:"",
     Dates:"",
     Years:"",
     Months:"",
     Datess:"",
     Data:""
    }
  },
  methods:{
  	Accountpush () {
  		this.$router.push("/Account")
  	},
  	NavShow(route){
	  		if(route.path == '/Dashboard' || route.path == '/Campaigns' || route.path == '/Offer' || route.path == '/Flows'){
						this.$store.dispatch("ShowHeader")
						this.title = route.path.split("/").join("")
					}
	  		else if(route.path == '/' || route.path == '/Account' || route.path == '/SelectRange'){
	  			this.$store.dispatch("getLogin")
	  		}
	  		else if(route.path == '/CampaignsDetail' || route.path == '/OfferDetail'){
	  			this.$store.dispatch("getCampaigns")
	  		}
	  	}
  },
  computed:{
			getIsTrues(){
				this.isShowHO = this.$store.state.isShow[0]
				this.isShowF = this.$store.state.isShow[1]
			},
			LoginShows(){
				this.isShowHO = this.$store.state.loginShow[0]
				this.isShowF = this.$store.state.loginShow[1]
			},
			CampaignsShow(){
				this.isShowHO = this.$store.state.campaignsShow[0]
				this.isShowF = this.$store.state.campaignsShow[1]
			}
		},
		watch:{
			$route(route){
	  		this.NavShow(route)
	  	}
		},
  mounted(){
  	this.NavShow(this.$route)
  	this.nowDate = new Date()
		this.Time = this.nowDate.getTime()-604800000 + 86400000
   	this.Date = new Date(parseInt(this.Time)).toLocaleString().split(" ")[0]
		this.Year = this.Date.split("/")[0]
		this.Month = this.Date.split("/")[1]
		this.Month = this.Month<10? "0"+this.Month:this.Month
		this.Dates = this.Date.split("/")[2]
		this.Dates = this.Dates<10? "0"+this.Dates:this.Dates
		this.Times = this.nowDate.getTime()+86400000
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
				"status":1
			}
		this.$store.dispatch("getSevenDate",this.Data)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
em,strong{
font-style: normal;
}
.home{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
}



</style>
