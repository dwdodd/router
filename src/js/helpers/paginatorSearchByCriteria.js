import profilePageLink from "../components/profile/requests/profilePageLink.js";
import userPageLink from "../components/user/requests/userPageLink.js";
import fechtService from "./fetchService.js";

const paginatorSearchByCriteria = async (criteria, path) => {
    let cols = '';
    let response = '';
    let content = document.getElementById('content');
    let footer = document.getElementById('footer');

    const resource = `${path}?criteria=${criteria}`;
    const method = 'GET';
    const data = await fechtService({}, resource, method);

    switch (path) {
        case 'users':
            cols = 6; break;
        case 'roles':
        case 'profiles':
        case 'permissions':
             cols = 3; break;
    }

    if(data.status === 401){
        return content.innerHTML = `
        <tr>
            <td class="text-center text-xl p-1" colspan="${cols}">
                Token expirado debe
                <u><a href="#" id="out" class="text-sky-500">iniciar sesión</a></u>
                nuevamente
            </td>
        </tr>`;
    }

    content.innerHTML = `<tr><td class="text-center text-xl p-1" colspan="${cols}">Cargando información, por favor espere...</td></tr>`;

    if(data.result.data.length){
        setTimeout(async () => {
            switch (path) {
                case 'users': response = await userPageLink(data.result.data); break;
                case 'profiles': response = await profilePageLink(data.result.data); break;
            }
            content.innerHTML = !data.status?data.message:response;
            footer.innerHTML = data.result.page_links?data.result.page_links:'';
            return;
        }, 200);
    }
    else{
        content.innerHTML = `<tr><td class="text-center text-xl p-1" colspan="${cols}">No hay información para mostrar</td></tr>`;
    }
};

export default paginatorSearchByCriteria;