class NUIPagination extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.currentPage = 1;
        this.totalPages = 3; // Adjust dynamically as needed

        // Attach external CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/components/pagination/nui-pagination.css'; // Adjust the path as needed
        this.shadowRoot.appendChild(link);

        // Inner structure of the component
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="pagination">
                <button class="pagination-button" data-page="prev">&laquo;</button>
                ${this.renderButtons()}
                <button class="pagination-button" data-page="next">&raquo;</button>
            </div>
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.prevButton = this.shadowRoot.querySelector('[data-page="prev"]');
        this.nextButton = this.shadowRoot.querySelector('[data-page="next"]');
        this.pageButtons = Array.from(this.shadowRoot.querySelectorAll('.pagination-button[data-page]:not([data-page="prev"]):not([data-page="next"])'));

        this.updateButtons();
        this.addEventListeners();
    }

    renderButtons() {
        let buttons = '';
        for (let i = 1; i <= this.totalPages; i++) {
            buttons += `<button class="pagination-button" data-page="${i}">${i}</button>`;
        }
        return buttons;
    }

    addEventListeners() {
        this.prevButton.addEventListener('click', () => this.changePage('prev'));
        this.nextButton.addEventListener('click', () => this.changePage('next'));
        this.pageButtons.forEach(button => {
            button.addEventListener('click', (e) => this.changePage(parseInt(e.target.dataset.page)));
        });
    }

    changePage(page) {
        if (page === 'prev' && this.currentPage > 1) {
            this.currentPage--;
        } else if (page === 'next' && this.currentPage < this.totalPages) {
            this.currentPage++;
        } else if (typeof page === 'number') {
            this.currentPage = page;
        }
        this.updateButtons();
    }

    updateButtons() {
        this.pageButtons.forEach(button => {
            button.classList.toggle('active', parseInt(button.dataset.page) === this.currentPage);
        });

        this.prevButton.disabled = this.currentPage === 1;
        this.nextButton.disabled = this.currentPage === this.totalPages;
    }
}

// Define the custom element
customElements.define('nui-pagination', NUIPagination);
