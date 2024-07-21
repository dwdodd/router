let addProfileForm = `
<div class="row container">
    <div class="col-md-6">
        <div class="input-group flex-nowrap mt-1 mb-2">
            <span class="input-group-text" id="addon-wrapping">
                <i class="bi bi-alphabet"></i>
            </span>
            <input type="text" class="form-control" id="complete-name" placeholder="Nombre completo" />
        </div>
    </div>
    <div class="col-md-6">
        <div class="input-group flex-nowrap mt-1 mb-2">
            <span class="input-group-text" id="addon-wrapping">
                <i class="bi bi-person-fill"></i>
            </span>
            <input type="text" class="form-control" id="user-name" placeholder="Usuario" />
        </div>
    </div>
    <div class="col-md-6">
        <div class="input-group flex-nowrap mt-1 mb-2">
            <span class="input-group-text" id="addon-wrapping">@</span>
            <input type="email" class="form-control" id="email" placeholder="Email" />
        </div>
    </div>
    <div class="col-md-6">
        <div class="input-group flex-nowrap mb-2">
            <span class="input-group-text" id="addon-wrapping">
                <i class="bi bi-person-lines-fill"></i>
            </span>
            <select class="form-control form-control-sm" id="profile"></select>
        </div>
    </div>
    <div class="col-md-12">
        <div id="role-list"></div>
    </div>
</div>`;

let editProfileForm = (data) => {
    let userInfo = {
        id: data.target.dataset.id,
        profile: data.target.dataset.profile
    }
    return `<div class="row container">
        <div class="col-md-12">
            <div class="input-group flex-nowrap mt-1 mb-2">
                <span class="input-group-text" id="addon-wrapping">
                    <i class="bi bi-person-lines-fill"></i>
                </span>
                <input type="text" class="form-control" id="profile_name" placeholder="Perfil" value="${userInfo.profile}" />
                <input type="hidden" id="profile_id" value="${userInfo.id}" />
            </div>
        </div>
    </div>`;
}

let tblProfileResponse = (el) => `<tr>
    <td class="text-center border">${el.id}</td>
    <td class="border pl-5">${el.profile}</td>
    <td class="text-center border">
        <button
            type="button"
            class="bg-sky-800 hover:bg-sky-700 rounded-md px-2 py-1 text-white bi bi-pencil-fill edit-profile"
            data-id="${el.id}"
            data-profile="${el.profile}"
        >
        </button>
        <button
            type="button"
            class="bg-sky-800 hover:bg-sky-700 rounded-md px-2 py-1 text-white bi bi-ban block-profile"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-title="Inactivar perfil ${el.profile}"
            data-id="${el.id}"
        >
        </button>
    </td>
</tr>`;

export {
    addProfileForm,
    editProfileForm,
    tblProfileResponse
}