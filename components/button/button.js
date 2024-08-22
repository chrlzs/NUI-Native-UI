class XButton extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
        <link rel="stylesheet" href="/styles/global.css">
        <link rel="stylesheet" href="/components/button/button.css">
        <button class="button"><slot></slot></button>
    `;
    }
}

customElements.define('x-button', XButton);