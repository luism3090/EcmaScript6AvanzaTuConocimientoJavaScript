// asi se hacia antes

function saludo1(mensaje, tiempo) {
  mensaje = mensaje || "Hola que tal 1";
  tiempo = typeof tiempo !== "undefined" ? tiempo : 10;
  console.log(mensaje);
  console.log(tiempo);
}

saludo1();
saludo1("Hola mundo 1", 20);

// asi es como se hace ahora con el ecmascript 6

function saludo2(mensaje = "Hola a todos 2", tiempo = 50) {
  console.log(mensaje);
  console.log(tiempo);
}

saludo2();
saludo2("Hola mundo 2", 25);

// tambien se pueden pasar funciones

function saludo3(fn = fnTemporal1) {
  fn();
}

function fnTemporal1() {
  console.log("Hola a todos FnT1 3");
}

function fnTemporal2() {
  console.log("Hola a todos FnT2 3");
}

saludo3();
saludo3(fnTemporal2);

// tambien se pueden pasar objetos

function saludo4(
  persona = { nombre: "Ana Luna" },
  lenguajes = ["Perl", "C#", "C++"]
) {
  console.log(persona);
  console.log(lenguajes);
}

let persona = {
  nombre: "Luis Molina",
};

let lenguajes = ["Php", "Java", "Javascript"];

saludo4();
saludo4(persona, lenguajes);
