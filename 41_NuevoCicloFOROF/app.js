let numeros = [100, 20, 30, 50, 200];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

console.log("--------------------------------");

for (let i in numeros) {
  console.log(numeros[i]);
}

console.log("--------------------------------");

numeros.forEach((numero, key) => {
  console.log(numero);
});

console.log("--------------------------------");

for (let numero of numeros) {
  console.log(numero);
}

console.log("--------------------------------");

let personas = [
  { nombre: "Luis", edad: 20 },
  { nombre: "Maria", edad: 15 },
  { nombre: "Pedro", edad: 27 },
  { nombre: "Juan", edad: 35 },
];

for (let per of personas) {
  console.log(per.nombre, per.edad);
}

console.log("--------------------------------");

let personas2 = new Set([
  { nombre: "Luis", edad: 20 },
  { nombre: "Maria", edad: 15 },
  { nombre: "Pedro", edad: 27 },
  { nombre: "Juan", edad: 35 },
]);

for (let per of personas2) {
  console.log(per.nombre, per.edad);
}

console.log("--------------------------------");

let personas3 = new Map([
  ["nombre", "Luis"],
  ["edad", 20],
]);

for (let per of personas3) {
  console.log(per);
}
