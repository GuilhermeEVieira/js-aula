
const vetor = [1, 2, 3, 4, 5]; // exemplo de vetor
let soma = 0;

for (let i = 0; i < vetor.length; i++) {
  soma += vetor[i];
}

const media = soma / vetor.length;

alert(`A média do vetor é ${media}`);