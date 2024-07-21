import { localeStorageRemove } from "./getLocaleStorage.js";

const replaceHistoryState = (state) =>{
    history.replaceState({ state }, state, '/' + state);

    if (state != 'add-user') { localeStorageRemove('profiles'); localeStorageRemove('profiles-temp'); }

    if (state != 'edit-user') { localeStorageRemove('edit-user'); }

    if (state != 'edit-profile') { localeStorageRemove('edit-profile'); }
};

export default replaceHistoryState;