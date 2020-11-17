let id = Symbol.for("id");
let activo = Symbol.for("activo");

let persona = {
  [id]: "123",
  [activo]: true,
  ["codigo"]: "XY123",
  nombre: "Luis",
  apellido: "Molina",
  edad: 30,
};

console.log(Object.keys(persona));

console.log("-------------------------------");

for (key in persona) {
  console.log(key, persona[key]);
}

console.log("-------------------------------");

let simbolos = Object.getOwnPropertySymbols(persona);
console.log(simbolos);

for (i in simbolos) {
  console.log(simbolos[i], Symbol.keyFor(simbolos[i]));
}
