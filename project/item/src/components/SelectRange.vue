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
			<span @touchstart="choose='TimeRange';selectTile()" class="select-range-active">Time Range</span>
			<span @touchstart="choose='GroupBy';selectTile()">Group by</span>
		</div>
		<component :is="choose" style="margin: .6rem .8rem 0;"></component>
	</div>
</template>

<script>
	import TimeRange from '@/components/Time-Range'
	import GroupBy from '@/components/Group-By'
	export default{
		components:{
			TimeRange,GroupBy
		},
		data(){
			return {
				choose:'TimeRange',
				title:"Select range",
			}
		},
		mounted () {
			
		},
		methods:{
			 selectTile(){
			 	var SelectRange = Array.from(document.getElementsByClassName("select-range-title")[0].children)
			 	var Index
			 	SelectRange.forEach(function(v,k){
					v.onclick = function(){
						Index = k;
						SelectRange.forEach(function(v){
							v.className = ""
						})
						SelectRange[Index].className = "select-range-active";
					}
				})
			 },
			back () {
		  		this.$router.go(-1)
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
</style>