import { localeStorageItem } from "./helpers/getLocaleStorage.js";
import { routes, elements, headerTitle } from "./helpers/routesAndComponents.js";
import requests from "./helpers/requests.js";
import setTitle from "./helpers/setTitle.js";
import replaceHistoryState from "./helpers/replaceHistoryState.js";
import eventsListenerSuscribe from "./helpers/eventsListenerSuscribe.js";

document.addEventListener('DOMContentLoaded', async () => {
    /* Válida que el dom este cargado */
    console.log('El DOM está completamente cargado y parseado');

    /* Contenedor para renderizar elementos al dom */
    const root = document.getElementById('root');

    /* Selecciona el pathname y el substring le quita el slash */
    const hashPath = window.location.pathname.substring(1);

    /* Mantener pagina seleccionada visible al actualizar el navegador */
    const keepThisPage = async (title, state, content) => {
        setTitle(title);
        replaceHistoryState(state);
        eventsListenerSuscribe();
        root.innerHTML = await content;
    };

    /* Validar la página actual y mantenerla visible */
    if(!hashPath || !localeStorageItem('ui') || hashPath == 'login'){
        return keepThisPage('login', hashPath, elements.login());
    }

    /* Verifica si la ruta existe */
    if (!(hashPath in routes)) {
        return keepThisPage('Not Found', hashPath, elements.notfound(hashPath));
    }

    await keepThisPage(headerTitle(hashPath), hashPath, elements[hashPath]());
    await requests(hashPath);
});