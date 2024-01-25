alert('Boas vindas ao jogo do Número Secreto!');

let numeroMaximo = 100
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let numeroChute = 1;
let limite = 5;

while (chute != numeroSecreto || numeroChute < limite) {
   chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}!`);

   if (chute == numeroSecreto) {
      break;
   } else if (chute > numeroSecreto) {
      alert(`O número secreto está abaixo de ${chute}`);
   } else {
      alert(`O número secreto está acima de ${chute}`);
   }
   
   if (numeroChute > limite) {
      alert('Você  errou! O número era ' + numeroSecreto);// segunda forma de juntar uma variavel com texto
      numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
      numeroChute = 0;
   }

   numeroChute ++;

}

let palavraTentativa = numeroChute > 1 ? 'Tentativas.' : 'Tentativa.';

alert(`Isso aí! Você acertou o número secreto ${numeroSecreto}! Isso em ${numeroChute} ${palavraTentativa}`);// primeira forma de juntar variavel com texto(para usar esse modo sem pre colocar o texto entre acrases ` )
