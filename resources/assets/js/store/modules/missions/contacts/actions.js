import axios from 'axios'

import {apiDomain as apiUrl} from '../../../../config'

import {
    REINIT_CONTACTS,
    FETCH_CONTACTS,
    FETCH_CONTACT,
    CREATE_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT
} from './mutation-types'

export async function reinitContacts({commit}) {
    commit(REINIT_CONTACTS, [])
}

export async function fetchContacts({commit}) {
    return axios(
        {
            method: 'GET',
            url: apiUrl + '/contacts',
        })
        .then(response => {
            commit(FETCH_CONTACTS, response.data.data);
            return response.data.data
        })
        .catch(error => {
            throw error
        })
}

export async function fetchContact({commit}, {contactID}) {
    return axios(
        {
            method: 'GET',
            url: apiUrl + '/contacts/' + contactID,
        })
        .then(response => {
            commit(FETCH_CONTACT, response.data.data);
            return response.data.data
        })
        .catch(error => {
            throw error
        })
}

export async function createContact({commit}, {contact}) {
    return axios(
        {
            method: 'POST',
            url: apiUrl + '/contacts',
            data: contact
        })
        .then(response => {
            commit(CREATE_CONTACT, response.data.data);
            return response.data.data
        })
        .catch(error => {
            throw error
        })
}

export async function updateContact({commit}, {contact}) {
    return axios(
        {
            method: 'PUT',
            url: apiUrl + '/contacts/' + contact.id,
            data: contact
        })
        .then(response => {
            commit(UPDATE_CONTACT, response.data.data);
            return response.data.data
        })
        .catch(error => {
            throw error
        })
}

export async function deleteContact({commit}, { contactID }) {
    return axios(
        {
            method: 'DELETE',
            url: apiUrl + '/contacts/' + contactID
        })
        .then(response => {
            commit(DELETE_CONTACT, contactID);
            return response.data.data
        })
        .catch(error => {
            throw error
        })
}

export async function saveContact({commit, state}, { contact }) {
    const index = state.all.findIndex((x) => x.id === contact.id);
    if (index !== -1 ) {
        return updateContact({commit}, {contact})
    }
    return createContact({commit}, {contact})
}
