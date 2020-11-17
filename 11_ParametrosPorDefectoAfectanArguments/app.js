function sumar1(n1, n2) {
  console.log(arguments);
  console.log(n1);
  console.log(n2);
  console.log(arguments[4]);
}

sumar1(4, 6, 10, "Luis", { a: true, b: false });

// si no se le pasa parametros a la funcion arguments no contiene valores

function sumar2(n1, n2) {
  console.log(arguments);
}

sumar2();
