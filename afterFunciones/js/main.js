let savedPIN = "5461";

function login() {
  let ingresar = false;

  for (let i = 2; i >= 0; i--) {
    let userPIN = prompt("Ingresa tu PIN");
    if (userPIN == savedPIN) {
      alert("Bienvenido/a. Ingreso Exitoso");
      ingresar = true;
      break;
    } else {
      alert("Error te quedan " + i + " oportunidades");
    }
  }
  return ingresar;
}

//console.log(login());

let exito = login();
if (exito) {
  //Dentro de nuestra cuenta
  let saldo = 35000;

  let opcion = prompt(
    "Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar."
  );

  while (opcion != "X" && opcion != "x") {
    switch (opcion) {
      case "1":
        alert("Tu saldo es $" + saldo);
        break;
      case "2":
        let retiro = parseInt(prompt("Ingresa el monto a retirar"));
        if (retiro <= saldo) {
          saldo = saldo - retiro;
          alert("Retiraste $" + retiro + ", tu nuevo saldo es $" + saldo);
        } else {
          alert("Saldo insuficiente, pedi un prestamo");
        }
        break;
      case "3":
        let deposito = parseInt(prompt("Ingresa el monto a depositar"));
        saldo = saldo + deposito;
        alert("Tu nuevo saldo es $" + saldo);
        break;

      default:
        alert("opcion no valida");
        break;
    }
    opcion = prompt(
      "Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar."
    );
  }
}else{
  alert("Retuvimos tu tarjeta comunicate al 0800-jaja");
}

alert("Gracias por operar con nosotros")