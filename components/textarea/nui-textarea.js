class NUITextarea extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    // Attach external CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/components/textarea/nui-textarea.css"; // Adjust the path to your CSS
    this.shadowRoot.appendChild(link);

    // Create the textarea element
    const textarea = document.createElement("textarea");
    textarea.classList.add("nui-textarea");
    textarea.placeholder = this.getAttribute("placeholder") || "Type here...";
    this.shadowRoot.appendChild(textarea);
  }
}

// Define the custom element
customElements.define("nui-textarea", NUITextarea);
