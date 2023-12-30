const jwt = require('jsonwebtoken');
const jwtPassword = "secret";

const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,})$/;

function signJwt(username, password) {
    if (!emailRegex.test(username) || password.length < 6) {
        return null;
    }
    var token = jwt.sign({ username: username }, jwtPassword);
    return token;
}

function verifyJwt(token) {
    const tok = jwt.verify(token, jwtPassword);
    console.log(tok);
    if(tok) 
        return true;
    return false;
}

function decodeJwt(token) {
    const decode = jwt.decode(token, jwtPassword);
    if(decode) 
        return true;
    return false;
}

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword
}