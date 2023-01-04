document.title = "Clase 10 | Comisión 34130";
//querySelector
const titulo = document.querySelector("h1 span"),
  tituloSecundario = document.querySelector("h2#secundario");

titulo.innerText = "Clase 10";
tituloSecundario.innerText = "LocalStorage";
//Array Servicios
const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1200, img: "esculpidas.webp" },
  { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
  { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  {
    id: 8,
    nombre: "radiofrecuencia",
    precio: 12800,
    img: "radiofrecuencia.png",
  },
  {
    id: 9,
    nombre: "micropigmentación",
    precio: 7800,
    img: "micropigmentacion.jpeg",
  },
];
const paises = [
  "Argentina",
  "Colombia",
  "Brasil",
  "México",
  "Uruguay",
  "Venezuela",
  "Perú",
  "Chile",
  "Polonia",
  "Francia",
  "Australia",
];
//funciones de busqueda
function buscarServicio(arr, filtro) {
  const encontrado = arr.find((el) => {
    return el.nombre.includes(filtro);
  });
  return encontrado;
}
function filtrarServicio(arr, filtro) {
  const filtrado = arr.filter((el) => {
    return el.nombre.includes(filtro);
  });
  return filtrado;
}
const contenedor = document.querySelector("#contenedor");

function crearHtml(el) {
  //llamo al elemento contenedor
  contenedor.innerHTML = "";
  //creo una variable con un estructura html
  let html = `<div class="card">
                <img src=" ./img/${el.img}" alt="${el.nombre}">
                <hr>
                <h3>${el.nombre}</h3>
                <p>Precio: $${el.precio} </p>
                  <div class="card-action">
                    <button id="${el.id}">Comprar</button>
                  </div>
              </div>`;
  //se la agrego al contenedor
  contenedor.innerHTML = html;
}

//EVENTOS
//llamo a todos los elementos input de tipo [text]
const input = document.querySelectorAll('input[type="text"]'),
  btnSearch = document.querySelector("#btnSearch");
//console.log(input[0]);
btnSearch.addEventListener("click", () => {
  //codigo a ejecutar
  const encontrado = buscarServicio(servicios, input[0].value);
  console.log(encontrado);
  crearHtml(encontrado);
});
input[0].addEventListener("input", () => {
  //codigo a ejecutar
  const encontrado = buscarServicio(servicios, input[0].value);
  console.log(encontrado);
  crearHtml(encontrado);
});

let select = document.querySelector('select[name="paises"]');

paises.forEach((pais) => {
  let option = document.createElement("option");
  option.value = pais;
  option.innerText = pais;

  select.appendChild(option);
});

select.addEventListener("change", () => {
  let opcion = select.options[select.selectedIndex].value;
  console.log(opcion);
  document.querySelector("#info").innerText = `País seleccionado: ${opcion}`;
});
//localStorage seteando datos
localStorage.setItem("saludo", "Hola tarola");
localStorage.setItem("cumple", "20 de noviembre");
localStorage.setItem("esValido", true);
localStorage.setItem("numero", 20);
localStorage.setItem("darkMode", true);

//localStorage getItem
let saludo = localStorage.getItem("saludo");
let cumple = localStorage.getItem("cumple");
let numero = localStorage.getItem("numero");

/* console.log(saludo);
console.log(cumple);
console.log(numero); */

//sessionStorage
sessionStorage.setItem("seleccion", [1, 2, 3, 4, 5, 6]);
sessionStorage.setItem("email", "dani@mail.com");

let numeros = sessionStorage.getItem("seleccion").split(",");
//console.log(numeros);

//eliminar elementos del LS o SS

localStorage.removeItem("darkMode");
localStorage.removeItem("saludo");
//localStorage.clear()

//recorrer storage
/* for (let i = 0; i < localStorage.length; i++) {
  
  let clave = localStorage.key(i);
  console.log("Clave: " + clave + " Valor: " + localStorage.getItem(clave));
} */

//JSON
const product= {nombre:"Fideos", precio: 400}
//de obj a json
const aJSon= JSON.stringify(product)

localStorage.setItem('producto', aJSon)


//de json a obj
let deJsonAObj= JSON.parse(localStorage.getItem("producto"))
/* 
console.log(deJsonAObj);
console.log(deJsonAObj.nombre);
console.log(deJsonAObj.precio); */

let carrito= [];

carrito.push(product)
carrito.push(product)
console.log(carrito);


localStorage.setItem('carrito',JSON.stringify(carrito))

let recuperarCarrito= JSON.parse(localStorage.getItem('carrito'))

console.log(recuperarCarrito);
//hacer click btn comprar localStorage.removeItem("carrito")