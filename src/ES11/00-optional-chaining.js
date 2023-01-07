const users = {
    rodo: {
        country: "MX"
    },
    ana: {
        country: "CO"
    }
}

console.log(users.ana.country); // aquí el código corre bien porque el valor existe en el objeto
console.log(users?.bebeloper?.country); // aquí con el simbolo "?" logramos validar para evitar que el programa se rompa, ya que es como si dijeramos, si existe entonces accede y traeme este elemento o información