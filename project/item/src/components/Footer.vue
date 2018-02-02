<template>
	<div class="Footer">
		<div class="Dashboard">
			<router-link to="/Dashboard">
				<div class="iconfont icon-gengduo" style="font-size: .6rem; color: white;"></div>
			</router-link>
		</div>
		<swiper :options="swiperOption">
		    <swiper-slide>
		    	<router-link to="/Campaigns">
		    		<div class="iconfont icon-dingwei"></div>
		    		<div class="swiper-content">Campaigns</div>
		    	</router-link>
		    </swiper-slide>
		    <swiper-slide>
		    	<router-link to="/Offer">
		    		<div class="iconfont icon-icon-life-flag"></div>
		    		<div class="swiper-content">offer</div>
		    	</router-link>
		    </swiper-slide>
		    <swiper-slide>
		    	<router-link to="/Flows">
		    		<div class="iconfont icon-jiaochajiantou"></div>
		    		<div class="swiper-content">Flows</div>
		    	</router-link>
		    </swiper-slide>
		    <swiper-slide>
		    	<router-link to="/Lander">
			    	<div class="iconfont icon-Landers"></div>
			    	<div class="swiper-content">Landers</div>
			    </router-link>
		    </swiper-slide>
		    <swiper-slide>
		    	<router-link to="/TrafficSource">
			    	<div class="iconfont icon-jiaotong"></div>
			    	<div class="swiper-content">TrafficSource</div>
			    </router-link>
		    </swiper-slide>
		    <swiper-slide>
		    	<router-link to="/AffiliateNetwork">
			    	<div class="iconfont icon-ren"></div>
			    	<div class="swiper-content">AffiliateNet</div>
			    </router-link>
		    </swiper-slide>
		    <swiper-slide>
		    	<router-link to="/Conversion">
			    	<div class="iconfont icon-networkstate_b"></div>
			    	<div class="swiper-content">Conversions</div>
			    </router-link>
		    </swiper-slide>
		</swiper>
	</div>
</template>

<script>
import '../assets/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  components: {
  	swiper, swiperSlide
  },
  data () {
    return {
      swiperOption:{
      	slidesPerView: 4
      }
    }
  },
  mounted(){
  	var SwiperSlide = Array.from(document.getElementsByClassName("swiper-slide"));
  	var Index
	SwiperSlide.forEach(function(v,k){
		v.onclick = function(){
			Index = k;
			SwiperSlide.forEach(function(v){
				v.style.background = "white"
			})
			SwiperSlide[Index].style.background = "#e8f0fd";
		}
	})
  	var Dashboard = Array.from(document.getElementsByClassName("Dashboard"))
  	Dashboard[0].onclick = function(){
  		SwiperSlide.forEach(function(v){
			v.style.background = "white"
		})
  	}
  },
  methods:{
  	ClickSwiper(){
  		
  	}
  }
}
</script>

<style>
	.Footer{
		width: 100%;
		height: 1.2rem;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		border-top: .08rem solid #e4e8f1;
		background: white;
	}
	.Footer .Dashboard{
		width: 20%;
		height: 100%;
		text-align: center;
		line-height: 1.2rem;
		font-size: .48rem;
		background: #c3cfdf;
	}
	.Footer .swiper-container{
		width: 80%;
	}
	
	.Footer .swiper-slide{
		width: 1.5rem !important; 
		text-align: center;
		font-size: .3rem;
	}
	.Footer .swiper-slide .iconfont{
		width: 100%;
		height: .6rem;
	margin-top: .1rem;
		text-align: center;
		line-height: .6rem;
		font-size: .42rem;
		color: #666d80;
	}
	.Footer .swiper-content{
		font-size: .25rem;
		color: #010101;
	}
</style>