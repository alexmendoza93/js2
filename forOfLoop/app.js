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

// para hacer lo mismo con for of loop es solo con
for (let row of alumnos) {
    for (let alumno of row) {
        console.log(alumno);
    }
}