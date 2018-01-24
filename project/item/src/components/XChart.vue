<template>
	<div class="x-chart">
		<p :id="id" :option="option"></p>
	</div>
</template>

<script>
	import HighCharts from 'highcharts'
	export default {
		props: {
			id: {
				type: String
			},
			option: {
				type: Object
			}
		},
		mounted () {
			
		}
	}
</script>

<style>
	.x-chart{
		height: 8rem;
		margin-top: .4rem;
	}
	.highcharts-container {
		width: 100%;
	}
</style>