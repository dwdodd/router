import verifyInputSearch from "./verifyInputSeach.js";

const onLoadEventsListeners = () => {
    window.addEventListener('load', () => {
        verifyInputSearch();
    });
}

export default onLoadEventsListeners;