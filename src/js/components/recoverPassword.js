const recoverPassword = () => {
    localStorage.removeItem('ui');
    return `
    <form>
    <div class="flex items-center justify-center min-h-screen bg-slate-300">
        <div class="w-full max-w-md p-4">
            <div class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                <h2 class="text-center text-2xl font-bold mb-6">Recuperar contraseña</h2>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="user">
                        Correo electrónico
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="user" type="text" placeholder="Ingresar correo electrónico" />
                    <div class="mt-1 mb-0 italic text-red-500 text-sm" id="user-error-message"></div>
                </div>
                <div class="flex items-center justify-between">
                    <button class="w-40 bg-sky-900 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" id="btn-recover-password">
                        Enviar
                    </button>
                    
                    <a class="inline-block align-baseline font-bold text-sm text-sky-900 hover:text-sky-700 ml-2" href="#" id="out">
                        Iniciar sesión
                    </a>
                </div>
                <div class="mt-4 mb-0 text-center text-red-500 text-md font-bold" id="send-error-message"></div>
            </div>
            <p class="text-center text-gray-500 text-xs">
                &copy;2024 Servicio de Soluciones Web. Todos los derechos reservados.
            </p>
        </div>
    </div>
    </form>`;
};

export default recoverPassword;