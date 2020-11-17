let Persona = class {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  queHaces(accion) {
    return `${this.nombre} ${this.apellido} esta : ${accion}`;
  }
};

let persona1 = new Persona("Luis", "Molina");

console.log(persona1);
console.log(persona1.nombre);
console.log(persona1.apellido);
console.log(persona1.queHaces("Estudiando"));

console.log(typeof persona1);
console.log(persona1 instanceof Persona);
