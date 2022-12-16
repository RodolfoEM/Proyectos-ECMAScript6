// Declarando una clase.
class User {};
// Haciendo una instancioa de una clase.
const newUser = new Uset();


// Práctica de clase.
class user{
    // metodos
    greetin() { // es como una función pero sin el uso de la palabra reservada function (greetin es el nombre que le damos al método)
        return "Hello";
    }
};

// creando una instancia apartir de nuestra clase.
const gndx = new user();
console.log(gndx.greetin()); // Aquí vemos que ya podemos usar el método de nuestra clase.

// Otra instancia que parte de la clase User.
const bebeloper = new user();
console.log(bebeloper.greetin());


// Agregamos un constructor a la clase user
class user {
    // Constructor
    constructor() {
        console.log("Nuevo Usuario");
    }
    greetin() { // es como una función pero sin el uso de la palabra reservada function (greetin es el nombre que le damos al método)
        return "Hello";
    };
};

const david = new user(); // Cuando llamamos a la clase "user" se ejecuta el constructor


// this(hace referencia al elemento padre que lo llama).
class user {
    // Constructor
    constructor(name) {
        console.log("Nuevo Usuario");
        this.name = name;
    }
        // Métodos
    speak() { // es como una función pero sin el uso de la palabra reservada function (speak es el nombre que le damos al método)
        return "Hello";
    };
    greetin() { // es como una función pero sin el uso de la palabra reservada function (greetin es el nombre que le damos al método)
        return `${this.speak()} ${this.name}`; // usando la concatenación con template literal y uso de comilla invertida ``
    };
};

const ana = new user("Ana"); // pasamos a user el nuevo usuario "Ana"
console.log(ana.greetin()); // Aquí ejecutamos un consolelog de ana y el método greeting.


// setters y getters
class user {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Métodos
    speak() { // es como una función pero sin el uso de la palabra reservada function (speak es el nombre que le damos al método)
        return "Hello";
    };
    greetin() { // es como una función pero sin el uso de la palabra reservada function (greetin es el nombre que le damos al método)
        return `${this.speak()} ${this.name}`; // usando la concatenación con template literal y uso de comilla invertida ``
    };
    // uso de getter
    get uAge() {
        return this.age; // con este método obtenemos el valor que tenemos en age.
    }
    // uso de setter
    set uAge(n) { // aquí colocamos el parametro por el cual queremos cambiar age
        this.age = n; // aquí hacemos el cambio de age por el valor de "n" el parámetro que estamos pasando.
    }
};

const bebeloper1 = new user("David", 15);
console.log(bebeloper1.uAge); // aquí llama el getter y muestra el valor de 15 que previamente pasamos en la instancia.
console.log(bebeloper1.uAge = 20); // aquí traemos el setter y hacemos el cambio de 15 por 20