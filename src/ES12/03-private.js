// setters y getters
class user {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Métodos
    #speak() { // el simbolo "#" convierte a la función en una función privada, hace que solo sea accedido dentro de la misma clase.
        return "Hello";
    };
    greetin() { // es como una función pero sin el uso de la palabra reservada function (greetin es el nombre que le damos al método)
        return `${this.speak()} ${this.name}`; // usando la concatenación con template literal y uso de comilla invertida ``
    };
    // uso de getter
    get #uAge() { // el simbolo "#" convierte a la función en una función privada, hace que solo sea accedido dentro de la misma clase.
        return this.age; // con este método obtenemos el valor que tenemos en age.
    }
    // uso de setter
    set #uAge(n) { // aquí colocamos el parametro por el cual queremos cambiar age // el simbolo "#" convierte a la función en una función privada, hace que solo sea accedido dentro de la misma clase.
        this.age = n; // aquí hacemos el cambio de age por el valor de "n" el parámetro que estamos pasando.
    }
};

const bebeloper1 = new user("David", 15);
console.log(bebeloper1.uAge); // aquí llama el getter y muestra el valor de 15 que previamente pasamos en la instancia.
console.log(bebeloper1.uAge = 20); // aquí traemos el setter y hacemos el cambio de 15 por 20