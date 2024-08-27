class NUIDropdown extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                /* NUI-Dropdown Styles */
                .nui-dropdown {
                    position: relative;
                    display: inline-block;
                }

                .nui-dropdown-content {
                    display: none;
                    position: absolute;
                    background-color: var(--dropdown-bg, #fff);
                    min-width: 160px;
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                    z-index: 1;
                    border-radius: 4px;
                }

                .nui-dropdown-content a {
                    color: var(--dropdown-text, #333);
                    padding: 12px 16px;
                    text-decoration: none;
                    display: block;
                }

                .nui-dropdown-content a:hover {
                    background-color: var(--dropdown-hover-bg, #f1f1f1);
                }

                .nui-dropdown.show .nui-dropdown-content {
                    display: block;
                }
            </style>
            <div class="nui-dropdown">
                <slot name="button"></slot>
                <div class="nui-dropdown-content">
                    <slot></slot>
                </div>
            </div>
        `;
        
        // Use requestAnimationFrame to ensure DOM is updated
        requestAnimationFrame(() => this.addEventListeners());
    }

    addEventListeners() {
        const buttonSlot = this.shadowRoot.querySelector('slot[name="button"]');
        if (buttonSlot) {
            buttonSlot.addEventListener('slotchange', () => {
                const button = buttonSlot.assignedNodes()[0];
                if (button) {
                    button.addEventListener('click', () => {
                        this.shadowRoot.querySelector('.nui-dropdown').classList.toggle('show');
                    });
                }
            });
        } else {
            console.error('Button slot not found.');
        }

        document.addEventListener('click', (event) => {
            if (!this.contains(event.target)) {
                this.shadowRoot.querySelector('.nui-dropdown').classList.remove('show');
            }
        });
    }
}

customElements.define('nui-dropdown', NUIDropdown);
