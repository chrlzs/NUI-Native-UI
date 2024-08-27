class NUIDropdown extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById('nui-dropdown-template');
        const templateContent = template.content;
        this.attachShadow({ mode: 'open' }).appendChild(templateContent.cloneNode(true));

        this.dropdownButton = this.shadowRoot.querySelector('.dropdown-button');
        this.dropdownContent = this.shadowRoot.querySelector('.dropdown-content');

        this.dropdownButton.addEventListener('click', () => {
            this.dropdownContent.classList.toggle('show');
        });

        // Close the dropdown if the user clicks outside of it
        document.addEventListener('click', (event) => {
            if (!this.contains(event.target) && this.dropdownContent.classList.contains('show')) {
                this.dropdownContent.classList.remove('show');
            }
        });
    }
}

customElements.define('nui-dropdown', NUIDropdown);

document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.nui-dropdown');

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('.nui-dropdown-button');
        const content = dropdown.querySelector('.nui-dropdown-content');

        button.addEventListener('click', function() {
            content.classList.toggle('show');
            button.setAttribute('aria-expanded', content.classList.contains('show'));
        });

        // Close the dropdown if clicked outside
        document.addEventListener('click', function(event) {
            if (!dropdown.contains(event.target)) {
                content.classList.remove('show');
                button.setAttribute('aria-expanded', 'false');
            }
        });
    });
});