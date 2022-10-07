let nombre = "Juan";
let antiguedad = 11;
let horasTrabajo = 8;
let valorHora = 200;
let salarioBasico = horasTrabajo * valorHora;
let salarioBasicoPlus = salarioBasico + antiguedad * 30;

function salario(horasTrabajo, valorHora) {
  if (antiguedad > 0 && antiguedad <= 10) {
    return salariobasico;
  } else if (antiguedad > 10) {
    return salarioBasicoPlus;
  }
}

console.log(nombre, antiguedad, salarioBasicoPlus);
