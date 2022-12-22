const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) // Esto es lo que sucederá si es verdadero, es como si omitieramos el if
            ? setTimeout(() => resolve("AsynC!!!"), 2000) // Esto se ejecutará en caso de que sea true
        : reject(new Error("Error!")); // Aquí va lo que sucederá en caso de que sea false, sería como el else
    });
}

const anotherFn = async () => {  // Esta es una función flecha asincrona, ya que espera que suceda una promesa antes de ejecutarse
    const something = await fnAsync(); //Aquí guardamos el resultado de la función con la promesa
    console.log(something);
    console.log("Hello!");
}

console.log("Before");
anotherFn();
console.log("After!");