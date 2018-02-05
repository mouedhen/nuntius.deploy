import * as actions from './actions'
import * as getters from './getters'

import {
    REINIT_TASKS,
    FETCH_TASKS,
    FETCH_TASK,
    CREATE_TASK,
    UPDATE_TASK,
    DELETE_TASK
} from './mutation-types'

const initialState = {
    all: []
};

const mutations = {

    [REINIT_TASKS] (state) {
        state.all = initialState.all
    },

    [FETCH_TASKS] (state, tasks) {
        state.all = tasks
    },

    [FETCH_TASK] (state, task) {
        const index = state.all.findIndex(x => x.id === task.id);
        if (index === -1) {
            state.all.push(task)
        } else {
            state.all.splice(index, 1, task)
        }
        state.selectedCustomer = task
    },

    [CREATE_TASK] (state, task) {
        state.all.push(task)
    },

    [UPDATE_TASK] (state, task) {
        const index = state.all.findIndex(x => x.id === task.id);
        if (index !== -1) {
            state.all.splice(index, 1, task)
        }
    },

    [DELETE_TASK] (state, taskID) {
        state.all = state.all.filter(x => x.id !== taskID)
    }
};

export default {
    state: { ...initialState },
    actions,
    getters,
    mutations
}
