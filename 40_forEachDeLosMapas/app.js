let mapa = new Map([
  ["nombre", "Luis"],
  ["edad", 30],
]);

mapa.forEach((valor, llave, mapaOriginal) => {
  console.log(`Llave: ${llave}, Valor: ${valor} `);
  console.log(mapaOriginal);
});
