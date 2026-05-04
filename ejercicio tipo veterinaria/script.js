//Declarar arreglo global
let pacientes =[];

//funcion de registrar pacientes 
function registrarMascota() {
    //Captura de datos
    const nombre = document.getElementById("ingresa-nombre").value.trim();
    const especie = document.getElementById("seleccion-especie").value; 
    const edad = parseInt(document.getElementById("ingresa-edad").value);
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
        visorFeedback.textContent = "Edad minima es de 1 año";
        visorFeedback.style.color = "red";
        console.log("Edad paciente menos de un año");
    } else {
        visorFeedback.textContent = "¡Registro exitoso para " + nombre + "!";
        visorFeedback.style.color = "green";
        console.log("Datos validados con exito: nombre, especie y edad");

        //Guardar a los pacientes como objetos
        const nuevaMascota = {
            id: Date.now(),
            nombre: nombre,
            especie: especie,
            edad: edad
        };
        //Agregando paciente al arreglo global
        pacientes.push(nuevaMascota);
        console.log("Paciente guardado como objeto a la lista");
        // Limpiamos los campos para que quede listo para otro registro
        document.getElementById("ingresa-nombre").value = "";
        document.getElementById("ingresa-edad").value = "";
        console.log("Se limpiaron los campos");
        //llamar a la renderizacion
        renderizarLista();
    }
};

function renderizarLista() {
    //Buscar el <ul> por ID y Limpiar con innerHTML
    const listaUI = document.getElementById("lista-pacientes");
    listaUI.innerHTML = "";
    //funcion para cada paciente, recorrer el arreglo
    pacientes.forEach(function(mascota) {
        //Crear <li> 
        const li = document.createElement("li");
        // Formateo del texto informativo
        li.textContent = mascota.nombre + ", " + mascota.especie + ", " + mascota.edad + " años";
        //Crear el botón "Eliminar"
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        //CLick del boton eliminar
        btnEliminar.onclick = function() { 
            eliminarMascota(mascota.id);
        };
        //Hacer el appendChild para elementos de la lista y botones
        li.appendChild(btnEliminar);
        listaUI.appendChild(li);
    });    
};

function eliminarMascota(id) {
    //Usar filter para eliminar registro de mascota según id.
    pacientes = pacientes.filter(function(t){
        return t.id !==id;
    })
    // - Llamar a renderizarLista() para actualizar
    const visorFeedback = document.getElementById("mensaje-feedback");
    visorFeedback.textContent = "Se ha eliminado" + id;
    visorFeedback.style.color = "blue";
    console.log("Se elimino " + id);
    renderizarLista();
};

//Al apretar el boton corre la validacion y registro
document.getElementById("btn-registrar").addEventListener("click", registrarMascota);