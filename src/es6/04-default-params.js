
// Antes de ES6
function newUser(name, age, country) {
    var name = name || "Oscar";
    var age = age || 34;
    var country = country || "MX";
    console.log(name, age, country);
};

newUser();
newUser("Davir", 15, "CO");

// Despues de ES6
function newAdmin(name = "Oscar", age = 32, country = "MX") {
    console.log(name, age, country);
};

newAdmin();
newAdmin("Ana", 28, "PE");