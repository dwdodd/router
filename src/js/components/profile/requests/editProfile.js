const editProfile = async () => {
    let profileValue = document.getElementById('profile_name').value;
    // const result = await fechtService(data, 'add-user', 'POST');

    // if (!result.status) return customSwal(
    //     'info',
    //     'Atención!',
    //     result.message,
    //     `<div class="mt-3 alert alert-danger" role="alert">
    //         <b>Error al tratar de registrar el usuario</b>
    //     </div>`
    // );

    // if (result.http_code === 400) return customSwal(
    //     'info',
    //     'Atención!',
    //     result.message,
    //     `<div class="mt-3 alert alert-danger" role="alert">
    //         <b>Error al tratar de registrar el usuario</b>
    //     </div>`
    // );

    Swal.fire({
        position: "top-end",
        timer: 3000,
        icon: "success",
        showConfirmButton: false,
        html: `<h4>Perfil <b>(${profileValue})</b> actualizado exitosamente.</h4>`,
    });
}


export {
    editProfile
}