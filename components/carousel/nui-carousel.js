const prevButton = document.getElementById('prevSlide');
const nextButton = document.getElementById('nextSlide');
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

nextButton.onclick = () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
};

prevButton.onclick = () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
};