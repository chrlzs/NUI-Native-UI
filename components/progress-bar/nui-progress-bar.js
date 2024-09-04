class NUIProgressBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Attach external CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/components/progress-bar/nui-progress-bar.css'; // Adjust the path as needed
        this.shadowRoot.appendChild(link);

        // Attach the inner structure of the component
        this.shadowRoot.innerHTML += `
            <div class="progress-bar-container">
                <div class="progress-bar"></div>
            </div>
        `;
    }

    // Method to update the progress
    setProgress(percentage) {
        const progressBar = this.shadowRoot.querySelector('.progress-bar');
        if (percentage >= 0 && percentage <= 100) {
            progressBar.style.width = `${percentage}%`;
        }
    }

    // Called when the element is added to the DOM
    connectedCallback() {
        if (this.hasAttribute('progress')) {
            this.setProgress(this.getAttribute('progress'));
        }
    }
}

// Define the custom element
customElements.define('nui-progress-bar', NUIProgressBar);

// Make updateProgressBar globally accessible
window.updateProgressBar = function(percentage) {
    const progressBar = document.querySelector('nui-progress-bar');
    progressBar.setProgress(percentage);
};
