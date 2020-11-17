// Asi se hacia antes (ES5)

function Persona(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.queHaces1 = function (accion) {
    return `${this.nombre} ${this.apellido} esta : ${accion}`;
  };
}

let persona1 = new Persona("Luis", "Molina");

console.log(persona1);
console.log(persona1.nombre);
console.log(persona1.apellido);
console.log(persona1.queHaces1("trabajando"));

Persona.prototype.queHaces2 = function (accion) {
  return `${this.nombre} ${this.apellido} esta : ${accion}`;
};

console.log(persona1.queHaces2("Comiendo"));

console.log(persona1 instanceof Persona);
console.log(persona1 instanceof Object);

console.log("----------------------------------------");

// Asi se declara una clase en (ES6)

class People {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  quehaces(accion) {
    return `${this.nombre} ${this.apellido} esta : ${accion}`;
  }
}

let people1 = new People("Pepe", "Perez");

console.log(people1);
console.log(people1.nombre);
console.log(people1.apellido);
console.log(people1.quehaces("Viajando"));

console.log(people1 instanceof People);
console.log(people1 instanceof Object);

console.log(typeof People);
console.log(typeof People.prototype.quehaces);
