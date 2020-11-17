// Metodos de objeto de JavaScript ES5

let persona = {
  nombre: "Luis",
  apellido: "Molina",
  lenguaje: "ES",
};

console.log(persona);
// cambia una propiedad
Object.defineProperty(persona, "lenguaje", { value: "NO" });
console.log(persona);

console.log("------------------------------------------------");

// Regresa una arreglo de propiedades

console.log(Object.getOwnPropertyNames(persona));
//Object.defineProperty(persona, "lenguaje", { enumerable: false });

// regresa un arreglo enumerable de propiedades
console.log(Object.keys(persona));

console.log("------------------------------------------------");

// Añadiendo una nueva propiedad

Object.defineProperty(persona, "year", { value: "2008" });

console.log(persona);

console.log("------------------------------------------------");

// Definiendo un Getter

Object.defineProperty(persona, "NombreCompleto", {
  get: function () {
    return this.nombre + " " + this.apellido;
  },
});

console.log(persona.NombreCompleto);

console.log("-----------------El ejemplo del curso---------------");

// ---------------------------------------

function mezclar(objReceptor, objDonador) {
  console.log(objDonador);
  console.log(Object.keys(objDonador));
  Object.keys(objDonador).forEach(function (key) {
    objReceptor[key] = objDonador[key];
  });
  return objReceptor;
}

var objReceptor = {};
var objDonador = {
  nombre: "mi-archivo.js",
  lineas: 300,
};

console.log(mezclar(objReceptor, objDonador));

console.log("-----------------El mismo ejemplo usando assing---------------");

console.log(Object.assign(objReceptor, objDonador));
