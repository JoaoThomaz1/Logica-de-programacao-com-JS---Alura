//Exercicio 1

let diaSemana = prompt('Que dia da semana é hoje?');

if (diaSemana == 'domingo' || diaSemana == 'sabado') {
   alert('Bom fim de semana!');
} else {
   alert('Boa semana!');
}

//Exercicio 2

let numero = prompt('Digite um numero, seja ele negativo ou positivo!');

if (numero >= 0) {
   alert(`O número ${numero} é positivo!`);
} else {
   alert(`O número ${numero} é negativo!`);
}


//Exercicio 3

let pontos = 0;

while (pontos < 100) {
   let pontosGanhos = confirm(`Ganhou 10 pontos? \n Sim (Aperte OK)\n Não (Aperte Cancelar)\n \n  Pontos: ${pontos} Pts.\n`);

   if (!pontosGanhos) {
      pontos += 0;   
   } else {
      pontos += 10;
   }

   if (pontos == 100) {
      alert("Parabéns, você venceu!");
   } else {
      alert("Tente novamente para ganhar.");
   }
}

//Exercicio 4

let saldo1 = 2500.00;
let saldo2 = 4000.00;

let usuario = prompt('Qual o nome do usuário?\n (Digite 1 para João)\n (Digite 2 para Letícia)\n');

if (usuario == "1") {
   alert(`O saldo da conta de João é de: R$ ${saldo1}`);
} else if (usuario == "2") {
   alert(`O saldo da conta de Letícia é de: R$ ${saldo2}`);
} else {
   alert("Por favor, Digite um valor válido!");
}

//Exercicio 5

let nome = prompt("Qual seu nome?");

alert(`Boas vindas senhor(a) ${nome}!`);