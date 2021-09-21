const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended:true}));
// esto analiza el request body y asi podemos obtener los datos enviados desde nuestro formulario con metodo post
app.set('views', path.join(__dirname, 'views'));
// esto es buenas practicas para correr nuestro programa desde rutas absolutas
app.set('view engine', 'ejs');
// y esto es para decirle a expres que nos corra con ejs
// -------------------------------------------
// ahora simularemos una base de datos
const comentarios = [
    {
        id:1,
        username:'aldo',
        comentario: 'that is hilarious'
    },
    {
        id:2,
        username:'alex',
        comentario: 'that is sooo funny'
    },
    {
        id:3,
        username:'armando',
        comentario: 'hahahahaha that´s great'
    },
    {
        id:4,
        username:'annita',
        comentario: 'I don´t really like it'
    },
    {
        id:5,
        username:'alfaro',
        comentario: 'so stupid'
    }

]
// esta primera direccion es la direccion del brouser
app.get('/comments', (req, res) => {
    res.render('comentarios/lista', {comentarios})
    // esta segunda direccion es el documento que se va renderizar, y el segundo valor se habilita los valores de un objeto
});

app.get('/comments/new', (req, res) => {
    res.render('comentarios/nuevo');
    
});

app.post('/comments', (req, res) =>{
    console.log(req.body);
    // esto es lo que hice para ver si funcionaba
    const {username, comentario }= req.body;
    let id = comentarios.length+1;
    // esta forma nos sirve bien por el momento, en el original pusieron de id con un npm uuid
    comentarios.push({ username, comentario, id });
    res.redirect('/comments')
    
})

// ahora vamos a definir nuestra ruta para buscar comentarios especificos
app.get('/comments/:id', (req, res) =>{
    const {id} = req.params;
    console.log(req.params);
    const comentario =comentarios.find(c => c.id === parseInt(id));
    // ponemos parse int por que lo que da req.params es un string
    // y esto se supone que deberia regresar un comentario
    res.render('comentarios/show', {comentario});
})

// con patch podemos actualizar informacion
app.patch('/comments/:id', (req, res) =>{
    res.send('se actualizo el comentario')
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