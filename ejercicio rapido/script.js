document.getElementById("btn-chequear").addEventListener('click', function() {
    const edad = parseInt(document.getElementById("edad_usuario").value);
    const visor = document.getElementById("mensaje");

    switch(true) {
    case isNaN(edad):
        visor.textContent = "Por favor ingrese un número entero";
        visor.style.color = "red";
        break;

    case edad < 0:
        visor.textContent = "Ingrese un numero positivo";
        visor.style.color = "purple";    
        break;
        
    case edad < 18:
        visor.textContent = "Debe ser mayor de edad para ingresar";
        visor.style.color = "orange";
        break;
    default:
        visor.textContent = "Acceso permitido.";
        visor.style.color = "green";
}
});

