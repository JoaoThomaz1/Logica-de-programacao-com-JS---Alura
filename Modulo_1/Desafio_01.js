Alert('Boas vindas ao nosso site!');

let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

let mensagemDeErro = "Erro! Preencha todos os campos.";

alert(mensagemDeErro);

let nome2 = prompt('Digite seu nome:');
let idade2 = prompt('Digite sua idade:');

if (idade2 >= 18) {
   alert('Pode tirar a Habilitação!');
} else {
   alert('Não pode tirar Habilitação!');
}

