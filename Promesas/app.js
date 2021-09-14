// esta es una funcion que espera 2 variables
const delayedColor = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}
// mandamos a llamar la funcion que simula una respuesta asincrona
// delayedColor('red', 1000)
//     .then(() => delayedColor('orange', 1000))
//     .then(() => delayedColor('yellow', 1000))
//     .then(() => delayedColor('green', 1000))
//     .then(() => delayedColor('blue', 1000))
//     .then(() => delayedColor('indigo', 1000))
//     .then(() => delayedColor('violet', 1000))


// con async function puedo ahora usar await que solo funciona con promesas esperando a que se resuelvan
async function rainbow(){
    await delayedColor('red', 1000)
    await delayedColor('orange', 1000)
    await delayedColor('yellow', 1000)
    await delayedColor('green', 1000)
    await delayedColor('blue', 1000)
    await delayedColor('indigo', 1000)
    await delayedColor('violet', 1000)
    }

    // ahora mando a llamar rainbow() en la consola y se dispara