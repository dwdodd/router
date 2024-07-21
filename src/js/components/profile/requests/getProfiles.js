import fechtService from "../../../helpers/fetchService.js";

const getProfiles = async () => await fechtService({}, 'profiles', 'GET');

export default getProfiles;