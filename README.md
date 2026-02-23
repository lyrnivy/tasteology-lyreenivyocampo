# tasteology-lyreenivyocampo
For orchard frontend test only


Technologies & Techniques
Vite & ES6+: Utilized as the build tool and module bundler for high-performance development and optimized production assets.

BEM Methodology: Followed the Block Element Modifier naming convention (e.g., gallery__item--active) to ensure scalable, readable, and maintainable CSS.
CI/CD Pipeline: Implemented a custom GitHub Actions workflow to automate the build and deployment process to GitHub Pages.
Modular Architecture: Built using a decoupled structure where JavaScript logic (Gallery and Card initializers) and styles are scoped to their respective components.

Features
Gallery Block: A fully functional, interactive gallery component built to meet specific technical requirements for state management and layout, mentioned on this requirements pdf

- Gallery Block
 Clicking an image opens a modal/popup with a larger version of the image.
 Modal has close button and keyboard support (ESC to close).
 Modal has appropriate ARIA roles (e.g., role="dialog") for accessibility.
- Cards Block
 All link clicks in the Cards Block are captured and logged to the console.
 Links use semantic <a> tags with valid href attributes.
 Follow industry standards for link handling (e.g., targe

Responsive Cards: Dynamic card components styled with BEM, optimized for various screen sizes and modern browser standards (phone, tablet, monitor)

Getting Started
To run this project locally, use npm install to fetch dependencies and npm run dev to start the local development server. For production, npm run build generates the optimized files in the dist directory.

