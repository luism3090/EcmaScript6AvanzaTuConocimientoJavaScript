// REST : Junta los elementos en un arreglo

// SPREAD : Esparce los elementos como si fueran enviados de forma separada

// -------------------------------------------------------------

// Ejemplo REST

function saludarREST(saludo, ...nombres) {
  console.log(saludo);
  console.log(nombres);
  for (i in nombres) {
    console.log(`${saludo} ${nombres[i]} `);
  }
}

saludarREST("Hola", "Fernando", "Maria", "Susana");

// Ejemplo Spread

console.log("--------------------------------------");

function saludarSpread(saludo, ...nombres) {
  console.log(saludo);
  console.log(nombres);
  console.log(`${saludo} ${nombres}.`);
}

let personas = ["Fernando", "Maria", "Susana"];
saludarSpread("Hola", personas);

// Otro ejemplo con arreglos uso mas comun

console.log("--------------------------------------");

let frutas1 = ["Mango", "Melon", "Manzana"];
let frutas2 = ["Sandia", "Piña", ...frutas1, "Limón", "Uva"];

console.log(frutas2);

// otro ejemplo con arreglo de objetos

console.log("--------------------------------------");

let tecnologia = [
  {
    nombre: "Computadora",
    color: "Gris",
    precio: 9800,
    stock: 20,
  },
  {
    nombre: "Redmi note 9",
    color: "Verde",
    precio: 4700,
    stock: 60,
  },
];

let productos = [
  {
    nombre: "Cama",
    nolor: "roja",
    precio: 3500,
  },
  {
    nombre: "Mesa",
    color: "Cafe",
    precio: 1000,
  },
  {
    nombre: "Sillon",
    color: "Negro",
    precio: 2300,
  },
  ...tecnologia,
];

console.log(productos);
