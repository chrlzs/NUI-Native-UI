class NUITooltip extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Create a link element to import the external CSS file
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/components/tooltip/nui-tooltip.css';

        // Set up the tooltip structure
        shadow.innerHTML = `
            <div class="tooltip-container">
                <slot name="trigger"></slot> <!-- Slot for the tooltip trigger element -->
                <div class="tooltip">
                    <slot name="content"></slot> <!-- Slot for the tooltip content -->
                </div>
            </div>
        `;

        // Append the stylesheet link
        shadow.appendChild(link);

        // Initialize tooltip behavior after elements are in the Shadow DOM
        this._setupTooltip();
    }

    _setupTooltip() {
        const container = this.shadowRoot.querySelector('.tooltip-container');
        const tooltip = this.shadowRoot.querySelector('.tooltip');

        // Show the tooltip on hover
        container.addEventListener('mouseover', () => {
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
        });

        // Hide the tooltip when the mouse leaves
        container.addEventListener('mouseout', () => {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        });

        // Optional: Toggle the tooltip on click
        container.addEventListener('click', () => {
            if (tooltip.style.visibility === 'visible') {
                tooltip.style.visibility = 'hidden';
                tooltip.style.opacity = '0';
            } else {
                tooltip.style.visibility = 'visible';
                tooltip.style.opacity = '1';
            }
        });
    }
}

customElements.define('nui-tooltip', NUITooltip);