const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1100, img: "esculpidas.webp" },
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

function Servicio(nombre, precio, img) {
  this.id = servicios.length + 1;
  this.nombre = nombre;
  this.precio = parseFloat(precio);
  //valido si recibo imagen
  if (!img) {
    this.img = "https://via.placeholder.com/300";
  } else {
    this.img = img;
  }
}

servicios.push(new Servicio( "depi",3500, "img.jpg"))

servicios.push(new Servicio( "depilacion",3500))


//funciones de filtrado
console.log(servicios);

function buscarPorNombre(arr, filtro){
    const encontrado= arr.find((servicio)=>{
      //tengo un problema   
      //return servicio.nombre == filtro;   
      return servicio.nombre.includes(filtro);   
    })

    return encontrado;
}
function filtrarPorNombre(arr, filtro){
  return arr.filter((servicio)=>{
    return servicio.nombre.includes(filtro);   
  })
}
function filtrarPorPrecio(arr, filtro){
  return arr.filter((servicio)=>{
    return servicio.precio <= parseFloat(filtro);   
  })
}

let buscar = prompt("Ingresa el precio del servicio")
const filtrado = filtrarPorPrecio(servicios,buscar )

console.log(filtrado); 

const masBaratoTodavia= filtrarPorPrecio(filtrado, 1200)
console.log(masBaratoTodavia);
const carrito=[]
/* let buscar = prompt("Ingresa el nombre del servicio")
const filtrado= filtrarPorNombre(servicios,buscar )

console.log(filtrado); */
/* let buscar = prompt("Ingresa el nombre del servicio")

console.log(servEncontrado); */
const servEncontrado = buscarPorNombre(servicios, "mani")
carrito.push(servEncontrado)
carrito.push(servEncontrado)
carrito.push(servEncontrado)
//a carrito hacerle un reduce
console.log(carrito);
//alert(servicio.nombre + " " + servicio.precio)