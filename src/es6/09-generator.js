
function* iterate(array) {
    for(let value of array) { // Para cada valor del array se hará el bloque de código siguiente
        yield value;  //  yield es una palabra reservada
    }
}

const it = iterate(["Oscar", "David", "Ana", "Ulises", "Jennifer"]);
console.log(it.next().value);


// Solución 1 al PLayground

function* getId() {
    let michiId = 1
    while (true) {
        yield michiId++
    }
}

console.log(michiId.next().value)
console.log(michiId.next().value)


// Solución 2 al PLayground

function* getId() {
    let newMichi = 0 // Es una variable que sirve para llevar el contro de los nuevos ingresos
    let id = Math.random().toString(36).substring(5).toUpperCase(); // Aquí se genera un número aleatorio alfanumérico
    while (true) {
        yield `${newMichi+=1}${id};` // Aquí concateno mi número de control y los codigos que irán variando para evitar que existan Id´s duplicados
    }
}
const michiId = getId()
console.log(michiId.next().value)
console.log(michiId.next().value)
