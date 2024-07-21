import { editProfile, addProfile } from "../../components/profile/profileMaintenance.js";
import { addUser, userEventsOnModal } from "../../components/user/userMaintenance.js";

const inputValidation = (text) => {
    Swal.showValidationMessage(text);
    setTimeout(() => Swal.resetValidationMessage(), 3000);
}

const validateEmail = (email)  => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

const didOpen = async (formType) => {
    switch (formType) {
        case 'add-user': await userEventsOnModal(); break;
    }
}

const preConfirm = async (formType) => {
    switch (formType) {
        case 'add-user': await addUser(validateEmail, inputValidation); break;
        case 'add-profile': await addProfile(); break;
        case 'edit-profile': await editProfile(); break;
    }
}

export { didOpen, preConfirm };