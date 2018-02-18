import {API_END_POINT} from "../config";
import axios from "axios/index";

class Model {
    constructor(attributes = {id: -1}, config = {endPoint: 'users'}) {
        this._endPoint = config.endPoint;
        if (new.target === Model) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }

        if (this.set === undefined || typeof this.set !== "function") {
            throw new TypeError("Must override method");
        }

        if (this.get === undefined || typeof this.get !== "function") {
            throw new TypeError("Must override method");
        }

        if (this.serialize === undefined || typeof this.serialize !== "function") {
            throw new TypeError("Must override method");
        }
    }

    set(attributes = {}) {
        throw new TypeError("Not implemented.")
    }

    get() {
        throw new TypeError("Not implemented.")
    }

    serialize(response) {
        throw new TypeError("Not implemented.")
    }

    fetch() {
        return new Promise((resolve, reject) => {
            axios.get(API_END_POINT + this._endPoint + '/' + this.id)
                .then(response => {
                    this.serialize(response);
                    resolve(this)
                })
                .catch(errors => {
                    reject(errors);
                });
        })
    }

    fetchAll(data = {}) {
        return new Promise((resolve, reject) => {
            axios.get(API_END_POINT + this._endPoint, data)
                .then(response => {
                    resolve(response.data)
                })
                .catch(errors => {
                    reject(errors);
                });
        })
    }

    save() {
        //
    }

    store() {
        //
    }

    update() {
        //
    }

    delete() {
        //
    }

}

export default Model;