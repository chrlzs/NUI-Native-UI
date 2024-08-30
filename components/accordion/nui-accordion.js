class NUIAccordion extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/components/accordion/nui-accordion.css';

        this.shadowRoot.innerHTML = `
            <div class="accordion-item">
                <button class="accordion-header"><slot name="header"></slot></button>
                <div class="accordion-content"><slot name="content"></slot></div>
            </div>
        `;

        this.shadowRoot.appendChild(link);
    }

    setupEventListeners() {
        const header = this.shadowRoot.querySelector('.accordion-header');
        const content = this.shadowRoot.querySelector('.accordion-content');

        header.addEventListener('click', () => {
            const isOpen = content.style.display === 'block';

            // Close all other accordion sections in the document
            document.querySelectorAll('nui-accordion').forEach(item => {
                const accordionContent = item.shadowRoot.querySelector('.accordion-content');
                accordionContent.style.display = 'none';
            });

            // Toggle the current accordion section
            if (isOpen) {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    }
}

customElements.define('nui-accordion', NUIAccordion);
