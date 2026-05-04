//Al apretar el boton
document.getElementById("btn-registrar").addEventListener("click", function() {
    //Captura de datos
    const nombre = document.getElementById("nombre").value.trim();
    const edad = parseInt(document.getElementById("edad").value);
    const mail = document.getElementById("mail").value.trim();
    //Parrafo para el mensaje
    const visorFeedback = document.getElementById("mensaje-feedback");

    // Validacion: El texto no encaja, es error
    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //Chequeo
    if (nombre === "" || mail === "" || isNaN(edad)) {
        // alert("Error: todos los campos son obligatorios.");
        visorFeedback.textContent = "Error: Todos los campos son obligatorios.";
        visorFeedback.style.color = "red";
        console.log("Usuario dejo vacio alguno de los campos");
    } else if (!soloLetras.test(nombre)) {
        // alert("Error: El nombre solo debe contener letras." );
        visorFeedback.textContent = "Error: El nombre solo debe tener letras.";
        visorFeedback.style.color = "red";
        console.log("Usuario uso carcateres distintos a letras");
    } else if (edad < 18) {
        // alert("Error: Debes ser mayor de 18 años");
        visorFeedback.textContent = "Error: Debes ser mayor de 18 años.";
        visorFeedback.style.color = "red";
        console.log("Usuario es menor de edad");
    } else if (!formatoCorreo.test(mail)) {
        // alert("Error: el formato del correo no es válido (ej. usuario@dominio.com");
        visorFeedback.textContent = "Error: El formato de correo no es válido.";
        visorFeedback.style.color = "red";
        console.log("Usuario no escribio un mail valido")
    } else {
        visorFeedback.textContent = "¡Registro exitoso para " + nombre + "!";
        visorFeedback.style.color = "green";
        console.log("Datos validados con exito, nombre, edad, correo");

        // Limpiamos los campos para que quede listo para otro registro
        document.getElementById("nombre").value = "";
        document.getElementById("edad").value = "";
        document.getElementById("mail").value = "";
        console.log("Se limpiaron los campos");
    }
});
