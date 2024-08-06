import fechtService from "../../helpers/fetchService.js";
import { localeStorageRemove } from "../../helpers/getLocaleStorage.js";

const  sendRecoverPassword = async () => {
    let user = MyElement('user').value;

    MyElement('btn-recover-password').innerHTML = `
    <div class="flex items-center space-x-1">
        <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Enviando....
    </div>`;

    if(!user){
        MyElement('btn-recover-password').innerHTML = 'Enviar';
        MyElement('user').focus();
        MyElement('user-error-message').innerHTML = 'Ingresar correo electrónico por favor';
        setTimeout(() => MyElement('user-error-message').innerHTML = '', 3000);
        return;
    };

    let userData = await fechtService({ email: user }, 'recover-password', 'POST');

    if(!userData.status){
        localeStorageRemove('ui');
        setTimeout(() => {
            MyElement('send-error-message').innerHTML = userData.http_code == 405 ? 'Método no encontrado: (recover-password)': userData.message;
            MyElement('btn-recover-password').innerHTML = 'Enviar';
        },1500);

        setTimeout(() => MyElement('send-error-message').innerHTML = '', 5000);
        return;
    }

    setTimeout(async () => {
        MyElement('btn-login').innerHTML = 'Enviar';
        MyElement('user-error-message').innerHTML = 'Recuperación de contraseña enviada.Por favor revisar su bandeja de entrada';
    }, 500);
}

export default sendRecoverPassword;