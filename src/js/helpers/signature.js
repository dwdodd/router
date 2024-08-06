const signature = () => {
    const canvas = MyElement('signature-pad');
    const ctx = canvas.getContext('2d');
    let isDrawing = false;

    function startDrawing(event) {
        isDrawing = true;
        ctx.beginPath();
        ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    }

    function draw(event) {
        if (!isDrawing) return;
        ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        ctx.stroke();
    }

    function stopDrawing() {
        isDrawing = false;
        ctx.closePath();
    }

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseleave', stopDrawing);

    // Clear button
    MyElement('clear-button').addEventListener('click', function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    // Save button
    MyElement('save-button').addEventListener('click', function () {
        const dataURL = canvas.toDataURL('image/png');
        console.log(dataURL); // Esto imprime la URL de la imagen en la consola. Puedes usarla para guardar la imagen.
    });
};

export default signature;