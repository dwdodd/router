import profileList from "../components/profile/requests/profileList.js";
import addUserEvents from "../components/user/requests/addUserEvents.js";
import userList from "../components/user/requests/userList.js";

const requests = async (element) => {
    switch (element) {
        case 'users': userList(); break;
        case 'add-user': addUserEvents(); break;
        case 'profiles': profileList(); break;
    }
};

export default requests;