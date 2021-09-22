import { getCart } from '@/network/cart'

const actions = {
    updateCart({ state, commit }) {
        if (!state.user.isLogin) return;
        getCart().then(res => {
            commit('addCart', { count: res.data.length || 0 })
        })
    }
};

export default actions