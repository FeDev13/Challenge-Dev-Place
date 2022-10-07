clave1 = 222;
clave2 = 222;
clave3 = 222;

intentos = 0;

while (intentos <= 3) {
  let clave1 = prompt("ingrese su password");
  let clave2 = prompt("ingrese su password nuevamente");
  let clave3 = prompt("ingrese su password nuevamente");

  if (passwordCorrecta(clave1, clave2, clave3)) {
    alert("felicitaciones, recordas tu contrasena");
    break;
  }
  intentos++;
  if (intentos > 4) {
    alert("tenes que mejorar tu memoria");
  }
}

function passwordCorrecta(pass1, pass2, pass3) {
  if (pass1 == pass2 && pass2 == pass3 && pass1 == pass3) {
    return true;
  } else {
    return false;
  }
}
