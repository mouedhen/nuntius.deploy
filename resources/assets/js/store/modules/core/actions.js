import axios from 'axios'
import {apiDomain as apiUrl} from "../../../config"

axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*'
};

export function fetchAll({commit}, uri, FETCH_ALL_MUTATION) {
    return axios(
        {
            method: 'GET',
            url: apiUrl + '/' + uri
        })
        .then(response => {
            commit(FETCH_ALL_MUTATION, response.data.data);
            return response.data.data
        })
        .catch(error => {
            throw error.response.data
        })
}

export function fetchOne({commit}, dataID, uri, FETCH_ONE_MUTATION) {
    return axios(
        {
            method: 'GET',
            url: apiUrl + '/' + uri + '/' + dataID
        })
        .then(response => {
            commit(FETCH_ONE_MUTATION, response.data.data);
            return response.data.data
        })
        .catch(error => {
            throw error.response.data
        })
}

export function createOne({commit}, data, uri, CREATE_MUTATION) {
    return axios(
        {
            method: 'POST',
            url: apiUrl + '/' + uri + '/',
            data: data
        })
        .then(response => {
            commit(CREATE_MUTATION, response.data.data);
            return response.data.data
        })
        .catch(error => {
            throw error.response.data
        })
}

export function updateOne({commit}, data, uri, UPDATE_MUTATION) {
    return axios(
        {
            method: 'PUT',
            url: apiUrl + '/' + uri + '/' + data.id,
            data: data
        })
        .then(response => {
            commit(UPDATE_MUTATION, response.data.data);
            return response.data.data
        })
        .catch(error => {
            throw error.response.data
        })
}

export function deleteOne({commit}, dataID, uri, DELETE_MUTATION) {
    return axios(
        {
            method: 'DELETE',
            url: apiUrl + '/' + uri + '/' + dataID
        })
        .then(response => {
            commit(DELETE_MUTATION, response.data.data);
            return response.data.data
        })
        .catch(error => {
            throw error.response
        })
}

export function saveOne({commit, state}, {data}, uri, CREATE_MUTATION, UPDATE_MUTATION) {
    if (data.id !== undefined && data.id !== null) {
        const index = state.all.findIndex((x) => x.id === data.id);
        if (index !== -1) {
            return updateOne({commit}, data, uri, UPDATE_MUTATION)
        }
        return createOne({commit}, data, uri, CREATE_MUTATION)
    }
    return createOne({commit}, data, uri, CREATE_MUTATION)
}
