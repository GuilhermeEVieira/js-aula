
const matriz = [[1, 2], [3, 4], [5, 6]];
let soma = 0;

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    soma += matriz[i][j];
  }
}

const media = soma / (matriz.length * matriz[0].length);

alert(`A média dos elementos da matriz é ${media}`);