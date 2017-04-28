<template>
<div class="shanchu">
  <ol v-for="(item, index) in aaaa">
		<template>
		  	<li>{{item.a}}</li>
		  	<li>{{item.b}}</li>
		  	<li>{{item.c}}</li>
	  </template>
	</ol>
</div>
</template>
<script>
export default {
		computed: {
			aaaa () {
				return this.$store.getters.deletelist
			}
		}
	}
</script>
<style scoped>
	li{
		width: 33.3% !important;
	}
</style>
