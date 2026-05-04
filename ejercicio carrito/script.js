const carrito = [
    {nombre: "Teclado mécanico", precio: 35000},
    {nombre: "Mouse gamer", precio: 15000},
    {nombre: "Mousepad", precio: 10000},
];

function calcularTotal() {
    let subtotal = 0;
    carrito.forEach(function(producto) { 
        subtotal += producto.precio;
    });
    return subtotal;
}

function aplicarDescuento(monto) {
    return monto * 0.90;
};

function renderizarCarrito() {
    const listaUI = document.getElementById("lista-carrito");
    const visorTotal = document.getElementById("total-final");

    listaUI.innerHTML = "";

    carrito.forEach(function(elemento) {
        const nodoLi = document.createElement("li");
        nodoLi.textContent = elemento.nombre + " - $" + elemento.precio;
        listaUI.appendChild(nodoLi);
    });

    const subtotal = calcularTotal();
    const totalFinal = aplicarDescuento(subtotal);
    visorTotal.textContent = "total final con descuento: $" + totalFinal;
}

renderizarCarrito();
