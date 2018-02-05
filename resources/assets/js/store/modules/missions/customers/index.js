import * as actions from './actions'
import * as getters from './getters'

import {
    REINIT_CUSTOMERS,
    FETCH_CUSTOMERS,
    FETCH_CUSTOMER,
    CREATE_CUSTOMER,
    UPDATE_CUSTOMER,
    DELETE_CUSTOMER
} from './mutation-types'

const initialState = {
    all: []
};

const mutations = {

    [REINIT_CUSTOMERS] (state) {
        state.all = initialState.all
    },

    [FETCH_CUSTOMERS] (state, customers) {
        state.all = customers
    },

    [FETCH_CUSTOMER] (state, customer) {
        const index = state.all.findIndex(x => x.id === customer.id);
        if (index === -1) {
            state.all.push(customer)
        } else {
            state.all.splice(index, 1, customer)
        }
        state.selectedCustomer = customer
    },

    [CREATE_CUSTOMER] (state, customer) {
        state.all.push(customer)
    },

    [UPDATE_CUSTOMER] (state, customer) {
        const index = state.all.findIndex(x => x.id === customer.id);
        if (index !== -1) {
            state.all.splice(index, 1, customer)
        }
    },

    [DELETE_CUSTOMER] (state, customerID) {
        state.all = state.all.filter(x => x.id !== customerID)
    }
};

export default {
    state: { ...initialState },
    actions,
    getters,
    mutations
}
