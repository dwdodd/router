import { tblProfileResponse } from "../profileForms.js";

const profilePageLink = async (data) => {
    let element = '';
    data.forEach(el => {
        element += tblProfileResponse(el);
    });
    return element;
};

export default profilePageLink;