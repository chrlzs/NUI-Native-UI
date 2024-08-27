class NUIPagination extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.currentPage = 1;
        this.totalPages = 3; // Adjust this dynamically as needed

        this.shadowRoot.innerHTML = `
            <style>
                ${this.getStyles()}
            </style>
            <div class="pagination">
                <button class="pagination-button" data-page="prev">&laquo;</button>
                ${this.renderButtons()}
                <button class="pagination-button" data-page="next">&raquo;</button>
            </div>
        `;

        this.prevButton = this.shadowRoot.querySelector('[data-page="prev"]');
        this.nextButton = this.shadowRoot.querySelector('[data-page="next"]');
        this.pageButtons = Array.from(this.shadowRoot.querySelectorAll('.pagination-button[data-page]:not([data-page="prev"]):not([data-page="next"])'));

        this.updateButtons();
        this.addEventListeners();
    }

    getStyles() {
        return `
            .pagination {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 8px;
                padding: 10px;
            }

            .pagination-button {
                padding: 8px 16px;
                background-color: var(--btn-bg, #007BFF);
                color: var(--btn-color, #FFF);
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }

            .pagination-button:hover {
                background-color: var(--btn-bg-hover, #0056b3);
            }

            .pagination-button[disabled] {
                background-color: var(--btn-disabled-bg, #d6d6d6);
                cursor: not-allowed;
            }

            .pagination-button.active {
                background-color: var(--btn-active-bg, #0056b3);
            }
        `;
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

customElements.define('nui-pagination', NUIPagination);