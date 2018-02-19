import * as actions from './actions'
import * as getters from './getters'

import {
    REINIT_TOOLS,
    FETCH_TOOLS,
    FETCH_TOOL,
    CREATE_TOOL,
    UPDATE_TOOL,
    DELETE_TOOL
} from './mutation-types'

const initialState = {
    all: []
};

const mutations = {

    [REINIT_TOOLS] (state) {
        state.all = initialState.all
    },

    [FETCH_TOOLS] (state, tools) {
        state.all = tools
    },

    [FETCH_TOOL] (state, tool) {
        const index = state.all.findIndex(x => x.id === tool.id);
        if (index === -1) {
            state.all.push(tool)
        } else {
            state.all.splice(index, 1, tool)
        }
        state.selectedCustomer = tool
    },

    [CREATE_TOOL] (state, tool) {
        state.all.push(tool)
    },

    [UPDATE_TOOL] (state, tool) {
        const index = state.all.findIndex(x => x.id === tool.id);
        if (index !== -1) {
            state.all.splice(index, 1, tool)
        }
    },

    [DELETE_TOOL] (state, toolID) {
        state.all = state.all.filter(x => x.id !== toolID)
    }
};

export default {
    state: { ...initialState },
    actions,
    getters,
    mutations
}
