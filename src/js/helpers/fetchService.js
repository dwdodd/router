const UpToken = async (accessPoint, options) => {
    const updateResult = await fetch(`${accessPoint}up-token`, options);
    let upToken = JSON.parse(localStorage.getItem('ui'));
    let result = await updateResult.json();

    upToken.token = result.result.token;
    localStorage.setItem('ui', JSON.stringify(upToken));

    return result.message;
};

const fechtService = async (data, resource, method) => {
    try {
        if (!window.navigator.onLine) {
            Swal.fire({
                icon: "error",
                confirmButtonColor: "#2d72d2",
                title: 'No tienes conección a internet'
            });
            return {
                status: false,
                info: {
                    message: 'No tienes conección a internet'
                }
            }
        }

        let headers = '';
        if (JSON.parse(localStorage.getItem('ui'))) {
            let token = JSON.parse(localStorage.getItem('ui')).token;
            headers = { "Content-Type": "application/json", "Authorization": `Bearer ${token}` };
        }
        else {
            headers = { "Content-Type": "application/json" };
        }

        const accessPoint = 'http://127.0.0.1:3001/';
        let result = '';

        method = method.toUpperCase();

        if (method == 'GET') {
            let options = { method, headers };
            result = await fetch(`${accessPoint}${resource}`, options);
            if (result.status == 401){
                Swal.fire({
                    icon: "warning",
                    confirmButtonColor: "#2d72d2",
                    showCancelButton: true,
                    allowOutsideClick: false,
                    cancelButtonText: "Cancelar",
                    title: 'Token expirado',
                    html: 'Usted no ha interactuado con el sistema por más de<br><b>1 hora</b>, por favor presionar ok para recibir un nuevo token, de lo contrario vuelva a iniciar sesión.'
                })
                .then(async (response) => {
                    if (response.isConfirmed) {
                        const msg = await UpToken(accessPoint, options);
                        Swal.fire({
                            title: msg,
                            icon: "success",
                            confirmButtonColor: "#2d72d2",
                        });
                        setTimeout(() => location.reload(), 1500);
                    };
                });
                return result;
            }

            let thisResult = await result.json();
            if(thisResult.token){
                let upToken = JSON.parse(localStorage.getItem('ui'));
                upToken.token = thisResult.token;
                localStorage.setItem('ui', JSON.stringify(upToken));
            }
            return thisResult;
        };

        let body = data && JSON.stringify(data);

        result = await fetch(`${accessPoint}${resource}`, { method, headers, body });
        
        if (result.status == 401){
            Swal.fire({
                icon: "warning",
                confirmButtonColor: "#2d72d2",
                showCancelButton: true,
                allowOutsideClick: false,
                cancelButtonText: "Cancelar",
                title: 'Token expirado',
                html: 'Usted no ha interactuado con el sistema por más de<br><b>1 hora</b>, por favor presionar ok para recibir un nuevo token, de lo contrario vuelva a iniciar sesión.'
            })
            .then(async (response) => {
                if (response.isConfirmed) {
                    let options = { method, headers };
                    const msg = await UpToken(accessPoint, options);
                    Swal.fire({
                        title: msg,
                        icon: "success",
                        confirmButtonColor: "#2d72d2",
                    });
                    setTimeout(() => location.reload(), 1500);
                };
            });
            return result;
        }

        let thisResult = await result.json();

        if(thisResult.token){
            let upToken = JSON.parse(localStorage.getItem('ui'));
            upToken.token = thisResult.token;
            localStorage.setItem('ui', JSON.stringify(upToken));
        }
        return thisResult;
    } catch (err) {
        return {
            status: false,
            info: {
                message: err
            }
        }
    }
};
export default fechtService;