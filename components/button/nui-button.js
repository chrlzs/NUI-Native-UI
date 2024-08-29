class NUIButton extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Create a link element to import the external CSS file
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/components/button/nui-button.css';

        // Create a wrapper div for content
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
            <button class="button"><slot></slot></button>
        `;

        // Append the link and wrapper to the shadow DOM
        shadow.appendChild(link);
        shadow.appendChild(wrapper);
    }
}

customElements.define('nui-button', NUIButton);