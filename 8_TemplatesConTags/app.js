let unidades = 5,
  costo_unitario = 10;

let mensaje = `${unidades} lapices cuestan ${unidades * costo_unitario} pesos`;

console.log(mensaje);

// -----------------------------------

function etiqueta(literales, ...substituciones) {
  let resultado = "";

  console.log(literales);
  console.log(substituciones);

  for (let i = 0; i < substituciones.length; i++) {
    resultado += literales[i];
    resultado += substituciones[i];
  }

  return resultado;
}

let mensaje2 = etiqueta`${unidades} lapices cuestan ${
  unidades * costo_unitario
} pesos`;

console.log(mensaje2);
