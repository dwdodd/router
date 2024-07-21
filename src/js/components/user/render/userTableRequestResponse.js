const userTableRequestResponse = (el) => {
    return `<tr>
        <td class="text-center border">${el.userid}</td>
        <td class="text-center border">${el.names}</td>
        <td class="text-center border">${el.surnames}</td>
        <td class="text-center border">${el.username}</td>
        <td class="text-center border">${el.email}</td>
        <td class="text-center border">${el.profiles}</td>
        <td class="text-center border">
            <button
                type="button"
                class="bg-sky-800 hover:bg-sky-700 rounded-md px-2 py-1 text-white m-1 edit-user bi bi-pencil-fill"
                data-userid="${el.userid}"
                data-names="${el.names}"
                data-surnames="${el.surnames}"
                data-username="${el.username}"
                data-email="${el.email}"
                data-profiles="${el.profiles}"
            >  
            </button>
            <button
                type="button"
                class="bg-sky-800 hover:bg-sky-700 rounded-md px-2 py-1 text-white mb-1 block-user bi bi-ban"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                data-bs-title="Inactivar usuario ${el.username}"
                data-userid="${el.userid}"
            >  
            </button>
        </td>
    </tr>`;
};

export default userTableRequestResponse;