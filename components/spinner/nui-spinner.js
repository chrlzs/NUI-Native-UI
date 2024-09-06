class NUISpinner extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Attach external CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/components/spinner/nui-spinner.css'; // Adjust the path as needed
        this.shadowRoot.appendChild(link);

        // Attach the inner structure of the component
        this.shadowRoot.innerHTML += `
            <div class="spinner-container">
                <div class="spinner"></div>
            </div>
        `;
    }

    // Called when the element is added to the DOM
    connectedCallback() {
        // Any additional functionality can be added here if necessary
    }
}

// Define the custom element
customElements.define('nui-spinner', NUISpinner);
