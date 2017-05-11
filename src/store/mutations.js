import * as type from './mutations_type.js'

export default {
    [type.ADD_ITEM](state, test) {
        state.item.push(test)
    },
    [type.DELETE_ITEM](state, pos) {
    	var a = state.item.splice(pos, 1)[0]
        state.item2.push(a)
    },
    [type.YANZHENG](state, obj) {
    	state.flag = {
    		code: obj.code,
    		name: obj.name,
    		zhanghao: obj.zhanghao,
    		mima: obj.mima
    	}
    },
    [type.LOGINOUT](state, obj) {
    	state.flag = {
    		code: '',
    		name: '',
    		zhanghao: '',
    		mima: ''
    	}
    }
}
