alert('Boas vindas ao jogo do Número Secreto!');

let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 1 e 10!');

if (chute == numeroSecreto) {
   alert('Isso aí! Você acertou o número secreto!');
} else {
   alert('Você  errou!');
}