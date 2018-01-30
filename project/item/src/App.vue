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
</style>
