const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended:true}));
// esto analiza el request body y asi podemos obtener los datos enviados desde nuestro formulario
app.set('views', path.join(__dirname, 'views'));
// esto es buenas practicas para correr nuestro programa desde rutas absolutas
app.set('view engine', 'ejs');
// y esto es para decirle a expres que nos corra con ejs
// -------------------------------------------
// ahora simularemos una base de datos
const comments = [
    {
        username:'aldo',
        comment: 'that is hilarious'
    },
    {
        username:'alex',
        comment: 'that is sooo funny'
    },
    {
        username:'armando',
        comment: 'hahahahaha that´s great'
    },
    {
        username:'annita',
        comment: 'I don´t really like it'
    },
    {
        username:'alfaro',
        comment: 'so stupid'
    }

]
// esta primera direccion es la direccion del brouser
app.get('/comments', (req,res) =>{
    res.render('comments/lista', {comments})
    // esta segunda direccion es el documento que se va renderizar, y el segundo valor se habilita los valores de un objeto
})

app.get('/tacos', (req,res) =>{
    console.log(req.body);
    let {carne, qty} = req.body;
    res.send(`aquí estan tus ${qty} tacos de ${carne}, provecho!`)
    // esto de aqui no funciono no se porque
})
app.post('/tacos', (req,res) =>{
    console.log(req.body);
    let {carne, qty} = req.body;
    res.send(`aquí estan tus ${qty} tacos de ${carne}, provecho!`)
})

app.listen(3000, () =>{
    console.log('escuchando desde el puerto 3000')
})