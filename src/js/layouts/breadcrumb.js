const breadcrumb = (path) => {
    let ol = `<ol class="list-none p-0 inline-flex text-sm">`;
    let pages = {
        dashboard: 'dashboard',
        users: 'Usuarios',
        profiles: 'Perfiles',
        roles: 'Roles',
        permissions: 'Permisos'
    };

    const showBreadcrumbs = Object.fromEntries(
        Object.entries(pages).filter(([key, value]) => key !== path)
    );

    Object.keys(showBreadcrumbs).forEach((key, value) => {
        ol += `
        <li class="flex items-center">
            <a href="#" class="text-sky-900 hover:text-sky-800" id="${key != 'dashboard' ? 'dash-'+ key: key}">${pages[key]}</a>
            <svg class="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </li>`
    });

    ol += `
        <li class="flex items-center">
            <span class="text-gray-400">${pages[path]}</span>
            <svg class="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </li>
        <li class="flex items-center">
            <a href="#" class="text-sky-900 hover:text-sky-800" id="out">Salir</a>
        </li>
    </ol>`;
    return ol;
}
export default breadcrumb;