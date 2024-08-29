class NUIModal extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Create a link element to import the external CSS file
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/components/modal/nui-modal.css';

        // Set up the modal structure
        shadow.innerHTML = `
            <div class="modal">
                <div class="modal-content">
                    <button class="close-btn">&times;</button>
                    <slot></slot> <!-- Content inside the modal -->
                </div>
            </div>
        `;

        // Append the stylesheet link
        shadow.appendChild(link);

        // Event listener for closing the modal
        const closeButton = shadow.querySelector('.close-btn');
        closeButton.addEventListener('click', () => this.hide());

        // Automatically show or hide based on the attribute
        if (this.hasAttribute('open')) {
            this.show();
        } else {
            this.hide();
        }
    }

    // Method to show the modal
    show() {
        const modal = this.shadowRoot.querySelector('.modal');
        modal.style.display = 'block';
        requestAnimationFrame(() => {
            modal.style.opacity = '1';
        });
    }

    // Method to hide the modal
    hide() {
        const modal = this.shadowRoot.querySelector('.modal');
        modal.style.opacity = '0';
        modal.addEventListener('transitionend', () => {
            modal.style.display = 'none';
        }, { once: true });
    }

    // Respond to attribute changes
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

document.addEventListener("DOMContentLoaded", function() {
    const openModalButton = document.getElementById("openModalButton");
    const modal = document.getElementById("exampleModal");

    openModalButton.onclick = function() {
        modal.setAttribute('open', ''); // Show the modal by setting the 'open' attribute
    };

    // Close the modal when the close button or the modal background is clicked
    modal.addEventListener('click', function(event) {
        const closeModalButton = modal.shadowRoot.querySelector('.close-btn');
        const modalContent = modal.shadowRoot.querySelector('.modal-content');
        if (event.target === closeModalButton || !modalContent.contains(event.target)) {
            modal.removeAttribute('open'); // Hide the modal by removing the 'open' attribute
        }
    });
});
