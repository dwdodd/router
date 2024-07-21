import { editProfileForm } from "../components/profile/profileForms.js";
import { addUserForm } from "../components/user/userForms.js";
import { didOpen, preConfirm } from "./share/swalAsynAction.js";

const swalModal = (formType, title, html, popupSize='') => {
    return Swal.fire({
        title,
        html,
        confirmButtonText: 'Guardar',
        showCancelButton: true,
        allowOutsideClick: false,
        cancelButtonText: "Cancelar",
        showConfirmButton: true,
        showCloseButton: true,
        buttonsStyling: false,
        customClass: {
            backdrop: 'swal2-backdrop-custom',
            popup: popupSize,
            confirmButton: 'bg-sky-800 hover:bg-sky-700 rounded-md m-1 p-1.5 text-white',
            cancelButton: 'bg-gray-600 hover:bg-gray-500 rounded-md m-1 p-1.5 text-white',
        },
        showClass: {
            popup: 'animate__animated animate__backInDown animate__faster'
        },
        hideClass: {
            popup: 'animate__animated animate__backOutUp animate__faster'
        },
        didOpen: async () => await didOpen(formType),
        preConfirm: async () => await preConfirm(formType)
    }).then( event => {
        if (event.isConfirmed) {
            localStorage.removeItem('profiles');
            localStorage.removeItem('profiles-temp');
            console.log('El popup se ha cerrado al confirmar');
        } else if (event.dismiss === Swal.DismissReason.cancel) {
            localStorage.removeItem('profiles');
            console.log('El popup se ha cerrado al cancelar');
            localStorage.removeItem('profiles-temp');
        } else {
            localStorage.removeItem('profiles');
            localStorage.removeItem('profiles-temp');
            console.log('El popup se ha cerrado de otra manera');
        }
    });
}

const executFormAction = (formType, params='') => {
    switch (formType) {
        case 'add-user': swalModal(formType, 'Datos del usuario', addUserForm, 'popup-xl'); break;
        case 'add-profile': swalModal(formType, 'Nuevo perfil', 'addProfileRequest'); break;
        case 'edit-profile': swalModal(formType, 'Editar perfil', editProfileForm(params)); break;
    }
}

export default executFormAction;