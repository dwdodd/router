import dashboard from "../components/dashboard.js";
import users from "../components/user/users.js";
import profiles from "../components/profile/profiles.js";
import login from "../components/login.js";
import notfound from "../components/notfound.js"
import roles from "../components/role/roles.js";
import permissions from "../components/permission/permissions.js";
import addUser from "../components/user/forms/addUserForm.js";
import editUser from "../components/user/forms/editUserForm.js";
import addProfile from "../components/profile/forms/addProfileForm.js";
import editProfile from "../components/profile/forms/editProfileForm.js";

const headerTitle = (title) => {
    let newTitle = '';
    switch (title) {
        case 'dashboard':    newTitle = 'Dashboard'; break;
        case 'users':        newTitle = 'Usuarios';         break;
        case 'profiles':     newTitle = 'Perfiles';         break;
        case 'roles':        newTitle = 'Roles';            break;
        case 'permissions':  newTitle = 'Permisos';         break;
        case 'add-user':     newTitle = 'Nuevo usuario';    break;
        case 'edit-user':    newTitle = 'Editar usuario';   break;
        case 'add-profile':  newTitle = 'Nuevo perfil';     break;
        case 'edit-profile': newTitle = 'Editar perfil';    break;
    }
    return !newTitle?title:newTitle;
}

const routes = {
    login,
    dashboard,
    users,
    profiles,
    roles,
    permissions,
    'add-user': 'add-user',
    'edit-user': 'edit-user',
    'add-profile': 'add-profile',
    'edit-profile': 'edit-profile',
}

const elements = {
    dashboard,
    login,
    users,
    profiles,
    notfound,
    roles,
    permissions,
    'add-user': addUser,
    'edit-user': editUser,
    'add-profile': addProfile,
    'edit-profile': editProfile,
};

export {routes, elements, headerTitle};