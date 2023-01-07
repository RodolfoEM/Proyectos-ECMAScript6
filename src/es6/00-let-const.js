var lastName = "David"; // Declaramos e inicializamos una variable.
lastName = "Oscar"; // Aquí se reasigna una variable.
console.log(lastName); // con Ctrl + alt + N ejecutamos el bloque de código en la terminal(Hay que seleccionarlo todo previamente).


let fruit = "Apple";
fruit = "Kiwi";
console.log(fruit);

const animal = "Dog"; // Aquí declaramos e inicializamos una constante.
animal = "cat"; // aquí intentamos reasiganr una constante, pero mandará error ya que no es posible hacer eso.
console.log(animal);

const fruits = () => { // Éste es un arrow function o Función fleacha.
    if(true) {
        var fruit1 = "Apple"; // function scope
        let fruit2 = "kikwi"; // block scope
        const fruit3 = "Banana"; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
};

fruits(); // aquí mandamos a llamar la función