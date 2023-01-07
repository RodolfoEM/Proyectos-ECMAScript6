import fetch from "node-fetch"; // para poder realizar ésto es necesario primero instalar los módulos de node con el comando: npm install node-fetch.

const response = await fetch("https://api.escuelajs.co/api/v1/products"); // aquí treamos la información de nuestra API
const products = await response.json(); // aquí realiza la transformación de los productos a un objeto tipo json

export {products}; // aquí exponemos los productos para que sean usados por otros módulos o archivos.