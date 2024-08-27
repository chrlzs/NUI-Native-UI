class NUIToolbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                ${this.getStyles()}
            </style>
            <div class="toolbar">
                <slot></slot>
            </div>
        `;

        this.buttons = this.shadowRoot.querySelectorAll('.toolbar-button');
        this.addEventListeners();
    }

    getStyles() {
        return `
            .toolbar {
                display: flex;
                align-items: center;
                gap: 10px;
                background-color: var(--toolbar-bg, #f4f4f4);
                padding: 10px;
                border-radius: 5px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }

            .toolbar-button {
                padding: 8px 16px;
                background-color: var(--btn-bg, #007BFF);
                color: var(--btn-color, #FFF);
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }

            .toolbar-button:hover {
                background-color: var(--btn-bg-hover, #0056b3);
            }
        `;
    }

    addEventListeners() {
        this.buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.dispatchEvent(new CustomEvent('toolbar-action', {
                    detail: { action: e.target.dataset.action },
                    bubbles: true,
                    composed: true
                }));
            });
        });
    }
}

customElements.define('nui-toolbar', NUIToolbar);