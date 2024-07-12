function validatePhone(event) {
    const phoneInput = event.target;
    const phoneValue = phoneInput.value;
    const errorMessage = document.getElementById('error-telefono');

    // Remove all non-numeric characters
    phoneInput.value = phoneValue.replace(/\D/g, '');

    if (phoneInput.value.length > 10) {
        errorMessage.style.display = 'block';
        phoneInput.setCustomValidity("El número de teléfono debe contener exactamente 10 dígitos");
    } else {
        errorMessage.style.display = 'none';
        phoneInput.setCustomValidity("");
    }
}

function validateEmail(event) {
    const emailInput = event.target;
    const emailValue = emailInput.value;
    const errorMessage = document.getElementById('error-email');

    // Check if the email contains '@'
    if (!emailValue.includes('@')) {
        errorMessage.style.display = 'block';
        emailInput.setCustomValidity("El correo electrónico debe contener el símbolo '@'");
    } else {
        errorMessage.style.display = 'none';
        emailInput.setCustomValidity("");
    }
}

window.onload = function() {
    const phoneInput = document.getElementById('telefono');
    phoneInput.addEventListener('input', validatePhone);

    const emailInput = document.getElementById('correo');
    emailInput.addEventListener('input', validateEmail);
}
