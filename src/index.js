import './style.css';

const form = document.getElementById('registration-form');
const inputs = form.querySelectorAll('input');

/**
 * Validates the password match and sets custom validity
 */
function validatePasswordMatch() {
    const password = document.getElementById('password');
    const confirm = document.getElementById('confirm-password');

    if (password.value !== confirm.value) {
        confirm.setCustomValidity("Passwords do not match");
    } else {
        confirm.setCustomValidity("");
    }
}

/**
 * Updates the UI with error messages for a specific input
 */
const updateError = (input) => {
    const errorSpan = input.nextElementSibling;

    if (input.validity.valid) {
        errorSpan.textContent = '';
        errorSpan.className = 'error-message';
    } else {
        // Handle Zip Code specifically with RegEx
        if (input.id === 'zip' && !/^\d{5}$/.test(input.value)) {
            errorSpan.textContent = 'Zip code must be exactly 5 digits.';
        }
        // Handle Password Match via the custom validity message
        else if (input.id === 'confirm-password' && input.validationMessage) {
            errorSpan.textContent = input.validationMessage;
        }
        // Handle built-in HTML5 validation errors
        else if (input.validity.valueMissing) {
            errorSpan.textContent = `You must enter a ${input.name}.`;
        } else if (input.validity.typeMismatch) {
            errorSpan.textContent = `This must be a valid ${input.type}.`;
        } else if (input.validity.tooShort) {
            errorSpan.textContent = `Too short! Min length is ${input.minLength}.`;
        }

        errorSpan.className = 'error-message active';
    }
};

// Listeners for all inputs
inputs.forEach(input => {
    // Validating as you type
    input.addEventListener('input', () => {
        if (input.id === 'password' || input.id === 'confirm-password') {
            validatePasswordMatch();
        }
        updateError(input);
    });

    // Validating when leaving the field (the "blur" requirement)
    input.addEventListener('blur', () => {
        updateError(input);
    });
});

// Final form submission check
form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
        event.preventDefault(); // Stop submission
        // Show all errors immediately to guide the user
        inputs.forEach(input => updateError(input));
        alert("Please fix the errors before submitting!");
    } else {
        event.preventDefault(); // Still prevent real submission for this assignment
        alert("High Five! ✋ Form submitted successfully.");
    }
});