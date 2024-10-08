import fechtService from "../../helpers/fetchService.js";
import { localeStorageRemove } from "../../helpers/getLocaleStorage.js";
import { elements } from "../../helpers/routesAndComponents.js";

const  auth = async () => {

    let user = MyElement('user').value;
    let pasw = MyElement('pasw').value;

    MyElement('btn-login').innerHTML = `
    <div class="flex items-center space-x-1">
        <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Iniciando....
    </div>`;

    if(!user){
        MyElement('btn-login').innerHTML = 'Acceder';
        MyElement('user').focus();
        MyElement('user-error-message').innerHTML = 'Ingresar usuario por favor';
        setTimeout(() => MyElement('user-error-message').innerHTML = '', 3000);
        return;
    };

    if(!pasw){
        MyElement('btn-login').innerHTML = 'Acceder';
        MyElement('pasw').focus();
        MyElement('pasw-error-message').innerHTML = 'Ingresar contraseña por favor';
        setTimeout(() => MyElement('pasw-error-message').innerHTML = '', 3000);
        return;
    };

    let userData = await fechtService({ email: user, password: pasw }, 'auth', 'POST');

    if(!userData.status){
        localeStorageRemove('ui');
        setTimeout(() => {
            MyElement('login-error-message').innerHTML = userData.message;
            MyElement('btn-login').innerHTML = 'Acceder';
        },1500);

        setTimeout(() => MyElement('login-error-message').innerHTML = '', 3500);
        return;
    }

    localStorage.setItem('ui', JSON.stringify(userData.result));

    setTimeout(async () => {
        MyElement('btn-login').innerHTML = 'Acceder';
        let state = 'dashboard';
        document.title = 'Panel de control';
        history.replaceState({ state }, state, '/' + state);
        MyElement('root').innerHTML = elements.dashboard();
    }, 500);
}

export default auth;