// script.js
// Archivo JavaScript de tu sitio personal
// Aquí puedes agregar interacción, animaciones y comportamiento personalizado

// Scroll suave cuando haces clic en enlaces del menú
document.querySelectorAll('nav a').forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault(); // Previene el salto instantáneo
    const seccion = document.querySelector(this.getAttribute('href'));
    if (seccion) {
      seccion.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Mensaje opcional al cargar la página
window.addEventListener('load', () => {
  console.log('¡Bienvenido al portafolio de Eduardo!');
});