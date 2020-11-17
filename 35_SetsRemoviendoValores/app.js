let items = new Set([1, 2, 3, 4, 5]);

console.log(items.size);
console.log(items);

console.log("------------------------------------------");

items.delete(3);

console.log(items.size);
console.log(items);

console.log("------------------------------------------");

items.clear();

console.log(items.size);
console.log(items);
