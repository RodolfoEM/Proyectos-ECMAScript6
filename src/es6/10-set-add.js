const list = new Set(); // Este es un objeto vacío

list.add("item 1"); // aquí estamos agregando un elemento a list con el .add
list.add("item 2").add("item 3"); // aquí estamos agregando dos elementos a list con el .add

console.log(list);

list.delete("item 1"); // Elimina el valor dentro de los parentecis
console.log(list);

console.log(list.has("item 1")); // Valida si existe el valor dentro del set / false || true

list.clear(); // Elimina todos los valores del objeto
console.log(list);

console.log(list.size); // retorna la cantidad de elementos dentro del objeto
