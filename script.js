alert("Bienvenido a tienda Sport");

class Producto{
    constructor(id, nombreProducto, precio){
        this.id = id;
        this.nombreProducto = nombreProducto;
        this.precio = precio;
    }
}

const productos = [];

productos.push(new Producto(199, "Zapatilla", 21000));
productos.push(new Producto(234, "Remera", 11000));
productos.push(new Producto(351, "Short", 8000));
productos.push(new Producto(422, "Gorra", 6000));

console.log(productos);

let nuevoIngreso = 0;
let ingresos = parseInt(prompt("Ingrese la cantidad de productos que quiere agregar"));

while(nuevoIngreso < ingresos){
    let entrada = new Producto(Number(prompt("Ingrese el id del producto")), prompt("Ingresa el nombre del producto"), Number(prompt("Ingrese el precio del producto")));
    productos.push(entrada);
    nuevoIngreso++;
}
console.log(productos);


function filtrarPorPrecio(precio){
    return productos.filter(propiedades => propiedades.precio <= Number(precio));
}

let precio = prompt("Ingrese hasta qué valor de producto quiere ver");

alert(JSON.stringify(filtrarPorPrecio(precio)));