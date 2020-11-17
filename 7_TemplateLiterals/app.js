let nombre = "Maria";
let apellido = "Perez";

let nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

// -------------------------------------------------------

let nombreCompleto2 = `El nombre completo es ${nombre} ${apellido} `;

console.log(nombreCompleto2);

function obtenerNombre() {
  return "Luis Molina";
}

let nombreCompleto3 = `El nombre completo es ${obtenerNombre()} ${4 + 3}`;
console.log(nombreCompleto3);

let multilinea = `<h1 class="algo">${nombre}</h1>
            <p>Hola mundo ${apellido}</p>
            I'm ${obtenerNombre()}`;

console.log(multilinea);
