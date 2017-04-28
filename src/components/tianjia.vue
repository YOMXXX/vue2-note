<template>
  <div class="tianjia">
  	<div class="container">
  		<div class="row">
  			<label for="" class="clo-sm-3">标题</label>
  			<input type="text" class="clo-sm-9">
  		</div>
  		<div class="row">
  			<label for="" class="clo-sm-3">内容</label>
  			<input type="text" class="clo-sm-9">
  		</div>
  		<div class="row">
  			<label for="" class="clo-sm-3">简介</label>
  			<input type="text" class="clo-sm-9">
  		</div>
  	</div>
  		<button @click="addItem">添加</button>
  </div>
</template>

<script>
	import { mapActions } from 'vuex'
	export default {
		data () {
			return {

			}
		},
		mounted: function () {
			console.log(1)
			this.axios.get('http://easy-mock.com/mock/59005bd70e2d1a2d617b98ee/example/user').then((response) => {
  				console.log(response.data)
			})
		},
		methods: {
			...mapActions([
				'additem'
			]),
			'addItem': function () {
				var a = $('input').eq(0).val()
				var b = $('input').eq(1).val()
				var c = $('input').eq(2).val()
				// console.log(this.$store.getters.getlist)
				this.additem({
					a,
					b,
					c
					})
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
	display: flex;
	flex-direction: column;
	justify-content: center;
}
	.row{
		margin: 20px 0 20px 0;
		display: flex;
	}
	label{
		margin-right: 20px;
	}
	input{
		flex:1;
	}
</style>
