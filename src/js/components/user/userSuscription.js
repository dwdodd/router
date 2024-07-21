import { localeStorageSet } from "../../helpers/getLocaleStorage.js";
import inputValidation from "../../helpers/inputValidation.js";
import renderHTML from "../../helpers/renderHTML.js";
import { elements } from "../../helpers/routesAndComponents.js";
import validateEmail from "../../helpers/validateEmail.js";
import addUser from "./requests/addUser.js"

const userSuscription = async (key, e) => {
    switch (key) {
        case 'add-user-rc':
            await renderHTML('add-user', 'Nuevo usuario', elements['add-user']());
            break;

        case 'add-user-fb':
            await addUser(validateEmail, inputValidation);
            break;

        case 'edit-user-rc':
            localeStorageSet('edit-user', e);
            await renderHTML('edit-user', 'Editar usuario', elements['edit-user'](e));
            break;

        case 'block-user-rc':
            console.log(e);
            break;
    }
}

export default userSuscription;