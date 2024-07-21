const phoneMask = (tag) => {
    // Obtener todos los elementos por su clase y agregar el listener a cada uno
    let elements = document.getElementsByClassName(tag);
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('input', function(event) {
            let input = event.target;
            let inputValue = input.value.replace(/\D/g, ''); // Eliminar todo excepto los dígitos
            let formattedValue = '';
            let errorMessage = document.getElementById('error-message-phone');
            errorMessage.style.display = 'none';

            if (inputValue.length <= 7) {
                if (inputValue.length > 3) {
                    formattedValue = inputValue.substring(0, 3) + '-' + inputValue.substring(3, 7);
                } else {
                    formattedValue = inputValue;
                }
            } else if (inputValue.length <= 8) {
                if (inputValue.length > 4) {
                    if (inputValue.length > 0 && inputValue.charAt(0) !== '6') {
                        errorMessage.style.display = 'block';
                        input.value = '';
                        return;
                    }
                    formattedValue = inputValue.substring(0, 4) + '-' + inputValue.substring(4, 8);
                } else {
                    formattedValue = inputValue;
                }
            }

            input.value = formattedValue;
        });
    }

    let elements2 = document.getElementsByClassName(tag);
    for (let i = 0; i < elements2.length; i++) {
        elements2[i].addEventListener('keydown', function(event) {
            let key = event.key;
            let input = event.target;
            let inputValue = input.value.replace(/\D/g, '');
    
            if ((key === 'Backspace' || key === 'Delete') && inputValue.length === 5) {
                input.value = input.value.substring(0, input.value.length - 1);
            }
        });
    }
};

export default phoneMask;