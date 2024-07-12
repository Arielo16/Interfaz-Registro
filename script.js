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

function validarFechas() {
    // Obtener las fechas de emisión y vencimiento del pasaporte
    var diaEmision = document.getElementById("dia_emision").value;
    var mesEmision = document.getElementById("mes_emision").value;
    var anioEmision = document.getElementById("anio_emision").value;
    var diaVencimiento = document.getElementById("dia_vencimiento").value;
    var mesVencimiento = document.getElementById("mes_vencimiento").value;
    var anioVencimiento = document.getElementById("anio_vencimiento").value;

    var fechaEmision = new Date(anioEmision, mesEmision - 1, diaEmision);
    var fechaVencimiento = new Date(anioVencimiento, mesVencimiento - 1, diaVencimiento);

    if (fechaVencimiento <= fechaEmision) {
        alert("La fecha de vencimiento del pasaporte debe ser posterior a la fecha de emisión.");
        return false; 
    }

    return true; 
}
