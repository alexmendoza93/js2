const usuarioInput = prompt("ingrese dia de la semana").toLowerCase()

if (usuarioInput === "lunes") {
    console.log("No soy muy fan de los Lunes")
} else if (usuarioInput === "viernes") {
    console.log("Excelente, Inicia el fin de semana")
} else if (usuarioInput === "domingo") {
    console.log("Es un buen dia para descansar y disfrutar tranquilo")
} else {
    console.log("Es un buen día")
}