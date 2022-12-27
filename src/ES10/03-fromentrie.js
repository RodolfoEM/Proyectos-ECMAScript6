const entries = new Map([["name", "Oscar"],[ "age", "34"]]);
console.log(entries);
console.log(Object.fromEntries(entries)); // Object.fromEntries(entries) permite transformar en un objeto el contenido de un array que se reciba por parámetro.