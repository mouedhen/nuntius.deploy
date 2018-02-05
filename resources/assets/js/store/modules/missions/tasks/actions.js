import axios from 'axios'

import {apiDomain as apiUrl} from '../../../../config'

import {
    REINIT_TASKS,
    FETCH_TASKS,
    FETCH_TASK,
    CREATE_TASK,
    UPDATE_TASK,
    DELETE_TASK
} from './mutation-types'

export function reinitTasks({commit}) {
    commit(REINIT_TASKS, [])
}

export function fetchTasks({commit}) {
    return axios(
        {
            method: 'GET',
            url: apiUrl + '/tasks/',
        })
        .then(response => {
            commit(FETCH_TASKS, response.data.data);
            return response.data.data
        })
        .catch(error => {
            throw error
        })
}

export function fetchTask({commit}, {taskID}) {
    return axios(
        {
            method: 'GET',
            url: apiUrl + '/tasks/' + taskID,
        })
        .then(response => {
            commit(FETCH_TASK, response.data.data);
            return response.data.data
        })
        .catch(error => {
            throw error
        })
}

export function createTask({commit}, {task}) {
    return axios(
        {
            method: 'POST',
            url: apiUrl + '/tasks/',
            data: task
        })
        .then(response => {
            commit(CREATE_TASK, response.data.data);
            return response.data.data
        })
        .catch(error => {
            throw error
        })
}

export function updateTask({commit}, {task}) {
    return axios(
        {
            method: 'PUT',
            url: apiUrl + '/tasks/' + task.id,
            data: task
        })
        .then(response => {
            commit(UPDATE_TASK, response.data.data);
            return response.data.data
        })
        .catch(error => {
            throw error
        })
}

export function deleteTask({commit}, { taskID }) {
    return axios(
        {
            method: 'DELETE',
            url: apiUrl + '/tasks/' + taskID
        })
        .then(response => {
            commit(DELETE_TASK, taskID);
            return response.data.data
        })
        .catch(error => {
            throw error
        })
}

export function saveTask({commit, state}, { task }) {
    const index = state.all.findIndex((x) => x.id === task.id);
    if (index !== -1 ) {
        return updateTask({commit}, {task})
    }
    return createTask({commit}, {task})
}
