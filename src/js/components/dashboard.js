import layout from "../layouts/layout.js";

const dashboard = () => {
    let pages = [
        {
            btn: 'dash-citizens',
            label: 'Ciudadanos',
            icon: 'bi bi-person-standing',
            icon2: '<i class="bi bi-person-standing-dress text-4xl -ml-5"></i>'
        },
        {
            btn: 'dash-users',
            label: 'Usuarios',
            icon: 'bi bi-people-fill'
        },
        {
            btn: 'dash-profiles',
            label: 'Perfiles',
            icon: 'bi bi-person-lines-fill'
        },
        {
            btn: 'dash-roles',
            label: 'Roles',
            icon: 'bi bi-person-rolodex'
        },
        {
            btn: 'dash-permissions',
            label: 'Permisos',
            icon: 'bi bi-key-fill'
        },
    ];

    let modules = '';

    pages.forEach((el) => {
        modules += `
        <button
            id="${el.btn}"
            type="button"
            class="m-1 bg-white p-10 rounded shadow-md border"
        >
            <i id="${el.btn}" class="${el.icon} text-4xl"></i>
            ${el.icon2?el.icon2:''}
            <p id="${el.btn}" class="mt-3.5; text-xl">${el.label}</p>
        </button>`
    });

    const content = `
    <h1 class="text-3xl font-bold  text-sky-900 mb-4">Dashboard</h1>
    <p class="text-gray-700 mb-4">Servicios disponibles.</p>
    <div class="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gab-2 mb-12 text-sky-900">
        ${modules}
    </div>`;

    return layout(content);
}

export default dashboard;