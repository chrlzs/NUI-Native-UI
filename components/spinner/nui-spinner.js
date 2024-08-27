class NUISpinner extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                @import url('/styles/global.css');
                @import url('/components/spinner/spinner.css');
            </style>
            <div class="spinner"></div>
        `;
    }
}

customElements.define('nui-spinner', NUISpinner);