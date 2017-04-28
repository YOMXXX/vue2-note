<template>
  <div id="wrap">
    <div class="con">
      <router-link to="/tianjia" class="routes goods">添加</router-link>
      <router-link to="/liebiao" class="routes goods">列表</router-link>
      <router-link to="/shanchu" class="routes goods">已删除</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

require('../src/style/index.css')
export default {
  name: 'app'
}
</script>

<style>
.router-link-active{
    background: gold;
    /*color: rgb(240, 20, 20);*/
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
