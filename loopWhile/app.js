const secret = "chinchampu";

let adivinanza = prompt("Ingrese el codigo secreto");

while (adivinanza !== secret) {
    adivinanza = prompt("Intente ingresar el codigo secreto de nuevo");
}
console.log("Acertaste!!")