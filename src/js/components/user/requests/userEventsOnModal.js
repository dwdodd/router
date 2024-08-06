import phoneMask from "../../../helpers/phoneMask.js";
// import verifyAge from "../../../helpers/verifyAge.js";
import getProfiles from "../../profile/requests/getProfiles.js";

const getProfileForUser = async (tag, roleList, accordionCounter = '') => {
    let inputSelect = MyElement(tag);
    inputSelect.innerHTML = `<option value="">Cargando información...</option>`;

    if (localStorage.getItem('profiles')) {
        let lsd = JSON.parse(localStorage.getItem('profiles'));

        let options = `<option value="">Seleccionar perfil</option>`;

        lsd.forEach(el => options += `<option value="${el.id}">${el.profile}</option>`);

        inputSelect.innerHTML = options;
    }
    else {
        let profiles = await getProfiles();

        let options = `<option value="">Seleccionar perfil</option>`;

        profiles.result.data.forEach(el => options += `<option value="${el.id}">${el.profile}</option>`);

        inputSelect.innerHTML = options;

        localStorage.setItem('profiles', JSON.stringify(profiles.result.data));
        localStorage.setItem('profiles-temp', JSON.stringify(profiles.result.data));
    }

    inputSelect.addEventListener('change', async (e) => {
        // Obtener el índice del option seleccionado
        let selectedIndex = inputSelect.selectedIndex;

        // Obtener el texto del option seleccionado
        let selectedText = inputSelect.options[selectedIndex].text;

        if (MyElement('btn-enable-select').style.display == 'none' && e.target.value !== '') {
            MyElement('btn-enable-select').style.display = 'block';
        };

        if (!e.target.value) return MyElement(roleList).innerHTML = '';

        if (localStorage.getItem('profiles')) {
            let lsd = JSON.parse(localStorage.getItem('profiles'));
            let filteredData = lsd.filter(item => item.id != e.target.value);
            localStorage.setItem('profiles', JSON.stringify(filteredData));
        }

        if (selectedText !== "") {
            inputSelect.disabled = true;
        }

        MyElement(roleList).innerHTML = `
        <div class="container mx-auto">
            <div class="border border-gray-300 rounded mb-2">
                <div class="border border-gray-300 rounded mb-2">
                    <button class="accordion-header w-full text-left p-1 bg-gray-200 text-gray-800 focus:outline-none" id="accordeon-selected-${e.target.value}">
                        Roles afiliados al perfil: ${selectedText}
                    </button>
                    <div class="accordion-content bg-white">
                        <p>This is the content of the first accordion item. It is hidden by default and shown when the header is clicked.</p>
                    </div>
                </div>
            </div>
        </div>`;

        MyElement('accordeon-selected-'+e.target.value).addEventListener('click', (e) => {
            const accordionContent = e.target.nextElementSibling;

            e.target.classList.toggle('active');

            if (e.target.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = 0;
            }
        });
    });

    MyElement('btn-enable-select').addEventListener('click', () => {
        MyElement('btn-enable-select').style.display = 'none';
        MyElement('role-list').innerHTML = '';
        MyElement('others-profiles').innerHTML = '';
        inputSelect.disabled = false;

        let po = JSON.parse(localStorage.getItem('profiles-temp'));
        localStorage.setItem('profiles', JSON.stringify(po));

        let op = JSON.parse(localStorage.getItem('profiles'));
        let options = `<option value="">Seleccionar perfil</option>`;

        op.forEach(el => options += `<option value="${el.id}">${el.profile}</option>`);

        MyElement('profile').innerHTML = options;
    });

    return;
};

const otherPhone = () => {
    MyElement('other-phone').addEventListener('click', function (e) {
        // Obtener todos los nuevos teléfonos agregados
        let newPhones = document.querySelectorAll('.phones [name="phone[]"]');
        let newPhonesTypes = document.querySelectorAll('.phones [name="phonetype[]"]');
        let valid = true;

        // Verificar que todos los campos tengan información
        newPhones.forEach(phone => {
            if (phone.value.trim() === '') {
                valid = false;
            }
        });
        newPhonesTypes.forEach(phoneType => {
            if (phoneType.value.trim() === '') {
                valid = false;
            }
        });

        // Mostrar mensaje de error si no todos los campos están completos
        if (!valid) {
            MyElement('error-message-phone-empty').style.display = 'block';
            e.preventDefault(); // Evitar que se agreguen nuevos campos si no están completos
            return;
        }
        else {
            MyElement('error-message-phone-empty').style.display = 'none';
        }

        // Crear un nuevo elemento div para el teléfono
        let newPhoneDiv = document.createElement('div');
        newPhoneDiv.className = 'phones col-span-1 md:col-span-2 lg:col-span-3 text-left';

        // Construir el contenido HTML del nuevo teléfono
        newPhoneDiv.innerHTML = `
        <label for="phone" class="text-sm font-medium leading-6 text-gray-900">Teléfonos</label>
        <div class="flex items-center space-x-1">
            <div class="relative rounded-md shadow-sm flex items-center w-full">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span class="text-gray-500 sm:text-sm">
                    <i class="bi bi-telephone-fill"></i>
                    </span>
                </div>
                <input type="text" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 phone-mask" name="phone[]" placeholder="Ingresar teléfono o celular" />
            </div>
            <div class="relative rounded-md shadow-sm flex items-center space-x-1 w-full">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span class="text-gray-500 sm:text-sm">
                    <i class="bi bi-question-circle"></i>
                    </span>
                </div>
                <select class="block w-full rounded-md border-0 px-2 py-1.5 pl-7 pb-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="phonetype" name="phonetype[]" >
                    <option value="">Tipo de teléfono</option>
                    <option value="1">Personal</option>
                    <option value="2">Residencial</option>
                    <option value="3">Del trabajo</option>
                    <option value="4">Pariente</option>
                    <option value="5">Vecino</option>
                </select>
                <button class="bg-red-600 hover:bg-red-700 text-white rounded-md px-3.5 py-1.5 remove-phone">x</button>
            </div>
        </div>`;

        // Agregar el nuevo teléfono al contenedor
        MyElement('others-phones').prepend(newPhoneDiv);

        // Agregar evento de clic al botón de eliminar teléfono
        newPhoneDiv.querySelector('.remove-phone').addEventListener('click', function () {
            newPhoneDiv.remove();
        });

        phoneMask('phone-mask');
    });
}

const otherProfile = () => {
    let profileCounter = 0;
    MyElement('other-profile').addEventListener('click', function (e) {
        profileCounter++;
        // Obtener todos los nuevos teléfonos agregados
        let newProfile = document.querySelectorAll('.profiles [name="profile[]"]');
        let valid = true;

        console.log(newProfile)

        // Verificar que todos los campos tengan información
        newProfile.forEach(profile => {
            if (profile.value.trim() === '') {
                valid = false;
            }
        });

        // Mostrar mensaje de error si no todos los campos están completos
        if (!valid) {
            MyElement('error-message-profile-empty').style.display = 'block';
            e.preventDefault(); // Evitar que se agreguen nuevos campos si no están completos
            return;
        }
        else {
            MyElement('error-message-profile-empty').style.display = 'none';
        }

        // Crear un nuevo elemento div para el teléfono
        let newProfileDiv = document.createElement('div');
        newProfileDiv.className = 'col-span-1 md:col-span-2 lg:col-span-3 profiles';

        // Construir el contenido HTML del nuevo teléfono
        newProfileDiv.innerHTML = `        
        <div class="mt-1">
            <div class="relative rounded-md shadow-sm mb-1">
                <div class="flex items-center space-x-1">
                    <div class="relative flex-grow">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span class="text-gray-500 sm:text-sm">
                                <i class="bi bi-person-lines-fill"></i>
                            </span>
                        </div>
                        <select class="block w-full rounded-md border-0 px-2 py-1.5 pl-7 pb-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="profile[]" id="profile-clone-${profileCounter}"></select>
                    </div>
                    <button class="bg-red-600 hover:bg-red-700 text-white rounded-md px-3.5 py-1.5 remove-profile">x</button>
                </div>
            </div>
            <div class="col-span-1 md:col-span-2 lg:col-span-3">
                <div id="role-list-clone-${profileCounter}"></div>
            </div>
        </div>`;

        // Agregar el nuevo teléfono al contenedor
        MyElement('others-profiles').prepend(newProfileDiv);

        // Agregar evento de clic al botón de eliminar teléfono
        newProfileDiv.querySelector('.remove-profile').addEventListener('click', function () {
            newProfileDiv.remove();
        });

        getProfileForUser(`profile-clone-${profileCounter}`, `role-list-clone-${profileCounter}`, profileCounter);
    });
}

const day = (tag) => {
    let options = `<option value="">Día</option>`;

    for(let i = 1; i<= 31; i++){
        if(i<=9){ i = '0'+i; }
        options += `<option value="${i}">${i}</option>`;
    }

    MyElement(tag).innerHTML = options;
}

const month = (tag) => {
    let options = `<option value="">Mes</option>`;

    let months = ['', 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

    for(let i = 1; i<= 12; i++){
        if(i<=9){ i = '0'+i; }
        options += `<option value="${i}">${months[parseInt(i)]}</option>`;
    }

    MyElement(tag).innerHTML = options;
}

const year = (tag) => {
    let actualYear = new Date().getFullYear();
    let options = `<option value="">Año</option>`;

    for(let i = actualYear; i >= 1920; i--) options += `<option value="${i}">${i}</option>`;

    MyElement(tag).innerHTML = options;
}

const userEventsOnModal = async () => {
    getProfileForUser('profile', 'role-list');
    day('day');
    month('month');
    year('year');
    // verifyAge('birthday');
    phoneMask('phone-mask');
    otherPhone();
    otherProfile();
};

export default userEventsOnModal;