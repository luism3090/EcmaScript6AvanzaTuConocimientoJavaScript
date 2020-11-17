let texto = "Hola ";

console.log(texto.repeat(2));

console.log("0".repeat(2));

const ESPACIOS = 12;

let nombres = ["Luis", "Juan", "Ana"];
let telefonos = ["11223344", "55667788", "99887766"];

for (i in nombres) {
  let dif = ESPACIOS - nombres[i].length;
  console.log(nombres[i] + " ".repeat(dif) + "|" + telefonos[i]);
}
