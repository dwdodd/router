const buttonSearchInput = (pathIdBtn, titlePathBtn, enable=true) => {
    let content = '';
    if(enable){
        content = `
        <div class="grid grid-cols-1 md:grid-cols-2 xs:gab-2 sm:gab-2 md:gab-4">
            <div class="order-1 md:order-1">
                <button class="bg-sky-800 hover:bg-sky-600 rounded-md p-1.5 xs:my-2 md:my-3 text-white" id="${pathIdBtn}">${titlePathBtn}</button>
            </div>
            <div class="order-2 md:order-2">
                <div class="flex items-center space-x-1">
                    <div class="input-container w-full">
                        <input type="text" id="search" class="p-1.5 xs:my-2 md:my-3 border shadow-md rounded w-full" placeholder="Ingresar búsqueda" />
                        <span class="clear-btn" id="clear-search" style="display:none;">&times;</span>
                    </div>
                    <button class="bi bi-search bg-sky-800 hover:bg-sky-600 rounded-md m-1 px-3 py-1.5 text-white" id="btn-search"></button>
                </div>
            </div>
        </div>`;
    }
    else{
        content = `<button class="bg-sky-800 hover:bg-sky-600 rounded-md p-1.5 my-3 text-white" id="${pathIdBtn}">${titlePathBtn}</button>`;
    }
    return content;
};

export default buttonSearchInput;