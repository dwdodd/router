import orderColumnSelected from "../helpers/orderColumnSelected.js";
import paginatorPageLink from "../helpers/paginatorPageLink.js";
import paginatorSearchByCriteria from "../helpers/paginatorSearchByCriteria.js";
import renderHTML from "../helpers/renderHTML.js";
import { elements } from "../helpers/routesAndComponents.js";
import auth from "./login/auth.js";
import sendRecoverPassword from "./login/sendRecoverPassword.js";

const beginSuscription = async (key, e) => {
    switch (key) {
        case 'auth-rc':
            await auth();
            break;

        case 'dashboard-rc':
            await renderHTML('dashboard', 'Dashboard', elements.dashboard());
            break;

        case 'recover-pwd-rc':
            renderHTML('recover-password', 'Recuperar contraseña', elements['recover-password']());
            break;

        case 'send-recover':
            await sendRecoverPassword()
            break;

        case 'users-rc':
            await renderHTML('users', 'Usuarios', elements.users());
            break;

        case 'profiles-rc':
            await renderHTML('profiles', 'Perfiles', elements.profiles());
            break;

        case 'roles-rc':
            await renderHTML('roles', 'roles', elements.roles());
            break;

        case 'permissions-rc':
            await renderHTML('permissions', 'Permisos', elements.permissions());
            break;
        
        case 'out-rc':
            await renderHTML('login', 'login', elements.login());
            break;

        case 'page-link-rc':
            paginatorPageLink(e, window.location.pathname.substring(1));
            break;

         case 'page-link-search-rc':
            paginatorSearchByCriteria(MyElement('search').value, window.location.pathname.substring(1));
            break;
        
        case 'col-index-rc':
            orderColumnSelected(e.colIndex);
            break;

        case 'clear-search-rc':
            MyElement('search').value = '';
            MyElement('search').focus();
            break;
    }
}

export default beginSuscription;