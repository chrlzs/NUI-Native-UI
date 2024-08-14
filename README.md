# NativeUI

NativeUI is a front-end component library built entirely with native HTML, CSS, and JavaScript. It focuses on providing a solid foundation of reusable components without relying on any third-party frameworks or libraries. This library is ideal for projects that prioritize simplicity, performance, and a minimalistic approach.

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
│   └── tooltip/
│       ├── tooltip.css
│       ├── tooltip.html
│       └── tooltip.js
├── dist/
│   └── (compiled files, if any)
├── docs/
│   └── (documentation for components)
├── index.html
├── README.md
└── LICENSE
```

- **components/**: Contains individual component folders, each with its own HTML, CSS, and JS files.
- **dist/**: Intended for compiled or minified files.
- **docs/**: Contains documentation and usage examples for each component.
- **index.html**: A demo page to showcase the components in action.
- **README.md**: This file.
- **LICENSE**: The project license.

## Components

### Button

A simple, customizable button component.

- **HTML**: `components/button/button.html`
- **CSS**: `components/button/button.css`
- **JavaScript**: `components/button/button.js`

### Modal

A flexible modal dialog component.

- **HTML**: `components/modal/modal.html`
- **CSS**: `components/modal/modal.css`
- **JavaScript**: `components/modal/modal.js`

### Tooltip

A lightweight tooltip component.

- **HTML**: `components/tooltip/tooltip.html`
- **CSS**: `components/tooltip/tooltip.css`
- **JavaScript**: `components/tooltip/tooltip.js`

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

