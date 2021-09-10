const calificacionesFinales = {
    alex: 100,
    nadia: 75,
    anita: 65,
    juan: 95,
    ramiro: 79,
    jose: 83,
    alexis: 73,
    john: 80,
    jaime: 94,
    olivia: 95
}

let total = 0
let calificaciones = Object.values(calificacionesFinales)
// guarda un array de las calificaciones en la variable calificaciones

for (let calificacion of calificaciones) {
    total += calificacion;

}
console.log(total / calificaciones.length)