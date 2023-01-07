
const array = ["one", "two", "three", "four", "five", "six"];

console.log(array[array.length - 1]); // Esta es una lógica que regresa el último elemento sin saber cuantos tiene
console.log(array.at(-1)); // el método at permite hacer lo mismo que: array[array.length - 1]