class NUIDropdown extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // Load external CSS for dropdown
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/components/dropdown/nui-dropdown.css">
            <div class="nui-dropdown">
                <button class="nui-dropdown-button" aria-haspopup="true" aria-expanded="false">
                    <slot name="dropdown-button">Dropdown</slot>
                </button>
                <div class="nui-dropdown-content">
                    <slot name="dropdown-content"></slot>
                </div>
            </div>
        `;

        this.dropdownButton = this.shadowRoot.querySelector('.nui-dropdown-button');
        this.dropdownContent = this.shadowRoot.querySelector('.nui-dropdown-content');

        this.addEventListeners();
    }

    addEventListeners() {
        // Toggle dropdown content on button click
        this.dropdownButton.addEventListener('click', () => {
            const isExpanded = this.dropdownContent.classList.toggle('show');
            this.dropdownButton.setAttribute('aria-expanded', isExpanded);
        });

        // Close the dropdown if clicked outside
        document.addEventListener('click', (event) => {
            if (!this.contains(event.target)) {
                this.dropdownContent.classList.remove('show');
                this.dropdownButton.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

customElements.define('nui-dropdown', NUIDropdown);
