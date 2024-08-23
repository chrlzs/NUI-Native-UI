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
│   ├── button/
│   │   ├── button.css
│   │   ├── button.html
│   │   └── button.js
│   ├── modal/
│   │   ├── modal.css
│   │   ├── modal.html
│   │   └── modal.js
│   ├── tooltip/
│   │   ├── tooltip.css
│   │   ├── tooltip.html
│   │   └── tooltip.js
│   ├── accordion/
│   │   ├── accordion.css
│   │   ├── accordion.html
│   │   └── accordion.js
│   ├── carousel/
│   │   ├── carousel.css
│   │   ├── carousel.html
│   │   └── carousel.js
│   ├── alert/
│   │   ├── alert.css
│   │   ├── alert.html
│   │   └── alert.js
│   ├── progress-bar/
│   │   ├── progress-bar.css
│   │   ├── progress-bar.html
│   │   └── progress-bar.js
│   ├── breadcrumbs/
│   │   ├── breadcrumbs.css
│   │   ├── breadcrumbs.html
│   └── spinner/
│       ├── spinner.css
│       ├── spinner.css
│       └── spinner.html
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

### Button

Standard button implementation using native HTML and CSS.

- **HTML**: `components/button/button.html`
- **CSS**: `components/button/button.css`
- **JavaScript**: `components/button/button.js`

### Modal

A modal dialog that can be triggered programmatically or via user interaction.

- **HTML**: `components/modal/modal.html`
- **CSS**: `components/modal/modal.css`
- **JavaScript**: `components/modal/modal.js`

### Tooltip

Tooltip implementation that can be shown/hidden programmatically.

- **HTML**: `components/tooltip/tooltip.html`
- **CSS**: `components/tooltip/tooltip.css`
- **JavaScript**: `components/tooltip/tooltip.js`

### Accordion

An accordion component that can expand and collapse sections of content.

- **HTML**: `components/accordion/accordion.html`
- **CSS**: `components/accordion/accordion.css`
- **JavaScript**: `components/accordion/accordion.js`

### Carousel/Slider

A responsive carousel/slider component that cycles through images or content.

- **HTML**: `components/carousel/carousel.html`
- **CSS**: `components/carousel/carousel.css`
- **JavaScript**: `components/carousel/carousel.js`

The Carousel component includes controls for navigating between slides and is responsive, ensuring that images are properly displayed across different screen sizes.

### Alert/Notification

A customizable alert/notification component that can be closed by the user or triggered programmatically.

- **HTML**: `components/alert/alert.html`
- **CSS**: `components/alert/alert.css`
- **JavaScript**: `components/alert/alert.js`

The Alert/Notification component is flexible and allows for dynamic messages to be displayed to users.

### Progress Bar

A customizable progress bar component that can be updated programmatically.

- **HTML**: `components/progress-bar/progress-bar.html`
- **CSS**: `components/progress-bar/progress-bar.css`
- **JavaScript**: `components/progress-bar/progress-bar.js`

The Progress Bar component allows for dynamic updates to visually represent progress in tasks.

### Breadcrumbs

A breadcrumb navigation component to help users understand and navigate your website's hierarchy.

- **HTML**: `components/breadcrumbs/breadcrumbs.html`
- **CSS**: `components/breadcrumbs/breadcrumbs.css`
- **JavaScript**: No JavaScript required for basic implementation.

### Spinner/Loader

A customizable spinner/loader component that can be styled using global CSS variables.

- **HTML**: `components/spinner/spinner.html`
- **CSS**: `components/spinner/spinner.css`
- **JavaScript**: `components/spinner/spinner.js`

### Pagination

A pagination component that allows users to navigate through multiple pages.

- **HTML**: `components/pagination/pagination.html`
- **CSS**: `components/pagination/pagination.css`
- **JavaScript**: `components/pagination/pagination.js`

### Toolbar

A customizable toolbar component with buttons for common actions.

- **HTML**: `components/toolbar/toolbar.html`
- **CSS**: `components/toolbar/toolbar.css`
- **JavaScript**: `components/toolbar/toolbar.js`

## More Components Coming Soon
- ~~Carousel/Slider~~
- ~~Alert/Notification~~
- ~~Progress Bar~~
- ~~Breadcrumbs~~
- ~~Spinner/Loader~~
- ~~Pagination~~
- ~~Toolbars~~
- Forms
- Tabs
- Dropdown Menus
- Cards
- Navigation Bars
- Responsive Grid Layout

## Running the Project

To view the components in action, you can run a local web server. Here are a few methods to do that:

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

Contributions are welcome! Please open an issue or submit a pull request if you have suggestions or improvements.

## License

This project is licensed under the MIT License. See the [`LICENSE`](./LICENSE) file for details.

