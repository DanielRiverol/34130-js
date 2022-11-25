//condicionales
/* alert("Hola")
console.log("hola") */
/* let nombre= prompt("ingresa tu nombre")
console.log(nombre); */

//si condicion entonces algo
let haceFrio = false;

let num = 10;
//operador asiganacion = comparacion ==
/* if(num == 10){
  console.log("El numero es igual");  
}else{
    console.log("El numero NO es igual");  
} */

//let nombre = prompt("ingresa tu nombre");

/* if (nombre == "") {
  console.log("Campos requeridos");
} else {
  console.log("bienvenido/a " + nombre);
} */
//if anidados
/* if(nombre == "Daniel"){
    let pass=prompt("ingresa tu password");
    
    if(pass == "123"){
        console.log("bienvenido/a " + nombre);
    }else{
       console.log("Error"); 
    }
    }else{
        console.log("incorrecto");
    } */


    // Valores boolean
   /*  let mayorQue10= 15 > 10;//true
   if(mayorQue10){
    console.log("es mayor");
   }else{
    console.log("No es mayor");
   } */

   //if else if else
  /*  let precio = 160;

   if(precio <= 150){
    console.log("Es menor o igual a 150");
    }else if(precio <= 160){
       console.log("Es menor o igual a 160");
       
    }else if(precio <= 170){
       console.log("Es menor o igual a 170");
       
    }else{
       console.log("Es mayor");

   } */

   //Operadores logicos 
//compara valor y tipo de dato
/* let nombre = prompt("ingresa tu nombre");
if (nombre != "") {
    console.log("bienvenido/a " + nombre);
} else {
      console.log("Campos requeridos");
} */

/*  && AND  true && true  = true  */

/* let nombreingreso= prompt("ingresa tu nombre");
let passingreso= prompt("ingresa tu password");

let pass= "patata";
let nom= "Mauricio";
let valido= (nombreingreso === nom || nombreingreso === "mauricio")
if(valido  && passingreso === pass ){ 
    console.log("bienvenido/a " + nombreingreso);
} else {
      console.log("Error de ingreso");
} */

// || OR true || true = true PERO true || false = true 


let edadObligatoria = 18;
let edadOptativa = 16;
let edadLimite = 69;
 let edadUsuario = parseInt(prompt('Ingresá tu edad'));
if (edadUsuario >= edadObligatoria && edadUsuario<=edadLimite) {
    alert('Estás obligado/a a Votar');
}else if (edadUsuario >= edadOptativa  || edadUsuario>edadLimite) {
    alert('Podés votar, si querés');
}else {
    alert('No podés votar todavía');
}

