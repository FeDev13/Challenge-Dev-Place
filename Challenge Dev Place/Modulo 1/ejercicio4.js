let primerNumero = 0;
let ultimoNumero = 1000;

let numeroAleatorio = primerNumero + Math.floor(Math.random() * ultimoNumero);

let seleccionDeNumero = prompt("ingrese un numero entre 0 y 1000");

if (seleccionDeNumero < numeroAleatorio) {
  alert("el numero ingresado es menor");
} else {
  alert("el numero ingresado es mayor");
}
