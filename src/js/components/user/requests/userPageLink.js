import userTableRequestResponse from "../render/userTableRequestResponse.js";

const userPageLink = async (data) => {
    let element = '';
    data.forEach(el => element += userTableRequestResponse(el) );
    return element;
};

export default userPageLink;