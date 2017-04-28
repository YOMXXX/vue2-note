export default {
    'additem': ({ commit }, obj) => {
        commit('ADD_ITEM', obj)
    },
    'deleteitem': ({ commit }, obj) => {
        commit('DELETE_ITEM', obj)
    }
}
