<template>
<div class="liebiao">
	<ul>
		<li>标题</li>
		<li>内容</li>
		<li>简介</li>
		<li>操作</li>
	</ul>
	<ol v-for="(item, index) in aaa">
		<template>
		  	<li>{{item.a}}</li>
		  	<li>{{item.b}}</li>
		  	<li>{{item.c}}</li>
		  	<li class="btn"  v-on:click="clickBtn(index)">删除</li>
	  </template>
	</ol>
</div>
</template>
<script>
	export default {
		data () {
			return {
				a: 1,
				$even: ''
			}
		},
		computed: {
			aaa () {
				return this.$store.getters.getlist
			}
		},
		methods: {
			clickBtn: function (index) {
				this.$store.dispatch('deleteitem', index)
			}
		}
	}
</script>
<style>
	.btn {
		background: gold;
		text-align: center;
		color: #666666;
		cursor: pointer;
	}
	ul {
		width: 100%;
		margin-top: 20px;
		border:1px solid #cccccc;
		height:50px;
	}
	ol {
		height: 50px;
	}
	.liebiao li {
		text-align: center;
		width: 25%;
		float: left;
		margin: 15px 0 0 0 ;
		padding-bottom: 15px;
	}
	ol li {
		border-bottom:1px solid #cccccc;
		margin: 15px 0 0 0 ;
		padding-bottom: 15px;
		text-align: center;
		width: 25%;
		float: left;
		margin: 15px 0 0 0 ;
		padding-bottom: 15px;
	}
</style>
