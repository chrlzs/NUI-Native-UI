class NUICard extends HTMLElement {
    constructor() {
        super();

        // Define the template directly in JavaScript
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                /* Default styles for the card */
                .card {
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    overflow: hidden;
                    display: block;
                    width: 100%;
                    max-width: 400px;
                    margin: 16px auto;
                    background-color: var(--card-bg, #fff);
                }
                .card-header {
                    background: var(--card-header-bg, #f5f5f5);
                    padding: 16px;
                    font-size: 1.25em;
                    border-bottom: 1px solid #ddd;
                }
                .card-body {
                    padding: 16px;
                }
                .card-footer {
                    background: var(--card-footer-bg, #f5f5f5);
                    padding: 16px;
                    border-top: 1px solid #ddd;
                    text-align: right;
                }
            </style>
            <div class="card">
                <div class="card-header">
                    <slot name="header">Default Header</slot>
                </div>
                <div class="card-body">
                    <slot name="body">Default Body</slot>
                </div>
                <div class="card-footer">
                    <slot name="footer">Default Footer</slot>
                </div>
            </div>
        `;

        // Attach shadow DOM and add the template content
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

// Define the custom element
customElements.define('nui-card', NUICard);