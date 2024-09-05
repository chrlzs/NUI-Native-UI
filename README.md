# NUI (Native UI)

NUI is a lightweight front-end component library that doesn't require any third-party libraries. It leverages modern HTML, CSS, and JavaScript to provide a solid foundation for simple web projects without the overhead and complexity of larger frameworks.

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
│   ├── button/
│   │   ├── nui-button.css
│   │   └── nui-button.js
│   ├── modal/
│   │   ├── nui-modal.css
│   │   └── nui-modal.js
│   ├── tooltip/
│   │   ├── nui-tooltip.css
│   │   └── nui-tooltip.js
│   ├── accordion/
│   │   ├── nui-accordion.css
│   │   └── nui-accordion.js
│   ├── carousel/
│   │   ├── nui-carousel.css
│   │   └── nui-carousel.js
│   ├── alert/
│   │   ├── nui-alert.css
│   │   └── nui-alert.js
│   ├── progress-bar/
│   │   ├── nui-progress-bar.css
│   │   └── nui-progress-bar.js
│   ├── breadcrumbs/
│   │   ├── nui-breadcrumbs.css
│   ├── nui-spinner/
│   │   ├── nui-spinner.css
│   │   └── nui-spinner.js
│   ├── toolbar/
│   │   ├── nui-toolbar.css
│   │   └── nui-toolbar.js
│   ├── tabs/
│   │   ├── nui-tabs.css
│   │   └── nui-tabs.js
│   ├── dropdown/
│   │   ├── nui-dropdown.css
│   │   └── nui-dropdown.js
│   ├── card/
│   │   ├── nui-card.css
│   │   └── nui-card.js
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
- ~~**docs/**~~: Contains documentation and usage examples for each component.
- **index.html**: Links to demo page.
- **style-guide.html**: A demo page to showcase the components in action.
- **README.md**: This file.
- **LICENSE**: The project license.

## Components

### NUI Button

Standard button implementation using native HTML and CSS.

- **CSS**: `components/nui-button/nui-button.css`
- **JavaScript**: `components/nui-button/nui-button.js`

### NUI Modal

A modal dialog that can be triggered programmatically or via user interaction.

- **CSS**: `components/nui-modal/nui-modal.css`
- **JavaScript**: `components/nui-modal/nui-modal.js`

### NUI Tooltip

Tooltip implementation that can be shown/hidden programmatically.

- **CSS**: `components/nui-tooltip/nui-tooltip.css`
- **JavaScript**: `components/nui-tooltip/nui-tooltip.js`

### NUI Accordion

An accordion component that can expand and collapse sections of content.

- **CSS**: `components/nui-accordion/nui-accordion.css`
- **JavaScript**: `components/nui-accordion/nui-accordion.js`

### NUI Carousel/Slider

A responsive carousel/slider component that cycles through images or content.

- **CSS**: `components/nui-carousel/nui-carousel.css`
- **JavaScript**: `components/nui-carousel/nui-carousel.js`

The Carousel component includes controls for navigating between slides and is responsive, ensuring that images are properly displayed across different screen sizes.

### NUI Alert/Notification

A customizable alert/notification component that can be closed by the user or triggered programmatically.

- **CSS**: `components/nui-alert/nui-alert.css`
- **JavaScript**: `components/nui-alert/nui-alert.js`

The Alert/Notification component is flexible and allows for dynamic messages to be displayed to users.

### NUI Progress Bar

A customizable progress bar component that can be updated programmatically.

- **CSS**: `components/nui-progress-bar/nui-progress-bar.css`
- **JavaScript**: `components/nui-progress-bar/nui-progress-bar.js`

The Progress Bar component allows for dynamic updates to visually represent progress in tasks.

### NUI Breadcrumbs

A breadcrumb navigation component to help users understand and navigate your website's hierarchy.

- **CSS**: `components/nui-breadcrumbs/nui-breadcrumbs.css`
- **JavaScript**: No JavaScript required for basic implementation.

### NUI Spinner/Loader

A customizable spinner/loader component that can be styled using global CSS variables.

- **CSS**: `components/nui-spinner/nui-spinner.css`
- **JavaScript**: `components/nui-spinner/nui-spinner.js`

### NUI Pagination

A pagination component that allows users to navigate through multiple pages.

- **CSS**: `components/nui-pagination/nui-pagination.css`
- **JavaScript**: `components/nui-pagination/nui-pagination.js`

### NUI Toolbar

A customizable toolbar component with buttons for common actions.

- **CSS**: `components/nui-toolbar/nui-toolbar.css`
- **JavaScript**: `components/nui-toolbar/nui-toolbar.js`

### NUI Tabs

A tabbed interface component for organizing content into separate sections.

- **CSS**: `components/nui-tabs/nui-tabs.css`
- **JavaScript**: `components/nui-tabs/nui-tabs.js`

### NUI Dropdown Menus

A dropdown menu component with customizable styles and functionality.

- **CSS**: `components/nui-dropdown/nui-dropdown.css`
- **JavaScript**: `components/nui-dropdown/nui-dropdown.js`

### NUI Cards

A card interface component for organizing content.

- **CSS**: `components/cards/nui-cards.css`
- **JavaScript**: `components/cards/nui-cards.js`

## More Components Coming Soons
- Navigation Bars
- Responsive Grid Layout
- Forms

## Running the Project

To view the components in action, you can run a local web server. Here are a few methods:

1. **Using Python**:
   ```sh
   python -m http.server
   ```
   This will serve the project at `http://localhost:8000`.

2. **Using Node.js (http-server)**:
   - First, install `http-server` globally if you haven't already:
     ```sh
     npm install -g http-server
     ```
   - Then, run the server:
     ```sh
     http-server
     ```
   This will serve the project at `http://localhost:8080`.

3. **Using Live Server (VS Code Extension)**:
   - Install the Live Server extension in VS Code.
   - Right-click `index.html` and select **Open with Live Server**.

## Contributing

We welcome contributions to the NativeUI library. Please see the [Contributing Guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
