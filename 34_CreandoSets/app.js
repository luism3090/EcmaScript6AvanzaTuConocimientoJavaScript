let items = new Set();

items.add(10);
items.add(11);
items.add(8);
items.add(7);
items.add(7);
items.add(7);
items.add(7);
items.add("7");
items.add(7);

console.log(items);
console.log(items.size);

console.log("-------------------------------------------------");

let items2 = new Set([1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7]);

console.log(items2);
console.log(items2.size);

console.log("-------------------------------------------------");

let items3 = new Set([1, 2, 3, 4, 5, 6, 7, true, "Luis"]);

console.log(items3.has("Luis"));
console.log(items3.has(1));
console.log(items3.has(true));
console.log(items3.has("1"));
console.log(items3.has(9));
