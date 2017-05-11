export default {
    'getlist': (state) => {
        if (state.item !== '') {
            return state.item
        }
    },
    'deletelist': (state) => {
        if (state.item2 !== '') {
            return state.item2
        }
    },
    'yanzheng': (state) => {
        return +state.flag.code === 1
    },
    'loginOut': (state) => {
        return ''
    }
}
