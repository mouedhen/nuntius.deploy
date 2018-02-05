import {
    LOGIN,
} from "./mutation-types";

export function login({commit}) {
    commit(LOGIN, true)
}

export function logout({commit}) {
    commit(LOGIN, false)
}
