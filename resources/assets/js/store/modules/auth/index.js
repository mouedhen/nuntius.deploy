import * as actions from './actions'
import * as getters from './getters'

import {
    LOGIN,
} from './mutation-types'

const initialState = {
    isLoggedIn: false
};


const mutations = {

    [LOGIN] (state, isLoggedIn) {
        state.isLoggedIn = isLoggedIn
    },
};

export default {
    state: { ...initialState },
    actions,
    getters,
    mutations
}

