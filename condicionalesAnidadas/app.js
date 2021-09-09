const password = prompt("Ingrese su password")

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("password Valido")
    } else {
        console.log("El password no debe contener espacios en blanco")
    }
} else {
    console.log("El password debe contener mas de 6 caracteres")
}