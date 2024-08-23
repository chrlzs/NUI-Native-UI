class XTabs extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <style>
                /* Default styling for tabs */
                :host {
                    display: block;
                    font-family: var(--font-family, Arial, sans-serif);
                }

                .tabs {
                    display: flex;
                    border-bottom: 2px solid var(--tab-border-color, #ccc);
                }

                .tab-button {
                    padding: 10px 20px;
                    cursor: pointer;
                    background-color: var(--tab-bg-color, #f9f9f9);
                    border: none;
                    outline: none;
                    transition: background-color 0.3s ease;
                }

                .tab-button.active {
                    background-color: var(--tab-active-bg-color, #fff);
                    border-bottom: 2px solid var(--tab-active-border-color, #007BFF);
                }

                .tab-button:hover:not(.active) {
                    background-color: var(--tab-hover-bg-color, #eee);
                }

                .tab-content {
                    display: none;
                    padding: 20px;
                    border: 1px solid var(--content-border-color, #ddd);
                    border-top: none;
                }

                .tab-content.active {
                    display: block;
                }
            </style>
            <div class="tabs">
                <slot name="tab-buttons"></slot>
            </div>
            <div class="tab-contents">
                <slot name="tab-contents"></slot>
            </div>
        `;

        this.tabButtons = this.querySelectorAll('[data-tab]');
        this.tabContents = this.querySelectorAll('.tab-content');

        console.log(`Found ${this.tabButtons.length} tab buttons.`); // Debug log
        console.log(`Found ${this.tabContents.length} tab contents.`); // Debug log

        this.addEventListeners();

        // Activate the first tab and content on load
        if (this.tabButtons.length > 0) {
            this.activateTab(this.tabButtons[0].dataset.tab);
        }
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
            const isActive = button.dataset.tab === tabId;
            console.log(`Setting button ${button.dataset.tab} active: ${isActive}`);
            button.classList.toggle('active', isActive);
        });

        this.tabContents.forEach(content => {
            const isActive = content.id === tabId;
            console.log(`Setting content ${content.id} active: ${isActive}`);
            content.classList.toggle('active', isActive);
        });
    }
}

customElements.define('x-tabs', XTabs);
