//Declarar arreglo global
let pacientes =[];

//funcion de registrar pacientes 
function registrarMascota() {
    //Captura de datos
    const nombre = document.getElementById("ingresa-nombre").value.trim();
    const especieAnimal = document.getElementById("") //como se captura de una lista desplegable?
    const edad = parseInt(document.getElementById("edad").value);
    //Parrafo para el mensaje
    const visorFeedback = document.getElementById("mensaje-feedback");

    // Validacion: El texto no encaja, es error
    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    //Chequeo
    if (nombre === "" || isNaN(edad)) {
        visorFeedback.textContent = "Error: Todos los campos son obligatorios.";
        visorFeedback.style.color = "red";
        console.log("Usuario dejo vacio alguno de los campos");
    } else if (!soloLetras.test(nombre)) {
        visorFeedback.textContent = "Error: El nombre solo debe tener letras.";
        visorFeedback.style.color = "red";
        console.log("Usuario uso carcateres distintos a letras");
    } else if (edad <= 0) {
        // alert("Error: Debes ser mayor de 18 años");
        visorFeedback.textContent = "Edad minima es de 1 año";
        visorFeedback.style.color = "red";
        console.log("Edad paciente menos de un año");
    } else {
        visorFeedback.textContent = "¡Registro exitoso para " + nombre + "!";
        visorFeedback.style.color = "green";
        console.log("Datos validados con exito: nombre, especie y edad");

        // Limpiamos los campos para que quede listo para otro registro
        document.getElementById("ingresa-nombre").value = "";
        document.getElementById("ingresa-edad").value = "";
        console.log("Se limpiaron los campos");
    }
};

function renderizarLista() {

};

function eliminarMascota() {

};

//Al apretar el boton corre la validacion y registro
document.getElementById("btn-registrar").addEventListener("click", registrarMascota);