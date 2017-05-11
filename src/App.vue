<template>
  <div id="wrap">
  <div class="denglu" v-show="this.$store.state.flag.zhanghao && this.$store.state.flag.mima">
    {{this.$store.state.flag.name}}
    <span @click="loginOut">退出</span>
  </div>
    <div class="con">
      <router-link to="/tianjia" class="routes goods">添加</router-link>
      <router-link to="/liebiao" class="routes goods">列表</router-link>
      <router-link to="/shanchu" class="routes goods">已删除</router-link>
    </div>
    <transition
    enter-active-class="animated fadeInRight"
      >
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>

require('../src/style/index.css')
export default {
  name: 'app',
  methods: {
    loginOut: function () {
      window.localStorage.removeItem('list')
      this.$store.dispatch('loginOut')
      this.$router.replace({
        name: 'yanzheng'
      })
    }
  }
}
</script>

<style scoped>
.animated {
  animation-duration: .3s !important;
}
.slide-fade-enter-active {
  transition: all .5s ease;
  opacity: 0;
}
.slide-fade-leave-active {
  opacity: 0;
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
span {
  margin-left: 100px;
}
.router-link-active{
    background: gold;
    text-decoration: none;

  }
  #wrap .con {
    display: flex;
    flex-direction: flex-start;

  }
  a{
    text-align: center;

  }
</style>
