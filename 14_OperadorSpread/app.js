// Ejemplo de encontrar el nùmero mayor

// Así se hacia antes

var numeros1 = [2, 30, 600, 10, 15, 960, 5, 80];
var max1 = Math.max.apply(Math, numeros1);

console.log(max1);

console.log("-----------------------------------------");

var person = {
  fullName1: function () {
    return this.firstName + " " + this.lastName;
  },
  fullName2: function (person1) {
    return person1.firstName + " " + person1.lastName;
  },
};

let person1 = {
  firstName: "Mary",
  lastName: "Doe",
};
console.log(person.fullName1.apply(person1)); // Will return "Mary Doe"
console.log(person.fullName2(person1));

console.log("-----------------------------------------");

// Así se hace ahora en el EcmaScript 6

let numeros2 = [2, 30, 600, 10, 15, 960, 5, 80];

console.log(numeros2);
console.log(...numeros2);

let max2 = Math.max(...numeros2);

console.log(max2);
