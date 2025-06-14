const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-container .slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;
let autoSlideInterval;

// Aplica transição suave
carouselContainer.style.transition = 'transform 0.5s ease-in-out';

function updateSlidePosition() {
    const slideWidth = slides[0].offsetWidth;
    carouselContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlidePosition();
}

function showPrevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlidePosition();
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(showNextSlide, 5000);
}

// Botões de navegação
nextButton?.addEventListener('click', () => {
    showNextSlide();
    resetAutoSlide();
});

prevButton?.addEventListener('click', () => {
    showPrevSlide();
    resetAutoSlide();
});

// Início automático
autoSlideInterval = setInterval(showNextSlide, 5000);
