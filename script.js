// 🎯 Navegación suave al hacer clic en enlaces del menú
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Evita el salto brusco por defecto
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth' }); // Hace scroll suave
    }
  });
});

// 💡 Efecto máquina de escribir animando frases cíclicas
document.addEventListener("DOMContentLoaded", () => {
  const frases = [
    "Técnico en programación y análisis de sistemas",
    "Soporte Técnico",
    "Estudiante de Ingeniería en Informática"
  ];

  const target = document.getElementById("typewriter"); // Elemento donde se escriben las frases
  let fraseIndex = 0;
  let letraIndex = 0;
  let escribiendo = true;

  function escribir() {
    if (!target) return; // Evita error si no se encuentra el span

    const fraseActual = frases[fraseIndex]; // Frase activa

    if (escribiendo) {
      // Escribir letra por letra
      if (letraIndex <= fraseActual.length) {
        target.textContent = fraseActual.substring(0, letraIndex);
        letraIndex++;
        setTimeout(escribir, 80);
      } else {
        // Esperar antes de borrar
        escribiendo = false;
        setTimeout(escribir, 1500);
      }
    } else {
      // Borrar letra por letra
      if (letraIndex > 0) {
        letraIndex--;
        target.textContent = fraseActual.substring(0, letraIndex);
        setTimeout(escribir, 40);
      } else {
        // Pasar a la siguiente frase
        escribiendo = true;
        fraseIndex = (fraseIndex + 1) % frases.length;
        setTimeout(escribir, 300);
      }
    }
  }

  escribir(); // Inicia el ciclo
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'slide', // Puedes cambiar a 'fade', 'cube', 'coverflow', etc.
    speed: 600, // Transición suave
  });
});
