class NUIAlert extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        // Create a link element for the external CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/components/alert/nui-alert.css'; 

        // Create the structure of the alert
        this.shadowRoot.innerHTML = `
            <div class="alert">
                <span class="close-btn" id="closeAlertButton">&times;</span>
                <div class="alert-text"><slot></slot></div>
            </div>
        `;

        // Append the link element to the Shadow DOM
        this.shadowRoot.appendChild(link);
    }

    connectedCallback() {
        this.shadowRoot.getElementById('closeAlertButton').addEventListener('click', () => {
            this.remove();
        });
    }
}

customElements.define('nui-alert', NUIAlert);

// Make showAlert globally accessible
window.showAlert = function(message, type = 'info') {
    const alert = document.createElement('nui-alert');
    alert.classList.add(type);
    alert.innerHTML = message;
    document.body.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 3000); // Adjust the timeout as needed
};
