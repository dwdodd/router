const select2 = async (tagSelected) => {
    document.getElementById(tagSelected).innerHTML = `
    <div class="select2-container">
        <div id="select2-selected" class="select2-selected"></div>
        <div class="input-group flex-nowrap mb-2">
            <span class="input-group-text" id="addon-wrapping">
                <i class="bi bi-person-lines-fill"></i>
            </span>
            <input type="text" id="select2-search" class="form-control" placeholder="Buscar...">
        </div>
        <ul id="select2-options">
            <li data-value="1">Opción 1</li>
            <li data-value="2">Opción 2</li>
            <li data-value="3">Opción 3</li>
        </ul>
    </div>`;

    const searchInput = document.getElementById('select2-search');
    const optionsList = document.getElementById('select2-options');
    const selectedContainer = document.getElementById('select2-selected');
    const options = optionsList.getElementsByTagName('li');
    let selectedValues = [];

    // Mostrar las opciones cuando se enfoca el input
    searchInput.addEventListener('focus', function () {
        optionsList.style.display = 'block';
    });

    // Ocultar las opciones cuando se pierde el foco, si no se hace clic en una opción
    searchInput.addEventListener('blur', function () {
        setTimeout(function () {
            optionsList.style.display = 'none';
        }, 200);  // Retraso para permitir la selección de opciones
    });

    // Filtrar opciones basadas en el input
    searchInput.addEventListener('input', function () {
        const filter = searchInput.value.toLowerCase();
        for (let i = 0; i < options.length; i++) {
            const optionText = options[i].innerText.toLowerCase();
            if (optionText.includes(filter)) {
                options[i].style.display = '';
            } else {
                options[i].style.display = 'none';
            }
        }
    });

    // Manejar la selección de una opción
    for (let i = 0; i < options.length; i++) {
        options[i].addEventListener('click', function () {
            const value = options[i].getAttribute('data-value');
            const text = options[i].innerText;
            if (!selectedValues.includes(value)) {
                selectedValues.push(value);
                const selectedItem = document.createElement('div');
                selectedItem.classList.add('select2-selected-item');
                selectedItem.innerHTML = `${text} <span data-value="${value}">&times;</span>`;
                selectedContainer.appendChild(selectedItem);
                options[i].style.display = 'none'; // Ocultar opción seleccionada
                searchInput.value = '';
            }
        });
    }

    // Manejar la eliminación de una opción seleccionada
    selectedContainer.addEventListener('click', function (event) {
        if (event.target.tagName === 'SPAN') {
            const value = event.target.getAttribute('data-value');
            selectedValues = selectedValues.filter(val => val !== value);
            const option = [...options].find(opt => opt.getAttribute('data-value') === value);
            if (option) {
                option.style.display = ''; // Mostrar opción de nuevo
            }
            event.target.parentElement.remove(); // Eliminar el elemento del contenedor de seleccionados
        }
    });
}

export default select2;