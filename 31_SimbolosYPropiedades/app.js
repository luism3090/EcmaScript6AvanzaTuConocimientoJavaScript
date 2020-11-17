let primerNombre = Symbol("first name");
let segundoNombre = Symbol();

let persona = {
  [segundoNombre]: "Molina",
};

persona[primerNombre] = "Luis";
persona.direccion = "Calle 13";

console.log(persona[primerNombre]);
console.log(persona[segundoNombre]);
console.log(persona.direccion);
console.log(primerNombre);
console.log(segundoNombre);

console.log("-------------------------------------------");

let simbolo1 = Symbol("simbolo");
let simbolo2 = Symbol("simbolo");

console.log(simbolo1 == simbolo2);
console.log(simbolo1 === simbolo2);
console.log(Object.is(simbolo1, simbolo2));

console.log(typeof primerNombre);
