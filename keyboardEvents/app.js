document.querySelector('button').addEventListener('click', (event) =>{
    console.log('puchado!');
    console.log(event)
})

// const input = document.querySelector('input');
// input.addEventListener('keydown', function(){
//     console.log('keydown');
// })

// input.addEventListener('keyup', function(){
//     console.log('keyup');
// })

const input = document.querySelector('input');
input.addEventListener('keydown', function(event){
    console.log(event.key);
    // este es el tecto que escribio
    console.log(event.code);
    // esta es la tecla que apreto
})
// este caso funciona unicamente para el input

// ---------------------------------------
// este caso funciona globalmente
window.addEventListener('keydown', function (event){
    switch (event.code){
        case 'ArrowUp':
            console.log('arriba!');
            break;
        case 'ArrowRight':
            console.log('derecha!');
            break;
        case 'ArrowLeft':
            console.log('izquierda!');
            break;
        case 'ArrowDown':
            console.log('abajo!');
            break;
        default:
            console.log('ignorado!')
    }
})

// todo esto se ve reflejado en la consola