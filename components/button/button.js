class XButton extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
                :host {
                    --btn-bg: var(--primary-color, #007BFF);
                    --btn-color: var(--text-color, #FFF);
                    --btn-bg-hover: var(--secondary-color, #0056b3);
                }
                
                button {
                    padding: 10px 20px;
                    background-color: var(--primary-color);
                    color: var(--text-color);
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: var(--font-size, 16px);
                    transition: background-color 0.3s ease;
                }

                button:hover {
                    background-color: var(--secondary-color);
                }
            </style>
            <button><slot></slot></button>
    }
}

customElements.define('x-button', XButton);