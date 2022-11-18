//variable

//declaracion
var nombre; //no pueden comnezar con - + 1 \
var Nombre;
var Nombre; //ES5 NO SE UTILIZA
var nombre_Completa;

//ES6
let apellido;
let nombreCompleto;
let numero1;
let numero2;
let resultado;
let total;
//Asignacion
apellido = "Gonzalez"; //String o Cadena

numero1 = 12; //Numero entero
numero2 = 44.33; //Numero decimal

apellido = "Gonzalez Tevez";
//console.log(apellido);
apellido = 44;
//console.log(apellido);
//CONSTANTE inicializar una varialble
const IVA = 21;
const PI = 3.1416;
const PALABRA_CLAVE = "Antman";
// Operaciones
resultado = PI + 1400;
resultado = numero1 + numero2;

let multi = numero1 * numero2;

//Concatenación +

nombre = "Juanito";
apellido = "Arcoiris";
nombreCompleto = nombre + " " + apellido;

//Salida de Datos console.log();EL ARMA SECRETA DEL PROGRAMADOR
//console.log("Hola");
//console.log(12/33);
/* console.log(nombre);
console.log(apellido);
console.log(nombreCompleto);
console.log(resultado);
console.log(multi);
console.log("El valor de PI es :" + PI); */
//alert()
//console.log(Nombre);
//alert("soy un mensaje molesto");

//Entrada de datos prompt();
//let ingresoNombre= prompt("Ingresa tu nombre");

//let saludo= "Hola " + ingresoNombre + " como estas?";
//console.log(saludo);
//parseo de numeros
numero1 = parseFloat(prompt("Ingresa un numero"));
console.log(numero1);
numero2 = prompt("Ingresa un numero");
numero2 = parseFloat(numero2);

console.log(numero2);

resultado = numero1 + numero2;
console.log(resultado);
