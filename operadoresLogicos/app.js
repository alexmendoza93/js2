const age = prompt("Ingresa tu edad")

if (age >= 0 && age <= 5 || age >= 65 && age < 120) {
    console.log("Entras Gratis")
} else if (age > 5 && age <= 10) {
    console.log("Pagas 100 pesos")
} else if (age > 10 && age < 65) {
    console.log("Pagas 200 pesos")
} else {
    console.log("Numero invalido")
}