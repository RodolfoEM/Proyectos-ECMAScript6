// Método flat
const array = [1,1,2,3,4,[10,30,50,60,[100,200,300]]];
console.log(array.flat(3)); // flat es un método que permite ingresar a un array que tiene más arrays dentro, el número entre parentecis indica los niveles

// Método flatmap
const array2 = [1,1,2,3,4];
console.log(array2.flatMap(n => [n, n * 2])); // flatmap es un método que permite la transformación de un array. En este caso lo que hacemos es multiplicar por 2 cada elemento del array y ponerlo alado del número original

