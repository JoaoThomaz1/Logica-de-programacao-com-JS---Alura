//Exercicio 01

console.log("Boas vindas a atividade 1!");

//Exercicio 02

let nome = "João";

console.log("Olá, " + nome);
//ou
console.log(`Olá, ${nome}`);

//Exercicio 03

let nome2 = "João";

alert("Olá, " + nome);
//ou
alert(`Olá, ${nome}`);

//Exercicio 04

let linguagem = prompt("Qual a linguagem de programação que você mais gosta?");

console.log(`A linguagem que mais gosta é ${linguagem}`);

//Exercicio 05

let valor1 = 22;
let valor2 = 11;

let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

//Exercicio 06

let valor3 = 22;
let valor4 = 11;

let resultado1 = valor3 - valor4;

console.log(`A diferença entre ${valor3} e ${valor4} é igual a ${resultado1}.`);

//Exercicio 07

let idade = prompt("Digite sua idade: ");

if (idade >= 18) {
   console.log(`Sua idade é de ${idade}, logo você é maior de idade!`);
} else {
   console.log(`Sua idade é de ${idade}, logo você é menor de idade!`);
}

//Exercicio 08

let numero = prompt("Digite um número:\n (Seja ele positivo, negativo ou zero)");

if (numero > 0) {
   alert(`O número escolhido (${numero}) é positivo!`);
} else if (numero < 0) {
   alert(`O número escolhido (${numero}) é negativo!`);
} else {
   alert(`O número escolhido (${numero}) é igual a zero!`);
}

//Exercicio 09

let contagem = 0;

while (contagem < 10) {
   contagem ++;

   console.log(`Número ${numero}`);
}

//Exercicio 10

let nota = 2;

if (nota >= 7) {
   console.log(`Sua nota é ${nota}, com essa nota sua situação é de Aprovado`);
} else {
   console.log(`Sua nota é ${nota}, com essa nota sua situação é de Reprovado`);
}

//Exercicio 11

let numeroAleatorio = parseInt(Math.random());

console.log(`Número aleatório: ${numeroAleatorio}`);

//Exercicio 12

let numeroAleatorio2 = parseInt(Math.random() * 10 + 1);

console.log(`Número inteiro aleatório entre 1 e 10 é: ${numeroAleatorio2}`);

//Exercicio 13

let numeroAleatorio3 = parseInt(Math.random() * 1000 + 1);

console.log(`Número inteiro aleatório entre 1 e 1000 é: ${numeroAleatorio3}`);
