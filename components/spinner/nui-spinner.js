class NUISpinner extends HTMLElement {
    constructor() {
        super();
        // Define the template directly in JavaScript
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                /* Default styles for the spinner */
                .spinner {
                    border: 4px solid rgba(0, 0, 0, 0.1);
                    border-radius: 50%;
                    border-top: 4px solid #3498db;
                    width: 40px;
                    height: 40px;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            </style>
            <div class="spinner"></div>
        `;

        // Attach shadow DOM and add the template content
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

// Define the custom element
customElements.define('nui-spinner', NUISpinner);