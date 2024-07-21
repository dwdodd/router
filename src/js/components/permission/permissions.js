import buttonSearchInput from "../../helpers/buttonSearchInput.js";
import breadcrumb from "../../layouts/breadcrumb.js";
import layout from "../../layouts/layout.js";


const permissions = () => {
    const content = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gab-4">
        <div class="text-2xl font-bold text-sky-900">Lista de permisos <i class="bi bi-person-lines-fill"></i></div>
        <div class="text-2xl md:mb-0 mb-4">${breadcrumb('permissions')}</div>
    </div>
    ${buttonSearchInput('add-permission', '+ Nuevo permiso')}
    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1 border mb-16">
        <div class="bg-white p-4 rounded shadow-md">
            <table class="border border-collapse table-auto w-full" id="tbl-order">
                <thead>
                    <tr>
                        <th class="bg-sky-700 border text-white tbl-profile-size-id col-index" data-col-index="0">#</th>
                        <th class="bg-sky-700 border text-white tbl-profile-size-name pl-5 col-index" data-col-index="1" style="text-align:left;">Permiso</th>
                        <th class="bg-sky-700 border text-white tbl-profile-size-action text-center">Acción</th>
                    </tr>
                </thead>
                <tbody id="content"></tbody>
            </table>
            <div id="footer"></div>
        </div>
    </div>`;

    return layout(content);
}

export default permissions;