
const vetor = [1, 2, 3, 4, 5];
let maior = vetor[0];

for (let i = 1; i < vetor.length; i++) {
  if (vetor[i] > maior) {
    maior = vetor[i];
  }
}

alert(`O maior número do vetor é ${maior}`);