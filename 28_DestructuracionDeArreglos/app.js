let frutas = ["Banano", "Pera", "Uva"];

let [fruta1, fruta2, fruta3] = frutas;

console.log(fruta1);
console.log(fruta2);

console.log("----------------------------------------");

let [, , ultimaFruta] = frutas;

console.log(ultimaFruta);

console.log("----------------------------------------");

let otraFruta = "Manzana";

[otraFruta] = frutas;

console.log(otraFruta);

console.log("----------------------------------------");

let a = 1;
let b = 2;
let temp;

temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);

[a, b] = [b, a];

console.log(a);
console.log(b);
