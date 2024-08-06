import { tblProfileResponse } from "../profileForms.js";
import getProfiles from "./getProfiles.js";

const profileList = async () => {
    let data = '';
    let response = '';
    let content = MyElement('content');
    let footer = MyElement('footer');

    content.innerHTML = `<tr><td class="text-center text-xl p-1" colspan="3">Cargando información, por favor espere...</td></tr>`;

    data = await getProfiles();

    if(data.status === 401){
        return content.innerHTML = `
        <tr>
            <td class="text-center text-xl p-1" colspan="3">
                Token expirado debe
                <u><a href="#" id="out" class="text-sky-500">iniciar sesión</a></u>
                nuevamente
            </td>
        </tr>`;
    }

    if(data.result.data){
        setTimeout(() => {
            data.result.data.forEach(el => response += tblProfileResponse(el) );
            content.innerHTML = !data.status?data.message:response;
            footer.innerHTML = data.result.page_links?data.result.page_links:'';
            return;
        }, 200);
    }
    else{
        content.innerHTML = `<tr><td class="text-center text-xl p-1" colspan="3">No hay información para mostrar</td></tr>`;
    }
}

export default profileList;