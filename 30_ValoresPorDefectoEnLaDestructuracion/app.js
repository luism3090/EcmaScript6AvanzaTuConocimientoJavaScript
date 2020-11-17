let frutas = ["Mango", "Pera"];

let [fruta1, fruta2 = "Piña", fruta3 = "Manzana", fruta4] = frutas;

console.log(fruta1);
console.log(fruta2);
console.log(fruta3);
console.log(fruta4);

console.log("--------------------------------------------");

let personas = {
  nombre: "Luis",
  apellido: "Molina",
};

let { nombre, apellido = "Moreno", edad = 25, direccion } = personas;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(direccion);
