const readline = require('readline-sync');

const vibracao = readline.questionFloat("Digite o nivel de vibracao (mm/s): ");

let classificacao;
if (vibracao <= 3) {
    classificacao = "ESTAVEL";
} else if (vibracao <=6) {
    classificacao = "ATENCAO"; 
} else {
    classificacao = "CRITICA";
}

console.log (`valor informado: ${vibracao} mm/s`);
console.log(`Situacao: ${classificacao}`)