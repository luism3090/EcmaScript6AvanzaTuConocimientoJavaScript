var objeto = {
  c: 1,
  0: 1,
  x: 1,
  15: 1,
  r: 1,
  3: 1,
  b: 1,
};

objeto.d = 1;
objeto["2"] = 1;
objeto["a"] = 1;

console.log(Object.getOwnPropertyNames(objeto));
console.log(Object.keys(objeto));
console.log(JSON.stringify(objeto));
