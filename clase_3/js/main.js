//Bucles for(desde;hasta; actualizacion) i++ = i = i + 1

/* for(let i=0; i <= 10; i= i + 2){
    //codigo a ejecutar
    console.log(i);
} */

/* let oportunidades = 3
for(let i = 1; i <= oportunidades; i++){
    alert("Usaste tu oportunidad numero " + i)
}

for(let i = 10; i>0; i-- ){
console.log(i);

}
console.log("Despegando"); */

/* let ingresoNumero = parseInt(prompt("Ingresa un numero"));
let limite = prompt("Ingresa hasta donde");

for (let i = 0; i <= limite; i++) {
  console.log(ingresoNumero + " * " + i + " = " + ingresoNumero * i);
} */

//break
/* let secret = "ARG";

for (let i = 1; i <= 3; i++) {
  let ingreso = prompt("Adivina la palabra");
  if (ingreso == secret) {
    alert("Adivinaste");
    break;
  }else{
    alert("Palabra incorrecta");
  }
} */

//continue
/* for (let i = 0; i < 20; i++) {
  if (i % 2 != 0) {
    console.log("impar"); // se ejecuta
    continue;
    console.log("impar"); //no se ejecuta
  }
  console.log(i);
} */

//Bucle por condición -> while
/* let contador = 0;
while (contador < 5) {
  //ejecucion del codigo
  console.log(contador);

  //condicion de salida
  contador++;
} */

/* let ingreso = prompt("Ya llegamos a la India?");

while (ingreso != "si") {
  //condicion de salida
  ingreso = prompt("Ya llegamos a la India?");
}
alert("Llegamos!"); */
/* let ingreso = prompt("ingresa un producto. Ingresa 0 para salir");

while (ingreso != "0") {
  console.log("ingresaste el producto: " + ingreso);
  ingreso = prompt("ingresa otro producto. Ingresa 0 para salir");
} */
//Ejercicio: pedir notas y finalizar 0 calcular el promedio

//do while do{}while(condicion)

/* let condicion = false;

do {
  console.log("Me ejecuto aunque sea una vez");
} while (condicion);
 */
/* 
let ingreso;
do {
  ingreso = prompt("ingresa otro producto. Ingresa 0 para salir");
  console.log("ingresaste el producto: " + ingreso);
} while (ingreso != "0"); */

//switch
/* if(){

}else if(){

}else if(){

}else{
    default
} */
let opcion = prompt("Ingres un nombre");

switch (opcion) {
  case "Mauro":
    console.log("Hola Mauro");
break;
  case "Juan":
    console.log("Hola Juan");
    break;
  case "Vero":
    console.log("Hola Vero");
    break;

  default:
    console.log("Hola extraño/a");
    break;
}
//ejercicio hacer una maquina expendedora de .... combinar el ejercicio de las notas
