document.getElementById('checkButton').addEventListener('click', () => {
    // Obtener los valores de los inputs
    const char1 = document.getElementById('char1').value.toUpperCase();
    const char2 = document.getElementById('char2').value.toUpperCase();
    const char3 = document.getElementById('char3').value.toUpperCase();
    const char4 = document.getElementById('char4').value.toUpperCase();

    // Comparar con "AIKO"
    if (char1 === 'A' && char2 === 'I' && char3 === 'K' && char4 === 'O') {
        document.getElementById('message').textContent = '¡Felicidades, lo lograste!';
        document.getElementById('message').style.color = 'green';

        // Abrir una nueva ventana con la imagen
        window.open('FotoIndex.html', '_blank', 'width=400,height=400');
    } else {
        document.getElementById('message').textContent = 'Te equivocaste, inténtalo de nuevo.';
        document.getElementById('message').style.color = 'red';
    }
});
