var restar = (a, b) => a - b;

console.log(typeof restar);
console.log(restar instanceof Function);

function ejemplo(x, y) {
  ((a, b) => {
    console.log("Hola");
    console.log(a + b);
    console.log(arguments[0]);
    console.log(y);
  })(2, 3);
}

ejemplo(10, 20);
