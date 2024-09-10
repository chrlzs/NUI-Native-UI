class NUITabs extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // Load external CSS
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/components/tabs/nui-tabs.css">
            <div class="tabs">
                <slot name="tab-buttons"></slot>
            </div>
            <div class="tab-contents">
                <slot name="tab-contents"></slot>
            </div>
        `;

        // Add event listeners to slot content after the slots are populated
        this.shadowRoot.querySelector('slot[name="tab-buttons"]').addEventListener('slotchange', () => this.initializeTabs());
    }

    initializeTabs() {
        // Get tab buttons and contents from the light DOM (outside shadow DOM)
        this.tabButtons = this.querySelectorAll('[data-tab]');
        this.tabContents = this.querySelectorAll('.tab-content');

        if (this.tabButtons.length > 0) {
            // Attach event listeners and activate the first tab
            this.addEventListeners();
            this.activateTab(this.tabButtons[0].dataset.tab);  // Activate first tab by default
        } else {
            console.warn("No tab buttons found.");
        }
    }

    addEventListeners() {
        this.tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                console.log(`Tab ${button.dataset.tab} clicked`);  // Debug log
                this.activateTab(button.dataset.tab);
            });
        });
    }

    activateTab(tabId) {
        console.log(`Activating tab: ${tabId}`);

        // Toggle active class on tab buttons
        this.tabButtons.forEach(button => {
            const isActive = button.dataset.tab === tabId;
            button.classList.toggle('active', isActive);
        });

        // Toggle active class on tab content
        this.tabContents.forEach(content => {
            const isActive = content.id === tabId;
            content.classList.toggle('active', isActive);
        });
    }
}

customElements.define('nui-tabs', NUITabs);
