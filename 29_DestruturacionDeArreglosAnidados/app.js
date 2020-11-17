let colores1 = ["azul", ["verde", "blanco", "rojo"], "morado", "amarillo"];

let [color1, [color2, color3], , colorUltimo] = colores1;

console.log(color1);
console.log(color2);
console.log(color3);
console.log(colorUltimo);

console.log("------------------------------------------");

let colores2 = ["azul", "verde", "blanco", "rojo", "morado", "amarillo"];

let [color_1, color_2, ...demasColores] = colores2;

console.log(color_1);
console.log(color_2);
console.log(demasColores);
