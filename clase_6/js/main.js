class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.stock = parseInt(stock);
  }
  //métodos
  agregarImpuesto = (impuesto) => {
    this.precio = this.precio + (this.precio * impuesto) / 100;
  };
  vender(cant) {
    if (cant <= this.stock) {
      this.stock = this.stock - cant;
      return this.precio * cant;
    } else {
      return "Sin stock";
    }
  }
}

const libro1 = new Producto("Harry Potter y la Piedra Filosofal", "5500", 3);
/* console.log(libro1.vender(8));
const obj={
  nombre:"miguel", 
  apellido:"lopez"
}
console.log(obj.nombre); */

//Array

const numeros = [-1, 3, 4, 2, 1, 10, 98, 5, 0, -55];

//console.log(numeros);

const family = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];
//console.log(family);
const alacena = ["Arroz", "Fideos", "Salsa"];
//console.log(alacena);

const mixto = [1, true, "Sandra", { nombre: "Pera" }];
console.log(mixto);
const cajonCubiertos = ["Cucharas", "Tenedores", "Cuchillos", "Cucharitas"];

//Acceso a elementos
/* console.log(cajonCubiertos[0]);
console.log(mixto[3]); */
/* console.log(family[0]);
console.log(family[1]);
console.log(family[2]);
console.log(family[3]);
console.log(family[4]); */

let resultado = numeros[1] + numeros[6];

/* console.log(resultado);
console.log(numeros[10]); */
/* 
console.log(family);
console.log(family.length); */

numeros[3] = 44;

//recorrer un array
for (let i = 0; i < numeros.length; i++) {
  //console.log(numeros[i]);
}

//family[6] = "Mamá de Las Vegas";
for (let i = 0; i < family.length; i++) {
  // console.log(family[i]);
}

//push
//console.log(alacena);
alacena.push("Pan", "Mayonesa", "Ketchup");
//console.log(alacena);

cajonCubiertos.push("Cuchillas")
//console.log(cajonCubiertos);

//unshift
alacena.unshift("Sal","Harina")

//console.log(alacena);
//pop 
//alacena.pop()
alacena.pop()
//console.log(alacena);

//shift
alacena.shift()
//console.log(alacena);

//splice(inicio,fin)
//console.log(family);
//family.splice(2,1)
//console.log(family);

//slice(incio, fin)
//console.log(numeros);
const tajada = numeros.slice(3,7)
//console.log(tajada);

//concat
const nuevoArr = alacena.concat(cajonCubiertos)

//console.log(nuevoArr);
//indexOf() 

/* console.log(family);
console.log(family.indexOf('Bart'));
console.log(family.indexOf('krusty'));

//includes
console.log(family.includes("Bart"));
console.log(family.includes("krusty")); */


//Arrays de objetos
const libro2= {
  nombre:"Cuentos completos",
  precio:3400, stock:2
}

const libreria= [{nombre:"Harry Potter y la camara de los secretos", precio: 5300, stock:2},libro2, new Producto("Steve Jobs", 2000, 10)]

//libreria.push(libro1)
function cargarLibro(array,libro){
  /* libreria.push(libro) */
  array.push(libro)
}
cargarLibro(libreria,libro1)
cargarLibro(libreria,new Producto("Simbad el marino", 1200, 3))
/* cargarLibro(alacena, "Arroz")
console.log(alacena); */
//console.log(libreria);

//for of 
for (const libro of libreria) {
  console.log(libro.nombre);
  console.log(libro.precio);
  console.log(libro.stock);
}

