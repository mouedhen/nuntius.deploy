import * as actions from './actions'
import * as getters from './getters'

import {
    FETCH_MISSIONS,
    FETCH_MISSION,
    CREATE_MISSION,
    UPDATE_MISSION,
    DELETE_MISSION
} from './mutation-types'

const initialState = {
    all: []
};

const mutations = {
    [FETCH_MISSIONS] (state, missions) {
        state.all = missions
    },

    [FETCH_MISSION] (state, mission) {
        const index = state.all.findIndex(x => x.id === mission.id);
        if (index === -1) {
            state.all.push(mission)
        } else {
            state.all.splice(index, 1, mission)
        }
        state.selectedCustomer = mission
    },

    [CREATE_MISSION] (state, mission) {
        state.all.push(mission)
    },

    [UPDATE_MISSION] (state, mission) {
        const index = state.all.findIndex(x => x.id === mission.id);
        if (index !== -1) {
            state.all.splice(index, 1, mission)
        }
    },

    [DELETE_MISSION] (state, missionID) {
        state.all = state.all.filter(x => x.id !== missionID)
    }
};

export default {
    state: { ...initialState },
    actions,
    getters,
    mutations
}
