import buttonSearchInput from "../../../helpers/buttonSearchInput.js";
import layout from "../../../layouts/layout.js";

const addUser = () => {
    let content = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gab-4">
        <div class="text-2xl font-bold text-sky-900">Nuevo usuario <i class="bi bi-person-fill-add"></i></div>
    </div>
    ${buttonSearchInput('dash-users', 'Lista de usuarios', false)}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 bg-white p-4 rounded shadow-md">
        <div class="mt-1">
            <label for="names" class="block text-sm font-medium leading-6 text-gray-900 text-left">Nombres</label>
            <div class="relative rounded-md shadow-sm">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span class="text-gray-500 sm:text-sm">
                        <i class="bi bi-alphabet"></i>
                    </span>
                </div>
                <input type="text" id="names" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Nombres" />
            </div>
            <span class="text-red-500" id="names-error-message"></span>
        </div>
        <div class="mt-1">
            <label for="surnames" class="block text-sm font-medium leading-6 text-gray-900 text-left">Apellidos</label>
            <div class="relative rounded-md shadow-sm">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span class="text-gray-500 sm:text-sm">
                        <i class="bi bi-alphabet"></i>
                    </span>
                </div>
                <input type="text" id="surnames" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Apellidos" />
            </div>
            <span class="pt-2 text-red-500 text-sm" id="surnames-error-message"></span>
        </div>
        <div class="mt-1 grid gap-2 grid-cols-3">
            <div>
                <label for="day" class="block text-sm font-medium leading-6 text-gray-900 text-left">Día</label>
                <div class="relative rounded-md shadow-sm">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span class="text-gray-500 sm:text-sm">
                            <i class="bi bi-calendar3"></i>
                        </span>
                    </div>
                    <select type="select" id="day" class="block w-full rounded-md border-0 px-2 py-1.5 pl-7 pb-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></select>
                </div>
                <span class="pt-2 text-red-500 text-sm" id="day-error-message"></span>
            </div>
            <div>
                <label for="month" class="block text-sm font-medium leading-6 text-gray-900 text-left">Mes</label>
                <div class="relative rounded-md shadow-sm">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span class="text-gray-500 sm:text-sm">
                            <i class="bi bi-calendar3"></i>
                        </span>
                    </div>
                    <select type="select" id="month" class="block w-full rounded-md border-0 px-2 py-1.5 pl-7 pb-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></select>
                </div>
                <span class="pt-2 text-red-500 text-sm" id="month-error-message"></span>
            </div>
            <div>
                <label for="year" class="block text-sm font-medium leading-6 text-gray-900 text-left">Año</label>
                <div class="relative rounded-md shadow-sm">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span class="text-gray-500 sm:text-sm">
                            <i class="bi bi-calendar3"></i>
                        </span>
                    </div>
                    <select type="select" id="year" class="block w-full rounded-md border-0 px-2 py-1.5 pl-7 pb-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></select>
                </div>
                <span class="pt-2 text-red-500 text-sm" id="year-error-message"></span>
            </div>
        </div>
        <div id="error-message-date" style="color: red; display: none; font-size: 12px;">Debe ser mayor de edad (18+ años).</div>
        <div class="mt-1 mb-2">           
            <label for="gender" class="block text-sm font-medium leading-6 text-gray-900 text-left">Sexo</label>
            <div class="relative rounded-md shadow-sm">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span class="text-gray-500 sm:text-sm">
                        <i class="bi bi-gender-trans"></i>
                    </span>
                </div>
                <select type="text" class="block w-full rounded-md border-0 px-2 py-1.5 pl-7 pb-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="gender">
                    <option value="">Sexo</option>
                    <option value="1">Femenino</option>
                    <option value="2">Masculino</option>
                </select>
            </div>
            <span class="pt-2 text-red-500 text-sm" id="gender-error-message"></span>
        </div>
        <div class="mt-1">
            <label for="idcard" class="block text-sm font-medium leading-6 text-gray-900 text-left">Cédula o Pasaporte</label>
            <div class="relative rounded-md shadow-sm">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span class="text-gray-500 sm:text-sm">
                        <i class="bi bi-person-vcard"></i>
                    </span>
                </div>
                <input type="text" id="idcard" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Cédula o Pasaporte" />
            </div>
            <span class="pt-2 text-red-500 text-sm" id="idcard-error-message"></span>
        </div>
        <div class="mt-1">
            <label for="bloodtype" class="block text-sm font-medium leading-6 text-gray-900 text-left">Tipo de sangre</label>
            <div class="relative rounded-md shadow-sm">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span class="text-gray-500 sm:text-sm">
                        <i class="bi bi-droplet-fill"></i>
                    </span>
                </div>
                <select type="text" class="block w-full rounded-md border-0 px-2 py-1.5 pl-7 pb-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="bloodtype">
                    <option value="">Tipo de sangre</option>
                    <option value="1">A+</option>
                    <option value="2">A-</option>
                    <option value="3">B+</option>
                    <option value="4">B-</option>
                    <option value="5">AB+</option>
                    <option value="6">AB-</option>
                    <option value="7">O+</option>
                    <option value="8">O-</option>
                    <option value="9">N/S</option>
                </select>
            </div>
            <span class="pt-2 text-red-500 text-sm" id="bloodtype-error-message"></span>
        </div>
        <div class="phones col-span-1 md:col-span-2 lg:col-span-3 text-left p-0">
            <label for="phone" class="text-sm font-medium leading-6 text-gray-900">Teléfonos</label>
            <div class="flex items-center space-x-1">
                <div class="relative rounded-md shadow-sm flex items-center w-full">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span class="text-gray-500 sm:text-sm">
                        <i class="bi bi-telephone-fill"></i>
                        </span>
                    </div>
                    <input type="text" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 phone-mask" id="phone" name="phone[]" placeholder="Ingresar teléfono o celular" />
                </div>
                <div class="relative rounded-md shadow-sm flex items-center space-x-1 w-full">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span class="text-gray-500 sm:text-sm">
                        <i class="bi bi-question-circle"></i>
                        </span>
                    </div>
                    <select class="block w-full rounded-md border-0 px-2 py-1.5 pl-7 pb-2 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="phonetype" name="phonetype[]" >
                        <option value="">Tipo de teléfono</option>
                        <option value="1">Personal</option>
                        <option value="2">Residencial</option>
                        <option value="3">Del trabajo</option>
                        <option value="4">Pariente</option>
                        <option value="5">Vecino</option>
                    </select>
                    <button class="bg-sky-800 hover:bg-sky-700 text-white rounded-md px-3 py-1.5" id="other-phone">+</button>
                </div>
            </div>
            <span class="pt-2 text-red-500 text-sm" id="phone-error-message"></span>
            <span class="pt-2 text-red-500 text-sm" id="phonetype-error-message"></span>
            <div id="error-message-phone" class="text-red-500 text-xs mt-2" style="display: none;">Si es un número de celular debe iniciar con (6).</div>
        </div>
        <div
            id="others-phones"
            class="col-span-1 md:col-span-2 lg:col-span-3"
        ></div>
        <div
            id="error-message-phone-empty"
            class="col-span-1 md:col-span-2 lg:col-span-3"
            style="color: red; display: none; font-size: 12px;">Los siguientes campos son obligatorios. (Teléfono y tipo de teléfono)
        </div>
        <div class="mt-1">
            <label for="username" class="block text-sm font-medium leading-6 text-gray-900 text-left">Usuario</label>
            <div class="relative rounded-md shadow-sm">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span class="text-gray-500 sm:text-sm">
                        <i class="bi bi-person-fill"></i>
                    </span>
                </div>
                <input type="text" id="username" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Usuario" />
            </div>
            <span class="pt-2 text-red-500 text-sm" id="user-error-message"></span>
        </div>
        <div class="mt-1">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900 text-left">Email</label>
            <div class="relative rounded-md shadow-sm">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span class="text-gray-500 sm:text-sm">@</span>
                </div>
                <input type="text" id="email" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email">
            </div>
            <span class="pt-2 text-red-500 text-sm" id="email-error-message"></span>
        </div>
        <div class="profiles text-left">
            <label for="profile" class="block text-sm font-medium leading-6 text-gray-900">Perfiles</label>
            <div class="mt-1">
                <div class="relative rounded-md shadow-sm">
                    <div class="flex items-center space-x-1">
                        <div class="relative flex-grow">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <span class="text-gray-500 sm:text-sm">
                                    <i class="bi bi-person-lines-fill"></i>
                                </span>
                            </div>
                            <select class="block w-full rounded-md border-0 px-2 py-1.5 pl-7 pb-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="profile[]" id="profile"></select>
                        </div>
                        <button class="bg-sky-800 hover:bg-sky-700 text-white rounded-md px-3 py-1.5" id="other-profile">+</button>
                        <button class="bg-red-600 hover:bg-red-700 text-white rounded-md px-3.5 py-1.5" id="btn-enable-select" style="display:none;">x</button>
                    </div>
                </div>
            </div>  
            <span class="pt-2 text-red-500 text-sm" id="profile-error-message"></span>    
        </div>
        <div class="col-span-1 md:col-span-2 lg:col-span-3" id="role-list"></div>
        <div class="col-span-1 md:col-span-2 lg:col-span-3" id="others-profiles"></div>
        <div class="col-span-1 md:col-span-2 lg:col-span-3 text-red-500 text-sm" id="error-message-profile-empty" style="display: none;">Para añadir otro campo de selección debe seleccionar un perfil</div>
        <div class="col-span-1 md:col-span-2 lg:col-span-3">
            <button class="p-2 bg-sky-900 hover:bg-sky-700 rounded-md text-white" id="save-add-user">Guardar</button>
        </div>
    </div>`;

    return layout(content);
}

export default addUser;