class NUIModal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._isInitialClick = true; // Track initial click to prevent immediate closing
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/components/modal/nui-modal.css'; // Update to correct path if necessary

        this.shadowRoot.innerHTML = `
            <div class="modal">
                <div class="modal-content">
                    <button class="close-btn">&times;</button>
                    <slot></slot>
                </div>
            </div>
        `;

        this.shadowRoot.appendChild(link);
    }

    setupEventListeners() {
        const modal = this.shadowRoot.querySelector('.modal');
        const closeButton = this.shadowRoot.querySelector('.close-btn');
        const modalContent = this.shadowRoot.querySelector('.modal-content');

        closeButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent click event from propagating to modal
            this.hide();
        });

        modalContent.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent click event from propagating to modal
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && !this._isInitialClick) {
                this.hide();
            }
            this._isInitialClick = false; // Reset after the first click
        });

        // Initially hide the modal
        this.hide();
    }

    show() {
        const modal = this.shadowRoot.querySelector('.modal');
        modal.style.display = 'block';
        // Use requestAnimationFrame to ensure the display change has taken effect
        requestAnimationFrame(() => {
            modal.style.opacity = '1';
            this._isInitialClick = true; // Reset for next opening
        });
    }

    hide() {
        const modal = this.shadowRoot.querySelector('.modal');
        modal.style.opacity = '0';
        modal.addEventListener('transitionend', () => {
            modal.style.display = 'none';
        }, { once: true });
    }

    static get observedAttributes() {
        return ['open'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'open') {
            if (newValue !== null) {
                this.show();
            } else {
                this.hide();
            }
        }
    }
}

customElements.define('nui-modal', NUIModal);

// Setup function to be called after DOM is fully loaded
function setup() {
    const openModalButton = document.getElementById("openModalButton");
    const modal = document.getElementById("exampleModal");

    if (openModalButton && modal) {
        openModalButton.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent any potential bubbling
            e.preventDefault(); // Prevent any default button behavior
            setTimeout(() => { // Delay setting the attribute to next tick
                modal.setAttribute('open', '');
            }, 0);
        });
    } else {
        console.error('Modal or open button not found');
    }
}

// Ensure the DOM is fully loaded before running setup
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
} else {
    setup();
}
