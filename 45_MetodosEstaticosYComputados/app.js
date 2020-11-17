let nombreMetodo = "gritarNombre";

class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
  decirNombre() {
    console.log(`Hola ${this.nombre}`);
  }
  static crear(nombre) {
    return new Persona(nombre);
  }
  [nombreMetodo]() {
    console.log(this.nombre.toUpperCase());
  }
}

let yo = Persona.crear("Luis");

console.log(yo);

yo.decirNombre();

let otraPersona = Persona.crear("Jaime");

console.log(otraPersona);
otraPersona.gritarNombre();
