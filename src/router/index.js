import Vue from 'vue'
import Router from 'vue-router'
import app from '../App'
import tianjia from '../components/tianjia'
import liebiao from '../components/liebiao'
import shanchu from '../components/shanchu'
import yanzheng from '../components/yanzheng'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: app,
        children: [{
            name: 'index',
            path: '',
            redirect: '/yanzheng'
        }, {
            name: 'yanzheng',
            path: '/yanzheng',
            component: yanzheng
        }, {
            name: 'tianjia',
            path: '/tianjia',
            component: tianjia
        }, {
            name: 'liebiao',
            path: '/liebiao',
            component: liebiao
        }, {
            name: 'shanchu',
            path: '/shanchu',
            component: shanchu
        }]
    }]
})
