const customSwal = (icon, title, result, otherHtml=null, popupSize=null) => {
    return Swal.fire({
        icon,
        title,
        html: result + otherHtml,
        confirmButtonColor: "#2d72d2",
        showCancelButton: true,
        allowOutsideClick: false,
        cancelButtonText: "Cerrar",
        showConfirmButton: false,
        showCloseButton: true,
        customClass: {
            confirmButton: 'btn btn-sm',
            cancelButton: 'btn btn-sm',
            popup: popupSize
        }
    });
};

export default customSwal;