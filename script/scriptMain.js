function obtenerPreferencias() {
    const params = new URLSearchParams(window.location.search);
    const preferencias = params.getAll('preferencia');
    return preferencias;
}
function mostrarPreferencias() {
    const preferencias = obtenerPreferencias();
    const contenedor = document.getElementById('noticias-container');
    contenedor.innerHTML = '';

    if (preferencias.length === 0) {
        contenedor.innerHTML = '<p>.</p>';
    } else {
        preferencias.forEach(preferencia => {
            const noticia = document.createElement('div');
            noticia.innerHTML = `<h3>${preferencia}</h3><p>Contenido de ${preferencia}...</p>`;
            contenedor.appendChild(noticia);
        });
    }
}

mostrarPreferencias();

document.getElementById('theme-toggle').addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
  });

// Cargar y aplicar preferencia de tema al cargar la página
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }
  
  // Seleccionar el botón de tema
  document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return; // Evitar errores si el toggle no está en la página
  
    // Si ya estaba activado el modo oscuro, marcar el checkbox
    if (localStorage.getItem('darkMode') === 'enabled') {
      themeToggle.checked = true;
    }
  
    // Alternar el tema y guardar la preferencia en localStorage
    themeToggle.addEventListener('change', () => {
      if (themeToggle.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled'); // Guardar preferencia
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled'); // Guardar preferencia
      }
    });
  });