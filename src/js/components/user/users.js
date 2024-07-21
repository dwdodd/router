import buttonSearchInput from "../../helpers/buttonSearchInput.js";
import breadcrumb from "../../layouts/breadcrumb.js";
import layout from "../../layouts/layout.js";

const users = async () => {
    const content = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gab-4">
        <div class="text-2xl font-bold text-sky-900">Lista de usuarios <i class="bi bi-person-lines-fill"></i></div>
        <div class="text-2xl md:mb-0 mb-4">${breadcrumb('users')}</div>
    </div>
    ${buttonSearchInput('add-user', '+ Nuevo usuario')}
    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1 border mb-16">
        <div class="bg-white p-4 rounded shadow-md">
            <div class="container mx-auto">
                <div class="overflow-x-auto">
                    <table class="min-w-full border border-collapse table-auto" id="tbl-order">
                        <thead>
                            <tr>
                                <th class="p-2 bg-sky-700 border text-white col-index" data-col-index="0">#</th>
                                <th class="p-2 bg-sky-700 border text-white col-index" data-col-index="1">Nombre</th>
                                <th class="p-2 bg-sky-700 border text-white col-index" data-col-index="2">Apellido</th>
                                <th class="p-2 bg-sky-700 border text-white col-index" data-col-index="3">Usuario</th>
                                <th class="p-2 bg-sky-700 border text-white col-index" data-col-index="4">Email</th>
                                <th class="p-2 bg-sky-700 border text-white col-index" data-col-index="5">Perfiles</th>
                                <th class="p-2 bg-sky-700 border text-white">Acción</th>
                            </tr>
                        </thead>
                        <tbody id="content"></tbody>
                    </table>
                    <div id="footer"></div>
                </div>
            </div>
        </div>
    </div>`;

    return layout(content);
}

export default users;