function creadorClases(definicionClase) {
  return new definicionClase();
}

let objeto = creadorClases(
  class {
    constructor() {
      this.nombre = undefined;
      this.edad = 30;
    }
    saludar() {
      console.log("Hola!");
    }
  }
);

objeto.saludar();

// otro ejemplo de clase

console.log("------------------------------------");

class Cuadrado {
  constructor(lado) {
    this.lado = lado;
  }

  getArea() {
    return this.lado * this.lado;
  }
}

function imprimirCuadrado(cuadrado) {
  if (!cuadrado instanceof Cuadrado) {
    console.error("El parametro enviado no es un cuadrado");
    return;
  }

  console.log(cuadrado.getArea());
}

let cuadri = new Cuadrado(10);
imprimirCuadrado(cuadri);
