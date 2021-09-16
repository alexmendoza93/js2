const express = require ('express');
const app = express();

// el metodo use se corre cada vez que hay un nuevo request
// app.use(()=>{
//     console.log('tenemos un nuevo request')
// })
// no me corria por que la pagina estaba contestando con el metodo use y se detenia

// el metodo get es como mandamos respuestas especificas dependiendo la direccion url
app.get('/',(req,res)=>{
    res.send('Este es el Home Page')
})
// ---------------------------------------------
// rutas genericas, para tener aceso a la ruta generica hay que atrapar la informacion de cada request, y eso esta en req.params
app.get('/r/:subreddit', (req,res)=>{
    const {subreddit}= req.params;
    // esta es la destructuracion del objeto req.params y le asignamos la constante subreddit
    console.log(req.params)
    res.send(`Buscando la pagina de ${subreddit}`)
})

app.get('/r/:subreddit/:ID', (req,res)=>{
    const {subreddit, ID}= req.params;
    // esta es la destructuracion del objeto req.params y le asignamos la constante subreddit
    console.log(req.params)
    res.send(`Buscando la pagina de ${subreddit} con ID: ${ID}`)
})

// app.post('/cat', (req,res)=>{
//     res.send('este es un mensaje del post')
// })

app.get('/cat',(req,res)=>{
    res.send('MEOWWW')
})
app.get('/dog',(req,res)=>{
    res.send('WOOFF')
})
app.get('*',(req,res)=>{
    res.send('Lo siento no se encontro la pagina')
})

// ahora iniciamos el servidor con: node index.js cada vez que cambiemos algo (para salir de node es (ctrl + c dos veces)

app.listen((3000), ()=>{
    console.log('escuchando desde el puerto 3000')
})