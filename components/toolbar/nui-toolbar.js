class NUIToolbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Attach external CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/components/toolbar/nui-toolbar.css'; // Adjust the path to your CSS
        this.shadowRoot.appendChild(link);

        // Inner structure of the toolbar
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="toolbar">
                <slot></slot>
            </div>
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // Fetch buttons inside the toolbar
        this.buttons = this.shadowRoot.querySelectorAll('.toolbar-button');
        this.addEventListeners();
    }

    addEventListeners() {
        this.shadowRoot.addEventListener('slotchange', () => {
            this.buttons = this.shadowRoot.querySelectorAll('.toolbar-button');
            this.buttons.forEach(button => {
                button.addEventListener('click', (e) => {
                    this.dispatchEvent(new CustomEvent('toolbar-action', {
                        detail: { action: e.target.dataset.action },
                        bubbles: true,
                        composed: true
                    }));
                });
            });
        });
    }
}

// Define the custom element
customElements.define('nui-toolbar', NUIToolbar);