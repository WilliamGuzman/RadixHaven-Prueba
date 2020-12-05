import axios from 'axios';

const tokenAuth = token => {
    if (token) {
        //Pasamos al Header el token
        axios.defaults.headers.common.authorization = `Bearer ${token}`;
    }else {
        //Si se cerro sesion o expori el token see elimina
        delete axios.defaults.headers.common.authorization;
    }
}

export default tokenAuth;