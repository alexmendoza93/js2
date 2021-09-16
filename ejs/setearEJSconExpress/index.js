// cada vez que vamos a hacer un proyecto usando express y ejs tenemos que setear express para que su view engine sea ejs
// tambien debemos de crear la carpeta views donde guardaremos nuestras plantillas ejs
// necesitamos instalar npm i express ejs
// (no se necesita requerir ejs, express lo requiere en automatico)

const express = require('express');
const app = express();

const path = require ('path');
app.set('views', path.join(__dirname, '/views'))
// path es para mejores practicas y sirve para ejecutar nuestro programa desde una ruta absoluta, fuera de nuestra carpeta

app.set('view engine', 'ejs');
// aqui declaramos cual sera el view engine por defalt que sera ejs

app.get('/', (req, res)=>{
    res.render('home')
    // ahora con el metodo render de express podemos renderizar plantillas ejs en lugar de responder con un estring con res.send
    // res.send('Hola')
})

app.listen(3000, ()=>{
    console.log('Escuchando desde el puerto 3000')
})