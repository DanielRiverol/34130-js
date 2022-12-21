/* const productos = [
  { id: 1, nombre: "Arroz", precio: 124 },
  { id: 2, nombre: "Papa", precio: 90 },
  { id: 3, nombre: "Tomate", precio: 204 },
  { id: 4, nombre: "Morrón", precio: 870 },
  { id: 5, nombre: "Pan", precio: 240 },
  { id: 6, nombre: "Fideos", precio: 124 },
  { id: 7, nombre: "Fideos", precio: 124 },
  { id: 8, nombre: "Arroz", precio: 500 },
]; */
const personas = [
  "Pedro",
  "Jose",
  "Juan",
  "Lucia",
  "Emiliano",
  "Belén",
  "Pia",
  "Jimena",
  'pablo', "Julian"
];
personas.push("Jose")
//Class DATE
const fecha = new Date();
/* console.log(fecha.getFullYear());
console.log(fecha.getDay());
console.log(fecha.getMonth()+1);
console.log(fecha.getDate());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.getHours());
console.log(fecha.getMinutes()); */


//Acceso al DOM
const tituloSecundario= document.getElementById('secundario');

const paises =document.getElementsByClassName('pais');
const ul= document.getElementsByTagName('ul');
console.log(ul[0]);

/* for (const pais of paises) {
  console.log(pais.innerText);
}
let nacion= "Bangladesh"

paises[0].innerText = "ARGENTINA"
paises[1].innerText = "URUGUAY"
paises[2].innerText = nacion */
/* console.log(paises);
console.log(paises[0].innerText);
console.log(paises[1].innerText);
console.log(paises[2].innerText);
console.log(paises[3].innerText); */
/* console.log(tituloSecundario);
console.log(tituloSecundario.innerText);
console.log(tituloSecundario.innerHTML); */

const contenedor= document.getElementsByClassName('div')

console.log(contenedor[0].innerText);
contenedor[0].innerHTML = "<h2>Soy un titulo desde JS</h2>";

//Crear elementos

const parrafo = document.createElement('p');

parrafo.innerText = "Soy un parrafo creado desde JS";
//Lo agrego al flujo principal
//document.body.append(parrafo)

//lo agrego a un contenedor
//className
//parrafo.className = 'box';
//paises[0].className = 'box';
contenedor[0].appendChild(parrafo)

//remove
parrafo.remove();
paises[2].remove();

//rellenar una lista
const lista = document.querySelector('ul#nombres.lista')

console.log(lista);

for (const nombre of personas) {
  let li = document.createElement('li')
  li.innerText = nombre;
  lista.appendChild(li)
}

//Plantillas literales ``

let nombre= "Pepe"
let edad = 40
let concatenado= "hola soy " + nombre + " tengo " + edad + " años";

let plantilla = `Hola soy ${nombre} tengo ${edad} años`
console.log(concatenado);
console.log(plantilla);

const productos = [
  { id: 1, nombre: "Arroz", precio: 124 },
  { id: 2, nombre: "Papa", precio: 90 },
  { id: 3, nombre: "Tomate", precio: 204 },
  { id: 4, nombre: "Morrón", precio: 870 },
  { id: 5, nombre: "Pan", precio: 240 },
  { id: 6, nombre: "Fideos", precio: 124 },
  { id: 7, nombre: "Fideos", precio: 124 },
  { id: 8, nombre: "Arroz", precio: 500 },
];
 
const contPrduct= document.querySelector('#productos')


for (const producto of productos) {

   let li = document.createElement('li')
  li.innerHTML = `<div class='card'>
                   <h3>${producto.nombre}</h3>
                   <p>Precio $ ${producto.precio}</p>
                  </div>`;

 contPrduct.appendChild(li);
}
