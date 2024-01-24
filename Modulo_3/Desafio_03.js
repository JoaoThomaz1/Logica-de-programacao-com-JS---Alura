//Exercicio 01

let contador = 0;

while (contador < 11) {
   alert (`O número atual é ${contador}!`);

   contador ++;
}

//Exercicio 02

let contador2 = 10;

while (contador2 > -1) {
   alert (`O número atual é ${contador2}!`);

   contador2 --;
}

//Exercicio 03

let contador3 = prompt('Qual o tempo para Contagem Regressiva?');

while (contador3 > -1) {
   alert (`Falta ${contador3}!`);

   contador3 --;
}

//Exercicio 04

let contador4 = prompt('Até quanto quer contar?');
let numeroLimite = 0;

while (numeroLimite < contador4) {
   alert (`Número atual ${numeroLimite}/${contador4}!`);

   numeroLimite ++;
}