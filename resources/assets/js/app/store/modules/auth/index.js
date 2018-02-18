import * as actions from './actions'
import * as getters from './getters'

import {
    LOGIN_STATUS,
    LOGIN_USER,
} from './mutation-types'
import User from "../../../models/User";

const initialState = {
    logInStatus: false,
    user: new User()
};


const mutations = {

    [LOGIN_STATUS] (state, logInStatus) {
        state.logInStatus = logInStatus;
    },

    [LOGIN_USER] (state, user) {
        state.user = user
    }
};

export default {
    state: { ...initialState },
    actions,
    getters,
    mutations
}

