import { createStore } from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
const state = {
  user: {
    isLogin: false
  },
  cartCount: 0
}

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {
  }
})
