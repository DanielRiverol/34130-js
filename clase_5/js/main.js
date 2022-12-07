//Objetos literales
const persona = {
  nombre:"Veronica",
  edad: 23,
  direccion: "Calle falsa 123",
  telefono: "23456789876",
  email:"vero@mail.com"
}
const persona1 = {
  nombre:"Pedro",
  edad: 43,
  direccion: "Cucha cucha 234",
  email:"pedro@mail.com"
}
const persona2 = {
  nombre:"Juan",
  edad: 43,
  direccion: "Monte castro 234",
  email:"pedro@mail.com"
}

/* console.log(persona);
console.log(persona1); */

//acceder a las propiedades
/* console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.direccion);
console.log(persona1.nombre);
console.log(persona2.nombre);
console.log(persona2["direccion"]);
console.log(persona1["direccion"]); */

//Actualizar valores
/* let tel=prompt("Ingresa el numero de tel")

persona.email="marta@mail.com";
persona["telefono"]=tel
console.log(persona["telefono"]);
console.log(persona["nombre"]="Marta");
console.log(persona.email);
console.log(persona); */

//funcion constructora
/* function Persona(nombre, edad, direccion, telefono,email){
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;

        this.caminar= ()=>{
          console.log("estoy caminando");
        }
        this.saludar= ()=>{
          console.log("Hola soy " + this.nombre);
        }
} */



/* let nom= prompt("Ingresa tu nombre")
let edad= prompt("Ingresa tu edad")
let tel= prompt("Ingresa tu tel")
let direccion= prompt("Ingresa tu direccion")
let email= prompt("Ingresa tu email")


const persona6= new Persona(nom, edad, direccion, tel,email) */

/* console.log(persona4);
console.log(persona5); */
//console.log(persona6);
function saludar(){
  console.log('Hola');
}
//Metodos de los objetos
let frase= "Hay Caramba!!!!";

/* console.log(frase.toLowerCase());
console.log(frase.toUpperCase()); */
/* console.log(toUpperCase()); no se puede llamar de esta manera */

//alert("Soy odioso")

/* const persona4= new Persona("Juan", 23, "Tinogasta 56", "23456543", "juan@mail.com")
const persona5= new Persona("Pablo", 26, "Gral Paz 5600", "23456543", "pablo@mail.com") */

/* persona4.caminar()
persona5.caminar()
persona5.saludar()
persona4.saludar()
console.log(persona4); */

//operador in

//console.log("telefono" in persona);

//recorrer objetos
/* for (const propiedad in persona4) {
  console.log(propiedad + ": " + persona4[propiedad]);
}
 */

//Clase
class Persona{
  constructor(nombre, edad, direccion, telefono,email){
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
    this.telefono = telefono;
    this.email = email;
}

caminar= ()=>{
  console.log("estoy caminando");
}
saludar(){
  console.log("Hola soy " + this.nombre);
}
}



/* const persona4= new Persona("Juan", 23, "Tinogasta 56", "23456543", "juan@mail.com")
const persona5= new Persona("Pablo", 26, "Gral Paz 5600", "23456543", "pablo@mail.com")

console.log(persona4);
console.log(persona5);
persona4.caminar()
persona5.caminar()
persona4.saludar() */

function Producto(nombre, precio, stock){
  this.nombre=nombre;
  this.precio=parseFloat(precio);
  this.stock=parseInt(stock);

  this.agregarImpuesto= (impuesto)=>{
    this.precio= this.precio + (this.precio * impuesto)/100
  }
  this.stockDispo=(cant)=>{
    if(cant<=this.stock){
      this.stock= this.stock - cant
    }else{
      console.log("SIN Stock");
    }
  }
}

const prod1= new Producto('Arroz', "234", 23)
console.log(prod1.stock);
prod1.stockDispo(100)
prod1.agregarImpuesto(100)
console.log(prod1.stock);
//console.log(prod1);
