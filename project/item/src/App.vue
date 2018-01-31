<template>
  <div id="app">
   <Home></Home>
  </div>
</template>

<script>
	import Home from '@/components/HelloWorld'
export default {
  name: 'app',
  components: {Home},
  mounted () {
  	
  },
  methods: {
  	
  }
}
</script>

<style>
	html,body,div,p,h1,h2,h3,h4,h5,h6,p,ul,li,a{
		margin: 0;
		padding: 0;
			 -moz-box-sizing: border-box;  
     -webkit-box-sizing: border-box; 
     -o-box-sizing: border-box; 
     -ms-box-sizing: border-box; 
     box-sizing: border-box; 
	}
	body,html{
		height: 100%;
		font-size: 0.48rem;
	}
	li{
		list-style: none;
	}
	a{
		text-decoration: none;
	}
	em{
		font-style: normal;
	}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.home .home-select {
	display: flex;
	justify-content: space-between;
}
.home .home-select a{
		display: block;
		width: 80%;
		height: 1rem;
	}
	.home .home-select .iconfont{
		font-size: .8rem;
		color: #6689da;
		height: 1rem;
		line-height: 1rem;
	}
	.home .home-select div span{
		display: block;
		color: #8e8e98;
		font-size: .3rem;
		margin-top: .1rem;
	}
	.home .home-select div p{
		font-size: .3rem;
		color: #010101;
	}
	.home .home-top{
	position: fixed;
	top: 0;
	z-index: 10;
	width: 100%;
	background: white;
}
	.home .home-header{
		display: flex;
		justify-content: space-between;
		background: white;
		box-shadow: 0 0 .06rem .06rem #e6e6e6;  
  	-webkit-box-shadow: 0 0 .06rem .06rem #e6e6e6;  
  	-moz-box-shadow: 0 0 .06rem .06rem #e6e6e6;  
		padding: 0 .2rem;
		height: 1.2rem;
		font-size: .4rem;
		color: black;
	
	}
	.home .home-header .iconfont{
		font-size: .8rem;
		line-height: 1.2rem;
		color: #6c84dc;
	}
	
	.home-header .home-edit{
		line-height: 1.2rem;
		color: #6c84dc;
	}
	.home .home-cancel{
		line-height: 1.2rem;
		color: #6c84dc;
	}
	.home .home-done{
		line-height: 1.2rem;
		color: #6c84dc;
	}
	.home .home-header p{
		line-height: 1.2rem;
	}
	.page-loading .icon-loading{
	animation: myfirst 3s infinite;
-moz-animation: myfirst 3s infinite;	
-webkit-animation: myfirst 3s infinite;
transform-origin: center;
text-align: center;
line-height: 50px;
}
@-moz-keyframes myfirst{
	from{transform: rotate(0deg);}
	to{transform: rotate(360deg);}
}
@-webkit-keyframes myfirst{
	from{transform: rotate(0deg);}
	to{transform: rotate(360deg);}
}
@keyframes myfirst{
	from{transform: rotate(0deg);}
	to{transform: rotate(360deg);}
}
.cs-offer{
		position: absolute;
		top: 1.24rem;
		width: 100%;
		height: 82%;
		font-size: .26rem;
		font-family: "arial, helvetica, sans-serif";
	}
	.cs-offer .campaigns-select{
		display: flex;
		width: 100%;
		height:.8rem;
		border-bottom: .06rem solid #e4e8f1;
	}
	.cs-offer .campaigns-select .iconfont{
		width: 10%;
		height: 100%;
		line-height: .8rem;
	}
	.cs-offer .campaigns-select input{
		border: none;
		width: 90%;
		height: 94%;
	}
	.cs-offer .campaigns-content {
		height: 100%;
	}
	.cs-offer .campaigns-content li{
		display: flex;
		padding: .2rem 0;
		border-top: .06rem solid #e4e8f1;
	}
	.cs-offer .campaigns-content li:nth-child(1){
		border-top: 0;
	}
	.cs-offer .campaigns-content li:last-child{
		border-bottom: .06rem solid #e4e8f1;
	}
	.cs-offer .campaigns-img{
		width: 18%;
	}
	.cs-offer .campaigns-img a{
		display: block;
		width: 100%;
		height: 50%;
		padding: 0 .2rem;
		box-sizing: border-box;
	}
	.cs-offer .campaigns-content-main{
		width:82% ;
		padding-right: .4rem;
	}
	.cs-offer .campaigns-title{
		display: flex;
		justify-content: space-between;
		color: black;
		font-weight: 600;
		margin-top: .2rem;
		padding-bottom: .1rem;
		border-bottom: 1px solid #dcdcdc; 
	}
	.cs-offer .campaigns-title a{
		display: block;
		width: 90%;
		text-align: left;
		color: #282828;
	}
	.cs-offer .campaigns-title a span{
		display: block;
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.cs-offer .campaigns-title .iconfont{
		color: #b0b0b0;
	}
	.cs-offer .campaigns-info{
		display: flex;
	}
	.cs-offer .campaigns-info div{
		width: 50%;
		text-align: left;
	}
	.cs-offer .campaigns-info div p{
		color: #8e8e8e;
		margin-top: .2rem;
	}
	.cs-offer .campaigns-info div em{
		color: #e1e4ed;
	}
	.cs-offer .campaigns-info div span{
		color: black;
	}
		.cs-offer-detail{
		position: absolute;
		top: 1.24rem;
		width: 100%;
		height: 90%;
		font-size: .26rem;
		font-family: "arial, helvetica, sans-serif";
	}
	.cs-offer-detail .home-header{
		padding-left: 0;
	}
	.cs-offer-detail .home-header em{
		font-weight: 600;
	}
	.cs-offer-detail .cs-campaigns-detail{
		position: absolute;
		top: 1.4rem;
		width: 100%;
		height: 90%;
		font-size: .3rem;
	}
	.cs-offer-detail .campaigns-detail-content{
		padding-left: 1.6rem;
		padding-right: .6rem;
	}
	.cs-offer-detail .campaigns-detail-content div{
		display: flex;
		color: #8c8c8c;
	}
	.cs-offer-detail .campaigns-detail-content div .iconfont{
		display: none;
		width: 30%;
		margin: .1rem 0;
	}
	.cs-offer-detail .campaigns-detail-content div .iconfont-active{
		display: block !important;
		transition: display 2s;
	}
	.cs-offer-detail .icon-shanchuanniucopy{
		color: red;
	}
	.cs-offer-detail .campaigns-detail-content div p{
		width: 64%;
		margin: .1rem 0;
		font-size: .2rem;
		text-align: left;
	}
	.cs-offer-detail .campaigns-detail-content div p:nth-of-type(2){
		width: 20%;
		color: #3f3f3f;
	}
	.cs-offer-detail .campaigns-detail-report {
		display: block;
		padding: .3rem 0;
		margin-left: 1.6rem;
		margin-right: .6rem;
		border-top: 1px solid #CCCCCC;
		border-bottom: 1px solid #CCCCCC;
		font-size: .3rem;
		text-align: left;
		color: #4c98fa;
	}
	.cs-offer-detail .campaigns-all{
		display: flex;
		padding-top: .2rem;
		border-top: .08rem solid #e4e8f1;
	}
	.cs-offer-detail .campaigns-img {
		display: block;
		width: 20%;
		height: 50%;
		padding: 0 .2rem;
		box-sizing: border-box;
	}
	.cs-offer-detail .campaigns-content-main{
		width:80% ;
		padding-right: .4rem;
	}
	.cs-offer-detail .campaigns-title{
		display: flex;
		justify-content: space-between;
		height: .5rem;
		margin-top: .2rem;
		color: black;
		font-weight: 600;
		border-bottom: 1px solid #dcdcdc; 
	}
	.cs-offer-detail .campaigns-title span:nth-child(1){
		width: 90%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		text-align: left;
	}
	.cs-offer-detail .campaigns-title span:nth-child(2){
		width: 10%;
		text-align: center;
	}
.cs-offer-detail .campaigns-title .iconfont{
	color: #b0b0b0;
}
.flowOffer{
		width: 10% !important;
	}
</style>
