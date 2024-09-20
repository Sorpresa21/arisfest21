document.getElementById('checkButton').addEventListener('click', () => {
    // Obtener los valores de los inputs
    const char1 = document.getElementById('char1').value.toUpperCase();
    const char2 = document.getElementById('char2').value.toUpperCase();
    const char3 = document.getElementById('char3').value.toUpperCase();
    const char4 = document.getElementById('char4').value.toUpperCase();

    const char5 = document.getElementById('char5').value.toUpperCase();
    const char6 = document.getElementById('char6').value.toUpperCase();
    const char7 = document.getElementById('char7').value.toUpperCase();
    const char8 = document.getElementById('char8').value.toUpperCase();
    const char9 = document.getElementById('char9').value.toUpperCase();
    const char10 = document.getElementById('char10').value.toUpperCase();

    // Comparar con "AIKO MIDORI"
    if (
        char1 === 'A' && char2 === 'I' && char3 === 'K' && char4 === 'O' &&
        char5 === 'M' && char6 === 'I' && char7 === 'D' && char8 === 'O' && char9 === 'R' && char10 === 'I'
    ) {
        document.getElementById('message').textContent = '¡Felicidades, lo lograste!';
        document.getElementById('message').style.color = 'green';

        // Abrir una nueva ventana con la imagen
        window.open('FotoIndex.html', '_blank', 'width=400,height=400');
    } else {
        document.getElementById('message').textContent = 'Te equivocaste, inténtalo de nuevo.';
        document.getElementById('message').style.color = 'red';
    }
});
