import profilePageLink from "../components/profile/requests/profilePageLink.js";
import userPageLink from "../components/user/requests/userPageLink.js";
import fechtService from "./fetchService.js";

const paginatorPageLink = async (e, path) => {
    let response = '';
    let page = e.target.dataset.page;
    let content = document.getElementById('content');
    let footer = document.getElementById('footer');

    const resource = `${path}?page=${page}`;
    const method = 'GET';
    const data = await fechtService({}, resource, method);

    content.innerHTML = `<tr><td class="text-center text-xl p-1" colspan="3">Cargando información, por favor espere...</td></tr>`;

    if(data.status === 401){
        return content.innerHTML = `
        <tr>
            <td class="text-center text-xl p-1" colspan="6">
                Token expirado debe
                <u><a href="#" id="out" class="text-sky-500">iniciar sesión</a></u>
                nuevamente
            </td>
        </tr>`;
    }

    if(data.result.data){
        setTimeout(async () => {
            switch (path) {
                case 'users':
                    response = await userPageLink(data.result.data);
                    break;
                case 'profiles':
                    response = await profilePageLink(data.result.data);
                    break;
            }
            content.innerHTML = !data.status?data.message:response;
            footer.innerHTML = data.result.page_links?data.result.page_links:'';
            return;
        }, 300);
    }
    else{
        content.innerHTML = `<tr><td class="text-center text-xl p-1" colspan="3">No hay información para mostrar</td></tr>`;
    }
};

export default paginatorPageLink;