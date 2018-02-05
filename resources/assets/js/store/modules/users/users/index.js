import * as actions from './actions'
import * as getters from './getters'

import {
    REINIT_USERS,
    FETCH_USERS,
    FETCH_USER,
    CREATE_USER,
    UPDATE_USER,
    DELETE_USER
} from './mutation-types'

const initialState = {
    all: []
};

const mutations = {

    [REINIT_USERS] (state, users) {
        state.all = initialState.all
    },

    [FETCH_USERS] (state, users) {
        state.all = users
    },

    [FETCH_USER] (state, user) {
        const index = state.all.findIndex(x => x.id === user.id);
        if (index === -1) {
            state.all.push(user)
        } else {
            state.all.splice(index, 1, user)
        }
    },

    [CREATE_USER] (state, user) {
        state.all.push(user)
    },

    [UPDATE_USER] (state, user) {
        const index = state.all.findIndex(x => x.id === user.id);
        if (index !== -1) {
            state.all.splice(index, 1, user)
        }
    },

    [DELETE_USER] (state, userID) {
        state.all = state.all.filter(x => x.id !== userID)
    }
};

export default {
    state: { ...initialState },
    actions,
    getters,
    mutations
}
