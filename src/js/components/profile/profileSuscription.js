import { localeStorageSet } from "../../helpers/getLocaleStorage.js";
import renderHTML from "../../helpers/renderHTML.js";
import { elements } from "../../helpers/routesAndComponents.js";

const profileSuscription = async (key, e) => {
    switch (key) {
        case 'add-profile-rc':
            await renderHTML('add-profile', 'Nuevo perfil', elements['add-profile']());
            break;

        case 'edit-profile-rc':
            localeStorageSet('edit-profile', e);
            await renderHTML('edit-profile', 'Editar perfil', elements['edit-profile'](e));
            break;
    }
}

export default profileSuscription;