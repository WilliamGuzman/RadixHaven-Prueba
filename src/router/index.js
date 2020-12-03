import Login from '../components/pages/auth/Login';
import Inicio from '../components/pages/home/Inicio';
import Users  from '../components/pages/users/Users';

const login = {
    url: "/",
    type: "public",
    component: Login
}

const inicio = {
    url: "/inicio",
    type: "private",
    component: Inicio
}

const usuarios = {
    url: "/usuarios",
    type: "private",
    component: Users
}


const routes = [ login, inicio, usuarios ];

export default routes;