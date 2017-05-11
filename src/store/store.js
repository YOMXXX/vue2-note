import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'

Vue.use(Vuex)

const state = {
	item: [],
	item2: [],
	flag: {
		code: localStorage.getItem('list') && JSON.parse(localStorage.getItem('list')).code || '',
		name: localStorage.getItem('list') && JSON.parse(localStorage.getItem('list')).name || '',
		zhanghao: localStorage.getItem('list') && JSON.parse(localStorage.getItem('list')).zhanghao || '',
		mima: localStorage.getItem('list') && JSON.parse(localStorage.getItem('list')).mima || ''
	}
}

export default new Vuex.Store({
    strict: true,
    state,
    mutations,
    actions,
    getters
})
