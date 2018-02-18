import {
    LOGIN_STATUS,
    LOGIN_USER
} from "./mutation-types";
import User from "../../../models/User";

export function setLoginInfos({commit}, {user, status}) {
    commit(LOGIN_STATUS, status);
    commit(LOGIN_USER, user)
}

export function logout({commit}) {
    commit(LOGIN_STATUS, false);
    commit(LOGIN_USER, new User())
}
