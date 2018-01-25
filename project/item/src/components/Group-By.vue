<template>
	<div class="cs-group-by">
		<div class="group-by-title">Campaigns that were</div>
		<select @change="selects($event)" id="DrillDown">
			<option>Campaigns</option>
			<option>Offer</option>
			<option>Flows</option>
			<option>Lander</option>
			<option>Traffic Source</option>
			<option>Affiliate Network</option>
			<option>WebSite ID</option>
			<option>Brands</option>
			<option>Brower versions</option>
			<option>Browers</option>
			<option>City</option>
			<option>Connection Type</option>
			<option>County</option>
			<option>Day</option>
			<option>Hour</option>
			<option>HourOfDay</option>
			<option>Device Type</option>
			<option>IP</option>
		</select>
	</div>
</template>

<script>
	export default{
		name:"GroupBy",
		data () {
			return {
				DrillDown:"",
			}
		},
		mounted () {
			
		},
		methods: {
			selects (ev) {
				var objS = ev.target;
				this.$store.dispatch("DrillDowns",objS.value)
        for(var i=0;i<objS.options.length;i++){
					if(objS.options[i].value== ev.target.value){
						objS.options[i].setAttribute("selected","selected");
					}
				}
			}
		},
		watch: {
			/*selects (ev) {
				var objS = ev.target;
				console.log(objS.value)
				this.$store.dispatch("DrillDowns",objS.value)
        for(var i=0;i<objS.options.length;i++){
					if(objS.options[i].value== ev.target.value){
						objS.options[i].setAttribute("selected","selected");
					}
				}
			}*/
		}
	}
</script>

<style>
	.cs-group-by{
		font-size: .36rem;
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
</style>