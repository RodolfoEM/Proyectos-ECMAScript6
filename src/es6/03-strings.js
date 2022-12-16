let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world + "!" // esta es la forma de concatenar antes de ES6.
// console.log(epicPhrase);

// Template Literals
let epicPhrase2 = `${hello} ${world}!`;  // Comillas francesas(alt + 96). Sirve para guardar como strings el contenido de una variable, tomando en cuenta espacios y otras caracteristicas propias de un string normal.
console.log(epicPhrase2); // se muestra Hello World!

// Multi-line strings

let lorem = "esto es un string \n " + "esto es otra linea"; // Esta es la forma en que se generaba antes de ES6 un estring con salto de línea.
let lorem2 = `Esta es una frase epica
esta es la continuación de la frase epica en un salto de línea`; // Con las comillas fransesas podemos dar un enter para el salto de línea y el codigo lo toma sin la  necesidad de escribir "\n".
console.log(lorem);
console.log(lorem2);