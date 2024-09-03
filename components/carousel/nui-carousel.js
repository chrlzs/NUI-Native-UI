class NUICarousel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.currentIndex = 0;
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
        this.updateCarousel(); // Initialize the first slide
    }

    render() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/components/carousel/nui-carousel.css';

        this.shadowRoot.innerHTML = `
            <div class="carousel">
                <div class="carousel-inner">
                    <slot></slot>
                </div>
                <button class="carousel-control prev" id="prevSlide">&#10094;</button>
                <button class="carousel-control next" id="nextSlide">&#10095;</button>
            </div>
        `;

        this.shadowRoot.appendChild(link);
    }

    setupEventListeners() {
        const prevButton = this.shadowRoot.getElementById('prevSlide');
        const nextButton = this.shadowRoot.getElementById('nextSlide');
        const carouselItems = this.querySelectorAll('.carousel-item');

        prevButton.addEventListener('click', () => {
            this.currentIndex = (this.currentIndex - 1 + carouselItems.length) % carouselItems.length;
            this.updateCarousel();
        });

        nextButton.addEventListener('click', () => {
            this.currentIndex = (this.currentIndex + 1) % carouselItems.length;
            this.updateCarousel();
        });
    }

    updateCarousel() {
        const carouselInner = this.shadowRoot.querySelector('.carousel-inner');
        const offset = -this.currentIndex * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    }
}

customElements.define('nui-carousel', NUICarousel);
