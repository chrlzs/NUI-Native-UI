class NUITabs extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Create the external stylesheet link
        const linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'stylesheet');
        linkElement.setAttribute('href', './nui-tabs.css');  // Link to the external CSS file

        // Create the slot structure for the component
        shadow.innerHTML = `
            <div class="tabs">
                <slot name="tab-buttons"></slot>
            </div>
            <div class="tab-contents">
                <slot name="tab-contents"></slot>
            </div>
        `;

        // Append the stylesheet to the shadow DOM
        shadow.appendChild(linkElement);

        this.tabButtons = [];
        this.tabContents = [];
    }

    connectedCallback() {
        this.tabButtons = this.querySelectorAll('[data-tab]');
        this.tabContents = this.querySelectorAll('.tab-content');

        console.log(`Found ${this.tabButtons.length} tab buttons.`);
        console.log(`Found ${this.tabContents.length} tab contents.`);

        this.addEventListeners();

        if (this.tabButtons.length > 0) {
            this.activateTab(this.tabButtons[0].dataset.tab);
        }
    }

    addEventListeners() {
        console.log("addEventListeners called");

        if (this.tabButtons.length === 0) {
            console.warn("No tab buttons found to attach event listeners.");
            return;
        }

        this.tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                console.log(`Tab ${button.dataset.tab} clicked`);
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

customElements.define('nui-tabs', NUITabs);