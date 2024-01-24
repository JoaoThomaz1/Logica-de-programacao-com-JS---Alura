alert('Boas vindas ao jogo do Número Secreto!');

let numeroSecreto = 5;
let chute;
let numeroChute;

while (chute != numeroSecreto || numeroChute < limite) {
   chute = prompt('Escolha um número entre 1 e 10!');
   let limite = 5;

   if (chute == numeroSecreto) {
      alert(`Isso aí! Você acertou o número secreto ${numeroSecreto}!`);// primeira forma de juntar variavel com texto(para usar esse modo sem pre colocar o texto entre acrases ` )
   } else if (chute > numeroSecreto) {
      alert(`O número secreto está abaixo de ${chute}`);
   } else {
      alert(`O número secreto está acima de ${chute}`);
   }
   
   if (numeroChute > limite) {
      alert('Você  errou! O número era ' + numeroSecreto);// segunda forma de juntar uma variavel com texto
   }

   numeroChute ++;

}

