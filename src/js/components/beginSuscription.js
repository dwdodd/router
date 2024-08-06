import orderColumnSelected from "../helpers/orderColumnSelected.js";
import paginatorPageLink from "../helpers/paginatorPageLink.js";
import paginatorSearchByCriteria from "../helpers/paginatorSearchByCriteria.js";
import renderHTML from "../helpers/renderHTML.js";
import { elements } from "../helpers/routesAndComponents.js";
import auth from "./login/auth.js";

const beginSuscription = async (key, e) => {
    switch (key) {
        case 'auth-rc':
            await auth();
            break;

        case 'dashboard-rc':
            await renderHTML('dashboard', 'Dashboard', elements.dashboard());
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
            paginatorSearchByCriteria(document.getElementById('search').value, window.location.pathname.substring(1));
            break;
        
        case 'col-index-rc':
            orderColumnSelected(e.colIndex);
            break;

        case 'clear-search-rc':
            document.getElementById('search').value = '';
            document.getElementById('search').focus();
            break;
    }
}

export default beginSuscription;