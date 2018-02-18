import axios from 'axios';
import Auth from "./Auth";
import Model from "./Model";
import {API_END_POINT} from "../config";

class User extends Model {

    constructor(attributes = {id: -1, name: null, email: null, password: null, token: null},
                config = {endPoint: 'users'}) {

        super(attributes, config);

        this.id = attributes.id;
        this.name = attributes.name;
        this.email = attributes.email;
        this.password = attributes.password;
        this.token = attributes.token;
    }

    get() {
        return {
            'id': this.id,
            'name': this.id,
            'email': this.id,
            'password': this.id,
            'token': this.id,
        }
    }

    set(attributes = {id: -1, name: null, email: null, password: null, token: null}) {
        this.id = attributes.id;
        this.name = attributes.name;
        this.email = attributes.email;
        this.password = attributes.password;
        this.token = attributes.token;
    }

    isLoggedIn() {
        return Auth.isLoggedIn()
    }

    serialize(response) {
        this.id = response.data.id;
        this.name = response.data.name;
        this.email = response.data.email;
    }

    getProfile() {
        return new Promise((resolve, reject) => {
            axios.get(API_END_POINT + 'profile')
                .then(response => {
                    this.serialize(response);
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

    logIn() {
        return new Promise((resolve, reject) => {
            Auth.signIn(this.email, this.password)
                .then(response => {
                    this.token = response.data.token;
                    resolve(this)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

    logOut() {
        return new Promise((resolve, reject) => {
            Auth.signOut()
                .then(response => {
                    this.constructor();
                    resolve(this)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}

export default User;