class NUIAlert extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="nui-alert.css">
            <div class="alert">
                <span class="close-btn" id="closeAlertButton">&times;</span>
                <div class="alert-text"><slot></slot></div>
            </div>
        `;
    }

    connectedCallback() {
        this.shadowRoot.getElementById('closeAlertButton').addEventListener('click', () => {
            this.remove();
        });
    }
}

customElements.define('nui-alert', NUIAlert);

window.showAlert = function(message, type = 'info') {
    const alert = document.createElement('nui-alert');
    alert.classList.add(type);
    alert.innerHTML = message;
    document.body.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 3000); // Adjust the timeout as needed
};
