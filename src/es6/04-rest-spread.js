// Arrays destructuring

let fruits = ["Aplle", "Banana"];
let [a, b] = fruits;
console.log(a, b);
console.log(a, fruits[1]); // Oscar 34

// Objetc destructurring

let user = {username: "Oscar", age: 34};
let{username, age} = user;
console.log(username, age);
console.log(username, user.age); // Oscar 34

// Spread Operator

let person = {name: "Oscar", age: 28};
let country = "MX";

let data = { ...person, country }; // (...) Esto permite crear un nuevo objeto apartir de varios elementos.
console.log(data); // { name: 'Oscar', age: 28, country: 'MX' }


// rest

function sum(num, ...values) { // Esta característica sirve para crear funciones que acepten cualquier número de argumentos para agruparlos en un array.
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3)