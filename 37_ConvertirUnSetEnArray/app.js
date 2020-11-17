let numeros = [1, 2, 3, 4, 5, 6, 7];
console.log(numeros);

let setNumeros = new Set(numeros);
console.log(setNumeros);

let arrayNumeros = [...setNumeros];
console.log(arrayNumeros);

console.log("-----------------------------------------");

let numeros2 = [1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 4, 4, 1, 2, 2, 2, 3];
console.log(numeros2);

let arrayNumeros2 = eliminaDuplicados(numeros2);
console.log(arrayNumeros2);

function eliminaDuplicados(numeros2) {
  let setNumeros2 = new Set(numeros2);
  return [...setNumeros2];
}
