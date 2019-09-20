export function authHeader() {
    let user = JSOM.parse(localStorage.getItem('user'));

    if( user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}