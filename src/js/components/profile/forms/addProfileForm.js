import buttonSearchInput from "../../../helpers/buttonSearchInput.js";
import layout from "../../../layouts/layout.js";

const addProfile = () => {
    let content = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gab-4">
        <div class="text-2xl font-bold text-sky-900">Nuevo perfil <i class="bi bi-person-fill-add"></i></div>
    </div>
    ${buttonSearchInput('dash-profiles', 'Lista de perfiles', false)}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 bg-white p-4 rounded shadow-md">
        <h1 class="text-2xl">Perfiles</h1>
    </div>`;

    return layout(content);
}

export default addProfile;