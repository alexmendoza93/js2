const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e){
    e.preventDefault();
    // console.dir(form)
    // // esto es para ver el objeto form y tener acceso a sus propiedades
    // console.log(form.elements.query.value)
    // // y listo, asi tenemos acceso al valor del input
    // console.log('enviado')
    const searchValue = form.elements.query.value;
    // este es el string del input
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchValue}`)
    // esta es la solicitus al API
    console.log(res.data);
    // esto imprime la solicitud en consola
    makeImages(res.data)
})

const makeImages = (shows) => {
    for (let result of shows){
        if (result.show.image){
            // si esto es cierto entonces hacel lo siguiente
            const img = document.createElement('img');
            // con esto creas una nueva imagen al documento
            img.src = result.show.image.medium;
            // con esto le asignas el url al src de la imagen que acabas de crear con la busqueda que acabas de hacer
            document.body.append(img)
            // con esto agregas la nueva imagen a la pagina
        }
    }
}