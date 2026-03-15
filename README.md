# Client-Side Form Validation

A professional, real-time form validation project built as part of **The Odin Project** curriculum. This project demonstrates advanced JavaScript logic, Webpack bundling, and mobile-responsive UI design.

## 🚀 Live Demo
Check out the live version here: [https://AmigoParadise.github.io/js-form-validation/](https://AmigoParadise.github.io/js-form-validation/)

## ✨ Features

* **Real-Time Validation**: Instant feedback as the user types using the Constraint Validation API.
* **Custom Error Logic**: Specific validation for Zip Codes (5-digit requirement) and Password matching.
* **Webpack Bundled**: Uses a modular structure with ES6 modules, bundled into an optimized production build.
* **Responsive Design**: A clean, user-friendly interface that highlights errors in red and provides helpful tooltips.
* **Deployment**: Hosted on GitHub Pages directly from the `/dist` production folder.

## 🛠️ Built With

* **JavaScript (ES6+)**: Custom validation logic and DOM manipulation.
* **Webpack**: For bundling modules and minifying assets.
* **HTML5/CSS3**: Semantic structure and custom error-state styling.
* **GitHub Pages**: Automated deployment from the production build.

## 📦 Project Structure

```text
├── src/
│   ├── index.html        # Source HTML template
│   ├── index.js          # Entry point (Event listeners & UI)
│   ├── validation.js     # Pure validation logic (Modules)
│   └── style.css         # Styling for forms and error states
├── dist/                 # Production-ready files (Minified)
│   ├── index.html
│   └── main.js
├── webpack.config.js     # Webpack configuration
└── package.json          # Dependencies and scripts