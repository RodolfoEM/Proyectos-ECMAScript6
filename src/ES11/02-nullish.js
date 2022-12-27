const anotherNumber = null;
const validate = anotherNumber ?? 5; // "??" es una comprobación y en caso de que se la variable o valor al que hacemos referencia sea nullo, se pondrá como valor default el "5"
console.log(validate);