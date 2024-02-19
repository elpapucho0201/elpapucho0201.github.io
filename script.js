// Función para exportar la lista de videojuegos a JSON
function exportarJSON() {
    const lista = document.getElementById('videojuegos-lista');
    const juegos = [];

    // Recorrer cada elemento de la lista y extraer información
    lista.querySelectorAll('li').forEach(item => {
        const juego = {
            nombre: item.querySelector('span').textContent,
            imagen: item.querySelector('img').getAttribute('src')
        };
        juegos.push(juego);
    });

    // Convertir la lista de juegos a JSON
    const jsonData = JSON.stringify(juegos, null, 2);
    
    // Descargar el JSON como archivo
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'videojuegos.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Asociar la función de exportarJSON al botón
document.getElementById('export-btn').addEventListener('click', exportarJSON);
