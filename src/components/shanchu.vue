<template>
<div class="shanchu">
	<ul>
		<li>标题</li>
		<li>内容</li>
		<li>简介</li>
	</ul>
  <ol v-for="(item, index) in aaaa">
		<template>
		  	<li>{{item.title}}</li>
		  	<li>{{item.content}}</li>
		  	<li>{{item.summary}}</li>
	  </template>
	</ol>
</div>
</template>
<script>
export default {
		'mounted': function () {
		},
		computed: {
			aaaa () {
				return this.$store.getters.deletelist
			}
		}
	}
</script>
<style scoped>
	li{
		text-align: center;
		float: left;
		width: 33.3% !important;
	}
</style>
