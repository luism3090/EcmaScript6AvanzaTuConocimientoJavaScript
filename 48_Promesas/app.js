function tareaAsincrona() {
  let promesa = new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Proceso Asincrono terminado");
      resolve();
    }, 1300);
  });
  return promesa;
}

tareaAsincrona().then(
  function () {
    console.log("Todo Ok");
    console.log("Código secuencial");
  },
  function () {
    console.log("Todo Mal");
  }
);

/*
function resolve() {
  console.log("Todo OK");
}

function reject() {
  console.log("Todo Mal");
}
*/
