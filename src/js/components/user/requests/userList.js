import userTableRequestResponse from "../render/userTableRequestResponse.js";
import getUsers from "./getUsers.js";

const userList = async () => {
    let data = '';
    let response = '';
    let content = MyElement('content');
    let footer = MyElement('footer');

    content.innerHTML = `<tr><td class="text-center text-xl p-1" colspan="6">Cargando información, por favor espere...</td></tr>`;

    data = await getUsers();

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
        setTimeout(() => {
            data.result.data.forEach(el => response += userTableRequestResponse(el) );
            content.innerHTML = !data.status?data.message:response;
            footer.innerHTML = data.result.page_links?data.result.page_links:'';
            return;
        }, 200);
    }
    else{
        content.innerHTML = `<tr><td class="text-center text-xl p-1" colspan="6">No hay información para mostrar</td></tr>`;
    }
}

export default userList;