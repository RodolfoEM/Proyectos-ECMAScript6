export function solution(json1 = { name: "Mr. Michi", food: "Pescado" }, json2 = { age: 12, color: "Blanco" }) {  // Aquí podemos dar valores por defecto a los parametros que se reciban en caso de que se reciban o no. Como en éste caso son objetos, los parametros se escriben entre llaves {}
    // Tu código aquí 👈
    let catInfo = { ...json1, ...json2 }; // Aquí lo que hacemos es unir los objetos en un nuevo objeto y guardamos el resultado en una nueva variable.
    return catInfo; // Aquí retornamos la nueva variable.
}
