class Rectangulo {
  constructor(alto, largo) {
    this.alto = alto;
    this.largo = largo;
  }

  getArea() {
    return this.alto * this.largo;
  }
}

let rectangulo = new Rectangulo(3, 2);

console.log(rectangulo);
console.log(rectangulo.getArea());

class Cuadrado extends Rectangulo {
  constructor(alto) {
    super(alto, alto);
  }
}

let cuadrado = new Cuadrado(3);

console.log(cuadrado);
console.log(cuadrado.getArea());

console.log("----------------------------------");

class Gato {
  constructor(edad, sexo) {
    this.edad = edad;
    this.sexo = sexo;
  }

  getQueHaceElgato() {
    if (this.edad > 3) {
      return "El gato esta en celo";
    } else {
      return "El gato esta durmiendo";
    }
  }
}

class Angora extends Gato {
  constructor(edad, colores, nombre, sexo) {
    super(edad, sexo);
    this.colores = colores;
    this.nombre = nombre;
  }

  getSaludarAngora() {
    return `Hola ${this.nombre} `;
  }
}

let gato1 = new Angora(3, "blanco y negro", "Kati", "Hembra");

console.log(gato1);
console.log(gato1.getSaludarAngora());
console.log(gato1.getQueHaceElgato());
console.log(gato1.edad);
console.log(gato1.sexo);
console.log(gato1.colores);
console.log(gato1.nombre);

console.log(gato1 instanceof Angora);
console.log(gato1 instanceof Gato);
