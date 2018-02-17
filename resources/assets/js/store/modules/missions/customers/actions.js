import axios from 'axios'

import {apiDomain as apiUrl} from '../../../../config'

import {
    REINIT_CUSTOMERS,
    FETCH_CUSTOMERS,
    FETCH_CUSTOMER,
    CREATE_CUSTOMER,
    UPDATE_CUSTOMER,
    DELETE_CUSTOMER
} from './mutation-types'

export async function reinitUsers({commit}) {
    commit(REINIT_CUSTOMERS, [])
}

export async function fetchCustomers({commit}) {
    return axios(
        {
            method: 'GET',
            url: apiUrl + '/customers',
        })
        .then(response => {
            commit(FETCH_CUSTOMERS, response.data.data);
            return response.data.data
        })
        .catch(error => {
            throw error
        })
}

export async function fetchCustomer({commit}, {customerID}) {
    return axios(
        {
            method: 'GET',
            url: apiUrl + '/customers/' + customerID,
        })
        .then(response => {
            commit(FETCH_CUSTOMER, response.data);
            return response.data
        })
        .catch(error => {
            throw error
        })
}

export async function createCustomer({commit}, {customer}) {
    return axios(
        {
            method: 'POST',
            url: apiUrl + '/customers',
            data: customer
        })
        .then(response => {
            commit(CREATE_CUSTOMER, response.data.data);
            return response.data.data
        })
        .catch(error => {
            throw error
        })
}

export async function updateCustomer({commit}, {customer}) {
    return axios(
        {
            method: 'PUT',
            url: apiUrl + '/customers/' + customer.id,
            data: customer
        })
        .then(response => {
            commit(UPDATE_CUSTOMER, response.data.data);
            return response.data.data
        })
        .catch(error => {
            throw error
        })
}

export async function deleteCustomer({commit}, { customerID }) {
    return axios(
        {
            method: 'DELETE',
            url: apiUrl + '/customers/' + customerID
        })
        .then(response => {
            commit(DELETE_CUSTOMER, customerID);
            return response.data.data
        })
        .catch(error => {
            throw error
        })
}

export async function saveCustomer({commit, state}, { customer }) {
    const index = state.all.findIndex((x) => x.id === customer.id);
    if (index !== -1 ) {
        return updateCustomer({commit}, {customer})
    }
    return createCustomer({commit}, {customer})
}
