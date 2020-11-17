let arr_alumnos1 = [];

function agregar_alumno1() {
  console.log(arguments);

  for (var i = 0; i < arguments.length; i++) {
    arr_alumnos1.push(arguments[i]);
  }
  console.log(arr_alumnos1);
}

agregar_alumno1("Luis", "Juan", "Pedro", "Ana");

//  ahora esta forma es la que se haria usando parametros sin nombre (REST)

let arr_alumnos2 = [];

console.log("----------------------------------");
function agregar_alumno2(...alumnos) {
  console.log(alumnos);
  for (let i = 0; i < alumnos.length; i++) {
    arr_alumnos2.push(alumnos[i]);
  }
  console.log(arr_alumnos2);
}

agregar_alumno2("Luis", "Juan", "Pedro", "Ana");
