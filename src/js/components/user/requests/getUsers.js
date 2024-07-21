import fechtService from "../../../helpers/fetchService.js";

const getUsers = async () => await fechtService({}, 'users', 'GET');

export default getUsers;