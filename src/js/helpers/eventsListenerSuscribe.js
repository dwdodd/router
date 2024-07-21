import onClickEventsListeners from "./onClickEventsListeners.js";
import onLoadEventsListeners from "./onLoadEventsListeners.js";

const eventsListenerSuscribe = () => {
    onClickEventsListeners();
    onLoadEventsListeners();
}

export default eventsListenerSuscribe;