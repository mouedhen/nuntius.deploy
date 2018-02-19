import * as actions from './actions'
import * as getters from './getters'

import {
    REINIT_CONDUCTORS,
    FETCH_CONDUCTORS,
    FETCH_CONDUCTOR,
    CREATE_CONDUCTOR,
    UPDATE_CONDUCTOR,
    DELETE_CONDUCTOR
} from './mutation-types'

const initialState = {
    all: []
};

const mutations = {

    [REINIT_CONDUCTORS] (state) {
        state.all = initialState.all
    },

    [FETCH_CONDUCTORS] (state, conductors) {
        state.all = conductors
    },

    [FETCH_CONDUCTOR] (state, conductor) {
        const index = state.all.findIndex(x => x.id === conductor.id);
        if (index === -1) {
            state.all.push(conductor)
        } else {
            state.all.splice(index, 1, conductor)
        }
        state.selectedCustomer = conductor
    },

    [CREATE_CONDUCTOR] (state, conductor) {
        state.all.push(conductor)
    },

    [UPDATE_CONDUCTOR] (state, conductor) {
        const index = state.all.findIndex(x => x.id === conductor.id);
        if (index !== -1) {
            state.all.splice(index, 1, conductor)
        }
    },

    [DELETE_CONDUCTOR] (state, conductorID) {
        state.all = state.all.filter(x => x.id !== conductorID)
    }
};

export default {
    state: { ...initialState },
    actions,
    getters,
    mutations
}
