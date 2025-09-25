const tituloComic = document.querySelector(".titulo-comic")
const descripcionComic = document.querySelector(".descripcion-comic")
const imgComic = document.querySelector(".img-comic")
const cajaMadre = document.querySelector(".caja-madre")

//Mostrar informacion de la base de datos en la pagina
tituloComic.textContent = comic.nombreComic
descripcionComic.textContent = comic.descripcion

//Imprimir informacion de capitulos
comic.capitulos.forEach(cap => {
    const div = document.createElement("div");
    /* div.classList.add("card"); */
    div.innerHTML = `
    <a href="./pag_cap/capitulo.html?id=${cap.id}">
        <img src="${cap.imgPortada}" width="150" alt "">
        <p class:"card-titulo">${cap.nombreCap}</p>
        <p>${cap.descripcion}</p> 
    </a>
    `

    cajaMadre.appendChild(div);
});

/* //Imprimir información de capítulos
comic.capitulos.forEach(cap => {
  const li = document.createElement("li")
  li.innerHTML = `
    <a href="./capitulo.html?id=${cap.id}">
      <p>${cap.nombreCap}</p>
      <img src="${cap.imgPortada}" width="150" alt="">
    </a>
  `
  listaCaps.appendChild(li)
}); */