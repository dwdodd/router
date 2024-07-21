import customSwal from "../../../helpers/customSwal.js";
import fechtService from "../../../helpers/fetchService.js";

const addUser = async (validateEmail, inputValidation) => {
    let names = document.getElementById('names');
    let day = document.getElementById('day');
    let month = document.getElementById('month');
    let year = document.getElementById('year');
    let gender = document.getElementById('gender');
    let idcard = document.getElementById('idcard');
    let bloodtype = document.getElementById('bloodtype');
    let phone = document.getElementById('phone');
    let phonetype = document.getElementById('phonetype');
    let email = document.getElementById('email');
    let username = document.getElementById('username');
    let profile = document.getElementById('profile');

    let phoneInputs = document.getElementsByName('phone[]');
    let phoneValues = [];
    
    phoneInputs.forEach(function(input) {
        phoneValues.push(input.value);
    });

    let phoneTypeInputs = document.getElementsByName('phonetype[]');
    let phoneTypeValues = [];
    
    phoneTypeInputs.forEach(function(input) {
        phoneTypeValues.push(input.value);
    });

    let profileInputs = document.getElementsByName('profile[]');
    let profileValues = [];
    
    profileInputs.forEach(function(input) {
        profileValues.push(input.value);
    });

    // Filtrar para eliminar las posiciones vacias y duplicados
    const filterThisArray = (filteredArray) => {
        let filtered = filteredArray.filter(function(value) {
            return value !== undefined && value !== null && value !== '';
        });
        return [...new Set(filtered)];
    }

    let phones = [];
    let phonesFiltered = filterThisArray(phoneValues);
    let phonesTypesFiltered = filterThisArray(phoneTypeValues);

    for (let i = 0; i < phonesFiltered.length; i++) {
        phones.push({
            phone_type_id: phonesTypesFiltered[i],
            phone: phonesFiltered[i]
        });
    }

    let profiles = [];
    let profilesFiltered = filterThisArray(profileValues);

    for (let i = 0; i < profilesFiltered.length; i++) {
        profiles.push({
            profile_id: profilesFiltered[i]
        });
    }

    if (!names.value){
        names.focus();
        return inputValidation('names-error-message', 'El nombre es obligatorio');
    }

    if (!surnames.value){
        surnames.focus();
        return inputValidation('surnames-error-message', 'El apellido es obligatorio');
    }

    if (!day.value){
        day.focus();
        return inputValidation('day-error-message', 'EL día de nacimiento es obligatorio');
    }

    if (!month.value){
        month.focus();
        return inputValidation('month-error-message', 'El mes de nacimiento es obligatorio');
    }

    if (!year.value){
        year.focus();
        return inputValidation('year-error-message', 'El año de nacimiento es obligatorio');
    }

    let birthday = year.value +'-'+ month.value +'-'+ day.value;

    if (!gender.value){
        gender.focus();
        return inputValidation('gender-error-message', 'Debe seleccionar el sexo');
    }

    if (!idcard.value){
        idcard.focus();
        return inputValidation('idcard-error-message', 'Ingresar cédula o pasaporte');
    }

    if (!bloodtype.value){
        bloodtype.focus();
        return inputValidation('bloodtype-error-message', 'Debe seleccionar el tipo de sangre');
    }

    if (!phone.value){
        phone.focus();
        return inputValidation('phone-error-message', 'Debe ingresar un teléfono fijo o celular');
    }

    if (!phonetype.value){
        phonetype.focus();
        return inputValidation('phonetype-error-message', 'Debe seleccionar el tipo de teléfono');
    }

    if (!username.value){
        username.focus();
        return inputValidation('user-error-message','El nombre de usuario es obligatorio');
    }

    if (!email.value){
        email.focus();
        return inputValidation('email-error-message','El email es obligatorio');
    }

    if (!validateEmail(email.value)){
        email.focus();
        return inputValidation('El email ingresado no es válido');
    }

    if (!profile.value){
        profile.focus();
        return inputValidation('profile-error-message','El perfil principal es obligatorio');
    }

    const data = {
        names: names.value,
        surnames: surnames.value,
        birthday,
        idcard: idcard.value,
        gender: gender.value,
        bloodtype: bloodtype.value,
        phones,
        username: username.value,
        email: email.value,
        profiles
    };

    const result = await fechtService(data, 'add-user', 'POST');

    if (!result.status || result.http_code === 400) return customSwal(
        'info',
        'Atención!',
        result.message,
        `<div class="mt-3 bg-red-300 text-black p-3 rounded-lg">
            Error al tratar de registrar los datos personales
        </div>`
    );

    Swal.fire({
        position: "top-end",
        timer: 1500,
        icon: "success",
        showConfirmButton: false,
        title: "Persona registrada exitosamente."
    });
}

export  default addUser;