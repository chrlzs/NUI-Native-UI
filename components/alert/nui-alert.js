class NUIAlert extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .alert {
                    padding: 15px;
                    background-color: var(--alert-bg, #f44336); /* Red by default */
                    color: var(--alert-color, white);
                    margin-bottom: 15px;
                    border-radius: 5px;
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    z-index: 1000;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                .alert.success {
                    background-color: var(--alert-bg-success, #4CAF50); /* Green */
                }
                .alert.info {
                    background-color: var(--alert-bg-info, #2196F3); /* Blue */
                }
                .alert.warning {
                    background-color: var(--alert-bg-warning, #ff9800); /* Orange */
                }
                .close-btn {
                    margin-left: 15px;
                    color: var(--alert-color, white);
                    font-weight: bold;
                    float: right;
                    font-size: 22px;
                    line-height: 20px;
                    cursor: pointer;
                    transition: 0.3s;
                }
                .close-btn:hover {
                    color: black;
                }
            </style>
            <div class="alert">
                <span class="close-btn" id="closeAlertButton">&times;</span>
                <slot></slot>
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

// Make showAlert globally accessible
window.showAlert = function(message, type = 'info') {
    const alert = document.createElement('nui-alert');
    alert.classList.add(type); // Add the type class (success, info, warning, etc.)
    alert.innerHTML = message; // Use innerHTML to insert the message
    document.body.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 3000); // Adjust the timeout as needed
};
