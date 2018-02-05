import * as Cookies from 'tiny-cookie'
import axios from 'axios'

export default class Authentication {

    static isLoggedIn() {
        return Cookies.get('token') !== null;
    }

    bearerLogIn(email, password) {
        return new Promise((resolve, reject) => {
            axios.post('/api/v1/login', {
                email: email,
                password: password
            }).then(response => {
                Cookies.set('token', 'Bearer ' + response.data.token);
                axios.defaults.headers.common['Authorization'] = Cookies.get('token');
                resolve(response);
            }).catch(errors => {
                reject(errors);
            });
        })
    }

    static bearerLogOut() {
        return new Promise((resolve, reject) => {
            axios.post('/api/v1/logout')
                .then(response => {
                    Cookies.remove('token');
                    resolve(response);
                })
                .catch(errors => {
                    reject(errors);
                });
        })
    }

}
