import { localeStorageItem } from "./getLocaleStorage.js";
import replaceHistoryState from "./replaceHistoryState.js";
import requests from "./requests.js";
import { elements, routes } from "./routesAndComponents.js";
import setTitle from "./setTitle.js";
import verifyInputSearch from "./verifyInputSeach.js";

const renderHTML = async (path, title, element) => {
    if(!localeStorageItem('ui')){
        if(path == 'login'){
            setTitle('login');
            replaceHistoryState('login');
            return root.innerHTML = elements.login();
        }
        else{
            setTitle('Recuperar contraseña');
            replaceHistoryState('recover-password');
            return root.innerHTML = elements['recover-password']();
        }
    }

    replaceHistoryState(path);

    if(path == 'login' || path == 'recover-password') return;

    if (!(path in routes)) {
        setTitle('Not Found');
        return root.innerHTML = elements.notfound(path);
    };

    setTitle(title);
    root.innerHTML = await element;
    await requests(path);
    verifyInputSearch();
    return;
}

export default renderHTML;