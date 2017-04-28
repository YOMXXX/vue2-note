import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'

Vue.use(Vuex)

const state = {
	item: [],
	item2: []
}

export default new Vuex.Store({
    strict: true,
    state,
    mutations,
    actions,
    getters
})
