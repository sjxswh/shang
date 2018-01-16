<template>
	<div class="cs-group-by">
		<div class="group-by-title">Campaigns that were</div>
		<select>
			<option>Campaigns</option>
			<option>Offer</option>
			<option>Flows</option>
			<option>Lander</option>
			<option>Traffic Source</option>
			<option>Affiliate Network</option>
		</select>
	</div>
</template>

<script>
	export default{
		name:"GroupBy",
		data () {
			return {
				
			}
		},
		mounted () {
			
			/*if(this.$router.go(-1) == '/Dashboard' || this.$router.go(-1) == '/Campaigns' || this.$router.go(-1) == '/Offer' || this.$router.go(-1) == '/Flows'){
				this.$store.dispatch("ShowHeader")
				this.title = route.path.split("/").join("")
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