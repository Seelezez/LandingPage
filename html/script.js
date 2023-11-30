// script.js

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Mostrar el primer slide al cargar la página
showSlide(currentSlide);

// Cambiar al siguiente slide cada 3 segundos (ajustable según tus necesidades)
setInterval(nextSlide, 3000);