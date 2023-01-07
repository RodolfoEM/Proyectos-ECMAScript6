const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("Resolve"));
const promise3 = new Promise((resolve,reject) => resolve("Resolve 2"));

Promise.any([promise1, promise2, promise2])  // any permite capturar la primer promesa que se resuelve, las demás las ignora.
    .then(response => console.log(response));