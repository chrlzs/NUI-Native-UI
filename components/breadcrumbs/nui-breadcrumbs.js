class NUIBreadcrumbs extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Attach external CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/components/breadcrumbs/nui-breadcrumbs.css'; // Adjust the path as needed
        this.shadowRoot.appendChild(link);

        // Attach the inner structure of the component
        this.shadowRoot.innerHTML += `
            <nav class="breadcrumbs">
                <ul>
                    <slot></slot>
                </ul>
            </nav>
        `;
    }
}

// Define the custom element
customElements.define('nui-breadcrumbs', NUIBreadcrumbs);