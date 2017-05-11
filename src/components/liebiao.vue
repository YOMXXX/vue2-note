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
		  	<li>{{item.title}}</li>
		  	<li>{{item.content}}</li>
		  	<li>{{item.summary}}</li>
		  	<li class="btn" @click="clickBtn(index)">删除</li>
	  </template>
	</ol>
	<!-- <ol v-for="(item, index) in a">
		<template>
		  	<li>
		  		<img :src="item.fields.pic_332_187" alt="">
		  	</li>
	  </template>
	</ol> -->
</div>
</template>
<script>
	export default {
		data () {
			return {
				a: 1
			}
		},
		mounted: function () {
			// this.axios.post('/api/login/showLists').then((data) => {
  	// 			this.a = data.data.lists
  	// 			// console.log(data.data.lists)
			// })
			// var _this = this
			// $.ajax({
			// 	url: 'http://list.video.qq.com/fcgi-bin/list_common_cgi?otype=json&platform=1&version=10000&intfname=web_sports_common_vid_list&tid=674&uappid=20001257&uappkey=86ff0af73276ade8&type=4&sourcetype=2&pagesize=24&offset=0&sort=3&c_category=10926&578=155658&573=119375',
			// 	type: 'GET',
			// 	dataType: 'JSONP'
			// })
			// .done(function(msg) {
			// 	console.log(msg)
			// 	_this.a = msg.jsonvalue.results
			// })
			// console.log(this.$store.state.flag)
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
<style scoped>
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
