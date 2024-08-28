# NativeUI

NativeUI is a lightweight front-end component library that doesn't require any third-party libraries. It leverages modern HTML, CSS, and JavaScript to provide a solid foundation for simple web projects without the overhead and complexity of larger frameworks.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/chrlzs/NativeUI.svg)](https://github.com/chrlzs/NativeUI/issues)
[![GitHub forks](https://img.shields.io/github/forks/chrlzs/NativeUI.svg)](https://github.com/chrlzs/NativeUI/network)
[![GitHub stars](https://img.shields.io/github/stars/chrlzs/NativeUI.svg)](https://github.com/chrlzs/NativeUI/stargazers)
[![GitHub contributors](https://img.shields.io/github/contributors/chrlzs/NativeUI.svg)](https://github.com/chrlzs/NativeUI/graphs/contributors)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Running the Project](#running-the-project)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/chrlzs/NativeUI.git
    ```
2. Navigate to the project directory:
    ```sh
    cd NativeUI
    ```

## Usage

NativeUI is designed to be easy to integrate into your projects. Simply include the relevant HTML, CSS, and JavaScript files from the `components/` directory in your project to start using the components.

Each component in this library is self-contained, meaning you can use only the components you need without including unnecessary code.

## Project Structure

```
NativeUI/
├── components/
│   ├── nui-button/
│   │   ├── nui-button.css
│   │   ├── nui-button.html
│   │   └── nui-button.js
│   ├── nui-modal/
│   │   ├── nui-modal.css
│   │   ├── nui-modal.html
│   │   └── nui-modal.js
│   ├── nui-tooltip/
│   │   ├── nui-tooltip.css
│   │   ├── nui-tooltip.html
│   │   └── nui-tooltip.js
│   ├── nui-accordion/
│   │   ├── nui-accordion.css
│   │   ├── nui-accordion.html
│   │   └── nui-accordion.js
│   ├── nui-carousel/
│   │   ├── nui-carousel.css
│   │   ├── nui-carousel.html
│   │   └── nui-carousel.js
│   ├── nui-alert/
│   │   ├── nui-alert.css
│   │   ├── nui-alert.html
│   │   └── nui-alert.js
│   ├── nui-progress-bar/
│   │   ├── nui-progress-bar.css
│   │   ├── nui-progress-bar.html
│   │   └── nui-progress-bar.js
│   ├── nui-breadcrumbs/
│   │   ├── nui-breadcrumbs.css
│   │   ├── nui-breadcrumbs.html
│   ├── nui-spinner/
│   │   ├── nui-spinner.css
│   │   ├── nui-spinner.html
│   │   └── nui-spinner.js
│   ├── nui-toolbar/
│   │   ├── nui-toolbar.css
│   │   ├── nui-toolbar.html
│   │   └── nui-toolbar.js
│   ├── nui-tabs/
│   │   ├── nui-tabs.css
│   │   ├── nui-tabs.html
│   │   └── nui-tabs.js
│   ├── nui-dropdown/
│   │   ├── nui-dropdown.css
│   │   ├── nui-dropdown.html
│   │   └── nui-dropdown.js
├── styles/
│   ├── global.css
├── docs/
│   └── (documentation for components)
├── index.html
├── style-guide.html
├── README.md
└── LICENSE
```

- **components/**: Contains individual component folders, each with its own HTML, CSS, and JS files.
- **docs/**: Contains documentation and usage examples for each component.
- **index.html**: Links to demo page.
- **style-guide.html**: A demo page to showcase the components in action.
- **README.md**: This file.
- **LICENSE**: The project license.

## Components

### NUI Button

Standard button implementation using native HTML and CSS.

- **HTML**: `components/nui-button/nui-button.html`
- **CSS**: `components/nui-button/nui-button.css`
- **JavaScript**: `components/nui-button/nui-button.js`

### NUI Modal

A modal dialog that can be triggered programmatically or via user interaction.

- **HTML**: `components/nui-modal/nui-modal.html`
- **CSS**: `components/nui-modal/nui-modal.css`
- **JavaScript**: `components/nui-modal/nui-modal.js`

### NUI Tooltip

Tooltip implementation that can be shown/hidden programmatically.

- **HTML**: `components/nui-tooltip/nui-tooltip.html`
- **CSS**: `components/nui-tooltip/nui-tooltip.css`
- **JavaScript**: `components/nui-tooltip/nui-tooltip.js`

### NUI Accordion

An accordion component that can expand and collapse sections of content.

- **HTML**: `components/nui-accordion/nui-accordion.html`
- **CSS**: `components/nui-accordion/nui-accordion.css`
- **JavaScript**: `components/nui-accordion/nui-accordion.js`

### NUI Carousel/Slider

A responsive carousel/slider component that cycles through images or content.

- **HTML**: `components/nui-carousel/nui-carousel.html`
- **CSS**: `components/nui-carousel/nui-carousel.css`
- **JavaScript**: `components/nui-carousel/nui-carousel.js`

The Carousel component includes controls for navigating between slides and is responsive, ensuring that images are properly displayed across different screen sizes.

### NUI Alert/Notification

A customizable alert/notification component that can be closed by the user or triggered programmatically.

- **HTML**: `components/nui-alert/nui-alert.html`
- **CSS**: `components/nui-alert/nui-alert.css`
- **JavaScript**: `components/nui-alert/nui-alert.js`

The Alert/Notification component is flexible and allows for dynamic messages to be displayed to users.

### NUI Progress Bar

A customizable progress bar component that can be updated programmatically.

- **HTML**: `components/nui-progress-bar/nui-progress-bar.html`
- **CSS**: `components/nui-progress-bar/nui-progress-bar.css`
- **JavaScript**: `components/nui-progress-bar/nui-progress-bar.js`

The Progress Bar component allows for dynamic updates to visually represent progress in tasks.

### NUI Breadcrumbs

A breadcrumb navigation component to help users understand and navigate your website's hierarchy.

- **HTML**: `components/nui-breadcrumbs/nui-breadcrumbs.html`
- **CSS**: `components/nui-breadcrumbs/nui-breadcrumbs.css`
- **JavaScript**: No JavaScript required for basic implementation.

### NUI Spinner/Loader

A customizable spinner/loader component that can be styled using global CSS variables.

- **HTML**: `components/nui-spinner/nui-spinner.html`
- **CSS**: `components/nui-spinner/nui-spinner.css`
- **JavaScript**: `components/nui-spinner/nui-spinner.js`

### NUI Pagination

A pagination component that allows users to navigate through multiple pages.

- **HTML**: `components/nui-pagination/nui-pagination.html`
- **CSS**: `components/nui-pagination/nui-pagination.css`
- **JavaScript**: `components/nui-pagination/nui-pagination.js`

### NUI Toolbar

A customizable toolbar component with buttons for common actions.

- **HTML**: `components/nui-toolbar/nui-toolbar.html`
- **CSS**: `components/nui-toolbar/nui-toolbar.css`
- **JavaScript**: `components/nui-toolbar/nui-toolbar.js`

### NUI Tabs

A tabbed interface component for organizing content into separate sections.

- **HTML**: `components/nui-tabs/nui-tabs.html`
- **CSS**: `components/nui-tabs/nui-tabs.css`
- **JavaScript**: `components/nui-tabs/nui-tabs.js`

### NUI Dropdown Menus

A dropdown menu component with customizable styles and functionality.

- **HTML**: `components/nui-dropdown/nui-dropdown.html`
- **CSS**: `components/nui-dropdown/nui-dropdown.css`
- **JavaScript**: `components/nui-dropdown/nui-dropdown.js`

#### Usage example:

```html
<nui-dropdown>
    <button slot="button">Dropdown Menu</button>
    <div slot="menu">
        <a href="#">Option 1</a>
        <a href="#">Option 2</a>
        <a href="#">Option 3</a>
    </div>


</nui-dropdown>
```
## More Components Coming Soons
- Cards
- Navigation Bars
- Responsive Grid Layout
- Forms

## Running the Project

To run the project locally:

1. Open `index.html` in your preferred web browser to see the components in action.
2. Alternatively, use the following commands to start a simple HTTP server:
    ```sh
    npx http-server ./
    ```
   Then, navigate to `http://localhost:8080` in your browser.

## Contributing

We welcome contributions to the NativeUI library. Please see the [Contributing Guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.