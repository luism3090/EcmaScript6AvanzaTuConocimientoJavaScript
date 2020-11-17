let autoGuardado = {
  archivo: "app.js",
  cursor: {
    linea: 7,
    columna: 16,
  },
  ultimoArchivo: {
    archivo: "index.html",
    cursor: {
      linea: 8,
      columna: 20,
    },
  },
  otroNodo: {
    subNodo: {
      cursor: {
        linea: 11,
        columna: 11,
      },
    },
  },
};

let { archivo, cursor } = autoGuardado;

console.log(archivo);
console.log(cursor);

console.log("-------------------------------------");

let {
  ultimoArchivo: { cursor: cursor2 },
} = autoGuardado;

console.log(cursor2);

console.log("-------------------------------------");

let {
  otroNodo: {
    subNodo: { cursor: cursor3 },
  },
} = autoGuardado;

console.log(cursor3);

console.log("-------------------------------------");

let otroSuperNodo = autoGuardado.otroNodo.subNodo.cursor;

console.log(otroSuperNodo);
