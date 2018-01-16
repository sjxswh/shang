<template>
	<div class="cs-flows">
		<home-select></home-select>
	</div>
</template>

<script>
	import HomeSelect from '@/components/Home-Select'
	export default{
		components: {
			HomeSelect
		},
		data () {
			return {
			}
		},
		mounted () {
		}
	}
</script>

<style>
	.cs-flows{
		position: absolute;
		top: 1.24rem;
		width: 100%;
	}
</style>