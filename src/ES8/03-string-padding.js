const string = "Hello";
console.log(string.padStart(10, "hi")); // hi rellenará el inicio hasta llegar al npumero de caracteres que colocamos, en este ejemplo el resultado sería = "hihihHello"
console.log(string.padEnd(6, "_")); // _ rellenara el string, colocando este valor al final, hasta cubrir el número de caracteres que colocamos, en este caso 6.