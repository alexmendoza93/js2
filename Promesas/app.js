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
delayedColor('red', 1000)
    .then(() => delayedColor('orange', 1000))
    .then(() => delayedColor('yellow', 1000))
    .then(() => delayedColor('green', 1000))
    .then(() => delayedColor('blue', 1000))
    .then(() => delayedColor('indigo', 1000))
    .then(() => delayedColor('violet', 1000))