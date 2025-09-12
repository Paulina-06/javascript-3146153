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
    div.classList.add("card");
    div.innerHTML = `
    <img src="${cap.imgPortada}" width="150" alt "">
    <p class:"card-titulo">${cap.nombreCap}</p>
    <p>${cap.descripcion}</p> `

    cajaMadre.appendChild(div);
});