import 'babel-polyfill'
import axios from 'axios'
import * as Cookies from 'tiny-cookie'

window.axios = axios;

axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    'Authorization': Cookies.get('token'),
};
