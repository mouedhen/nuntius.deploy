import axios from 'axios'

import {apiDomain as apiUrl} from '../../../../config'

import {
    FETCH_CUSTOMERS,
    FETCH_CUSTOMER,
    CREATE_CUSTOMER,
    UPDATE_CUSTOMER,
    DELETE_CUSTOMER
} from './mutation-types'

export function fetchCustomers({commit}) {
    return axios(
        {
            method: 'GET',
            url: apiUrl + '/customers/',
        })
        .then(response => {
            commit(FETCH_CUSTOMERS, response.data.data);
            return response.data.data
        })
        .catch(error => {
            throw error
        })
}

export function fetchCustomer({commit}, {customerID}) {
    return axios(
        {
            method: 'GET',
            url: apiUrl + '/customers/' + customerID,
        })
        .then(response => {
            commit(FETCH_CUSTOMER, response.data.data);
            return response.data.data
        })
        .catch(error => {
            throw error
        })
}

export function createCustomer({commit}, {customer}) {
    return axios(
        {
            method: 'POST',
            url: apiUrl + '/customers/',
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

export function updateCustomer({commit}, {customer}) {
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

export function deleteCustomer({commit}, { customerID }) {
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

export function saveCustomer({commit, state}, { customer }) {
    const index = state.all.findIndex((x) => x.id === customer.id);
    if (index !== -1 ) {
        return updateCustomer({commit}, {customer})
    }
    return createCustomer({commit}, {customer})
}
