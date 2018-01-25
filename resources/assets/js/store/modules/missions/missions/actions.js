import axios from 'axios'

import {apiDomain as apiUrl} from '../../../../config'

import {
    FETCH_MISSIONS,
    FETCH_MISSION,
    CREATE_MISSION,
    UPDATE_MISSION,
    DELETE_MISSION
} from './mutation-types'

export function fetchMissions({commit}) {
    return axios(
        {
            method: 'GET',
            url: apiUrl + '/missions/',
        })
        .then(response => {
            commit(FETCH_MISSIONS, response.data.data);
            return response.data.data
        })
        .catch(error => {
            throw error
        })
}

export function fetchMission({commit}, {missionID}) {
    return axios(
        {
            method: 'GET',
            url: apiUrl + '/missions/' + missionID,
        })
        .then(response => {
            commit(FETCH_MISSION, response.data.data);
            return response.data.data
        })
        .catch(error => {
            throw error
        })
}

export function createMission({commit}, {mission}) {
    return axios(
        {
            method: 'POST',
            url: apiUrl + '/missions/',
            data: mission
        })
        .then(response => {
            commit(CREATE_MISSION, response.data.data);
            return response.data.data
        })
        .catch(error => {
            throw error
        })
}

export function updateMission({commit}, {mission}) {
    return axios(
        {
            method: 'PUT',
            url: apiUrl + '/missions/' + mission.id,
            data: mission
        })
        .then(response => {
            commit(UPDATE_MISSION, response.data.data);
            return response.data.data
        })
        .catch(error => {
            throw error
        })
}

export function deleteMission({commit}, { missionID }) {
    return axios(
        {
            method: 'DELETE',
            url: apiUrl + '/missions/' + missionID
        })
        .then(response => {
            commit(DELETE_MISSION, missionID);
            return response.data.data
        })
        .catch(error => {
            throw error
        })
}

export function saveMission({commit, state}, { mission }) {
    const index = state.all.findIndex((x) => x.id === mission.id);
    if (index !== -1 ) {
        return updateMission({commit}, {mission})
    }
    return createMission({commit}, {mission})
}
