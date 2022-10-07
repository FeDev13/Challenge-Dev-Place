let numeroIngresado = 12;
let numeroPrimo = true;

for (let i = 2; numeroIngresado / 2; i++) {
  if (numeroIngresado % i === 0) {
    numeroPrimo = false;
  }
}

if (numeroPrimo) {
  console.log("el numero ingresado es primo");
} else {
  console.log("el numero ingresado no es primo");
}
