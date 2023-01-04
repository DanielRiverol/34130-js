const btnSaludoGenerico = document.getElementById('generico');
const btnSaludoPersonalizado = document.getElementById('personalizado');
const titulo = document.querySelector('.codertitulo');
const btnTest = document.getElementById('prueba');
const caja = document.querySelector('.embajada');
const radios = document.querySelectorAll('input[type="radio"]');
const fotoACambiar = document.getElementById('imgBotellas');
const inputPassword = document.querySelector('#inputPassword');
const inputNombre = document.querySelector('#inputNombre');
const btnRegistrar = document.getElementById('registrar');


function saludarPersonalizado(nombre) {

    alert(`Hola ${nombre}`);
}

function saludarGenerico() {
    alert("Hola!");
}

/* 
//Primera opción, usar el método addEventListener
//Podemos nombrar el evento que queremos escuchar, así (acá es el evento 'click')
btnSaludoGenerico.addEventListener('click', saludarGenerico);

//O podemos guardar el nombre del evento en una variable y pasarlo así al addEventListener
let evento = 'click';
btnSaludoGenerico.addEventListener(evento, saludarGenerico); */

/* //No puedo pasar funciones que precisan parámetros directamente al addEventListener
btnSaludoPersonalizado.addEventListener('click',saludarPersonalizado('Flor')); */

/* btnSaludoPersonalizado.addEventListener('click', ()=>{
    let nombre = prompt('Ingresa tu nombre');
    saludarPersonalizado(nombre);
}) */

/* //Acá capturo el valor de un input para mostrar el nombre en el saludo
btnSaludoPersonalizado.addEventListener('click', () => {
    let nombre = inputNombre.value;
    saludarPersonalizado(nombre);
}); */

/* 
//Sirve para cualquier elemento clickeable, no sólo botones
titulo.addEventListener('click', saludarGenerico);

//Puedo poner varias tareas a realizarse al momento de que suceda el evento
btnTest.addEventListener('click', () => {
    for (let i = 0; i < 3; i++) {
        console.log(i);
    }
    saludarGenerico();
}) */


/* //Segunda opción, usar la propiedad on (onclick, onmousemove, onkeypress, onchange, etc)

btnSaludoGenerico.onclick = saludarGenerico;

btnSaludoPersonalizado.onclick = ()=>{
    let nombre = inputNombre.value;
    saludarPersonalizado(nombre);
} */




/* //Eventos Mouse
btnTest.onclick = () => {
    console.log(('Hiciste click en el boton'));
}

btnTest.onmousemove = () => {
    console.log('Moviste el mouse por aca');
}

caja.onmouseover = () => {
    caja.style.backgroundImage = 'url("./img/estados.jpg")';
    console.log('Estados Unidos');
}

caja.onmouseout = () => {
    caja.style.backgroundImage = 'url("./img/australia.jpg")';
    console.log('Australia');

} */



/* radios.addEventListener('click',()=>{
    console.log('Hiciste click en el radiobutton');
}) */


/* radios.forEach(element => {
    element.addEventListener('click', () => {
        console.log(`Hiciste click en el radiobutton ${element.value}`);
    })
}); */



/* //Ejemplo aplicado
function cambiarImagen(elemento, source) {
    elemento.src = source;
}

const botellas = [{
    id: 1,
    nombre: 'Tupperware Twist 500',
    color: 'rosa',
    imagen: './img/rosa.webp'
}, {
    id: 2,
    nombre: 'Tupperware Twist 500',
    color: 'azul',
    imagen: './img/azul.webp'
}, {
    id: 1,
    nombre: 'Tupperware Twist 500',
    color: 'naranja',
    imagen: './img/naranja.webp'
}, {
    id: 1,
    nombre: 'Tupperware Twist 500',
    color: 'verde',
    imagen: './img/verde.webp'
}]

radios.forEach(element => {
    element.addEventListener('click', () => {
        let colorElegido = element.value;
        let variante = botellas.find(botella => botella.color == colorElegido)
        cambiarImagen(fotoACambiar, variante.imagen)

    })
}); */


//Eventos del teclado
/* inputPassword.addEventListener('keydown',()=>{
    console.log(inputPassword.value);
}) */


/* inputPassword.addEventListener('keyup', () => {
    console.log(inputPassword.value);
}) */

/* inputPassword.addEventListener('input', () => {
    console.log(inputPassword.value);
}) */

//Evento onchange de inputs
inputPassword.onchange = () => {
    console.log(inputPassword.value);
}

//Información del evento. Cada evento tiene su propia info. Este mismo ejemplo no se puede hacer con el evento "input", porque ese evento no tiene la info de charCode
inputPassword.addEventListener('keypress', (evento) => {
    let codCaracter = evento.charCode;
    console.log(evento.key);
    if (codCaracter != 0) {
        if (codCaracter < 97 || codCaracter > 122) {
            evento.preventDefault()
            alert('Solo podés minusculas')
        }
    }

})


btnRegistrar.addEventListener('click', (e) => {
    e.preventDefault()
    let email = document.getElementById('inputEmail').value
    if (!(email.includes('@'))) {
        alert('Hace falta una dirección valida')
    }
})

