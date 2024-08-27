class NUIButton extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                button {
                    padding: 10px 20px;
                    background-color: var(--btn-bg, #007BFF);
                    color: var(--btn-color, #FFF);
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
                button:hover {
                    background-color: var(--btn-bg-hover, #0056b3);
                }
            </style>
            <button><slot></slot></button>
        `;
    }
}

customElements.define('nui-button', NUIButton);