let ajustes = {
  nombre: "Luis",
  email: "luisame@outlook.com",
  facebook: "luism300",
  google: "luisame90@gmail.com",
  premium: true,
};

let EjemploES5 = () => {
  let nombre = ajustes.nombre,
    email = ajustes.email;
  facebook = ajustes.facebook;
  google = ajustes.google;
  premium = ajustes.premium;

  console.log(nombre, email, facebook, google, premium);
};

EjemploES5();

// -------------------------------------------
console.log("---------------------------------------------");

let EjemploES6 = () => {
  let {
    nombre,
    email,
    facebook,
    google,
    premium: pagado,
    twitter = "luism3090",
    insta: instagram = "luis_molina300",
  } = ajustes;

  console.log(nombre, email, facebook, google, premium);
  console.log("---------------------------------------------");
  console.log(pagado);
  console.log("---------------------------------------------");
  console.log(twitter);
  console.log("---------------------------------------------");
  console.log(instagram);
};

EjemploES6();
