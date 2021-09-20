const express = require('express');
const app = express();

app.use(express.urlencoded({ extended:true}));
// esto analiza el request body y asi podemos obtener los datos enviados desde nuestro formulario

app.get('/tacos', (req,res) =>{
    console.log(req.body);
    const {carneg, qtyg} = req.body;
    res.send(`aquí estan tus ${qtyg} tacos de ${carneg}, provecho!`)
    // esto de aqui no funciono no se porque
})
app.post('/tacos', (req,res) =>{
    console.log(req.body);
    const {carne, qty} = req.body;
    res.send(`aquí estan tus ${qty} tacos de ${carne}, provecho!`)
})

app.listen(3000, () =>{
    console.log('escuchando desde el puerto 3000')
})