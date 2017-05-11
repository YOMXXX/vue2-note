// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/store'
import $ from 'jquery'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
require('./style/animate.css')

window.$ = $
Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store
}).$mount('#app')
