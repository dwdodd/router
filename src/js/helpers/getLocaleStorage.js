const localeStorageItem = (item) => localStorage.getItem(item);
const localeStorageRemove = (item) => localStorage.removeItem(item);
const localeStorageInfo = (item) => JSON.parse(localStorage.getItem(item));
const localeStorageSet = (item, data) => localStorage.setItem(item, JSON.stringify(data));

export {
    localeStorageInfo,
    localeStorageItem,
    localeStorageRemove,
    localeStorageSet
};