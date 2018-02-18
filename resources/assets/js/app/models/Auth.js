import {API_END_POINT} from '../config'
import * as Cookies from 'tiny-cookie'
import axios from 'axios'

class Auth {

    static isLoggedIn() {
        return Cookies.get('token') !== null
    }

    static async signIn(email, password) {
        return new Promise((resolve, reject) => {
            axios.post(API_END_POINT + 'login', {
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

    static async signOut() {
        return new Promise((resolve, reject) => {
            axios.post(API_END_POINT + 'logout')
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

export default Auth;
