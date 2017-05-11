<template>
	<div v-show="condi" class="yanzheng">
		<div class="con1">
			<div class="zhanghao">
				<label for="zhanghao">账号</label>
				<input id="zhanghao" type="text">
			</div>
			<div class="nima">
				<label for="mima">密码</label>
				<input id="mima" type="text">
			</div>
			<div @click="clickYan" class="commit">
				<button>登陆</button>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		mounted: function () {
			$('.yanzheng').height($(window).height())
			console.log(this.$store.state.flag.zhanghao, this.$store.state.flag.mima)
			if (this.$store.state.flag.zhanghao && this.$store.state.flag.mima) {
				this.condi = false
				this.$router.push({
				    name: 'tianjia'
				})
			}
		},
		data () {
			return {
				condi: true
			}
		},
		methods: {
			'clickYan': function () {
				var _zhanghao = $('#zhanghao').val()
				var _mima = $('#mima').val()
				var _this = this
				this.axios.post('/api/login/yanzheng?zhanghao='+_zhanghao+'&mima='+_mima).then((data) => {
					if (+data.data.code === 1) {
						_this.$store.dispatch('yanzheng', {
							code: data.data.code,
							name: data.data.msg,
							zhanghao: _zhanghao,
							mima: _mima
						})
						window.localStorage.setItem('list', JSON.stringify({
							code: data.data.code,
							name: data.data.msg,
							zhanghao: _zhanghao,
							mima: _mima
						}))
						this.$router.push({
					      name: 'tianjia'
					    })
					} else {
						alert('账号或密码不正确')
					}
				})
			}
		}
	}
</script>

<style scoped>
	.yanzheng {
		position: relative;
		top: -20px;
		left: 0;
		width: 100%;
		height: 100%;
		background: black;
	}
	.con1 {
		padding:10px 0;
		text-align: center;
		width: 300px;
		height: 300px;
		position: absolute;
		left: 50%;
		top: 50%;
		margin:-150px -150px;
		background: white;
	}
	.con1 >div {
		margin-bottom: 110px;
		width: 100%;
	}
	input {
		width: 123px;
    	height: 17px;
	}
</style>