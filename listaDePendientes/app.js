let input = prompt("Que es lo que deseas hacer hoy?");
let pendientes = ["arreglar cuarto"];

while (input !== "salir") {
    if (input === "lista") {
        console.log("**************************************");
        for (let i = 0; i < pendientes.length; i++) {
            console.log(`${i + 1}: ${pendientes[i]}`)
        }
        console.log("**************************************");

    }
    if (input === "nuevo") {
        while (input !== "salir") {
            input = prompt("Que tarea deseas agregar? ('salir' para menú principal)");
            if (input === "salir") {

            } else {
                pendientes.push(input)
                console.log(`ok ${input} agregado a la lista`)
            }
        }
    }
    if (input === "eliminar") {
        input = prompt("Que numero de tarea desea eliminar? ('salir' para menú principal)")
        if (input === "salir") {

        } else {
            pendientes.splice(input - 1, 1)
            console.log(`ok ${input} eliminado de la lista`)
        }

    }
    input = prompt("Que deseas hacer?")
}
console.log("Bye Bye, ten un bonito día")