/* const numeros = [1, 2, 3, 4, 5, 6, 3, 1, 7]; */
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
const aleatorio = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  "$",
  "+",
  "-",
  "@",
  "!",
  "/",
  "*",
  "%",
];

//iterar un array de objetos
/* for (const producto of productos) {
  console.log("Nombre Producto: " + producto.nombre);
  console.log("Precio $"+producto.precio);
} */

//funciones de orden superior
/* let nombre= prompt("ingresa un nombre")
const contacto= {
  nombre: nombre,
  tel:"123432112"
}
console.log(contacto); */

let total = 0;
for (let i = 1; i <= 10; i++) {
 // console.log(i);
  total = total + i;

}
//console.log(total);

function sumarRango(inicio, fin) {
  let total = 0;
  for (let i = inicio; i <= fin; i++) {
    total = total + i;
  }
  return total;
}

//console.log(sumarRango(1,20));

function mayorQue(n) {
  return (m) => m > n;
}

let mayorQueDiez = mayorQue(10)

/* console.log(mayorQueDiez(2));
console.log(mayorQueDiez(12));
 */

function asignarOperador(operador){

switch (operador) {
  case "+":
    return (a,b)=> a + b;
 
    case "-":
    return (a,b)=> a - b;
  
    case "*":
    return (a,b)=> a * b;
    
    //terminar la calculadora

  default:
    return ()=> "opcion no valida"
    break;
}
}

let sumar= asignarOperador("+")
let restar= asignarOperador("-")
/* console.log(sumar(2,8));
console.log(restar(-2,8)); */


//recibir funciones por parametro
const numeros = [1, 2, 3, 4, 5, 6, 3, 1, 7];


function porCadaUno(arr, fn){
  for (const papasAlHorno of arr) {
    fn(papasAlHorno)
  }
}

//porCadaUno(numeros,console.log)

const triplicado=[]
porCadaUno(numeros, (el)=>{
  triplicado.push(el * 3)
})

/* console.log(numeros);
console.log(triplicado);

//forEach()

numeros.forEach((el)=>{
  console.log(el);
})

triplicado.forEach((el)=>{
  console.log(el);
}) */

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
//find encontrar
const encontrado=productos.find((producto)=>{
    return producto.precio > 300 || producto.nombre == "Tomate" ;
})
//console.log(encontrado);
//filter
const filtrado=productos.filter((el)=>{
  return el.nombre.includes("a");
})
//console.log(filtrado);

//some
const existe=productos.some((el)=>{
  return el.id === 12
})

console.log(existe);

//map

const precios= productos.map((el)=>{
  return el.precio
})

const precioActualizado= productos.map(el=>{
  return {
    id: el.id,
    nombre: el.nombre, 
    precio: el.precio * 1.15
  }
})

//console.log(precioActualizado);

//reduce

const capital = productos.reduce((acc,el)=>{
 return acc + el.precio;
},1500)

//console.log(capital);

//Objeto MATH
console.log(Math);
console.log(Math.PI);
console.log(Math.E);
console.log(Math.max(1,9,5,766,34,3,-9,5));
console.log(Math.min(1,9,5,766,34,3,-9,5));
console.log(Math.sqrt(-25));
//redondeo
console.log(Math.ceil(3.144632));
console.log(Math.floor(3.49));
console.log(Math.round(3.5));

//Random
console.log(Math.floor(Math.random()*100 + 20));

//Funcion para analizar
function crearPass(array, length) {
  let passAleatorio = "";
  for (let i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * array.length);
    passAleatorio  = passAleatorio + array[random];
  }
  return passAleatorio;
}

console.log(crearPass(aleatorio, 4));
