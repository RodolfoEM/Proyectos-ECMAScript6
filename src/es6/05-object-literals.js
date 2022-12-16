// enhanced object literals

function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId // Este es un ejemplo de la asignación que se hacía antes de ES6.
    }
}

console.log(newUser("gndx", 34, "MX", 1)); // { user: 'gndx', age: 34, country: 'MX', id: 1 }