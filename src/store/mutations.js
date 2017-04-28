import * as type from './mutations_type.js'

export default {
    [type.ADD_ITEM](state, test) {
        state.item.push(test)
    },
    [type.DELETE_ITEM](state, pos) {
    	var a = state.item.splice(pos, 1)[0]
        state.item2.push(a)
    }
}
