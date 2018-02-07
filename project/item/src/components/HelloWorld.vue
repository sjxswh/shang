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
    <Footer :isTrue ="LoginShows" :isFalse= "getIsTrues" :campaignsShow="CampaignsShow" :ss="show" :aa="hide" v-show="isShowF"></Footer>
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
    }
  },
  methods:{
  	Accountpush () {
  		this.$router.push("/Account")
  	},
  	NavShow(route){
	  		if(route.path == '/Dashboard' || route.path == '/Campaigns' || route.path == '/Offer' || route.path == '/Flows' || route.path == '/Lander' || route.path == '/Offers' || route.path == '/TrafficSource' || route.path == '/AffiliateNetwork' || route.path == '/Conversion'){
						this.$store.dispatch("ShowHeader")
						this.title = route.path.split("/").join("")
					}
	  		else if(route.path == '/' || route.path == '/Account' || route.path == '/SelectRange'){
	  			this.$store.dispatch("getLogin")
	  		}
	  		else if(route.path == '/CampaignsDetail' || route.path == '/OfferDetail' || route.path == '/FlowDetail' || route.path == '/LanderDetail' || route.path == '/TrafficSourceDetail' || route.path == '/AffiliateNetworkDetail' || route.path == '/Detail'){
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
			},
			show(){
	  		this.isShowF = this.$store.state.FooterShow
	  	},
			hide(){
	  		this.isShowF = this.$store.state.FooterHide
	  	}
		},
		watch:{
			$route(route){
	  		this.NavShow(route)
	  	}
		},
  mounted(){
  	this.NavShow(this.$route)
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
