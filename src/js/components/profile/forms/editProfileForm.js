import buttonSearchInput from "../../../helpers/buttonSearchInput.js";
import { localeStorageInfo, localeStorageItem } from "../../../helpers/getLocaleStorage.js";
import layout from "../../../layouts/layout.js";

const editProfile = (el) => {
    if(localeStorageItem('edit-profile')){
        el = localeStorageInfo('edit-profile');
    }else{ el = '' }

    let content = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gab-4">
        <div class="text-2xl font-bold text-sky-900">Editar usuario <i class="bi bi-person-fill-gear"></i></div>
    </div>
    ${buttonSearchInput('add-profile', '+ Nuevo perfil', false)}
    ${buttonSearchInput('dash-profiles', '+ Lista de perfiles', false)}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 bg-white p-4 rounded shadow-md">
        <div class="relative rounded-md shadow-sm">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                <span class="input-group-text" id="addon-wrapping">
                    <i class="bi bi-alphabet"></i>
                </span>
            </div>
            <input
                type="text"
                class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Perfil"
                value="${el.profile?el.profile:''}"
            />
        </div>
        <div class="col-span-1 md:col-span-2 lg:col-span-3">
            <button class="p-2 bg-sky-900 hover:bg-sky-700 rounded-md text-white" id="save-edit-profile">Guardar</button>
        </div>
    </div>`;

    return layout(content);
}

export default editProfile;