import Auth from '../../models/Auth'
import router from '../index'

export const auth = function (to, from, next) {
    if(!Auth.isLoggedIn()) {
        router.push('/login');
        return;
    }
    next();
};

export const guest = function (to, from, next) {
    if(Auth.isLoggedIn()) {
        router.push(from.path);
        return;
    }
    next();
};
