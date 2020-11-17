var numeros = [50, 5, 20, 10, 7, 2, 70, 9];

// como se hacia antes

var ordenado1 = numeros.sort(function (a, b) {
  return a - b;
});

console.log(ordenado1);

// Emascript 6

let ordenado2 = numeros.sort((a, b) => a - b);

console.log(ordenado2);
