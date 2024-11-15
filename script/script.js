function toggleSeleccion(elemento) {
    // Alternar la clase 'selected' en el elemento que se hizo clic
    elemento.classList.toggle('selected');
}

function guardarPreferencias() {
    // Obtener todas las opciones seleccionadas
    const seleccionadas = document.querySelectorAll('.opcion.selected');
    const preferencias = [];

    // Extraer el texto de cada opción seleccionada
    seleccionadas.forEach(opcion => {
        preferencias.push(opcion.querySelector('h3').textContent);
    });

    // Mostrar las preferencias seleccionadas en la consola
    console.log("Preferencias guardadas:", preferencias);

    // Puedes hacer algo más con las preferencias aquí
    alert("Preferencias guardadas: " + preferencias.join(", "));

    const queryString = preferencias.map(pref => `preferencia=${encodeURIComponent(pref)}`).join('&');
    window.location.href = `paginaWeb.html?${queryString}`;
    
}






