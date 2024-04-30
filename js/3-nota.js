
const nota = parseFloat(prompt("Digite a nota do usuário: "));

if (nota < 6) {
  alert("Reprovado");
} else if (nota >= 6 && nota < 8) {
  alert("Aprovado");
} else if (nota >= 8) {
  alert("Aprovado com louvor");
}