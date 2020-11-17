/*

Caracteristicas de las funciones del flecha

1. No hay creacion de : this, super, arguments y new.target

2. No puede ser llamadas con : New

3. No tiene prototipos : prototype

4. No pueden cambiar el valor : This

5. No hay un objeto : arguments

6. No pueden tener nombres de parámetros duplicados


*/

var miFunction1 = function (valor) {
  return valor;
};

let miFunction2 = (valor) => valor;

console.log(miFunction1("Hola1"));
console.log(miFunction2("Hola2"));

// -------------------------------------
console.log("---------------------------------");

var sumar1 = function (n1, n2) {
  return n1 + n2;
};

let sumar2 = (n1, n2) => n1 + n2;

console.log(sumar1(5, 5));
console.log(sumar2(5, 5));

// ----------------------------------------
console.log("---------------------------------");

var saludar1 = function () {
  return "Hola mundo 1";
};

let saludar2 = () => "Hola mundo 2";

console.log(saludar1());
console.log(saludar2());

// ----------------------------------------
console.log("---------------------------------");

var saludarPersona1 = function (nombre) {
  var salida = "Hola " + nombre;
  return salida;
};

let saludarPersona2 = (nombre) => {
  let salida = `Hola ${nombre}`;
  return salida;
};

console.log(saludarPersona1("Luis"));
console.log(saludarPersona2("Luis"));

// ----------------------------------------
console.log("---------------------------------");

var obtenerLibro1 = function (id) {
  return {
    id: id,
    nombre: "Harry Potter",
  };
};

let obtenerLibro2 = (id) => ({ id: id, nombre: "Harry Potter" });

let obtenerLibro3 = (id) => {
  return { id: id, nombre: "Harry Potter" };
};

console.log(obtenerLibro1(1));
console.log(obtenerLibro2(2));
console.log(obtenerLibro3(3));

// ----------------------------------------
console.log("---------------------------------");

var animales1 = function () {
  return ["Perro", "Gato", "Cerdo", "Vaca", "Pez"];
};

console.log(animales1());

let animales2 = () => ["Perro", "Gato", "Cerdo", "Vaca", "Pez"];

console.log(animales2());
