class NUIDropdown extends HTMLElement {
    constructor() {
        super();
        // Attach a shadow DOM to this component
        const shadow = this.attachShadow({ mode: 'open' });
        
        // Define the internal HTML and CSS for the dropdown component
        shadow.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    position: relative;
                }
                .dropdown-button {
                    background: var(--dropdown-button-bg, #007BFF);
                    color: var(--dropdown-button-color, #FFF);
                    padding: 10px;
                    border: none;
                    cursor: pointer;
                }
                .dropdown-button:hover {
                    background: var(--dropdown-button-hover-bg, #0056b3);
                }
                .dropdown-menu {
                    display: none;
                    position: absolute;
                    background: var(--dropdown-content-bg, #FFF);
                    border: 1px solid var(--dropdown-content-border, #CCC);
                    box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
                    z-index: 1;
                }
                .dropdown-menu a {
                    color: var(--dropdown-content-color, #000);
                    padding: 12px 16px;
                    text-decoration: none;
                    display: block;
                }
                .dropdown-menu a:hover {
                    background: var(--dropdown-content-hover-bg, #f1f1f1);
                }
            </style>
            <button class="dropdown-button"><slot name="button">Dropdown</slot></button>
            <div class="dropdown-menu"><slot name="menu"></slot></div>
        `;
    }

    connectedCallback() {
        console.log('NuiDropdown component connected'); // Debug log

        // Attach event listener to toggle the dropdown menu
        this.shadowRoot.querySelector('.dropdown-button').addEventListener('click', () => {
            const menu = this.shadowRoot.querySelector('.dropdown-menu');
            console.log('Dropdown button clicked'); // Debug log
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });

        // Hide the dropdown menu if clicking outside of it
        document.addEventListener('click', (event) => {
            if (!this.contains(event.target)) {
                this.shadowRoot.querySelector('.dropdown-menu').style.display = 'none';
            }
        });
    }
}

// Define the custom element
customElements.define('nui-dropdown', NuiDropdown);