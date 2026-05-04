let tareas = [];

function crearTarea() {
    const input = document.getElementById("input-tarea");
    const texto = input.value.trim();

    if (texto === "") return;
    
    const nuevaTarea = {
        id: Date.now(), texto: texto
    };

    tareas.push(nuevaTarea);
    input.value = "";
    leerTareas();
};

function leerTareas() {
    const listaUI = document.getElementById("lista-tareas");
    listaUI.innerHTML = "";

    tareas.forEach(function(item) {
        const li = document.createElement("li");
        li.textContent = item.texto + " ";
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";

        btnEliminar.onclick = function() {
        eliminarTarea(item.id);
    };

    li.appendChild(btnEliminar);
    listaUI.appendChild(li);
    });
};

function eliminarTarea(id) {
    tareas = tareas.filter(function(t) {
        return t.id !==id;
    })
    leerTareas();
};

document.getElementById("btn-agregar").addEventListener("click", crearTarea);

