import axios from 'axios'

import {apiDomain as apiUrl} from '../../../../config'

import {
    REINIT_TOOLS,
    FETCH_TOOLS,
    FETCH_TOOL,
    CREATE_TOOL,
    UPDATE_TOOL,
    DELETE_TOOL
} from './mutation-types'

export async function reinitTools({commit}) {
    commit(REINIT_TOOLS, [])
}

export async function fetchTools({commit}) {
    return axios(
        {
            method: 'GET',
            url: apiUrl + '/tools',
        })
        .then(response => {
            commit(FETCH_TOOLS, response.data);
            return response.data
        })
        .catch(error => {
            throw error
        })
}

export async function fetchTool({commit}, {toolID}) {
    return axios(
        {
            method: 'GET',
            url: apiUrl + '/tools/' + toolID,
        })
        .then(response => {
            commit(FETCH_TOOL, response.data);
            return response.data
        })
        .catch(error => {
            throw error
        })
}

export async function createTool({commit}, {tool}) {
    return axios(
        {
            method: 'POST',
            url: apiUrl + '/tools',
            data: tool
        })
        .then(response => {
            commit(CREATE_TOOL, response.data);
            return response.data
        })
        .catch(error => {
            throw error
        })
}

export async function updateTool({commit}, {tool}) {
    return axios(
        {
            method: 'PUT',
            url: apiUrl + '/tools/' + tool.id,
            data: tool
        })
        .then(response => {
            commit(UPDATE_TOOL, response.data);
            return response.data
        })
        .catch(error => {
            throw error
        })
}

export async function deleteTool({commit}, { toolID }) {
    return axios(
        {
            method: 'DELETE',
            url: apiUrl + '/tools/' + toolID
        })
        .then(response => {
            commit(DELETE_TOOL, toolID);
            return response.data
        })
        .catch(error => {
            throw error
        })
}

export async function saveTool({commit, state}, { tool }) {
    const index = state.all.findIndex((x) => x.id === tool.id);
    if (index !== -1 ) {
        return updateTool({commit}, {tool})
    }
    return createTool({commit}, {tool})
}
