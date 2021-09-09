const alumnos = [
    ["juanita", "pepito", "ramiro", "karla"],
    ["arturo", "diego", "ernesto", "carlos"],
    ["raul", "jimena", "pablo"]
];

for (let i = 0; i < alumnos.length; i++) {
    let fila = alumnos[i];
    console.log(`Array #${i}`)
    for (let j = 0; j < fila.length; j++) {
        console.log(fila[j])
    }
}

// y listo se imprime en la consola todos los nombres