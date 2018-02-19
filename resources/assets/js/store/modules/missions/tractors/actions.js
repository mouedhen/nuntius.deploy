import axios from 'axios'

import {apiDomain as apiUrl} from '../../../../config'

import {
    REINIT_TRACTORS,
    FETCH_TRACTORS,
    FETCH_TRACTOR,
    CREATE_TRACTOR,
    UPDATE_TRACTOR,
    DELETE_TRACTOR
} from './mutation-types'

export async function reinitTractors({commit}) {
    commit(REINIT_TRACTORS, [])
}

export async function fetchTractors({commit}) {
    return axios(
        {
            method: 'GET',
            url: apiUrl + '/tractors',
        })
        .then(response => {
            commit(FETCH_TRACTORS, response.data);
            return response.data
        })
        .catch(error => {
            throw error
        })
}

export async function fetchTractor({commit}, {tractorID}) {
    return axios(
        {
            method: 'GET',
            url: apiUrl + '/tractors/' + tractorID,
        })
        .then(response => {
            commit(FETCH_TRACTOR, response.data);
            return response.data
        })
        .catch(error => {
            throw error
        })
}

export async function createTractor({commit}, {tractor}) {
    return axios(
        {
            method: 'POST',
            url: apiUrl + '/tractors',
            data: tractor
        })
        .then(response => {
            commit(CREATE_TRACTOR, response.data);
            return response.data
        })
        .catch(error => {
            throw error
        })
}

export async function updateTractor({commit}, {tractor}) {
    return axios(
        {
            method: 'PUT',
            url: apiUrl + '/tractors/' + tractor.id,
            data: tractor
        })
        .then(response => {
            commit(UPDATE_TRACTOR, response.data);
            return response.data
        })
        .catch(error => {
            throw error
        })
}

export async function deleteTractor({commit}, { tractorID }) {
    return axios(
        {
            method: 'DELETE',
            url: apiUrl + '/tractors/' + tractorID
        })
        .then(response => {
            commit(DELETE_TRACTOR, tractorID);
            return response.data
        })
        .catch(error => {
            throw error
        })
}

export async function saveTractor({commit, state}, { tractor }) {
    const index = state.all.findIndex((x) => x.id === tractor.id);
    if (index !== -1 ) {
        return updateTractor({commit}, {tractor})
    }
    return createTractor({commit}, {tractor})
}
