class Gato {
  constructor(edad, sexo) {
    this.edad = edad;
    this.sexo = sexo;
  }

  getQueHaceElgato() {
    if (this.edad > 3) {
      return "El gato esta en celo - En clase Gato";
    } else {
      return "El gato esta durmiendo - En clase Gato";
    }
  }
}

class Angora extends Gato {
  constructor(edad, colores, nombre, sexo) {
    super(edad, sexo, nombre);
    this.colores = colores;
    this.nombre = nombre;
  }

  getSaludarAngora() {
    return `Hola ${this.nombre} `;
  }

  getQueHaceElgato() {
    return super.getQueHaceElgato();
  }
}

let gato1 = new Angora(5, "blanco y negro", "Kati", "Hembra");

console.log(gato1);
console.log(gato1.getSaludarAngora());
console.log(gato1.getQueHaceElgato());
