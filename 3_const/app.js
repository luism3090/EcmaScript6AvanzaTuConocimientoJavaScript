const IMPUESTO_SV1 = 15.25;

// IMPUESTO_SV1 = 20;   // Error

console.log(IMPUESTO_SV1);

// --------------------------------------------------

const IMPUESTO_SV2 = 17.5;

if (true) {
  const IMPUESTO_SV2 = 20.3;
  console.log(IMPUESTO_SV2);
}

console.log(IMPUESTO_SV2);

// --------------------------------------------------

const PERSONA = {
  Nombre: "Luis",
  Apellido: "Molina",
};

console.log(PERSONA);

PERSONA.Nombre = "Juan";
PERSONA.Apellido = "Mora";

console.log(PERSONA);

/*
PERSONA = {
  Nombre: "Pedro", // Error
  Apellido: "Luna",
};
*/
