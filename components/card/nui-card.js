class NUICard extends HTMLElement {
    constructor() {
        super();

        // Define the template directly in JavaScript
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                /* Default styles for the card */
                .card {
                    border: 1px solid var(--card-border, #ddd);
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    overflow: hidden;
                    width: 100%;
                    max-width: 400px;
                    margin: 16px auto;
                    background-color: var(--card-bg, #fff);
                    display: flex;
                    flex-direction: column;
                }
                .card-header {
                    background-color: var(--card-header-bg, #f5f5f5);
                    padding: 16px;
                    font-size: 1.25em;
                    border-bottom: 1px solid var(--card-border-color, #ddd);
                    font-weight: bold;
                }
                .card-body {
                    padding: 16px;
                    flex-grow: 1; /* Ensure body grows to fill available space */
                }
                .card-footer {
                    background-color: var(--card-footer-bg, #f5f5f5);
                    padding: 16px;
                    border-top: 1px solid var(--card-border-color, #ddd);
                    text-align: right;
                    font-size: 0.9em;
                    color: var(--card-footer-text, #777);
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