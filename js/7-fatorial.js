
const num = parseInt(prompt("Digite um número: "));

let fatorial = 1;

for (let i = 1; i <= num; i++) {
  fatorial *= i;
}

alert(`O fatorial de ${num} é ${fatorial}`);