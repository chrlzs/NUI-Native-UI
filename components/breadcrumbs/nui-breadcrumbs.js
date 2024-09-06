class NUIBreadcrumbs extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/components/breadcrumbs/nui-breadcrumbs.css';
        this.shadowRoot.innerHTML = `
            <nav class="breadcrumbs">
                <slot></slot>
            </nav>
        `;
        this.shadowRoot.appendChild(link);
    }
}

customElements.define('nui-breadcrumbs', NUIBreadcrumbs);