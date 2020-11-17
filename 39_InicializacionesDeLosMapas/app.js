let miMapa = new Map([
  ["nombre", "Luis"],
  ["edad", 30],
  [null, undefined],
  [undefined, 123],
  [NaN, "gato"],
  ["", "perrito"],
  ["x", { a: "b" }],
]);

console.log(miMapa);
console.log(miMapa.get(null));
console.log(miMapa.get(undefined));
console.log(miMapa.get(NaN));
console.log(miMapa.get(""));
console.log(miMapa.get("x"));
console.log(miMapa.get("x").a);
