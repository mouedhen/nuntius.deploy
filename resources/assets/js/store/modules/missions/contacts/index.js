import * as actions from './actions'
import * as getters from './getters'

import {
    REINIT_CONTACTS,
    FETCH_CONTACTS,
    FETCH_CONTACT,
    CREATE_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT
} from './mutation-types'

const initialState = {
    all: []
};

const mutations = {

    [REINIT_CONTACTS] (state) {
        state.all = initialState.all
    },

    [FETCH_CONTACTS] (state, contacts) {
        state.all = contacts
    },

    [FETCH_CONTACT] (state, contact) {
        const index = state.all.findIndex(x => x.id === contact.id);
        if (index === -1) {
            state.all.push(contact)
        } else {
            state.all.splice(index, 1, contact)
        }
        state.selectedCustomer = contact
    },

    [CREATE_CONTACT] (state, contact) {
        state.all.push(contact)
    },

    [UPDATE_CONTACT] (state, contact) {
        const index = state.all.findIndex(x => x.id === contact.id);
        if (index !== -1) {
            state.all.splice(index, 1, contact)
        }
    },

    [DELETE_CONTACT] (state, contactID) {
        state.all = state.all.filter(x => x.id !== contactID)
    }
};

export default {
    state: { ...initialState },
    actions,
    getters,
    mutations
}
