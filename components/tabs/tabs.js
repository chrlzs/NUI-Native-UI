class XTabs extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                ${this.getStyles()}
            </style>
            <div class="tabs">
                <div class="tab-buttons">
                    <slot name="tab-buttons"></slot>
                </div>
                <div class="tab-content">
                    <slot name="tab-content"></slot>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        this.tabButtons = this.shadowRoot.querySelectorAll('.tab-button');
        this.tabContents = this.shadowRoot.querySelectorAll('.tab-content');

        console.log(`Found ${this.tabButtons.length} tab buttons.`); // Debug log

        this.addEventListeners();
    }

    addEventListeners() {
        console.log("addEventListeners called"); // Debug log

        if (this.tabButtons.length === 0) {
            console.warn("No tab buttons found to attach event listeners.");
            return;
        }

        this.tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                console.log(`Tab ${button.dataset.tab} clicked`); // Log the click event
                this.activateTab(button.dataset.tab);
            });
        });
    }

    activateTab(tabId) {
        console.log(`Activating tab: ${tabId}`);

        this.tabButtons.forEach(button => {
            button.classList.toggle('active', button.dataset.tab === tabId);
        });

        this.tabContents.forEach(content => {
            content.classList.toggle('active', content.id === tabId);
        });
    }

    getStyles() {
        return `
            /* your CSS here */
        `;
    }
}

customElements.define('x-tabs', XTabs);
