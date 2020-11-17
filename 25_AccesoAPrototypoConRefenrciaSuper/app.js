let persona = {
  saludar() {
    return "Hola que tal";
  },
  mayorDeEdad(edad) {
    if (edad >= 18) {
      return " Eres mayor de edad";
    } else {
      return " Eres menor de edad";
    }
  },
};

let amigo = {
  saludar1() {
    // como se hacia antes
    return Object.getPrototypeOf(this).saludar.call(this) + ", Saludos!!";
  },
  saludar2() {
    // como se hace con ES6
    return super.saludar() + ", SAludos!!!.";
  },
  permiso() {
    return super.mayorDeEdad(11);
  },
};

Object.setPrototypeOf(amigo, persona);
console.log(amigo.saludar1());
console.log(amigo.saludar2());
console.log(amigo.permiso());
