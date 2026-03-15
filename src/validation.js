export const validatePasswordMatch = (password, confirm) => {
    if (password.value !== confirm.value) {
        confirm.setCustomValidity("Password do not match");
    } else {
        confirm.setCustomValidity("");
    }
};

export const getErrorMessage = (input) => {
    if (input.validity.valueMissing) {
        return `You must enter a ${input.name}.`;
    }
    if (input.validity.typeMismatch) {
        return `This must be a valid ${input.type}.`;
    }
    if (input.validity.tooShort) {
        return `Too short! Min length is ${input.minLength}.`;
    }
    if (input.id === 'zip' && !/^\d{5}$/.test(input.value)) {
        return 'Zip code must be exactly 5 digits.';
    }
    if (input.id === 'confirm-password' && input.validationMessage) {
        return input.validationMessage;
    }
    return '';
};