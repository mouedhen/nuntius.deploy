import axios from 'axios'

import {apiDomain as apiUrl} from '../../../../config'

import {
    REINIT_CONDUCTORS,
    FETCH_CONDUCTORS,
    FETCH_CONDUCTOR,
    CREATE_CONDUCTOR,
    UPDATE_CONDUCTOR,
    DELETE_CONDUCTOR
} from './mutation-types'

export async function reinitConductors({commit}) {
    commit(REINIT_CONDUCTORS, [])
}

export async function fetchConductors({commit}) {
    return axios(
        {
            method: 'GET',
            url: apiUrl + '/conductors',
        })
        .then(response => {
            commit(FETCH_CONDUCTORS, response.data);
            return response.data
        })
        .catch(error => {
            throw error
        })
}

export async function fetchConductor({commit}, {conductorID}) {
    return axios(
        {
            method: 'GET',
            url: apiUrl + '/conductors/' + conductorID,
        })
        .then(response => {
            commit(FETCH_CONDUCTOR, response.data);
            return response.data
        })
        .catch(error => {
            throw error
        })
}

export async function createConductor({commit}, {conductor}) {
    return axios(
        {
            method: 'POST',
            url: apiUrl + '/conductors',
            data: conductor
        })
        .then(response => {
            commit(CREATE_CONDUCTOR, response.data);
            return response.data
        })
        .catch(error => {
            throw error
        })
}

export async function updateConductor({commit}, {conductor}) {
    return axios(
        {
            method: 'PUT',
            url: apiUrl + '/conductors/' + conductor.id,
            data: conductor
        })
        .then(response => {
            commit(UPDATE_CONDUCTOR, response.data);
            return response.data
        })
        .catch(error => {
            throw error
        })
}

export async function deleteConductor({commit}, { conductorID }) {
    return axios(
        {
            method: 'DELETE',
            url: apiUrl + '/conductors/' + conductorID
        })
        .then(response => {
            commit(DELETE_CONDUCTOR, conductorID);
            return response.data
        })
        .catch(error => {
            throw error
        })
}

export async function saveConductor({commit, state}, { conductor }) {
    const index = state.all.findIndex((x) => x.id === conductor.id);
    if (index !== -1 ) {
        return updateConductor({commit}, {conductor})
    }
    return createConductor({commit}, {conductor})
}
