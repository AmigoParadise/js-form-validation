// src/index.js
import './style.css';
import { validatePasswordMatch, getErrorMessage } from './validation.js';

const form = document.getElementById('registration-form');
const inputs = form.querySelectorAll('input');

const updateUI = (input) => {
    const errorSpan = input.nextElementSibling;
    const message = getErrorMessage(input);

    if (input.validity.valid) {
        errorSpan.textContent = '';
        errorSpan.className = 'error-message';
    } else {
        errorSpan.textContent = message;
        errorSpan.className = 'error-message active';
    }
};

inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.id === 'password' || input.id === 'confirm-password') {
            const pass = document.getElementById('password');
            const conf = document.getElementById('confirm-password');
            validatePasswordMatch(pass, conf);
        }
        updateUI(input);
    });

    input.addEventListener('blur', () => updateUI(input));
});

form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
        e.preventDefault();
        inputs.forEach(input => updateUI(input));
        alert("Please fix the errors!");
    } else {
        e.preventDefault();
        alert("High Five! ✋");
    }
});