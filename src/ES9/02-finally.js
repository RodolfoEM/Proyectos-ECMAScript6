// Promesas y su uso

const anotherFunction = () => {
    return new Promise((resolve, reject) => { // Prpmikse es una función que recibe 2 parámetros: resolve: cuando la promesa es resuelta y reject: cuando la promesa es rechazada.
        if (true) {
            resolve("Hey!!");
        } else {
            reject("WHooooops");
        }
    })
}

anotherFunction()
    .then(response => console.log(response)) //En caso que se ejecute resolve.
    .catch(err => console.log(err)) //En caso que se ejecute reject.
    .finally(() => console.log("Finaly")); // Que queremos que se haga al final, según nuestra lógica que usemos
// es un método de la promesa que retorna anotherFunction(), no es “algo llamado then” y si bien es una ‘palabra reservada’, decir que es una ‘palabra reservada’ no aporta nada, es un método, y por ser un método se “llama” o “ejecuta” y recibe parámetros, en este caso un callback…
// Una promesa es una forma de manejar el asincronismo en JavaScript y se representa como un objeto que puede generar un valor único a futuro, que tiene dos estados, o está resuelta o incluye una razón por la cual no ha sido resuelta la solicitud.