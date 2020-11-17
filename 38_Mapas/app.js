let mapa = new Map();

mapa.set("nombre", "Luis");
mapa.set("edad", 31);

console.log(mapa);
console.log(mapa.size);

console.log(mapa.get("nombre"));
console.log(mapa.get("edad"));

console.log(mapa.has("nombre"));
console.log(mapa.has("apellido"));

console.log("----------------------");

let mapa2 = new Map();

mapa2.set("apellido");
mapa2.set();
mapa2.set({}, { hola: "hola mundo" });
mapa2.set("edad", 40);

console.log(mapa2);
console.log(mapa2.has("apellido"));

console.log("----------------------");

mapa2.delete("edad");
console.log(mapa2);
console.log(mapa2.get("edad"));
console.log(mapa2.has("edad"));

console.log("----------------------");

mapa2.clear();
console.log(mapa2);
