<template>
  <div class="tianjia">
  	<div class="container">
  		<div class="row">
  			<label for="" class="clo-sm-3">标题</label>
  			<Input placeholder="请输入标题"></Input>
  		</div>
  		<div class="row">
  			<label for="" class="clo-sm-3">内容</label>
  			<Input placeholder="请输入内容"></Input>
  		</div>
  		<div class="row">
  			<label for="" class="clo-sm-3">简介</label>
  			<Input placeholder="请输入简介"></Input>
  		</div>
  		<Row>
  			<Col>
            	<Date-picker　:value='value' @on-change="handleChange" type="date" placeholder="选择日期" style="width: 200px"></Date-picker>
        	</Col>
  		</Row>
  	</div>
  		<button @click="addItem">添加</button>
  		<div class="ss" v-if="x">
  			<liebiao></liebiao>
  		</div>
  </div>
</template>

<script>
import liebiao from '../components/liebiao'
// import shanchu from '../components/shanchu'
// import yanzheng from '../components/yanzheng'
	import { mapActions, mapState } from 'vuex'
	export default {
		data () {
			return {
				'value': '',
				'x': false
			}
		},
		mounted: function () {
			// this.axios.get('https://zhihu-daily.leanapp.cn/api/v1/last-stories').then((response) => {
  	// 			// console.log(response.data)
			// })
			if (!this.count) {
			// console.log(this.count)
				this.$router.push({
				   name: 'yanzheng'
				 })
			}
		},
		computed: mapState({
    		// 箭头函数可使代码更简练
    		count: state => state.flag.code
		}),
		components: {
    		liebiao
  		},
		methods: {
			...mapActions([
				'additem'
			]),
			'handleChange': function (e) {
			},
			'addItem': function (e) {
				console.log(e)
				var title = $('input').eq(0).val()
				var content = $('input').eq(1).val()
				var summary = $('input').eq(2).val()
				this.additem({
					title,
					content,
					summary
					})
				// if (a && b && c) {
				// 	this.axios.post('api/login/createItem?a='+ a +'&b='+ b +'&c='+ c).then((data) => {
  		// 				console.log(data)
				// 	})
				// } else {
				// 	alert('请填写完整！')
				// }
			}
		}
	}
</script>

<style scoped>
button{
	width: 50px;
    height: 20px;
    align-self: center;
}
	.tianjia{
		width: 1000px;
		margin:0 auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.row{
		margin: 20px 0 20px 0;
		display: flex;
	}
	label{
		text-align: center;
		line-height: 32px;
		width: 50px;
		margin-right: 20px;
	}
	input{
		flex:1;
	}
</style>
