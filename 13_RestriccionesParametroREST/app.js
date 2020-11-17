/*
Restricciones del parametro REST

1. Sólo puede existir un párametro rest en la función

2. El párametro rest debe ir siempre como último parámetro

*/

// El siguiente ejemplo causa error por el punto 1 de las restricciones REST

/*
function varios_saludos1(...saludos1,...saludos2) { // ERROR
  console.log(saludos1);
  
}

varios_saludos1("Hola", "Buenos días", "Cómo estas", "Feliz día", "Saludos");

*/

// El siguiente ejemplo tambien da error por el punto 2 de las restricciones REST

/*

function varios_saludos2(...saludos2 , saludo ) {  // ERROR
 
  console.log(saludos2);
}

varios_saludos2("Hola", "Buenos días", "Cómo estas", "Feliz día", "Saludos");

*/

// Este ejemplo es el que cumple con las restricciones

function varios_saludos3(persona, ...saludos) {
  console.log(persona);
  console.log(saludos);
}

varios_saludos3(
  "Luis Molina",
  "Hola",
  "Buenos días",
  "Cómo estas",
  "Feliz día",
  "Saludos"
);
