import * as Cookies from 'tiny-cookie'
import { Model, Collection } from 'vue-mc'

import {
    integer,
    string,
    email,
    required,
    min,
    max,
    equal } from 'vue-mc/validation'

class User extends Model {

    defaults() {
        return {
            id: null,
            name: '',
            email: '',
        }
    }

    mutations() {
        return {
            id: (id) => Number(id) || null,
            name: String,
            email: String,
        }
    }

    validation() {
        return {
            id: integer.and(min(1)).or(equal(null)),
            name: required.and(string).and(min(5)).and(max(50)),
            email: required.and(email).and(min(8)).and(max(100)),
        }
    }

    getRequest(config) {
        config.headers = {
            'Authorization': Cookies.get('token'),
        };

        return super.getRequest(config);
    }

    routes() {
        return {
            fetch: 'api/v1/users/{id}',
            save: 'api/v1/users'
        }
    }
}

class Users extends Collection {

    model() {
        return User;
    }

    getRequest(config) {
        config.headers = {
            'Authorization': Cookies.get('token'),
        };

        return super.getRequest(config);
    }

    routes() {
        return {
            fetch: 'api/v1/users',
        }
    }
}

export { User, Users }
