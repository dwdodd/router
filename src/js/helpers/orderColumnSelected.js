const sortState = {}; // Objeto para mantener el estado de ordenación de cada columna

const orderColumnSelected = async (columnIndex) => {
    // Inicializar sortOrder para la columna si no existe en sortState
    if (!sortState[columnIndex]) {
        sortState[columnIndex] = 1; // Orden ascendente inicialmente
    }

    const table = MyElement("tbl-order");

    // Verificar si la tabla existe
    if (!table) {
        console.error("La tabla con id 'tbl-order' no se encontró");
        return;
    }

    // Obtener las filas de la tabla
    let rows;
    if (table.tBodies.length > 0) {
        // Si hay un tbody, usar sus filas
        rows = Array.from(table.tBodies[0].rows);
    } else {
        // Si no hay tbody, usar todas las filas excepto la primera (asumiendo que es el encabezado)
        rows = Array.from(table.rows).slice(1);
    }

    // Verificar si hay filas para ordenar
    if (rows.length === 0) {
        console.warn("No hay filas para ordenar en la tabla");
        return;
    }

    rows.sort((a, b) => {
        const aText = a.cells[columnIndex].innerText.trim();
        const bText = b.cells[columnIndex].innerText.trim();
        
        if (!isNaN(aText) && !isNaN(bText)) {
            return sortState[columnIndex] * (parseFloat(aText) - parseFloat(bText));
        }
        return sortState[columnIndex] * aText.localeCompare(bText);
    });

    sortState[columnIndex] = -sortState[columnIndex]; // Alternar orden

    // Reorganizar las filas en la tabla
    if (table.tBodies.length > 0) {
        rows.forEach(row => table.tBodies[0].appendChild(row));
    } else {
        rows.forEach(row => table.appendChild(row));
    }

    // Actualizar el indicador de orden en el encabezado si existe
    const headerRow = table.tHead ? table.tHead.rows[0] : table.rows[0];
    if (headerRow) {
        const headers = headerRow.cells;
        for (let i = 0; i < headers.length; i++) {
            headers[i].classList.remove('asc', 'desc');
            // Remover iconos de todas las columnas
            const icon = headers[i].querySelector('.sort-icon');
            if (icon) {
                icon.remove();
            }
        }
        // Añadir clase y icono a la columna actual
        headers[columnIndex].classList.add(sortState[columnIndex] === 1 ? 'desc' : 'asc');
        const icon = document.createElement('i');
        icon.classList.add('sort-icon', 'bi');
        icon.classList.add(sortState[columnIndex] === 1 ? 'bi-caret-down-fill' : 'bi-caret-up-fill');
        headers[columnIndex].appendChild(icon);
    }
};

export default orderColumnSelected;