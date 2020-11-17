// funcion anonima antes del EcmaScript 6

var saludo1 = (function (nombre) {
  return "Hola " + nombre;
})("Luis 1");

console.log(saludo1);

var saludo2 = function (nombre) {
  return "Hola " + nombre;
};

console.log(saludo2("Luis 2"));

// funcion de flecha anonima

let saludo3 = ((nombre) => `Hola ${nombre}`)("Luis 3");

console.log(saludo3);

let saludo4 = (nombre) => `Hola ${nombre}`;

console.log(saludo4("Luis 4"));
