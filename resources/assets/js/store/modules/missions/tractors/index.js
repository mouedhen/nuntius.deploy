import * as actions from './actions'
import * as getters from './getters'

import {
    REINIT_TRACTORS,
    FETCH_TRACTORS,
    FETCH_TRACTOR,
    CREATE_TRACTOR,
    UPDATE_TRACTOR,
    DELETE_TRACTOR
} from './mutation-types'

const initialState = {
    all: []
};

const mutations = {

    [REINIT_TRACTORS] (state) {
        state.all = initialState.all
    },

    [FETCH_TRACTORS] (state, tractors) {
        state.all = tractors
    },

    [FETCH_TRACTOR] (state, tractor) {
        const index = state.all.findIndex(x => x.id === tractor.id);
        if (index === -1) {
            state.all.push(tractor)
        } else {
            state.all.splice(index, 1, tractor)
        }
        state.selectedCustomer = tractor
    },

    [CREATE_TRACTOR] (state, tractor) {
        state.all.push(tractor)
    },

    [UPDATE_TRACTOR] (state, tractor) {
        const index = state.all.findIndex(x => x.id === tractor.id);
        if (index !== -1) {
            state.all.splice(index, 1, tractor)
        }
    },

    [DELETE_TRACTOR] (state, tractorID) {
        state.all = state.all.filter(x => x.id !== tractorID)
    }
};

export default {
    state: { ...initialState },
    actions,
    getters,
    mutations
}
