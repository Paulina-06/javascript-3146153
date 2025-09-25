const params = new URLSearchParams(window.location.search)
const id = parseInt(params.get("id"))
const container = document.querySelector(".container")

/* console.log("Te encuentras en el capitulo", id) */


const capitulo = comic.capitulos.find( cap => cap.id === id )

console.log(capitulo)

container.innerHTML = `
    <section class="s1">
        <div class="container">

            <img class="fondo-s1" src="${capitulo.imgPortada}" alt="">

            <div class="cont-text">
                <h1 class="title">${capitulo.nombreCap}</h1>
                <h4 class="descripcion">${capitulo.descripcion}</h4>
                <a href="#" class="btn">LEER</a>
            </div>
        </div>

    </section>
`


/* const params = new URLSearchParams(window.location.search)
const id = parseInt(params.get("id"))
const container = document.querySelector(".container")

console.log("Te encuentras en el capitulo", id)

//Buscar capitulo en la base de datos
const capitulo = comic.capitulos.find( cap => cap.id === id )

console.log(capitulo)

//Mostrar la informacion del capitulo en pantalla
container.innerHTML = `
    <div class="card" style="width: 28rem;">
      <img src="${capitulo.imgPortada}" class="card-img-top" alt="...">
      <div class="card-body">
      <b>Capitulo ${capitulo.id}</b>
        <h5 class="card-title">${capitulo.nombreCap}</h5>
        <p class="card-text">${capitulo.descripcion}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
` */