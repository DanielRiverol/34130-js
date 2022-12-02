//variables
//let nombre= prompt("ingresa tu nombre")
//funciones

//declaracion
/* function saludar(){
  alert("Hola buen día");
} */

//invocar o llamar 
/* saludar();
saludar();
saludar(); */

function saludar(nombre){
  alert("Hola buen día " + nombre);
}

/* saludar() -> undefined
saludar("Mauro")
saludar("Gonza")
saludar("Clara")
saludar("Vero") */


function saludarConMomento(nombre, momento, edad){
  alert("Hola, " + momento + " " + nombre +  "Tu esdad es " + edad);
}

/* saludarConMomento(33,"Juan", "buen dia")
saludarConMomento( "buenas tardes" , "Maria", 34)
saludarConMomento("Robert", "buenas noches", 23) */
/* let numero1=parseFloat(prompt("Ingresa un numero"))
let numero2=parseFloat(prompt("Ingresa un numero")) */
/* const PI = 3.14
sumar(numero1,PI); */
function sumar(pap1, pap2){
  let resultado = pap1 + pap2;
  return resultado;
}
let result=sumar()
function mostrar(mensaje){
  console.log(mensaje);
}
/* mostrar(result)
mostrar(sumar(21,6)) */


const calculator = function(num1, num2, operator){
      switch (operator) {
        case "+":
          return num1 + num2;
        
      
        case "-":
          return num1 - num2;
          
      
        case "*":
          return num1 * num2;
          
      
        case "/":
          
          if(num2 == 0){
            return "El divisor No puede ser cero"
        }
        
            return num1 / num2;
          
      
        default:
          return "Opcion no valida";
          
      }
}

let suma = calculator(12,43, "+")
let resta = calculator(22,43,"-")
let multi = calculator(22,43,"*")
let divi = calculator(22,0,";")
mostrar(suma);
mostrar(resta);
mostrar(multi);
mostrar(divi);

//SCOPE o AMBITO
let variable= "SOY UNA VARIABLE GLOBAL";

console.log(variable);
variable =1
console.log(variable);
function cambiar(){
  variable = "ESTOY MODIFICADA POR UNA FUNCION" 
}

cambiar()
console.log(variable);
if(true){
  variable = "ESTOY MODIFICADA POR UN IF" 
}
console.log(variable);

function cambiarLocal(){
  let variable = "SOY UNA VARIABLE LOCAL A LA FUNCION";
  /* console.log(variable); */
  return variable
}
console.log(cambiarLocal())

console.log(variable);

for (let i = 0; i < 3; i++) {
  //console.log(i);
  
}
//console.log(i);//nom puedo acceder es local


//Funcion anomimas
const anomina = function (){
  console.log("Soy anonima");
}

anomina()

//funciones flecha ()=>{}

const saludo = (nombre)=>{
console.log("Hola soy " + nombre);
}


saludo("Dani");

//retunr implicto
 const restar= (n1, n2)=> {
  return n1 - n2
};

 console.log(restar(10,5))