import Authentication from './../../helpers/Authentication'
import router from './../../routes'

export default function authMiddleware(to, from, next) {
    if (!Authentication.isLoggedIn() && to.fullPath !== '/login') {
        router.push('/login')
    } else if (Authentication.isLoggedIn() && to.fullPath === '/login') {
        router.push(from.path);
    } else {
        next();
    }
}
