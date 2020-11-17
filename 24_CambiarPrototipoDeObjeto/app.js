let gato = {
  sonido() {
    console.log("Miau");
  },
  maullido() {
    console.log("!MIauuuuu!");
  },
};

let perro = {
  sonido() {
    console.log("Guau!");
  },
};

console.log(gato);
gato.sonido();
gato.maullido();

console.log("---------------------------------");

let angora1 = Object.create(gato);
console.log(Object.getPrototypeOf(angora1) === gato);
console.log(angora1);
angora1.sonido();
angora1.maullido();

console.log("---------------------------------");

let angora2 = gato;
console.log(Object.getPrototypeOf(angora2) === gato);
console.log(angora2);
angora2.sonido();
angora2.maullido();

console.log("-------------usando setPrototypeOf ES6--------------------");

let angora3 = Object.create(gato);
Object.setPrototypeOf(angora3, perro);
console.log(Object.getPrototypeOf(angora3) === gato);
angora3.sonido();
