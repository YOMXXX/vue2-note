import Vue from 'vue'
import Router from 'vue-router'
import app from '../App'
import tianjia from '../components/tianjia'
import liebiao from '../components/liebiao'
import shanchu from '../components/shanchu'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: app,
        children: [{
            path: '',
            redirect: '/tianjia'
        }, {
            path: '/tianjia',
            component: tianjia
        }, {
            path: '/liebiao',
            component: liebiao
        }, {
            path: '/shanchu',
            component: shanchu
        }]
    }]
})
